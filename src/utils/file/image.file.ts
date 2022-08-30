import * as sharp from 'sharp';
import { promises, createWriteStream, mkdir, existsSync } from 'fs';
import * as genThumbnail from 'simple-thumbnail';
import * as generateSoundWaveform from 'generate-sound-waveform';
import { getAudioDurationInSeconds } from 'get-audio-duration';
import * as getDimensions from 'get-video-dimensions';
import { getVideoDurationInSeconds } from 'get-video-duration';
import * as gm from 'gm';
const fsPromises = promises;

/**
 * @description Crea un thumbnail de una imagen
 * @param {string} source Path hasta la ubicación del disco de origen
 * @param {string} output Path destino del archivo fisico
 * @param {string} contentType contentType Tipo de contenido
 * @returns
 */
export const createThumbnail = async (
  source: string,
  output: string,
  contentType: string,
) => {
  const sh = sharp(source);
  switch (contentType) {
    case 'image/png' || 'image/svg':
      sh.png({ quality: 100 });
      break;
    case 'image/jpeg' || 'image/jpg':
      sh.jpeg({ quality: 100 });
      break;
    case 'image/webp':
      sh.webp({ quality: 100 });
      break;
    default:
      sh.png({ quality: 100 });
      break;
  }
  const config = { width: 200, height: 200, fit: 'contain' };
  const response = await sh.resize(config).toFile(output);
  return response;
};

/**
 * @description Crea un thumbnails de un pdf
 * @param {string} source Path al archivo del pdf
 * @param {string} output Path destino del thumbnails del pdf
 * @returns
 */
export const createThumbnailPdf = async (source: string, output: string) => {
  return new Promise((resolve, reject) => {
    gm(source)
      .setFormat('jpg')
      .resizeExact(200, 200)
      .quality(75)
      .write(output, function (error) {
        if (!error) {
          resolve({ success: true, message: 'Creado thumbnails con exito' });
        } else {
          reject({ success: false, message: error });
        }
      });
  });
};

/**
 * @description Crea un thumbnail de un audio
 * @param {string} source Path al archivo del audio
 * @param {string} output Path destino de la imagen thumbnail
 * @returns
 */
export const createThumbnailAudio = async (
  source: string,
  output: string,
): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve, reject) => {
    generateSoundWaveform
      .generateSoundImage(source, 200, 200)
      .then((stream) => {
        const out = createWriteStream(output);
        stream.pipe(out);
        out.on('finish', async () => {
          resolve({
            success: true,
            message: 'Creado thumbnails con exito',
          });
        });
      })
      .catch((error) => {
        reject({ success: false, message: error });
      });
  });
};

/**
 * @description Retornala duracion del audio
 * @param {string} source Path al archivo del audio
 * @returns
 */
export const durationAudio = async (source: string): Promise<number> => {
  const duration = await getAudioDurationInSeconds(source);
  return duration;
};

/**
 * @description Crea un thumbnails de un archivo de video
 * @param {string} source Path al arhivo de video
 * @param {string} output Path destino del thumbnails
 * @returns
 */
export const createThumbnailVideo = async (source: string, output: string) => {
  return await genThumbnail(source, output, '200x200');
};

/**
 * @description Retorna la duracion de un video
 * @param {string} source Path al video
 * @returns
 */
export const durationVideo = async (source: string): Promise<number> => {
  const duration = await getVideoDurationInSeconds(source);
  return duration;
};

/**
 * @description Retorna las dimensiones del archivo
 * @param {string }source Path al archivo
 * @returns
 */
export const dimensionVideo = async (
  source: string,
): Promise<{ width: number; height: number }> => {
  const dimensions = await getDimensions(source);
  return dimensions;
};

/**
 * @description Copia el archivo
 * @param {string} source Path del archivo
 * @param {string }output Path del destino del archivo
 * @returns
 */
export const copyFilePromise = (
  source: string,
  output: string,
  rmFile = false,
) => {
  const response = fsPromises
    .copyFile(source, output)
    .then(() => {
      let response = {};
      if (rmFile) {
        response = fsPromises
          .unlink(source)
          .then(() => {
            return {
              success: true,
              message: 'File Copied and remove file',
            };
          })
          .catch((error) => {
            return {
              success: true,
              message: 'File Copied but not remove file',
              error,
            };
          });
      } else {
        response = {
          success: true,
          message: 'File Copied',
        };
      }
      return response;
    })
    .catch((error) => {
      return {
        success: false,
        message: error,
      };
    });

  return response;
};

/**
 * @description Crea una carpeta
 * @param {string } path Path completo a carpeta para crear
 * @returns
 */
export const mkdirPromise = (path: string) => {
  return new Promise((resolve, reject) => {
    const exists = existsSync(path);
    if (!exists) {
      mkdir(path, (err) => {
        if (err) {
          return reject({ success: false, message: err });
        }
        resolve({ success: true, message: 'Directory created successfully!' });
      });
    } else {
      resolve({ success: true, message: 'Directory already exists!' });
    }
  });
};

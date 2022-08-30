import { Request } from 'express';
import { extname } from 'path';

export const editFileName = (
  req: Request,
  file: Express.Multer.File,
  callback,
) => {
  const name = file.originalname.split('.')[0];
  const fileExtName = extname(file.originalname);
  const randomName = Array(4)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${name}-${randomName}${fileExtName}`);
};

export const imageFileFilter = (
  req: Request,
  file: Express.Multer.File,
  callback,
) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return callback(new Error('Only image files are allowed!'), false);
  }
  callback(null, true);
};

export const isImage = ({ mimetype }) => {
  return !!(
    mimetype.match(/\/(jpg|jpeg|png|gif|webp|x-icon|svg+xml|x-ms-bmp|bmp)$/) &&
    mimetype.match(/image/)
  );
};

export const isAudio = ({ mimetype }) => {
  return !!(
    mimetype.match(/\/(aac|midi|x-wav|webm|3gpp|3gpp2|mpeg)$/) &&
    mimetype.match(/audio/)
  );
};

export const isVideo = ({ mimetype }) => {
  return !!(
    mimetype.match(
      /\/(x-msvideo|mpeg|ogg|webm|3gpp|3gpp2|mp4|x-m4v|quicktime)$/,
    ) && mimetype.match(/video/)
  );
};

export const isApplication = ({ mimetype }) => {
  return !!(
    mimetype.match(
      /\/(msword|vnd.ms-powerpoint|vnd.oasis.opendocument.presentation|vnd.oasis.opendocument.spreadsheet|vnd.oasis.opendocument.text|vnd.visio|pdf)$/,
    ) && mimetype.match(/application/)
  );
};

export const isPdf = ({ mimetype }) => {
  return !!(mimetype.match(/\/(pdf)$/) && mimetype.match(/application/));
};

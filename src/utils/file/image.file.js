"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.mkdirPromise = exports.copyFilePromise = exports.dimensionVideo = exports.durationVideo = exports.createThumbnailVideo = exports.durationAudio = exports.createThumbnailAudio = exports.createThumbnailPdf = exports.createThumbnail = void 0;
var sharp = require("sharp");
var fs_1 = require("fs");
var genThumbnail = require("simple-thumbnail");
var generateSoundWaveform = require("generate-sound-waveform");
var get_audio_duration_1 = require("get-audio-duration");
var getDimensions = require("get-video-dimensions");
var get_video_duration_1 = require("get-video-duration");
var gm = require("gm");
var fsPromises = fs_1.promises;
/**
 * @description Crea un thumbnail de una imagen
 * @param {string} source Path hasta la ubicación del disco de origen
 * @param {string} output Path destino del archivo fisico
 * @param {string} contentType contentType Tipo de contenido
 * @returns
 */
var createThumbnail = function (source, output, contentType) { return __awaiter(void 0, void 0, void 0, function () {
    var sh, config, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                sh = sharp(source);
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
                config = { width: 200, height: 200, fit: 'contain' };
                return [4 /*yield*/, sh.resize(config).toFile(output)];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };
exports.createThumbnail = createThumbnail;
/**
 * @description Crea un thumbnails de un pdf
 * @param {string} source Path al archivo del pdf
 * @param {string} output Path destino del thumbnails del pdf
 * @returns
 */
var createThumbnailPdf = function (source, output) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                gm(source)
                    .setFormat('jpg')
                    .resizeExact(200, 200)
                    .quality(75)
                    .write(output, function (error) {
                    if (!error) {
                        resolve({ success: true, message: 'Creado thumbnails con exito' });
                    }
                    else {
                        reject({ success: false, message: error });
                    }
                });
            })];
    });
}); };
exports.createThumbnailPdf = createThumbnailPdf;
/**
 * @description Crea un thumbnail de un audio
 * @param {string} source Path al archivo del audio
 * @param {string} output Path destino de la imagen thumbnail
 * @returns
 */
var createThumbnailAudio = function (source, output) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                generateSoundWaveform
                    .generateSoundImage(source, 200, 200)
                    .then(function (stream) {
                    var out = (0, fs_1.createWriteStream)(output);
                    stream.pipe(out);
                    out.on('finish', function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            resolve({
                                success: true,
                                message: 'Creado thumbnails con exito'
                            });
                            return [2 /*return*/];
                        });
                    }); });
                })["catch"](function (error) {
                    reject({ success: false, message: error });
                });
            })];
    });
}); };
exports.createThumbnailAudio = createThumbnailAudio;
/**
 * @description Retornala duracion del audio
 * @param {string} source Path al archivo del audio
 * @returns
 */
var durationAudio = function (source) { return __awaiter(void 0, void 0, void 0, function () {
    var duration;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, get_audio_duration_1.getAudioDurationInSeconds)(source)];
            case 1:
                duration = _a.sent();
                return [2 /*return*/, duration];
        }
    });
}); };
exports.durationAudio = durationAudio;
/**
 * @description Crea un thumbnails de un archivo de video
 * @param {string} source Path al arhivo de video
 * @param {string} output Path destino del thumbnails
 * @returns
 */
var createThumbnailVideo = function (source, output) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, genThumbnail(source, output, '200x200')];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.createThumbnailVideo = createThumbnailVideo;
/**
 * @description Retorna la duracion de un video
 * @param {string} source Path al video
 * @returns
 */
var durationVideo = function (source) { return __awaiter(void 0, void 0, void 0, function () {
    var duration;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, get_video_duration_1.getVideoDurationInSeconds)(source)];
            case 1:
                duration = _a.sent();
                return [2 /*return*/, duration];
        }
    });
}); };
exports.durationVideo = durationVideo;
/**
 * @description Retorna las dimensiones del archivo
 * @param {string }source Path al archivo
 * @returns
 */
var dimensionVideo = function (source) { return __awaiter(void 0, void 0, void 0, function () {
    var dimensions;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getDimensions(source)];
            case 1:
                dimensions = _a.sent();
                return [2 /*return*/, dimensions];
        }
    });
}); };
exports.dimensionVideo = dimensionVideo;
/**
 * @description Copia el archivo
 * @param {string} source Path del archivo
 * @param {string }output Path del destino del archivo
 * @returns
 */
var copyFilePromise = function (source, output, rmFile) {
    if (rmFile === void 0) { rmFile = false; }
    var response = fsPromises
        .copyFile(source, output)
        .then(function () {
        var response = {};
        if (rmFile) {
            response = fsPromises
                .unlink(source)
                .then(function () {
                return {
                    success: true,
                    message: 'File Copied and remove file'
                };
            })["catch"](function (error) {
                return {
                    success: true,
                    message: 'File Copied but not remove file',
                    error: error
                };
            });
        }
        else {
            response = {
                success: true,
                message: 'File Copied'
            };
        }
        return response;
    })["catch"](function (error) {
        return {
            success: false,
            message: error
        };
    });
    return response;
};
exports.copyFilePromise = copyFilePromise;
/**
 * @description Crea una carpeta
 * @param {string } path Path completo a carpeta para crear
 * @returns
 */
var mkdirPromise = function (path) {
    return new Promise(function (resolve, reject) {
        var exists = (0, fs_1.existsSync)(path);
        if (!exists) {
            (0, fs_1.mkdir)(path, function (err) {
                if (err) {
                    return reject({ success: false, message: err });
                }
                resolve({ success: true, message: 'Directory created successfully!' });
            });
        }
        else {
            resolve({ success: true, message: 'Directory already exists!' });
        }
    });
};
exports.mkdirPromise = mkdirPromise;

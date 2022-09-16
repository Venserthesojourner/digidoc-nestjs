"use strict";
exports.__esModule = true;
exports.isPdf = exports.isApplication = exports.isVideo = exports.isAudio = exports.isImage = exports.imageFileFilter = exports.editFileName = void 0;
var path_1 = require("path");
var editFileName = function (req, file, callback) {
    var name = file.originalname.split('.')[0];
    var fileExtName = (0, path_1.extname)(file.originalname);
    var randomName = Array(4)
        .fill(null)
        .map(function () { return Math.round(Math.random() * 16).toString(16); })
        .join('');
    callback(null, "".concat(name, "-").concat(randomName).concat(fileExtName));
};
exports.editFileName = editFileName;
var imageFileFilter = function (req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
var isImage = function (_a) {
    var mimetype = _a.mimetype;
    return !!(mimetype.match(/\/(jpg|jpeg|png|gif|webp|x-icon|svg+xml|x-ms-bmp|bmp)$/) &&
        mimetype.match(/image/));
};
exports.isImage = isImage;
var isAudio = function (_a) {
    var mimetype = _a.mimetype;
    return !!(mimetype.match(/\/(aac|midi|x-wav|webm|3gpp|3gpp2|mpeg)$/) &&
        mimetype.match(/audio/));
};
exports.isAudio = isAudio;
var isVideo = function (_a) {
    var mimetype = _a.mimetype;
    return !!(mimetype.match(/\/(x-msvideo|mpeg|ogg|webm|3gpp|3gpp2|mp4|x-m4v|quicktime)$/) && mimetype.match(/video/));
};
exports.isVideo = isVideo;
var isApplication = function (_a) {
    var mimetype = _a.mimetype;
    return !!(mimetype.match(/\/(msword|vnd.ms-powerpoint|vnd.oasis.opendocument.presentation|vnd.oasis.opendocument.spreadsheet|vnd.oasis.opendocument.text|vnd.visio|pdf)$/) && mimetype.match(/application/));
};
exports.isApplication = isApplication;
var isPdf = function (_a) {
    var mimetype = _a.mimetype;
    return !!(mimetype.match(/\/(pdf)$/) && mimetype.match(/application/));
};
exports.isPdf = isPdf;

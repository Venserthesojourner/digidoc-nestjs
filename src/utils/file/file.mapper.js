"use strict";
exports.__esModule = true;
exports.filesMapper = exports.fileMapper = void 0;
var fileMapper = function (_a) {
    var file = _a.file, req = _a.req;
    var image_url = "".concat(req.protocol, "://").concat(req.headers.host, "/").concat(file.path);
    return {
        originalname: file.originalname,
        filename: file.filename,
        image_url: image_url
    };
};
exports.fileMapper = fileMapper;
var filesMapper = function (_a) {
    var files = _a.files, req = _a.req;
    return files.map(function (file) {
        var image_url = "".concat(req.protocol, "://").concat(req.headers.host, "/").concat(file.path);
        return {
            originalname: file.originalname,
            filename: file.filename,
            image_url: image_url
        };
    });
};
exports.filesMapper = filesMapper;

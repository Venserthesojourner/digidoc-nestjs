"use strict";
exports.__esModule = true;
var config_1 = require("@nestjs/config");
exports["default"] = (0, config_1.registerAs)('configFile', function () {
    return {
        apiKey: process.env.API_KEY,
        dirUpload: process.env.DIR_UPLOAD,
        dirUploadTemp: process.env.DIR_UPLOAD_TEMP
    };
});

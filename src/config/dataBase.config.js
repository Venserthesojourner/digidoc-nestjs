"use strict";
exports.__esModule = true;
var config_1 = require("@nestjs/config");
exports["default"] = (0, config_1.registerAs)('configDataBase', function () {
    return {
        apiKey: process.env.API_KEY,
        connect: {
            database: process.env.MYSQL_DATABASE,
            port: parseInt(process.env.MYSQL_PORT),
            password: process.env.MYSQL_ROOT_PASSWORD,
            username: process.env.MYSQL_USER,
            host: process.env.MYSQL_HOST
        }
    };
});

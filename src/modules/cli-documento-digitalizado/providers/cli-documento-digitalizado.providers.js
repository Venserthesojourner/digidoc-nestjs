"use strict";
exports.__esModule = true;
exports.CliDocumentoDigitalizadoProviders = void 0;
var cli_documento_digitalizado_entity_1 = require("../entity/cli-documento-digitalizado.entity");
exports.CliDocumentoDigitalizadoProviders = [
    {
        provide: 'CLI_DOCUMENTO_DIGITALIZADO_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(cli_documento_digitalizado_entity_1.CliDocumentoDigitalizado);
        },
        inject: ['DATA_SOURCE']
    },
];

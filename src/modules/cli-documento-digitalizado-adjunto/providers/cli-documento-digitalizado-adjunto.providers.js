"use strict";
exports.__esModule = true;
exports.CliDocumentoDigitalizadoAdjuntoProviders = void 0;
var cli_documento_digitalizado_adjunto_entity_1 = require("../entity/cli-documento-digitalizado-adjunto.entity");
exports.CliDocumentoDigitalizadoAdjuntoProviders = [
    {
        provide: 'CLI_DOCUMENTO_DIGITALIZADO_ADJUNTO_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(cli_documento_digitalizado_adjunto_entity_1.CliDocumentoDigitalizadoAdjunto);
        },
        inject: ['DATA_SOURCE']
    },
];

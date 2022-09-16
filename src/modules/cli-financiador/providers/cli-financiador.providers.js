"use strict";
exports.__esModule = true;
exports.CliFinanciadorProviders = void 0;
var cli_financiador_entity_1 = require("../entity/cli-financiador.entity");
exports.CliFinanciadorProviders = [
    {
        provide: 'CLI_FINANCIADOR_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(cli_financiador_entity_1.CliFinanciador);
        },
        inject: ['DATA_SOURCE']
    },
];

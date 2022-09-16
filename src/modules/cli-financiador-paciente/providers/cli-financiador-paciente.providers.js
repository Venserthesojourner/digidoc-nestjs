"use strict";
exports.__esModule = true;
exports.CliFinanciadorPacienteProviders = void 0;
var cli_financiador_paciente_entity_1 = require("../entity/cli-financiador-paciente.entity");
exports.CliFinanciadorPacienteProviders = [
    {
        provide: 'CLI_FINANCIADOR_PACIENTE_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(cli_financiador_paciente_entity_1.CliFinanciadorPaciente);
        },
        inject: ['DATA_SOURCE']
    },
];

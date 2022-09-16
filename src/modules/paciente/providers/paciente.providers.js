"use strict";
exports.__esModule = true;
exports.PacienteProviders = void 0;
var paciente_entity_1 = require("../entity/paciente.entity");
exports.PacienteProviders = [
    {
        provide: 'PACIENTE_REPOSITORY',
        useFactory: function (dataSource) { return dataSource.getRepository(paciente_entity_1.paciente); },
        inject: ['DATA_SOURCE']
    },
];

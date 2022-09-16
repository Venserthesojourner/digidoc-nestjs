"use strict";
exports.__esModule = true;
exports.diagnosticoEstudiosProvider = void 0;
var diagnostico_estudios_entity_1 = require("../entity/diagnostico-estudios.entity");
exports.diagnosticoEstudiosProvider = [
    {
        provide: 'DIAGNOSTICO_ESTUDIOS_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(diagnostico_estudios_entity_1.diagnosticoEstudios);
        },
        inject: ['DATA_SOURCE']
    },
];

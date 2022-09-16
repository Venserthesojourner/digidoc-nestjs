"use strict";
exports.__esModule = true;
exports.DiagnosticoProvider = void 0;
var diagnostico_entity_1 = require("../entity/diagnostico.entity");
exports.DiagnosticoProvider = [
    {
        provide: 'DIAGNOSTICO_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(diagnostico_entity_1.diagnostico);
        },
        inject: ['DATA_SOURCE']
    },
];

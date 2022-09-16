"use strict";
exports.__esModule = true;
exports.DiagnosticoFetoProvider = void 0;
var diagnostico_feto_entity_1 = require("../entity/diagnostico-feto.entity");
exports.DiagnosticoFetoProvider = [
    {
        provide: 'DIAGNOSTICO_FETO_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(diagnostico_feto_entity_1.diagnosticoFeto);
        },
        inject: ['DATA_SOURCE']
    },
];

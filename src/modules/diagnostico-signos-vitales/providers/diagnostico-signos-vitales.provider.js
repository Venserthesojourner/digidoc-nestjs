"use strict";
exports.__esModule = true;
exports.DiagnosticoSignosVitalesProvider = void 0;
var diagostico_signos_vitales_entity_1 = require("../entity/diagostico-signos-vitales.entity");
exports.DiagnosticoSignosVitalesProvider = [
    {
        provide: 'DIAGNOSTICO_SIGNOS_VITALES_REPOSITORY',
        useFactory: function (datasource) {
            return datasource.getRepository(diagostico_signos_vitales_entity_1.diagnosticoSignosVitales);
        },
        inject: ['DATA_SOURCE']
    },
];

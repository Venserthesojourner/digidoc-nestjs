"use strict";
exports.__esModule = true;
exports.DiagnosticoTactoVaginalProvider = void 0;
var diagnostico_tacto_vaginal_entity_1 = require("../entity/diagnostico-tacto-vaginal.entity");
exports.DiagnosticoTactoVaginalProvider = [
    {
        provide: 'DIAGNOSTICO_TACTO_VAGINAL_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(diagnostico_tacto_vaginal_entity_1.diagnosticoTactoVaginal);
        },
        inject: ['DATA_SOURCE']
    },
];

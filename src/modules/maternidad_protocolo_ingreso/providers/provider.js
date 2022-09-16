"use strict";
exports.__esModule = true;
exports.protocoloMaternidadIngresoProvider = void 0;
var mat_protocolo_ingreso_entity_1 = require("../entity/mat_protocolo_ingreso.entity");
exports.protocoloMaternidadIngresoProvider = [
    {
        provide: 'PROTOCOLO_MATERNIDAD_INGRESO_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(mat_protocolo_ingreso_entity_1.protocoloMaternidadIngreso);
        },
        inject: ['DATA_SOURCE']
    },
];

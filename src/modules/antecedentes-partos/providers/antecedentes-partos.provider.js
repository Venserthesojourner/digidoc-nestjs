"use strict";
exports.__esModule = true;
exports.AntecedentesPartosProvider = void 0;
var partos_entity_1 = require("../entity/partos.entity");
exports.AntecedentesPartosProvider = [
    {
        provide: 'ANTECEDENTES_PARTOS_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(partos_entity_1.antecedentesPartos);
        },
        inject: ['DATA_SOURCE']
    },
];

"use strict";
exports.__esModule = true;
exports.AntecedentesProviders = void 0;
var antecedentes_entity_1 = require("../entity/antecedentes.entity");
exports.AntecedentesProviders = [
    {
        provide: 'ANTECEDENTES_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(antecedentes_entity_1.antecedentes);
        },
        inject: ['DATA_SOURCE']
    },
];

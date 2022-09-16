"use strict";
exports.__esModule = true;
exports.AntecedentesMetrorragiaProviders = void 0;
var metrorragia_entity_1 = require("../entity/metrorragia.entity");
exports.AntecedentesMetrorragiaProviders = [
    {
        provide: 'ANTECEDENTES_METRORRAGIA_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(metrorragia_entity_1.antecedentesMetrorragia);
        },
        inject: ['DATA_SOURCE']
    },
];

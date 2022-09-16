"use strict";
exports.__esModule = true;
exports.AntecedentesGinecobstetricosProviders = void 0;
var antecedentes_ginecobstetricos_entity_1 = require("../entity/antecedentes-ginecobstetricos.entity");
exports.AntecedentesGinecobstetricosProviders = [
    {
        provide: 'ANTECEDENTES_GINECOBSTETRICOS_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(antecedentes_ginecobstetricos_entity_1.antecedentesGinecobstetricos);
        },
        inject: ['DATA_SOURCE']
    },
];

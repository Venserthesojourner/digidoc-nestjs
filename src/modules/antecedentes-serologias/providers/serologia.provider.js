"use strict";
exports.__esModule = true;
exports.SerologiasProviders = void 0;
var serologia_entity_1 = require("../entity/serologia.entity");
exports.SerologiasProviders = [
    {
        provide: 'SEROLOGIAS_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(serologia_entity_1.antecedentesSerologias);
        },
        inject: ['DATA_SOURCE']
    },
];

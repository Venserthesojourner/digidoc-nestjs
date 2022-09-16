"use strict";
exports.__esModule = true;
exports.AntecedentesVacunasProviders = void 0;
var vacunas_repository_1 = require("../repository/vacunas.repository");
exports.AntecedentesVacunasProviders = [
    {
        provide: 'ANTECEDENTES_VACUNAS_REPOSITORY',
        useFactory: function (dataSource) {
            return dataSource.getRepository(vacunas_repository_1.AntecedentesVacunasRepository);
        },
        inject: ['DATA_SOURCE']
    },
];

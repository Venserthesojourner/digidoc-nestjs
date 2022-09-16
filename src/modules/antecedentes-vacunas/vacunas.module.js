"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.AntecedentesVacunasModule = void 0;
var axios_1 = require("@nestjs/axios");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var database_module_1 = require("../../database/database.module");
var vacunas_entity_1 = require("./entity/vacunas.entity");
var vacunas_providers_1 = require("./providers/vacunas.providers");
var vacunas_controller_1 = require("./vacunas.controller");
var vacunas_service_1 = require("./vacunas.service");
var AntecedentesVacunasModule = /** @class */ (function () {
    function AntecedentesVacunasModule() {
    }
    AntecedentesVacunasModule = __decorate([
        (0, common_1.Module)({
            imports: [
                axios_1.HttpModule,
                database_module_1.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([vacunas_entity_1.antecedentesVacunas]),
            ],
            controllers: [vacunas_controller_1.AntecedentesVacunasController],
            providers: __spreadArray(__spreadArray([], vacunas_providers_1.AntecedentesVacunasProviders, true), [vacunas_service_1.AntecedentesVacunasService], false)
        })
    ], AntecedentesVacunasModule);
    return AntecedentesVacunasModule;
}());
exports.AntecedentesVacunasModule = AntecedentesVacunasModule;

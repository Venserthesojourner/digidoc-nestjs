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
exports.AntecedentesModule = void 0;
var axios_1 = require("@nestjs/axios");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var database_module_1 = require("../../database/database.module");
// Antecentes: (CSP)
var antecedentes_service_1 = require("./antecedentes.service");
var antecedentes_provider_1 = require("./providers/antecedentes.provider");
var antecedentes_controller_1 = require("./antecedentes.controller");
//Entities
var antecedentes_ginecobstetricos_entity_1 = require("../antecedentes-ginecobstetricos/entity/antecedentes-ginecobstetricos.entity");
var metrorragia_entity_1 = require("../antecedentes-metrorragia/entity/metrorragia.entity");
var vacunas_entity_1 = require("../antecedentes-vacunas/entity/vacunas.entity");
var partos_entity_1 = require("../antecedentes-partos/entity/partos.entity");
var serologia_entity_1 = require("../antecedentes-serologias/entity/serologia.entity");
var antecedentes_entity_1 = require("./entity/antecedentes.entity");
var vacunas_module_1 = require("../antecedentes-vacunas/vacunas.module");
var antecedentes_partos_module_1 = require("../antecedentes-partos/antecedentes-partos.module");
var serologia_module_1 = require("../antecedentes-serologias/serologia.module");
var antecedentes_ginecobstetricos_module_1 = require("../antecedentes-ginecobstetricos/antecedentes-ginecobstetricos.module");
var antecedentes_metrorragia_module_1 = require("../antecedentes-metrorragia/antecedentes-metrorragia.module");
var AntecedentesModule = /** @class */ (function () {
    function AntecedentesModule() {
    }
    AntecedentesModule = __decorate([
        (0, common_1.Module)({
            imports: [
                axios_1.HttpModule,
                database_module_1.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([
                    antecedentes_entity_1.antecedentes,
                    antecedentes_ginecobstetricos_entity_1.antecedentesGinecobstetricos,
                    metrorragia_entity_1.antecedentesMetrorragia,
                    vacunas_entity_1.antecedentesVacunas,
                    partos_entity_1.antecedentesPartos,
                    serologia_entity_1.antecedentesSerologias,
                ]),
                antecedentes_ginecobstetricos_module_1.AntecedentesGinecobstetricosModule,
                antecedentes_metrorragia_module_1.AntecedentesMetrorragiaModule,
                vacunas_module_1.AntecedentesVacunasModule,
                antecedentes_partos_module_1.AntecedentesPartosModule,
                serologia_module_1.AntecedentesSerologiaModule,
            ],
            controllers: [antecedentes_controller_1.AntecedentesController],
            providers: __spreadArray([antecedentes_service_1.AntecedentesService], antecedentes_provider_1.AntecedentesProviders, true)
        })
    ], AntecedentesModule);
    return AntecedentesModule;
}());
exports.AntecedentesModule = AntecedentesModule;

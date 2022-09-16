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
exports.EpisodioModule = void 0;
var common_1 = require("@nestjs/common");
var database_module_1 = require("../../database/database.module");
var axios_1 = require("@nestjs/axios");
var typeorm_1 = require("@nestjs/typeorm");
var episodio_entity_1 = require("./entity/episodio.entity");
var paciente_entity_1 = require("../paciente/entity/paciente.entity");
var episodio_service_1 = require("./episodio.service");
var episodio_provider_1 = require("./providers/episodio.provider");
var episodio_controller_1 = require("./episodio.controller");
var paciente_module_1 = require("../paciente/paciente.module");
var paciente_providers_1 = require("../paciente/providers/paciente.providers");
var EpisodioModule = /** @class */ (function () {
    function EpisodioModule() {
    }
    EpisodioModule = __decorate([
        (0, common_1.Module)({
            imports: [
                axios_1.HttpModule,
                database_module_1.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([episodio_entity_1.episodio, paciente_entity_1.paciente]),
                paciente_module_1.PacienteModule,
            ],
            controllers: [episodio_controller_1.episodioController, episodio_controller_1.episodioNoPatientController],
            providers: __spreadArray(__spreadArray(__spreadArray([], episodio_provider_1.EpisodioProviders, true), paciente_providers_1.PacienteProviders, true), [episodio_service_1.episodioService], false)
        })
    ], EpisodioModule);
    return EpisodioModule;
}());
exports.EpisodioModule = EpisodioModule;

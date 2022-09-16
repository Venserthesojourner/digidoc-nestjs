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
exports.PacienteModule = void 0;
var common_1 = require("@nestjs/common");
var database_module_1 = require("../../database/database.module");
var paciente_service_1 = require("./paciente.service");
var paciente_controller_1 = require("./paciente.controller");
var paciente_providers_1 = require("./providers/paciente.providers");
var axios_1 = require("@nestjs/axios");
var typeorm_1 = require("@nestjs/typeorm");
var cli_documento_digitalizado_entity_1 = require("../cli-documento-digitalizado/entity/cli-documento-digitalizado.entity");
var paciente_entity_1 = require("./entity/paciente.entity");
var PacienteModule = /** @class */ (function () {
    function PacienteModule() {
    }
    PacienteModule = __decorate([
        (0, common_1.Module)({
            imports: [
                axios_1.HttpModule,
                database_module_1.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([paciente_entity_1.paciente, cli_documento_digitalizado_entity_1.CliDocumentoDigitalizado]),
            ],
            controllers: [paciente_controller_1.PacienteController],
            providers: __spreadArray(__spreadArray([], paciente_providers_1.PacienteProviders, true), [paciente_service_1.PacienteService], false)
        })
    ], PacienteModule);
    return PacienteModule;
}());
exports.PacienteModule = PacienteModule;

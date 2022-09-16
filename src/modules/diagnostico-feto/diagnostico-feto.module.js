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
exports.DiagnosticoFetoModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var database_module_1 = require("../../database/database.module");
var diagnostico_feto_controller_1 = require("./diagnostico-feto.controller");
var diagnostico_feto_service_1 = require("./diagnostico-feto.service");
var diagnostico_feto_entity_1 = require("./entity/diagnostico-feto.entity");
var diagnostico_feto_provider_1 = require("./providers/diagnostico-feto.provider");
var DiagnosticoFetoModule = /** @class */ (function () {
    function DiagnosticoFetoModule() {
    }
    DiagnosticoFetoModule = __decorate([
        (0, common_1.Module)({
            imports: [database_module_1.DatabaseModule, typeorm_1.TypeOrmModule.forFeature([diagnostico_feto_entity_1.diagnosticoFeto])],
            providers: __spreadArray([diagnostico_feto_service_1.DiagnosticoFetoService], diagnostico_feto_provider_1.DiagnosticoFetoProvider, true),
            controllers: [diagnostico_feto_controller_1.DiagnosticoFetoController]
        })
    ], DiagnosticoFetoModule);
    return DiagnosticoFetoModule;
}());
exports.DiagnosticoFetoModule = DiagnosticoFetoModule;

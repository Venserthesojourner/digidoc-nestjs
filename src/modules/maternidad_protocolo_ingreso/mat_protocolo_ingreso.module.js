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
exports.protocoloMaternidadIngresoModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var database_module_1 = require("../../database/database.module");
var protocolo_entity_1 = require("../protocolo/entity/protocolo.entity");
var mat_protocolo_ingreso_entity_1 = require("./entity/mat_protocolo_ingreso.entity");
var mat_protocolo_ingreso_controller_1 = require("./mat_protocolo_ingreso.controller");
var mat_protocolo_ingreso_service_1 = require("./mat_protocolo_ingreso.service");
var provider_1 = require("./providers/provider");
var protocoloMaternidadIngresoModule = /** @class */ (function () {
    function protocoloMaternidadIngresoModule() {
    }
    protocoloMaternidadIngresoModule = __decorate([
        (0, common_1.Module)({
            imports: [
                database_module_1.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([protocolo_entity_1.protocolo, mat_protocolo_ingreso_entity_1.protocoloMaternidadIngreso]),
            ],
            providers: __spreadArray([
                mat_protocolo_ingreso_service_1.protocoloMaternidadIngresoService
            ], provider_1.protocoloMaternidadIngresoProvider, true),
            controllers: [mat_protocolo_ingreso_controller_1.protocoloMaternidadIngresoController]
        })
    ], protocoloMaternidadIngresoModule);
    return protocoloMaternidadIngresoModule;
}());
exports.protocoloMaternidadIngresoModule = protocoloMaternidadIngresoModule;

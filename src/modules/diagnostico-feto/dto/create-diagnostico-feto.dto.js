"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateDiagnosticoFetoDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var diagnostico_feto_entity_1 = require("../entity/diagnostico-feto.entity");
var CreateDiagnosticoFetoDto = /** @class */ (function () {
    function CreateDiagnosticoFetoDto() {
    }
    CreateDiagnosticoFetoDto._OPENAPI_METADATA_FACTORY = function () {
        return { presentacion: { required: true, "enum": require("../entity/diagnostico-feto.entity").presentacion }, posicion: { required: true, type: function () { return String; } }, membranasOvulares: { required: true, type: function () { return String; } }, plano: { required: true, "enum": require("../entity/diagnostico-feto.entity").plano }, liquidoAmniotico: { required: true, "enum": require("../entity/diagnostico-feto.entity").liquidoAmniotico } };
    };
    __decorate([
        (0, class_validator_1.IsEnum)({
            "enum": diagnostico_feto_entity_1.presentacion,
            enumname: diagnostico_feto_entity_1.presentacion
        })
    ], CreateDiagnosticoFetoDto.prototype, "presentacion");
    __decorate([
        (0, class_validator_1.IsEnum)({
            "enum": diagnostico_feto_entity_1.plano,
            enumname: diagnostico_feto_entity_1.plano
        })
    ], CreateDiagnosticoFetoDto.prototype, "plano");
    __decorate([
        (0, class_validator_1.IsEnum)({
            "enum": diagnostico_feto_entity_1.liquidoAmniotico,
            enumname: diagnostico_feto_entity_1.liquidoAmniotico
        })
    ], CreateDiagnosticoFetoDto.prototype, "liquidoAmniotico");
    return CreateDiagnosticoFetoDto;
}());
exports.CreateDiagnosticoFetoDto = CreateDiagnosticoFetoDto;

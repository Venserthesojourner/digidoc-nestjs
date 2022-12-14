"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateDiagnosticoEstudiosDto = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var class_validator_1 = require("class-validator");
var CreateDiagnosticoEstudiosDto = /** @class */ (function () {
    function CreateDiagnosticoEstudiosDto() {
    }
    CreateDiagnosticoEstudiosDto._OPENAPI_METADATA_FACTORY = function () {
        return { nombre: { required: true, type: function () { return String; } }, resultado: { required: true, type: function () { return Boolean; } }, observaciones: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateDiagnosticoEstudiosDto.prototype, "nombre");
    __decorate([
        (0, class_validator_1.IsBoolean)()
    ], CreateDiagnosticoEstudiosDto.prototype, "resultado");
    __decorate([
        (0, class_validator_1.IsString)()
    ], CreateDiagnosticoEstudiosDto.prototype, "observaciones");
    CreateDiagnosticoEstudiosDto = __decorate([
        (0, common_1.Injectable)()
    ], CreateDiagnosticoEstudiosDto);
    return CreateDiagnosticoEstudiosDto;
}());
exports.CreateDiagnosticoEstudiosDto = CreateDiagnosticoEstudiosDto;

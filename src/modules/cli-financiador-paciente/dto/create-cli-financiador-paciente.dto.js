"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCliFinanciadorPacienteDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var CreateCliFinanciadorPacienteDto = /** @class */ (function () {
    function CreateCliFinanciadorPacienteDto() {
    }
    CreateCliFinanciadorPacienteDto._OPENAPI_METADATA_FACTORY = function () {
        return { cliFinanciador: { required: true, type: function () { return Object; } }, cliPaciente: { required: true, type: function () { return Object; } } };
    };
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliFinanciadorPacienteDto.prototype, "cliFinanciador");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliFinanciadorPacienteDto.prototype, "cliPaciente");
    return CreateCliFinanciadorPacienteDto;
}());
exports.CreateCliFinanciadorPacienteDto = CreateCliFinanciadorPacienteDto;

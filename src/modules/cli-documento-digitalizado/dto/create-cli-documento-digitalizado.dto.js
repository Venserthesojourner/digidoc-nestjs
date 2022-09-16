"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCliDocumentoDigitalizadoDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var episodio_entity_1 = require("../../episodio/entity/episodio.entity");
var paciente_entity_1 = require("../../paciente/entity/paciente.entity");
var CreateCliDocumentoDigitalizadoDto = /** @class */ (function () {
    function CreateCliDocumentoDigitalizadoDto() {
    }
    CreateCliDocumentoDigitalizadoDto._OPENAPI_METADATA_FACTORY = function () {
        return { descripcion: { required: false, type: function () { return String; } }, tags: { required: false, type: function () { return String; } }, fecha: { required: false, type: function () { return Date; } }, tipo: { required: true, type: function () { return String; } }, categoria: { required: false, type: function () { return String; } }, cliPaciente: { required: false, type: function () { return Object; } }, cliEpisodio: { required: false, type: function () { return Object; } }, bajaFecha: { required: false, type: function () { return Date; } } };
    };
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoDto.prototype, "descripcion");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoDto.prototype, "tags");
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoDto.prototype, "fecha");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoDto.prototype, "tipo");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoDto.prototype, "categoria");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)({ type: function () { return paciente_entity_1.paciente; } })
    ], CreateCliDocumentoDigitalizadoDto.prototype, "cliPaciente");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)({ type: function () { return episodio_entity_1.episodio; } })
    ], CreateCliDocumentoDigitalizadoDto.prototype, "cliEpisodio");
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoDto.prototype, "bajaFecha");
    return CreateCliDocumentoDigitalizadoDto;
}());
exports.CreateCliDocumentoDigitalizadoDto = CreateCliDocumentoDigitalizadoDto;

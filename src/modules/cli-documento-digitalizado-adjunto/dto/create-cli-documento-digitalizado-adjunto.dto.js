"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateCliDocumentoDigitalizadoAdjuntoDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var cli_documento_digitalizado_entity_1 = require("../../cli-documento-digitalizado/entity/cli-documento-digitalizado.entity");
var CreateCliDocumentoDigitalizadoAdjuntoDto = /** @class */ (function () {
    function CreateCliDocumentoDigitalizadoAdjuntoDto() {
    }
    CreateCliDocumentoDigitalizadoAdjuntoDto._OPENAPI_METADATA_FACTORY = function () {
        return { cliDocumentoDigitalizado: { required: true, type: function () { return Object; } }, contentType: { required: true, type: function () { return String; } }, filename: { required: true, type: function () { return String; } }, filenameThumbnail: { required: false, type: function () { return String; } }, bytes: { required: false, type: function () { return Number; } }, alto: { required: false, type: function () { return Number; } }, ancho: { required: false, type: function () { return Number; } }, duracion: { required: false, type: function () { return Number; } }, sha1: { required: false, type: function () { return String; } } };
    };
    __decorate([
        (0, swagger_1.ApiProperty)({ type: function () { return cli_documento_digitalizado_entity_1.CliDocumentoDigitalizado; } })
    ], CreateCliDocumentoDigitalizadoAdjuntoDto.prototype, "cliDocumentoDigitalizado");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoAdjuntoDto.prototype, "contentType");
    __decorate([
        (0, class_validator_1.IsDate)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoAdjuntoDto.prototype, "filename");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoAdjuntoDto.prototype, "filenameThumbnail");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoAdjuntoDto.prototype, "bytes");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoAdjuntoDto.prototype, "alto");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoAdjuntoDto.prototype, "ancho");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoAdjuntoDto.prototype, "duracion");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        (0, swagger_1.ApiProperty)()
    ], CreateCliDocumentoDigitalizadoAdjuntoDto.prototype, "sha1");
    return CreateCliDocumentoDigitalizadoAdjuntoDto;
}());
exports.CreateCliDocumentoDigitalizadoAdjuntoDto = CreateCliDocumentoDigitalizadoAdjuntoDto;

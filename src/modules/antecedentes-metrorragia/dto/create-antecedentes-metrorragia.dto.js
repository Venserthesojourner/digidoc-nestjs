"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAntecedenteMetrorragiaDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var antecedentes_entity_1 = require("../../antecedentes/entity/antecedentes.entity");
var CreateAntecedenteMetrorragiaDto = /** @class */ (function () {
    function CreateAntecedenteMetrorragiaDto() {
    }
    CreateAntecedenteMetrorragiaDto._OPENAPI_METADATA_FACTORY = function () {
        return { idAntecedentes: { required: true, type: function () { return Object; } }, presente: { required: true, type: function () { return Boolean; } }, tiempoEvolucion: { required: false, type: function () { return Number; }, minimum: 1 }, cantidad: { required: false, type: function () { return Number; }, minimum: 1 }, auscultacion: { required: false, type: function () { return Number; }, minimum: 1 }, dinamicaUterina: { required: false, type: function () { return String; }, minLength: 0, maxLength: 200 }, tonoUterino: { required: false, type: function () { return String; }, minLength: 0, maxLength: 50 } };
    };
    __decorate([
        (0, class_transformer_1.Type)(function () { return antecedentes_entity_1.antecedentes; }),
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteMetrorragiaDto.prototype, "idAntecedentes");
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteMetrorragiaDto.prototype, "presente");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsPositive)()
    ], CreateAntecedenteMetrorragiaDto.prototype, "tiempoEvolucion");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsPositive)()
    ], CreateAntecedenteMetrorragiaDto.prototype, "cantidad");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsPositive)()
    ], CreateAntecedenteMetrorragiaDto.prototype, "auscultacion");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Length)(0, 200)
    ], CreateAntecedenteMetrorragiaDto.prototype, "dinamicaUterina");
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.Length)(0, 50)
    ], CreateAntecedenteMetrorragiaDto.prototype, "tonoUterino");
    return CreateAntecedenteMetrorragiaDto;
}());
exports.CreateAntecedenteMetrorragiaDto = CreateAntecedenteMetrorragiaDto;

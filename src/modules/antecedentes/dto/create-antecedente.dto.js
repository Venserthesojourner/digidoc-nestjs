"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAntecedenteDto = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var antecedentes_ginecobstetricos_entity_1 = require("../../antecedentes-ginecobstetricos/entity/antecedentes-ginecobstetricos.entity");
var metrorragia_entity_1 = require("../../antecedentes-metrorragia/entity/metrorragia.entity");
var serologia_entity_1 = require("../../antecedentes-serologias/entity/serologia.entity");
var vacunas_entity_1 = require("../../antecedentes-vacunas/entity/vacunas.entity");
var paciente_entity_1 = require("../../paciente/entity/paciente.entity");
var antecedentes_entity_1 = require("./../entity/antecedentes.entity");
var CreateAntecedenteDto = /** @class */ (function () {
    function CreateAntecedenteDto() {
    }
    CreateAntecedenteDto._OPENAPI_METADATA_FACTORY = function () {
        return { paciente: { required: true, type: function () { return Object; } }, grupo_sanguineo: { required: true, "enum": require("../entity/antecedentes.entity").grupoSanguineo }, antecedentes_ginobstetricos: { required: true, type: function () { return Object; } }, metrorragia: { required: true, type: function () { return [Object]; } }, serogolia: { required: true, type: function () { return [Object]; } }, vacunas: { required: false, type: function () { return [Object]; } }, antecedentes_alergicos: { required: true, type: function () { return String; } }, antecedentes_quirurgicos: { required: true, type: function () { return String; } }, antecedentes_sociales: { required: true, type: function () { return String; } }, antecedentes_obstetricos: { required: true, type: function () { return String; } }, antecedentes_medicacion_actual: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, class_transformer_1.Type)(function () { return paciente_entity_1.paciente; }),
        (0, class_validator_1.ValidateNested)(),
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "paciente");
    __decorate([
        (0, class_validator_1.IsEnum)({
            "enum": antecedentes_entity_1.grupoSanguineo,
            enumName: 'grupoSanguineo'
        }),
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "grupo_sanguineo");
    __decorate([
        (0, class_transformer_1.Type)(function () { return antecedentes_ginecobstetricos_entity_1.antecedentesGinecobstetricos; }),
        (0, class_validator_1.ValidateNested)(),
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "antecedentes_ginobstetricos");
    __decorate([
        (0, class_transformer_1.Type)(function () { return metrorragia_entity_1.antecedentesMetrorragia; }),
        (0, class_validator_1.ValidateNested)(),
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "metrorragia");
    __decorate([
        (0, class_transformer_1.Type)(function () { return serologia_entity_1.antecedentesSerologias; }),
        (0, class_validator_1.ValidateNested)(),
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "serogolia");
    __decorate([
        (0, class_transformer_1.Type)(function () { return vacunas_entity_1.antecedentesVacunas; }),
        (0, class_validator_1.ValidateNested)(),
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "vacunas");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "antecedentes_alergicos");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "antecedentes_quirurgicos");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "antecedentes_sociales");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "antecedentes_obstetricos");
    __decorate([
        (0, swagger_1.ApiProperty)()
    ], CreateAntecedenteDto.prototype, "antecedentes_medicacion_actual");
    CreateAntecedenteDto = __decorate([
        (0, common_1.Injectable)()
    ], CreateAntecedenteDto);
    return CreateAntecedenteDto;
}());
exports.CreateAntecedenteDto = CreateAntecedenteDto;

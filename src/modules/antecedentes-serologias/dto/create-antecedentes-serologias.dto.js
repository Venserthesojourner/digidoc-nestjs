"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAntecedentesSerologiasDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var antecedentes_entity_1 = require("../../antecedentes/entity/antecedentes.entity");
var serologia_entity_1 = require("../entity/serologia.entity");
var CreateAntecedentesSerologiasDto = /** @class */ (function () {
    function CreateAntecedentesSerologiasDto() {
    }
    CreateAntecedentesSerologiasDto._OPENAPI_METADATA_FACTORY = function () {
        return { tipoSerologia: { required: true, "enum": require("../entity/serologia.entity").tipo_serologia }, estado: { required: true, type: function () { return Boolean; } }, antecedente: { required: true, type: function () { return Object; } } };
    };
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsEnum)({
            "enum": serologia_entity_1.tipo_serologia,
            enumname: serologia_entity_1.tipo_serologia
        })
    ], CreateAntecedentesSerologiasDto.prototype, "tipoSerologia");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_validator_1.IsBoolean)()
    ], CreateAntecedentesSerologiasDto.prototype, "estado");
    __decorate([
        (0, class_transformer_1.Type)(function () { return antecedentes_entity_1.antecedentes; }),
        (0, class_validator_1.ValidateNested)()
    ], CreateAntecedentesSerologiasDto.prototype, "antecedente");
    return CreateAntecedentesSerologiasDto;
}());
exports.CreateAntecedentesSerologiasDto = CreateAntecedentesSerologiasDto;

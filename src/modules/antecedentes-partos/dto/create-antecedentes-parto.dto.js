"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAntecendentePartoDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var paciente_entity_1 = require("../../paciente/entity/paciente.entity");
var partos_entity_1 = require("../entity/partos.entity");
var CreateAntecendentePartoDto = /** @class */ (function () {
    function CreateAntecendentePartoDto() {
    }
    CreateAntecendentePartoDto._OPENAPI_METADATA_FACTORY = function () {
        return { pacienteId: { required: true, type: function () { return Object; } }, tipoParto: { required: true, "enum": require("../entity/partos.entity").tipo_parto }, cantidad: { required: true, type: function () { return Number; } } };
    };
    __decorate([
        (0, class_transformer_1.Type)(function () { return paciente_entity_1.paciente; }),
        (0, class_validator_1.ValidateNested)()
    ], CreateAntecendentePartoDto.prototype, "pacienteId");
    __decorate([
        (0, class_validator_1.IsEnum)({
            "enum": partos_entity_1.tipo_parto
        })
    ], CreateAntecendentePartoDto.prototype, "tipoParto");
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, swagger_1.ApiProperty)()
    ], CreateAntecendentePartoDto.prototype, "cantidad");
    return CreateAntecendentePartoDto;
}());
exports.CreateAntecendentePartoDto = CreateAntecendentePartoDto;

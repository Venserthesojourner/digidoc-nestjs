"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateDiagnosticoTactoVaginalDto = void 0;
var openapi = require("@nestjs/swagger");
var class_validator_1 = require("class-validator");
var diagnostico_tacto_vaginal_entity_1 = require("../entity/diagnostico-tacto-vaginal.entity");
var CreateDiagnosticoTactoVaginalDto = /** @class */ (function () {
    function CreateDiagnosticoTactoVaginalDto() {
    }
    CreateDiagnosticoTactoVaginalDto._OPENAPI_METADATA_FACTORY = function () {
        return { cuello: { required: true, "enum": require("../entity/diagnostico-tacto-vaginal.entity").cuello }, borramiento: { required: true, "enum": require("../entity/diagnostico-tacto-vaginal.entity").borramiento }, dilatacion: { required: true, "enum": require("../entity/diagnostico-tacto-vaginal.entity").dilatacion } };
    };
    __decorate([
        (0, class_validator_1.IsEnum)({
            "enum": diagnostico_tacto_vaginal_entity_1.cuello,
            enumname: diagnostico_tacto_vaginal_entity_1.cuello
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateDiagnosticoTactoVaginalDto.prototype, "cuello");
    __decorate([
        (0, class_validator_1.IsEnum)({
            "enum": diagnostico_tacto_vaginal_entity_1.borramiento,
            enumname: diagnostico_tacto_vaginal_entity_1.borramiento
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateDiagnosticoTactoVaginalDto.prototype, "borramiento");
    __decorate([
        (0, class_validator_1.IsEnum)({
            "enum": diagnostico_tacto_vaginal_entity_1.dilatacion,
            enumname: diagnostico_tacto_vaginal_entity_1.dilatacion
        }),
        (0, class_validator_1.IsNotEmpty)()
    ], CreateDiagnosticoTactoVaginalDto.prototype, "dilatacion");
    return CreateDiagnosticoTactoVaginalDto;
}());
exports.CreateDiagnosticoTactoVaginalDto = CreateDiagnosticoTactoVaginalDto;

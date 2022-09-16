"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateProtocoloMaternidadIngresoDto = void 0;
var openapi = require("@nestjs/swagger");
var swagger_1 = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var antecedentes_entity_1 = require("../../antecedentes/entity/antecedentes.entity");
var diagnostico_entity_1 = require("../../diagnostico/entity/diagnostico.entity");
var create_protocolo_dto_1 = require("../../protocolo/dto/create.protocolo.dto");
var CreateProtocoloMaternidadIngresoDto = /** @class */ (function (_super) {
    __extends(CreateProtocoloMaternidadIngresoDto, _super);
    function CreateProtocoloMaternidadIngresoDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreateProtocoloMaternidadIngresoDto._OPENAPI_METADATA_FACTORY = function () {
        return { antecedentes: { required: false, type: function () { return Object; } }, diagnostico: { required: false, type: function () { return Object; } } };
    };
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_transformer_1.Type)(function () { return antecedentes_entity_1.antecedentes; })
    ], CreateProtocoloMaternidadIngresoDto.prototype, "antecedentes");
    __decorate([
        (0, swagger_1.ApiProperty)(),
        (0, class_transformer_1.Type)(function () { return diagnostico_entity_1.diagnostico; })
    ], CreateProtocoloMaternidadIngresoDto.prototype, "diagnostico");
    return CreateProtocoloMaternidadIngresoDto;
}(create_protocolo_dto_1.CreateProtocoloDto));
exports.CreateProtocoloMaternidadIngresoDto = CreateProtocoloMaternidadIngresoDto;

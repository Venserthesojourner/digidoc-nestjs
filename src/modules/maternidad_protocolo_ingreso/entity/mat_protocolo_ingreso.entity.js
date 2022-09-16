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
exports.protocoloMaternidadIngreso = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var antecedentes_entity_1 = require("../../antecedentes/entity/antecedentes.entity");
var diagnostico_entity_1 = require("../../diagnostico/entity/diagnostico.entity");
var protocolo_entity_1 = require("../../protocolo/entity/protocolo.entity");
var protocoloMaternidadIngreso = /** @class */ (function (_super) {
    __extends(protocoloMaternidadIngreso, _super);
    function protocoloMaternidadIngreso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    protocoloMaternidadIngreso._OPENAPI_METADATA_FACTORY = function () {
        return { antecedentes: { required: true, type: function () { return require("../../antecedentes/entity/antecedentes.entity").antecedentes; } }, diagnostico: { required: true, type: function () { return require("../../diagnostico/entity/diagnostico.entity").diagnostico; } } };
    };
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return antecedentes_entity_1.antecedentes; }),
        (0, typeorm_1.JoinTable)({ name: 'antecedentes' })
    ], protocoloMaternidadIngreso.prototype, "antecedentes");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return diagnostico_entity_1.diagnostico; }),
        (0, typeorm_1.JoinTable)({ name: 'diagnosticos' })
    ], protocoloMaternidadIngreso.prototype, "diagnostico");
    protocoloMaternidadIngreso = __decorate([
        (0, typeorm_1.ChildEntity)('maternidad_ingreso')
    ], protocoloMaternidadIngreso);
    return protocoloMaternidadIngreso;
}(protocolo_entity_1.protocolo));
exports.protocoloMaternidadIngreso = protocoloMaternidadIngreso;

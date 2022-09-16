"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.diagnosticoSignosVitales = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var diagnosticoSignosVitales = /** @class */ (function () {
    function diagnosticoSignosVitales() {
    }
    diagnosticoSignosVitales._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, normal: { required: true, type: function () { return Boolean; } }, detalle: { required: true, type: function () { return String; } }, plan: { required: true, type: function () { return String; } }, observaciones: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], diagnosticoSignosVitales.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'normal', "default": false })
    ], diagnosticoSignosVitales.prototype, "normal");
    __decorate([
        (0, typeorm_1.Column)({ name: 'detalle', type: 'varchar', length: 200 })
    ], diagnosticoSignosVitales.prototype, "detalle");
    __decorate([
        (0, typeorm_1.Column)({ name: 'plan', type: 'varchar', length: 200 })
    ], diagnosticoSignosVitales.prototype, "plan");
    __decorate([
        (0, typeorm_1.Column)({ name: 'observaciones', type: 'varchar', length: 200 })
    ], diagnosticoSignosVitales.prototype, "observaciones");
    diagnosticoSignosVitales = __decorate([
        (0, typeorm_1.Entity)('pacientes_diagnostico_signos_vitales')
    ], diagnosticoSignosVitales);
    return diagnosticoSignosVitales;
}());
exports.diagnosticoSignosVitales = diagnosticoSignosVitales;

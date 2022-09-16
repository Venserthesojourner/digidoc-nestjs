"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.diagnosticoEstudios = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var diagnosticoEstudios = /** @class */ (function () {
    function diagnosticoEstudios() {
    }
    diagnosticoEstudios._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, nombre: { required: true, type: function () { return String; } }, resultado: { required: true, type: function () { return Boolean; } }, observaciones: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], diagnosticoEstudios.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], diagnosticoEstudios.prototype, "nombre");
    __decorate([
        (0, typeorm_1.Column)()
    ], diagnosticoEstudios.prototype, "resultado");
    __decorate([
        (0, typeorm_1.Column)()
    ], diagnosticoEstudios.prototype, "observaciones");
    diagnosticoEstudios = __decorate([
        (0, typeorm_1.Entity)('pacientes_diagnosticos_estudios')
    ], diagnosticoEstudios);
    return diagnosticoEstudios;
}());
exports.diagnosticoEstudios = diagnosticoEstudios;

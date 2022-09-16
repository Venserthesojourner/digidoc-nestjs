"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CliFinanciador = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var CliFinanciador = /** @class */ (function () {
    function CliFinanciador() {
    }
    CliFinanciador._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, nombre: { required: true, type: function () { return String; } }, cuit: { required: true, type: function () { return String; } }, activado: { required: true, type: function () { return Number; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idfinanciacion' })
    ], CliFinanciador.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'nombre', nullable: true, type: 'varchar', length: 100 })
    ], CliFinanciador.prototype, "nombre");
    __decorate([
        (0, typeorm_1.Column)({ name: 'cuit', nullable: true, type: 'varchar', length: 15 })
    ], CliFinanciador.prototype, "cuit");
    __decorate([
        (0, typeorm_1.Column)({ name: 'activado', nullable: false, type: 'int', "default": 1 })
    ], CliFinanciador.prototype, "activado");
    CliFinanciador = __decorate([
        (0, typeorm_1.Entity)({ name: 'financiacion' })
    ], CliFinanciador);
    return CliFinanciador;
}());
exports.CliFinanciador = CliFinanciador;

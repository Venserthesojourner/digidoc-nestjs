"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.antecedentesMetrorragia = void 0;
var openapi = require("@nestjs/swagger");
var antecedentes_entity_1 = require("../../antecedentes/entity/antecedentes.entity");
var typeorm_1 = require("typeorm");
var antecedentesMetrorragia = /** @class */ (function () {
    function antecedentesMetrorragia() {
    }
    antecedentesMetrorragia._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, idAntedecente: { required: true, type: function () { return Object; } }, presente: { required: true, type: function () { return Boolean; } }, tiempoEvolucion: { required: true, type: function () { return Number; } }, cantidad: { required: true, type: function () { return Number; } }, auscultacion: { required: true, type: function () { return Number; } }, dinamicaUterina: { required: true, type: function () { return String; } }, tonoUterino: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], antecedentesMetrorragia.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return antecedentes_entity_1.antecedentes; }, function (idAntecedente) { return idAntecedente.id; })
    ], antecedentesMetrorragia.prototype, "idAntedecente");
    __decorate([
        (0, typeorm_1.Column)({ name: 'presente', type: 'boolean' })
    ], antecedentesMetrorragia.prototype, "presente");
    __decorate([
        (0, typeorm_1.Column)({ name: 'tiempo_evolucion' })
    ], antecedentesMetrorragia.prototype, "tiempoEvolucion");
    __decorate([
        (0, typeorm_1.Column)({ name: 'cantidad' })
    ], antecedentesMetrorragia.prototype, "cantidad");
    __decorate([
        (0, typeorm_1.Column)({ name: 'auscultacion' })
    ], antecedentesMetrorragia.prototype, "auscultacion");
    __decorate([
        (0, typeorm_1.Column)({ name: 'dinamica_uterina' })
    ], antecedentesMetrorragia.prototype, "dinamicaUterina");
    __decorate([
        (0, typeorm_1.Column)({ name: 'tono_uterino' })
    ], antecedentesMetrorragia.prototype, "tonoUterino");
    antecedentesMetrorragia = __decorate([
        (0, typeorm_1.Entity)('pacientes_antecedentes_metrorragia')
    ], antecedentesMetrorragia);
    return antecedentesMetrorragia;
}());
exports.antecedentesMetrorragia = antecedentesMetrorragia;

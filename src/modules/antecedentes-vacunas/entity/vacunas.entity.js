"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.antecedentesVacunas = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
/* Despues de todo esta clase no representa un antecedente si no mas bien un recurso,
de modo que lo ideal seria que este relacionado directamente al usuario en lugar de a los antecedentes*/
var antecedentesVacunas = /** @class */ (function () {
    function antecedentesVacunas() {
    }
    antecedentesVacunas._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, nombreVacuna: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], antecedentesVacunas.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'nombre',
            type: 'varchar',
            length: 30,
            nullable: true
        })
    ], antecedentesVacunas.prototype, "nombreVacuna");
    antecedentesVacunas = __decorate([
        (0, typeorm_1.Entity)('vacuna')
    ], antecedentesVacunas);
    return antecedentesVacunas;
}());
exports.antecedentesVacunas = antecedentesVacunas;

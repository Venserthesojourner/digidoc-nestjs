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
exports.antecedentes = exports.grupoSanguineo = void 0;
var openapi = require("@nestjs/swagger");
var serologia_entity_1 = require("../../antecedentes-serologias/entity/serologia.entity");
var vacunas_entity_1 = require("../../antecedentes-vacunas/entity/vacunas.entity");
var paciente_entity_1 = require("../../paciente/entity/paciente.entity");
var typeorm_1 = require("typeorm");
var antecedentes_ginecobstetricos_entity_1 = require("../../antecedentes-ginecobstetricos/entity/antecedentes-ginecobstetricos.entity");
var metrorragia_entity_1 = require("../../antecedentes-metrorragia/entity/metrorragia.entity");
var grupoSanguineo;
(function (grupoSanguineo) {
    grupoSanguineo["CERO"] = "0";
    grupoSanguineo["A"] = "A";
    grupoSanguineo["B"] = "B";
    grupoSanguineo["AB"] = "AB";
})(grupoSanguineo = exports.grupoSanguineo || (exports.grupoSanguineo = {}));
var antecedentes = /** @class */ (function (_super) {
    __extends(antecedentes, _super);
    function antecedentes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    antecedentes._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, descripcion: { required: true, type: function () { return String; } }, paciente: { required: true, type: function () { return Object; } }, grupo_sanguineo: { required: true, "enum": require("./antecedentes.entity").grupoSanguineo }, antecedentes_ginecobstetricos_id: { required: true, type: function () { return require("../../antecedentes-ginecobstetricos/entity/antecedentes-ginecobstetricos.entity").antecedentesGinecobstetricos; } }, metrorragia: { required: true, type: function () { return [require("../../antecedentes-metrorragia/entity/metrorragia.entity").antecedentesMetrorragia]; } }, serologia: { required: true, type: function () { return [Object]; } }, vacunas: { required: true, type: function () { return [Object]; } }, antecedentes_alergicos: { required: true, type: function () { return String; } }, antecedentes_quirurgicos: { required: true, type: function () { return String; } }, antecedentes_sociales: { required: true, type: function () { return String; } }, antecedentes_obstetricos: { required: true, type: function () { return String; } }, antecedentes_medicacion_actual: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idpaciente' })
    ], antecedentes.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'descripcion' })
    ], antecedentes.prototype, "descripcion");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return paciente_entity_1.paciente; }, function (paciente) { return paciente.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'paciente_id' })
    ], antecedentes.prototype, "paciente");
    __decorate([
        (0, typeorm_1.Column)({
            enumName: 'grupo_sanguineo',
            type: 'enum',
            "default": grupoSanguineo.CERO
        })
    ], antecedentes.prototype, "grupo_sanguineo");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return antecedentes_ginecobstetricos_entity_1.antecedentesGinecobstetricos; }, function (antecedentes_ginecobstertricos) {
            return antecedentes_ginecobstertricos.idPaciente;
        }),
        (0, typeorm_1.JoinColumn)({ name: 'antecedente_ginecobstetrico_id' })
    ], antecedentes.prototype, "antecedentes_ginecobstetricos_id");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return metrorragia_entity_1.antecedentesMetrorragia; }, function (metrorragia) { return metrorragia.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'antecendentes_metrorragia_id' })
    ], antecedentes.prototype, "metrorragia");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return serologia_entity_1.antecedentesSerologias; }, function (serologias) { return serologias.antecedente; })
    ], antecedentes.prototype, "serologia");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return vacunas_entity_1.antecedentesVacunas; }, function (Vacunas) { return Vacunas.id; })
    ], antecedentes.prototype, "vacunas");
    __decorate([
        (0, typeorm_1.Column)({ name: 'antecedentes_alergicos' })
    ], antecedentes.prototype, "antecedentes_alergicos");
    __decorate([
        (0, typeorm_1.Column)({ name: 'antecedentes_quirurgicos' })
    ], antecedentes.prototype, "antecedentes_quirurgicos");
    __decorate([
        (0, typeorm_1.Column)({ name: 'antecedentes_sociales' })
    ], antecedentes.prototype, "antecedentes_sociales");
    __decorate([
        (0, typeorm_1.Column)({ name: 'antecedentes_obstetricos' })
    ], antecedentes.prototype, "antecedentes_obstetricos");
    __decorate([
        (0, typeorm_1.Column)({ name: 'antecedentes_medicacion_actual' })
    ], antecedentes.prototype, "antecedentes_medicacion_actual");
    antecedentes = __decorate([
        (0, typeorm_1.Entity)('antecedentes')
    ], antecedentes);
    return antecedentes;
}(typeorm_1.BaseEntity));
exports.antecedentes = antecedentes;

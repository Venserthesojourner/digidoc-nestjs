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
exports.antecedentesGinecobstetricos = exports.habitos_toxicos_periodo = void 0;
var openapi = require("@nestjs/swagger");
var partos_entity_1 = require("../../antecedentes-partos/entity/partos.entity");
var paciente_entity_1 = require("../../paciente/entity/paciente.entity");
var typeorm_1 = require("typeorm");
var habitos_toxicos_periodo;
(function (habitos_toxicos_periodo) {
    habitos_toxicos_periodo["PRIMER_SEMESTRE"] = "Primer Semestre";
    habitos_toxicos_periodo["SEGUNDO_SEMESTRE"] = "Segundo Semestre";
    habitos_toxicos_periodo["TERCER_SEMESTRE"] = "Tercer Semestre";
})(habitos_toxicos_periodo = exports.habitos_toxicos_periodo || (exports.habitos_toxicos_periodo = {}));
var antecedentesGinecobstetricos = /** @class */ (function (_super) {
    __extends(antecedentesGinecobstetricos, _super);
    function antecedentesGinecobstetricos() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    antecedentesGinecobstetricos._OPENAPI_METADATA_FACTORY = function () {
        return { idPaciente: { required: true, type: function () { return Number; } }, dni_paciente: { required: true, type: function () { return String; } }, fecha_probable_parto: { required: true, type: function () { return Date; } }, habitos_toxicos: { required: true, type: function () { return Boolean; } }, habitos_toxicos_periodo: { required: true, "enum": require("./antecedentes-ginecobstetricos.entity").habitos_toxicos_periodo }, partos: { required: true, type: function () { return [Object]; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], antecedentesGinecobstetricos.prototype, "idPaciente");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return paciente_entity_1.paciente; }, function (paciente) { return paciente.documento; })
    ], antecedentesGinecobstetricos.prototype, "dni_paciente");
    __decorate([
        (0, typeorm_1.Column)({ name: 'fecha_probable_parto', nullable: false, type: 'date' })
    ], antecedentesGinecobstetricos.prototype, "fecha_probable_parto");
    __decorate([
        (0, typeorm_1.Column)({ name: 'habitos_toxicos', type: 'boolean', "default": false })
    ], antecedentesGinecobstetricos.prototype, "habitos_toxicos");
    __decorate([
        (0, typeorm_1.Column)({
            enumName: 'habitos_toxicos_periodo',
            type: 'enum',
            "default": habitos_toxicos_periodo.PRIMER_SEMESTRE
        })
    ], antecedentesGinecobstetricos.prototype, "habitos_toxicos_periodo");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return partos_entity_1.antecedentesPartos; }),
        (0, typeorm_1.JoinTable)({ name: 'partos' })
    ], antecedentesGinecobstetricos.prototype, "partos");
    antecedentesGinecobstetricos = __decorate([
        (0, typeorm_1.Entity)({ name: 'pacientes_antecedentes_ginecobstetricos' })
    ], antecedentesGinecobstetricos);
    return antecedentesGinecobstetricos;
}(typeorm_1.BaseEntity));
exports.antecedentesGinecobstetricos = antecedentesGinecobstetricos;

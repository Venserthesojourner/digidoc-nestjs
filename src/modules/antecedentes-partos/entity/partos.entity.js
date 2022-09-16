"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.antecedentesPartos = exports.tipo_parto = void 0;
var openapi = require("@nestjs/swagger");
var paciente_entity_1 = require("../../paciente/entity/paciente.entity");
var typeorm_1 = require("typeorm");
var tipo_parto;
(function (tipo_parto) {
    tipo_parto["VAGINAL"] = "Partos_Vaginales";
    tipo_parto["CESAREA"] = "Ces\u00E1reas";
    tipo_parto["ABORTO"] = "Abortos";
    tipo_parto["ECTOPICOS"] = "Embarazos Ectopicos";
})(tipo_parto = exports.tipo_parto || (exports.tipo_parto = {}));
var antecedentesPartos = /** @class */ (function () {
    function antecedentesPartos() {
    }
    antecedentesPartos._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, paciente: { required: true, type: function () { return Object; } }, tipoParto: { required: true, "enum": require("./partos.entity").tipo_parto }, cantidad: { required: true, type: function () { return Number; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], antecedentesPartos.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return paciente_entity_1.paciente; }, function (paciente) { return paciente.id; })
    ], antecedentesPartos.prototype, "paciente");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": tipo_parto,
            enumName: 'tipo_parto',
            "default": tipo_parto.VAGINAL
        })
    ], antecedentesPartos.prototype, "tipoParto");
    __decorate([
        (0, typeorm_1.Column)({ name: 'cantidad' })
    ], antecedentesPartos.prototype, "cantidad");
    antecedentesPartos = __decorate([
        (0, typeorm_1.Entity)({ name: 'pacientes_antecedentes_partos' })
    ], antecedentesPartos);
    return antecedentesPartos;
}());
exports.antecedentesPartos = antecedentesPartos;

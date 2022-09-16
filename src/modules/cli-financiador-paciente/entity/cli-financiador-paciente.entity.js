"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CliFinanciadorPaciente = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var paciente_entity_1 = require("../../paciente/entity/paciente.entity");
var cli_financiador_entity_1 = require("../../cli-financiador/entity/cli-financiador.entity");
var CliFinanciadorPaciente = /** @class */ (function () {
    function CliFinanciadorPaciente() {
    }
    CliFinanciadorPaciente._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, cliFinanciador: { required: true, type: function () { return Object; } }, cliPaciente: { required: true, type: function () { return Object; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CliFinanciadorPaciente.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return cli_financiador_entity_1.CliFinanciador; }, function (cliFinanciador) { return cliFinanciador.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'idobra_social' })
    ], CliFinanciadorPaciente.prototype, "cliFinanciador");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return paciente_entity_1.paciente; }, function (paciente) { return paciente.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'idpaciente' })
    ], CliFinanciadorPaciente.prototype, "cliPaciente");
    CliFinanciadorPaciente = __decorate([
        (0, typeorm_1.Entity)({ name: 'obra_social' })
    ], CliFinanciadorPaciente);
    return CliFinanciadorPaciente;
}());
exports.CliFinanciadorPaciente = CliFinanciadorPaciente;

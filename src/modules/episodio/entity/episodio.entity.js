"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.episodio = exports.estado = void 0;
var openapi = require("@nestjs/swagger");
var cli_documento_digitalizado_entity_1 = require("../../cli-documento-digitalizado/entity/cli-documento-digitalizado.entity");
var paciente_entity_1 = require("../../paciente/entity/paciente.entity");
var protocolo_entity_1 = require("../../protocolo/entity/protocolo.entity");
var typeorm_1 = require("typeorm");
var estado;
(function (estado) {
    estado["PLANNED"] = "planned";
    estado["ARRIVED"] = "arrived";
    estado["TRIAGED"] = "triaged";
    estado["IN_PROGRESS"] = "in-progress";
    estado["ON_LEAVE"] = "onleave";
    estado["FINISHED"] = "finished";
    estado["CANCELLED"] = "cancelled";
})(estado = exports.estado || (exports.estado = {}));
var episodio = /** @class */ (function () {
    function episodio() {
    }
    episodio._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, pacientData: { required: true, type: function () { return Object; } }, protocolType: { required: true, type: function () { return Object; } }, cliDocumentoDigitalizado: { required: true, type: function () { return [Object]; } }, motivoInternacion: { required: true, type: function () { return String; } }, estado: { required: true, "enum": require("./episodio.entity").estado }, fechaIngreso: { required: true, type: function () { return Date; } }, fechaEgreso: { required: true, type: function () { return Date; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryColumn)({ name: 'idepisodio' })
    ], episodio.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return paciente_entity_1.paciente; }, function (paciente) { return paciente.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'idpaciente' })
    ], episodio.prototype, "pacientData");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return protocolo_entity_1.protocolo; }, function (protocolo) { return protocolo.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'protocolo_id' })
    ], episodio.prototype, "protocolType");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cli_documento_digitalizado_entity_1.CliDocumentoDigitalizado; }, function (cliDocumentoDigitalizado) { return cliDocumentoDigitalizado.cliEpisodio; })
    ], episodio.prototype, "cliDocumentoDigitalizado");
    __decorate([
        (0, typeorm_1.Column)({ name: 'motivo_internacion', type: 'varchar' })
    ], episodio.prototype, "motivoInternacion");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": estado,
            enumName: 'estado',
            "default": estado.ARRIVED
        })
    ], episodio.prototype, "estado");
    __decorate([
        (0, typeorm_1.Column)({ name: 'fecha_ingreso' })
    ], episodio.prototype, "fechaIngreso");
    __decorate([
        (0, typeorm_1.Column)({ name: 'fecha_egreso' })
    ], episodio.prototype, "fechaEgreso");
    episodio = __decorate([
        (0, typeorm_1.Entity)('episodios')
    ], episodio);
    return episodio;
}());
exports.episodio = episodio;

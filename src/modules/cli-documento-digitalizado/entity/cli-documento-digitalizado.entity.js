"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CliDocumentoDigitalizado = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var paciente_entity_1 = require("../../paciente/entity/paciente.entity");
var cli_documento_digitalizado_adjunto_entity_1 = require("../../cli-documento-digitalizado-adjunto/entity/cli-documento-digitalizado-adjunto.entity");
var episodio_entity_1 = require("../../episodio/entity/episodio.entity");
var CliDocumentoDigitalizado = /** @class */ (function () {
    function CliDocumentoDigitalizado() {
    }
    CliDocumentoDigitalizado._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, descripcion: { required: true, type: function () { return String; } }, tags: { required: true, type: function () { return String; } }, fecha: { required: true, type: function () { return Date; } }, tipo: { required: false, type: function () { return String; } }, categoria: { required: false, type: function () { return String; } }, cliPaciente: { required: false, type: function () { return Object; } }, cliEpisodio: { required: false, type: function () { return Object; } }, bajaFecha: { required: false, type: function () { return Date; } }, CliDocumentoDigitalizadoAdjunto: { required: true, type: function () { return [Object]; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CliDocumentoDigitalizado.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'descripcion', nullable: true, type: 'varchar', length: 200 })
    ], CliDocumentoDigitalizado.prototype, "descripcion");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'tags',
            nullable: true,
            "default": null,
            type: 'varchar',
            length: 200,
            comment: 'etiquetas separadas por coma'
        })
    ], CliDocumentoDigitalizado.prototype, "tags");
    __decorate([
        (0, typeorm_1.Column)({ name: 'fecha', nullable: false, type: 'datetime' })
    ], CliDocumentoDigitalizado.prototype, "fecha");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'tipo',
            nullable: true,
            "default": null,
            type: 'varchar',
            length: 50
        })
    ], CliDocumentoDigitalizado.prototype, "tipo");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'categoria',
            nullable: true,
            "default": null,
            type: 'varchar',
            length: 50
        })
    ], CliDocumentoDigitalizado.prototype, "categoria");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return paciente_entity_1.paciente; }, function (paciente) { return paciente.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'cli_paciente_id' })
    ], CliDocumentoDigitalizado.prototype, "cliPaciente");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return episodio_entity_1.episodio; }, function (episodio) { return episodio.id; }, {
            nullable: true
        }),
        (0, typeorm_1.JoinColumn)({ name: 'cli_episodio_id' })
    ], CliDocumentoDigitalizado.prototype, "cliEpisodio");
    __decorate([
        (0, typeorm_1.Column)({ name: 'baja_fecha', nullable: true, "default": null })
    ], CliDocumentoDigitalizado.prototype, "bajaFecha");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cli_documento_digitalizado_adjunto_entity_1.CliDocumentoDigitalizadoAdjunto; }, function (CliDocumentoDigitalizadoAdjunto) {
            return CliDocumentoDigitalizadoAdjunto.cliDocumentoDigitalizado;
        })
    ], CliDocumentoDigitalizado.prototype, "CliDocumentoDigitalizadoAdjunto");
    CliDocumentoDigitalizado = __decorate([
        (0, typeorm_1.Entity)({ name: 'cli_documento_digitalizado' })
    ], CliDocumentoDigitalizado);
    return CliDocumentoDigitalizado;
}());
exports.CliDocumentoDigitalizado = CliDocumentoDigitalizado;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CliDocumentoDigitalizadoAdjunto = exports.estado = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var cli_documento_digitalizado_entity_1 = require("../../cli-documento-digitalizado/entity/cli-documento-digitalizado.entity");
var estado;
(function (estado) {
    estado["CURRENT"] = "current";
    estado["SUPERSEDED"] = "superseded";
    estado["ENTERED_IN_ERROR"] = "entered-in-error";
})(estado = exports.estado || (exports.estado = {}));
var CliDocumentoDigitalizadoAdjunto = /** @class */ (function () {
    function CliDocumentoDigitalizadoAdjunto() {
    }
    CliDocumentoDigitalizadoAdjunto._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, cliDocumentoDigitalizado: { required: true, type: function () { return Object; } }, contentType: { required: true, type: function () { return String; } }, filename: { required: true, type: function () { return String; } }, filenameThumbnail: { required: true, type: function () { return String; } }, bytes: { required: true, type: function () { return Number; } }, estado: { required: true, "enum": require("./cli-documento-digitalizado-adjunto.entity").estado }, alto: { required: true, type: function () { return Number; } }, ancho: { required: true, type: function () { return Number; } }, duracion: { required: true, type: function () { return Number; } }, sha1: { required: true, type: function () { return String; } }, createdAt: { required: true, type: function () { return Object; } }, updateAt: { required: true, type: function () { return Date; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], CliDocumentoDigitalizadoAdjunto.prototype, "id");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return cli_documento_digitalizado_entity_1.CliDocumentoDigitalizado; }, function (cliDocumentoDigitalizado) { return cliDocumentoDigitalizado.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'cli_documento_digitalizado_id' })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "cliDocumentoDigitalizado");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'content_type',
            nullable: false,
            type: 'varchar',
            length: 50
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "contentType");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'filename',
            nullable: true,
            "default": null,
            type: 'varchar',
            length: 100
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "filename");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'filename_thumbnail',
            nullable: true,
            "default": null,
            type: 'varchar',
            length: 100
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "filenameThumbnail");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'bytes',
            nullable: true,
            "default": null,
            type: 'int'
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "bytes");
    __decorate([
        (0, typeorm_1.Column)({
            "enum": estado,
            enumName: 'estado',
            type: 'enum',
            "default": estado.CURRENT
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "estado");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'alto',
            nullable: true,
            "default": null,
            type: 'int'
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "alto");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'ancho',
            nullable: true,
            "default": null,
            type: 'int'
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "ancho");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'duracion',
            nullable: true,
            "default": null,
            type: 'int'
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "duracion");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'sha1',
            nullable: true,
            "default": null,
            type: 'varchar',
            length: 255
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "sha1");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            name: 'created_at',
            type: 'timestamp'
        })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' })
    ], CliDocumentoDigitalizadoAdjunto.prototype, "updateAt");
    CliDocumentoDigitalizadoAdjunto = __decorate([
        (0, typeorm_1.Entity)({ name: 'cli_documento_digitalizado_adjunto' })
    ], CliDocumentoDigitalizadoAdjunto);
    return CliDocumentoDigitalizadoAdjunto;
}());
exports.CliDocumentoDigitalizadoAdjunto = CliDocumentoDigitalizadoAdjunto;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.paciente = exports.sexo = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var cli_documento_digitalizado_entity_1 = require("../../cli-documento-digitalizado/entity/cli-documento-digitalizado.entity");
var sexo;
(function (sexo) {
    sexo["MALE"] = "male";
    sexo["FEMALE"] = "female";
    sexo["OTHER"] = "other";
})(sexo = exports.sexo || (exports.sexo = {}));
var paciente = /** @class */ (function () {
    function paciente() {
    }
    paciente._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, primerNombre: { required: true, type: function () { return String; } }, primerApellido: { required: true, type: function () { return String; } }, segundoNombre: { required: true, type: function () { return String; } }, segundoApellido: { required: true, type: function () { return String; } }, documento: { required: true, type: function () { return String; } }, tipoDocumento: { required: true, type: function () { return String; } }, telefonoFijo: { required: true, type: function () { return String; } }, telefonoMovil: { required: true, type: function () { return String; } }, email: { required: true, type: function () { return String; } }, sexo: { required: true, "enum": require("./paciente.entity").sexo }, cliDocumentoDigitalizado: { required: true, type: function () { return [Object]; } }, fecha_nacimiento: { required: true, type: function () { return Date; } }, direccion: { required: true, type: function () { return String; } }, fedNacion: { required: true, type: function () { return Number; } }, provincia: { required: true, type: function () { return String; } }, localidad: { required: true, type: function () { return String; } }, codigoPostal: { required: true, type: function () { return String; } }, activeFedNacion: { required: true, type: function () { return Boolean; } }, idpais: { required: true, type: function () { return Number; } }, idprovincia: { required: true, type: function () { return Number; } }, soundexNombre: { required: true, type: function () { return String; } }, soundexApellido: { required: true, type: function () { return String; } }, horaNacimiento: { required: true, type: function () { return Date; } }, lugarFisicoNacimiento: { required: true, type: function () { return String; } }, grupoMadreFactor: { required: true, type: function () { return String; } }, planObraSocial: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'idpaciente' })
    ], paciente.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'nombre1', nullable: true, type: 'varchar', length: 100 })
    ], paciente.prototype, "primerNombre");
    __decorate([
        (0, typeorm_1.Column)({ name: 'apellido1', nullable: true, type: 'varchar', length: 100 })
    ], paciente.prototype, "primerApellido");
    __decorate([
        (0, typeorm_1.Column)({ name: 'nombre2', nullable: true, type: 'varchar', length: 100 })
    ], paciente.prototype, "segundoNombre");
    __decorate([
        (0, typeorm_1.Column)({ name: 'apellido2', nullable: true, type: 'varchar', length: 100 })
    ], paciente.prototype, "segundoApellido");
    __decorate([
        (0, typeorm_1.Column)({ name: 'documento', nullable: true, type: 'varchar', length: 11 })
    ], paciente.prototype, "documento");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'tipo_documento',
            nullable: true,
            type: 'varchar',
            length: 3
        })
    ], paciente.prototype, "tipoDocumento");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'telefono_fijo',
            nullable: true,
            type: 'varchar',
            length: 20
        })
    ], paciente.prototype, "telefonoFijo");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'telefono_celular',
            nullable: true,
            type: 'varchar',
            length: 20
        })
    ], paciente.prototype, "telefonoMovil");
    __decorate([
        (0, typeorm_1.Column)({ name: 'mail', nullable: true, type: 'varchar', length: 100 })
    ], paciente.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)({ type: 'enum', "enum": sexo, enumName: 'sexo', "default": sexo.MALE })
    ], paciente.prototype, "sexo");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return cli_documento_digitalizado_entity_1.CliDocumentoDigitalizado; }, function (cliDocumentoDigitalizado) { return cliDocumentoDigitalizado.cliPaciente; })
    ], paciente.prototype, "cliDocumentoDigitalizado");
    __decorate([
        (0, typeorm_1.Column)({ name: 'fecha_nacimiento' })
    ], paciente.prototype, "fecha_nacimiento");
    __decorate([
        (0, typeorm_1.Column)({ name: 'direccion', type: 'varchar', length: 100, nullable: true })
    ], paciente.prototype, "direccion");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'paciente_federadoid',
            type: 'int',
            nullable: false,
            "default": 0
        })
    ], paciente.prototype, "fedNacion");
    __decorate([
        (0, typeorm_1.Column)({ name: 'provincia', type: 'varchar', length: 100 })
    ], paciente.prototype, "provincia");
    __decorate([
        (0, typeorm_1.Column)({ name: 'localidad', type: 'varchar', length: 100 })
    ], paciente.prototype, "localidad");
    __decorate([
        (0, typeorm_1.Column)({ name: 'codigo_postal', type: 'varchar', length: 10 })
    ], paciente.prototype, "codigoPostal");
    __decorate([
        (0, typeorm_1.Column)({ name: 'idpais', type: 'int', "default": 1 })
    ], paciente.prototype, "idpais");
    __decorate([
        (0, typeorm_1.Column)({ name: 'idprovincia', type: 'int', "default": 1 })
    ], paciente.prototype, "idprovincia");
    __decorate([
        (0, typeorm_1.Column)({ name: 'soundex_nombre', type: 'varchar', length: 10 })
    ], paciente.prototype, "soundexNombre");
    __decorate([
        (0, typeorm_1.Column)({ name: 'soundex_apellido', type: 'varchar', length: 10 })
    ], paciente.prototype, "soundexApellido");
    __decorate([
        (0, typeorm_1.Column)({ name: 'hora_nacimiento', type: 'time' })
    ], paciente.prototype, "horaNacimiento");
    __decorate([
        (0, typeorm_1.Column)({ name: 'lugar_fisico_nacimiento', type: 'varchar', length: 100 })
    ], paciente.prototype, "lugarFisicoNacimiento");
    __decorate([
        (0, typeorm_1.Column)({ name: 'grupo_factor_madre', type: 'varchar', length: 10 })
    ], paciente.prototype, "grupoMadreFactor");
    __decorate([
        (0, typeorm_1.Column)({ name: 'plan_obra_social', type: 'varchar', length: 200 })
    ], paciente.prototype, "planObraSocial");
    paciente = __decorate([
        (0, typeorm_1.Entity)({ name: 'pacientes' })
    ], paciente);
    return paciente;
}());
exports.paciente = paciente;

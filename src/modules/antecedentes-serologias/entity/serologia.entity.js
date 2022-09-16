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
exports.antecedentesSerologias = exports.tipo_serologia = void 0;
var openapi = require("@nestjs/swagger");
var antecedentes_entity_1 = require("../../antecedentes/entity/antecedentes.entity");
var typeorm_1 = require("typeorm");
var tipo_serologia;
(function (tipo_serologia) {
    tipo_serologia["HIV"] = "HIV";
    tipo_serologia["TOXOPLASMOSIS"] = "Toxoplasmosis";
    tipo_serologia["CHAGAS"] = "Mal de Chagas";
    tipo_serologia["HBV"] = "Hepatitis B";
})(tipo_serologia = exports.tipo_serologia || (exports.tipo_serologia = {}));
var antecedentesSerologias = /** @class */ (function (_super) {
    __extends(antecedentesSerologias, _super);
    function antecedentesSerologias() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    antecedentesSerologias._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, tipo_serologia: { required: true, "enum": require("./serologia.entity").tipo_serologia }, estado: { required: true, type: function () { return Boolean; } }, antecedente: { required: true, type: function () { return Object; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], antecedentesSerologias.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            enumName: 'tipo_serologia',
            "enum": tipo_serologia,
            type: 'enum'
        })
    ], antecedentesSerologias.prototype, "tipo_serologia");
    __decorate([
        (0, typeorm_1.Column)({ name: 'estado', "default": false })
    ], antecedentesSerologias.prototype, "estado");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return antecedentes_entity_1.antecedentes; }, function (antecedentes) { return antecedentes.serologia; }),
        (0, typeorm_1.JoinColumn)({ name: 'antecedentes_id' })
    ], antecedentesSerologias.prototype, "antecedente");
    antecedentesSerologias = __decorate([
        (0, typeorm_1.Entity)('pacientes_antecedentes_serologias')
    ], antecedentesSerologias);
    return antecedentesSerologias;
}(typeorm_1.BaseEntity));
exports.antecedentesSerologias = antecedentesSerologias;

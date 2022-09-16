"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.diagnosticoFeto = exports.liquidoAmniotico = exports.plano = exports.presentacion = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var presentacion;
(function (presentacion) {
    presentacion["CEFALICA"] = "Cef\u00E1lica";
    presentacion["PODALICA"] = "Pod\u00E1lica";
    presentacion["TRANSVERSA"] = "Transversa";
})(presentacion = exports.presentacion || (exports.presentacion = {}));
var plano;
(function (plano) {
    plano["INSINUADA"] = "Insinuada";
    plano["MOVIL"] = "Movil";
    plano["ENCAJADA"] = "Encajada";
})(plano = exports.plano || (exports.plano = {}));
var liquidoAmniotico;
(function (liquidoAmniotico) {
    liquidoAmniotico["CLARO"] = "Claro";
    liquidoAmniotico["MECONIAL"] = "Meconial";
    liquidoAmniotico["FLUIDO"] = "Fluido";
    liquidoAmniotico["ESPESO"] = "Espeso";
})(liquidoAmniotico = exports.liquidoAmniotico || (exports.liquidoAmniotico = {}));
var diagnosticoFeto = /** @class */ (function () {
    function diagnosticoFeto() {
    }
    diagnosticoFeto._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, presentacion: { required: true, "enum": require("./diagnostico-feto.entity").presentacion }, posicion: { required: true, type: function () { return String; } }, membranasOvulares: { required: true, type: function () { return String; } }, plano: { required: true, "enum": require("./diagnostico-feto.entity").plano }, liquidoAmniotico: { required: true, "enum": require("./diagnostico-feto.entity").liquidoAmniotico } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], diagnosticoFeto.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            enumName: 'presentacion',
            type: 'enum',
            "default": null
        })
    ], diagnosticoFeto.prototype, "presentacion");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'posicion'
        })
    ], diagnosticoFeto.prototype, "posicion");
    __decorate([
        (0, typeorm_1.Column)({
            name: 'membranas_ovulares'
        })
    ], diagnosticoFeto.prototype, "membranasOvulares");
    __decorate([
        (0, typeorm_1.Column)({
            enumName: 'plano',
            type: 'enum',
            "default": null
        })
    ], diagnosticoFeto.prototype, "plano");
    __decorate([
        (0, typeorm_1.Column)({ enumName: 'liquido_amniotico', type: 'enum', "default": null })
    ], diagnosticoFeto.prototype, "liquidoAmniotico");
    diagnosticoFeto = __decorate([
        (0, typeorm_1.Entity)('paciente_diagnostico_feto')
    ], diagnosticoFeto);
    return diagnosticoFeto;
}());
exports.diagnosticoFeto = diagnosticoFeto;

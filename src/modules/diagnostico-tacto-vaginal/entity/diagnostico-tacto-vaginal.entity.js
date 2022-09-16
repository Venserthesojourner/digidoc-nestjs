"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.diagnosticoTactoVaginal = exports.dilatacion = exports.borramiento = exports.cuello = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var cuello;
(function (cuello) {
    cuello["POSTERIOR"] = "Posterior";
    cuello["CENTRAL"] = "Central";
    cuello["ANTERIOR"] = "Anterior";
})(cuello = exports.cuello || (exports.cuello = {}));
var borramiento;
(function (borramiento) {
    borramiento["FORMADO"] = "Formado";
    borramiento[borramiento["SETENTA"] = 70] = "SETENTA";
    borramiento[borramiento["OCHENTA"] = 80] = "OCHENTA";
    borramiento[borramiento["NOVENTA"] = 90] = "NOVENTA";
    borramiento[borramiento["CIEN"] = 100] = "CIEN";
})(borramiento = exports.borramiento || (exports.borramiento = {}));
var dilatacion;
(function (dilatacion) {
    dilatacion[dilatacion["UNCM"] = 1] = "UNCM";
    dilatacion[dilatacion["DOSCM"] = 2] = "DOSCM";
    dilatacion[dilatacion["TRESCM"] = 3] = "TRESCM";
    dilatacion[dilatacion["CUATROCM"] = 4] = "CUATROCM";
    dilatacion[dilatacion["CINCOCM"] = 5] = "CINCOCM";
    dilatacion[dilatacion["SEISCM"] = 6] = "SEISCM";
    dilatacion[dilatacion["SIETECM"] = 7] = "SIETECM";
    dilatacion[dilatacion["OCHOCM"] = 8] = "OCHOCM";
    dilatacion[dilatacion["NUEVECM"] = 9] = "NUEVECM";
    dilatacion[dilatacion["DIEZCM"] = 10] = "DIEZCM";
})(dilatacion = exports.dilatacion || (exports.dilatacion = {}));
var diagnosticoTactoVaginal = /** @class */ (function () {
    function diagnosticoTactoVaginal() {
    }
    diagnosticoTactoVaginal._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, cuello: { required: true, "enum": require("./diagnostico-tacto-vaginal.entity").cuello }, borramiento: { required: true, "enum": require("./diagnostico-tacto-vaginal.entity").borramiento }, dilatacion: { required: true, "enum": require("./diagnostico-tacto-vaginal.entity").dilatacion } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], diagnosticoTactoVaginal.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": cuello,
            name: 'cuello_uterino',
            enumName: 'cuello_uterino',
            "default": null
        })
    ], diagnosticoTactoVaginal.prototype, "cuello");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": borramiento,
            "default": null
        })
    ], diagnosticoTactoVaginal.prototype, "borramiento");
    __decorate([
        (0, typeorm_1.Column)({
            type: 'enum',
            "enum": dilatacion,
            "default": null
        })
    ], diagnosticoTactoVaginal.prototype, "dilatacion");
    diagnosticoTactoVaginal = __decorate([
        (0, typeorm_1.Entity)({ name: 'paciente_diagnostico_tacto_vaginal' })
    ], diagnosticoTactoVaginal);
    return diagnosticoTactoVaginal;
}());
exports.diagnosticoTactoVaginal = diagnosticoTactoVaginal;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.diagnostico = void 0;
var openapi = require("@nestjs/swagger");
var diagnostico_estudios_entity_1 = require("../../diagnostico-estudios/entity/diagnostico-estudios.entity");
var diagnostico_feto_entity_1 = require("../../diagnostico-feto/entity/diagnostico-feto.entity");
var diagostico_signos_vitales_entity_1 = require("../../diagnostico-signos-vitales/entity/diagostico-signos-vitales.entity");
var diagnostico_tacto_vaginal_entity_1 = require("../../diagnostico-tacto-vaginal/entity/diagnostico-tacto-vaginal.entity");
var typeorm_1 = require("typeorm");
var diagnostico = /** @class */ (function () {
    function diagnostico() {
    }
    diagnostico._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, feto: { required: true, type: function () { return Object; } }, tacto_vaginal: { required: true, type: function () { return Object; } }, ecografia: { required: true, type: function () { return Object; } }, signosVitales: { required: true, type: function () { return Object; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], diagnostico.prototype, "id");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return diagnostico_feto_entity_1.diagnosticoFeto; }, function (diagnosticoFeto) { return diagnosticoFeto.id; }),
        (0, typeorm_1.JoinColumn)({ name: 'diagnostico_feto_id' })
    ], diagnostico.prototype, "feto");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return diagnostico_tacto_vaginal_entity_1.diagnosticoTactoVaginal; }),
        (0, typeorm_1.JoinColumn)({ name: 'diagnostico_tacto_vaginal_id' })
    ], diagnostico.prototype, "tacto_vaginal");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return diagnostico_estudios_entity_1.diagnosticoEstudios; }),
        (0, typeorm_1.JoinColumn)({ name: 'diagnostico_ecografia_id' })
    ], diagnostico.prototype, "ecografia");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return diagostico_signos_vitales_entity_1.diagnosticoSignosVitales; }),
        (0, typeorm_1.JoinColumn)({ name: 'diagnostico_signos_vitales_id' })
    ], diagnostico.prototype, "signosVitales");
    diagnostico = __decorate([
        (0, typeorm_1.Entity)('paciente_diagnostico')
    ], diagnostico);
    return diagnostico;
}());
exports.diagnostico = diagnostico;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.DiagnosticoModule = void 0;
var axios_1 = require("@nestjs/axios");
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var database_module_1 = require("../../database/database.module");
// Diagnostico (CSOP)
var diagnostico_controller_1 = require("./diagnostico.controller");
var diagnostico_service_1 = require("./diagnostico.service");
var diagnostico_provider_1 = require("./providers/diagnostico.provider");
// Entities
var diagnostico_estudios_entity_1 = require("../diagnostico-estudios/entity/diagnostico-estudios.entity");
var diagnostico_feto_entity_1 = require("../diagnostico-feto/entity/diagnostico-feto.entity");
var diagostico_signos_vitales_entity_1 = require("../diagnostico-signos-vitales/entity/diagostico-signos-vitales.entity");
var diagnostico_tacto_vaginal_entity_1 = require("../diagnostico-tacto-vaginal/entity/diagnostico-tacto-vaginal.entity");
var diagnostico_entity_1 = require("./entity/diagnostico.entity");
var DiagnosticoModule = /** @class */ (function () {
    function DiagnosticoModule() {
    }
    DiagnosticoModule = __decorate([
        (0, common_1.Module)({
            imports: [
                axios_1.HttpModule,
                database_module_1.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([
                    diagnostico_entity_1.diagnostico,
                    diagnostico_feto_entity_1.diagnosticoFeto,
                    diagnostico_tacto_vaginal_entity_1.diagnosticoTactoVaginal,
                    diagnostico_estudios_entity_1.diagnosticoEstudios,
                    diagostico_signos_vitales_entity_1.diagnosticoSignosVitales,
                ]),
            ],
            controllers: [diagnostico_controller_1.DiagnosticoController],
            providers: __spreadArray([diagnostico_service_1.DiagnosticoService], diagnostico_provider_1.DiagnosticoProvider, true)
        })
    ], DiagnosticoModule);
    return DiagnosticoModule;
}());
exports.DiagnosticoModule = DiagnosticoModule;

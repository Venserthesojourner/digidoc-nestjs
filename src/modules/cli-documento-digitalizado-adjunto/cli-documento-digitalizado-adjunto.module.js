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
exports.CliDocumentoDigitalizadoAdjuntoModule = void 0;
var common_1 = require("@nestjs/common");
var cli_documento_digitalizado_adjunto_service_1 = require("./cli-documento-digitalizado-adjunto.service");
var cli_documento_digitalizado_adjunto_controller_1 = require("./cli-documento-digitalizado-adjunto.controller");
var cli_documento_digitalizado_adjunto_providers_1 = require("./providers/cli-documento-digitalizado-adjunto.providers");
var database_module_1 = require("../../database/database.module");
var axios_1 = require("@nestjs/axios");
var typeorm_1 = require("@nestjs/typeorm");
var cli_documento_digitalizado_entity_1 = require("../cli-documento-digitalizado/entity/cli-documento-digitalizado.entity");
var cli_documento_digitalizado_adjunto_entity_1 = require("./entity/cli-documento-digitalizado-adjunto.entity");
var cli_documento_digitalizado_module_1 = require("../cli-documento-digitalizado/cli-documento-digitalizado.module");
var episodio_entity_1 = require("../episodio/entity/episodio.entity");
var episodio_service_1 = require("../episodio/episodio.service");
var paciente_service_1 = require("../paciente/paciente.service");
var paciente_entity_1 = require("../paciente/entity/paciente.entity");
var paciente_module_1 = require("../paciente/paciente.module");
var episodio_module_1 = require("../episodio/episodio.module");
var paciente_providers_1 = require("../paciente/providers/paciente.providers");
var episodio_provider_1 = require("../episodio/providers/episodio.provider");
var CliDocumentoDigitalizadoAdjuntoModule = /** @class */ (function () {
    function CliDocumentoDigitalizadoAdjuntoModule() {
    }
    CliDocumentoDigitalizadoAdjuntoModule = __decorate([
        (0, common_1.Module)({
            imports: [
                axios_1.HttpModule,
                database_module_1.DatabaseModule,
                typeorm_1.TypeOrmModule.forFeature([
                    cli_documento_digitalizado_adjunto_entity_1.CliDocumentoDigitalizadoAdjunto,
                    cli_documento_digitalizado_entity_1.CliDocumentoDigitalizado,
                    paciente_entity_1.paciente,
                    episodio_entity_1.episodio,
                ]),
                (0, common_1.forwardRef)(function () { return cli_documento_digitalizado_module_1.CliDocumentoDigitalizadoModule; }),
                (0, common_1.forwardRef)(function () { return paciente_module_1.PacienteModule; }),
                (0, common_1.forwardRef)(function () { return episodio_module_1.EpisodioModule; }),
            ],
            controllers: [cli_documento_digitalizado_adjunto_controller_1.CliDocumentoDigitalizadoAdjuntoController],
            providers: __spreadArray(__spreadArray(__spreadArray(__spreadArray([], cli_documento_digitalizado_adjunto_providers_1.CliDocumentoDigitalizadoAdjuntoProviders, true), episodio_provider_1.EpisodioProviders, true), paciente_providers_1.PacienteProviders, true), [
                cli_documento_digitalizado_adjunto_service_1.CliDocumentoDigitalizadoAdjuntoService,
                episodio_service_1.episodioService,
                paciente_service_1.PacienteService,
            ], false),
            exports: [cli_documento_digitalizado_adjunto_service_1.CliDocumentoDigitalizadoAdjuntoService]
        })
    ], CliDocumentoDigitalizadoAdjuntoModule);
    return CliDocumentoDigitalizadoAdjuntoModule;
}());
exports.CliDocumentoDigitalizadoAdjuntoModule = CliDocumentoDigitalizadoAdjuntoModule;

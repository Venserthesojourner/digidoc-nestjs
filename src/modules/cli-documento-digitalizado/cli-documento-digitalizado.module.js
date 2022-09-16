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
exports.CliDocumentoDigitalizadoModule = void 0;
var common_1 = require("@nestjs/common");
var database_module_1 = require("../../database/database.module");
var cli_documento_digitalizado_service_1 = require("./cli-documento-digitalizado.service");
var cli_documento_digitalizado_controller_1 = require("./cli-documento-digitalizado.controller");
var cli_documento_digitalizado_providers_1 = require("./providers/cli-documento-digitalizado.providers");
var axios_1 = require("@nestjs/axios");
var cli_documento_digitalizado_adjunto_module_1 = require("../cli-documento-digitalizado-adjunto/cli-documento-digitalizado-adjunto.module");
var typeorm_1 = require("@nestjs/typeorm");
var cli_documento_digitalizado_entity_1 = require("./entity/cli-documento-digitalizado.entity");
var cli_documento_digitalizado_adjunto_entity_1 = require("../cli-documento-digitalizado-adjunto/entity/cli-documento-digitalizado-adjunto.entity");
var CliDocumentoDigitalizadoModule = /** @class */ (function () {
    function CliDocumentoDigitalizadoModule() {
    }
    CliDocumentoDigitalizadoModule = __decorate([
        (0, common_1.Module)({
            imports: [
                axios_1.HttpModule,
                database_module_1.DatabaseModule,
                (0, common_1.forwardRef)(function () { return cli_documento_digitalizado_adjunto_module_1.CliDocumentoDigitalizadoAdjuntoModule; }),
                typeorm_1.TypeOrmModule.forFeature([
                    cli_documento_digitalizado_entity_1.CliDocumentoDigitalizado,
                    cli_documento_digitalizado_adjunto_entity_1.CliDocumentoDigitalizadoAdjunto,
                ]),
            ],
            controllers: [cli_documento_digitalizado_controller_1.CliDocumentoDigitalizadoController],
            providers: __spreadArray(__spreadArray([], cli_documento_digitalizado_providers_1.CliDocumentoDigitalizadoProviders, true), [
                cli_documento_digitalizado_service_1.CliDocumentoDigitalizadoService,
            ], false)
        })
    ], CliDocumentoDigitalizadoModule);
    return CliDocumentoDigitalizadoModule;
}());
exports.CliDocumentoDigitalizadoModule = CliDocumentoDigitalizadoModule;

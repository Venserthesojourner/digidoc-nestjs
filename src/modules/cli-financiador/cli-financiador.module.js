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
exports.CliFinanciadorModule = void 0;
var common_1 = require("@nestjs/common");
var database_module_1 = require("../../database/database.module");
var cli_financiador_service_1 = require("./cli-financiador.service");
var cli_financiador_controller_1 = require("./cli-financiador.controller");
var cli_financiador_providers_1 = require("./providers/cli-financiador.providers");
var axios_1 = require("@nestjs/axios");
var CliFinanciadorModule = /** @class */ (function () {
    function CliFinanciadorModule() {
    }
    CliFinanciadorModule = __decorate([
        (0, common_1.Module)({
            imports: [axios_1.HttpModule, database_module_1.DatabaseModule],
            controllers: [cli_financiador_controller_1.CliFinanciadorController],
            providers: __spreadArray(__spreadArray([], cli_financiador_providers_1.CliFinanciadorProviders, true), [cli_financiador_service_1.CliFinanciadorService], false)
        })
    ], CliFinanciadorModule);
    return CliFinanciadorModule;
}());
exports.CliFinanciadorModule = CliFinanciadorModule;

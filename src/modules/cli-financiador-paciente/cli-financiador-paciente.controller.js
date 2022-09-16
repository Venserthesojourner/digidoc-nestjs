"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.CliFinanciadorPacienteController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var CliFinanciadorPacienteController = /** @class */ (function () {
    function CliFinanciadorPacienteController(cliFinanciadorPacienteService) {
        this.cliFinanciadorPacienteService = cliFinanciadorPacienteService;
    }
    CliFinanciadorPacienteController.prototype.create = function (createCliFinanciadorPacienteDto) {
        return this.cliFinanciadorPacienteService.create(createCliFinanciadorPacienteDto);
    };
    CliFinanciadorPacienteController.prototype.findAll = function () {
        return this.cliFinanciadorPacienteService.findAll();
    };
    CliFinanciadorPacienteController.prototype.findOne = function (id) {
        return this.cliFinanciadorPacienteService.findOne(+id);
    };
    CliFinanciadorPacienteController.prototype.update = function (id, updateCliFinanciadorPacienteDto) {
        return this.cliFinanciadorPacienteService.update(+id, updateCliFinanciadorPacienteDto);
    };
    CliFinanciadorPacienteController.prototype.remove = function (id) {
        return this.cliFinanciadorPacienteService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)())
    ], CliFinanciadorPacienteController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200, type: [require("./entity/cli-financiador-paciente.entity").CliFinanciadorPaciente] })
    ], CliFinanciadorPacienteController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/cli-financiador-paciente.entity").CliFinanciadorPaciente }),
        __param(0, (0, common_1.Param)('id'))
    ], CliFinanciadorPacienteController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/cli-financiador-paciente.entity").CliFinanciadorPaciente }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CliFinanciadorPacienteController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: String }),
        __param(0, (0, common_1.Param)('id'))
    ], CliFinanciadorPacienteController.prototype, "remove");
    CliFinanciadorPacienteController = __decorate([
        (0, common_1.Controller)('cli-financiador-paciente')
    ], CliFinanciadorPacienteController);
    return CliFinanciadorPacienteController;
}());
exports.CliFinanciadorPacienteController = CliFinanciadorPacienteController;

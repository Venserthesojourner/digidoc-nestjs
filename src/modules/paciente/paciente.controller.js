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
exports.PacienteController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var PacienteController = /** @class */ (function () {
    function PacienteController(pacienteService) {
        this.pacienteService = pacienteService;
    }
    PacienteController.prototype.create = function (createPacienteDto) {
        return this.pacienteService.create(createPacienteDto);
    };
    PacienteController.prototype.findAll = function (limit, skip) {
        return this.pacienteService.findAll(limit, skip);
    };
    PacienteController.prototype.findOne = function (id) {
        return this.pacienteService.findOne(+id);
    };
    PacienteController.prototype.update = function (id, updatePacienteDto) {
        return this.pacienteService.update(+id, updatePacienteDto);
    };
    PacienteController.prototype.remove = function (id) {
        return this.pacienteService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)())
    ], PacienteController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200, type: [Object] }),
        __param(0, (0, common_1.Query)('limit')),
        __param(1, (0, common_1.Query)('skip'))
    ], PacienteController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id'))
    ], PacienteController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], PacienteController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: String }),
        __param(0, (0, common_1.Param)('id'))
    ], PacienteController.prototype, "remove");
    PacienteController = __decorate([
        (0, common_1.Controller)('paciente')
    ], PacienteController);
    return PacienteController;
}());
exports.PacienteController = PacienteController;

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
exports.CliFinanciadorController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var CliFinanciadorController = /** @class */ (function () {
    function CliFinanciadorController(cliFinanciadorService) {
        this.cliFinanciadorService = cliFinanciadorService;
    }
    CliFinanciadorController.prototype.create = function (createCliFinanciadorDto) {
        return this.cliFinanciadorService.create(createCliFinanciadorDto);
    };
    CliFinanciadorController.prototype.findAll = function () {
        return this.cliFinanciadorService.findAll();
    };
    CliFinanciadorController.prototype.findOne = function (id) {
        return this.cliFinanciadorService.findOne(+id);
    };
    CliFinanciadorController.prototype.update = function (id, updateCliFinanciadorDto) {
        return this.cliFinanciadorService.update(+id, updateCliFinanciadorDto);
    };
    CliFinanciadorController.prototype.remove = function (id) {
        return this.cliFinanciadorService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)())
    ], CliFinanciadorController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200, type: [require("./entity/cli-financiador.entity").CliFinanciador] })
    ], CliFinanciadorController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/cli-financiador.entity").CliFinanciador }),
        __param(0, (0, common_1.Param)('id'))
    ], CliFinanciadorController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/cli-financiador.entity").CliFinanciador }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CliFinanciadorController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: String }),
        __param(0, (0, common_1.Param)('id'))
    ], CliFinanciadorController.prototype, "remove");
    CliFinanciadorController = __decorate([
        (0, common_1.Controller)('cli-financiador')
    ], CliFinanciadorController);
    return CliFinanciadorController;
}());
exports.CliFinanciadorController = CliFinanciadorController;

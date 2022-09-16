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
exports.SerologiaController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var SerologiaController = /** @class */ (function () {
    function SerologiaController(antecedentesSerologiaService) {
        this.antecedentesSerologiaService = antecedentesSerologiaService;
    }
    SerologiaController.prototype.getAll = function () {
        return this.antecedentesSerologiaService.findEachAntecedentesSerologia();
    };
    SerologiaController.prototype.getOne = function (id) {
        return this.antecedentesSerologiaService.findOneAntecedenteSerologia(id);
    };
    SerologiaController.prototype.addOne = function (createAntecedentesSerologia) {
        return this.antecedentesSerologiaService.insertAntecedentesSerologia(createAntecedentesSerologia);
    };
    SerologiaController.prototype.updateOne = function (id, updatedSerologia) {
        return this.antecedentesSerologiaService.updateAntecedenteSerologia(id, updatedSerologia);
    };
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200, type: [require("./entity/serologia.entity").antecedentesSerologias] })
    ], SerologiaController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/serologia.entity").antecedentesSerologias }),
        __param(0, (0, common_1.Param)('id'))
    ], SerologiaController.prototype, "getOne");
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: require("./entity/serologia.entity").antecedentesSerologias }),
        __param(0, (0, common_1.Body)())
    ], SerologiaController.prototype, "addOne");
    __decorate([
        (0, common_1.Put)(':id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/serologia.entity").antecedentesSerologias }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], SerologiaController.prototype, "updateOne");
    SerologiaController = __decorate([
        (0, common_1.Controller)('antecedentes/serologia')
    ], SerologiaController);
    return SerologiaController;
}());
exports.SerologiaController = SerologiaController;

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
exports.protocoloMaternidadIngresoController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var protocoloMaternidadIngresoController = /** @class */ (function () {
    function protocoloMaternidadIngresoController(
    //private readonly protocoloService: ProtocoloService,
    matIngProConService) {
        this.matIngProConService = matIngProConService;
    }
    protocoloMaternidadIngresoController.prototype.create = function (protocolo) {
        return this.matIngProConService.createProtMatIngreso(protocolo);
    };
    protocoloMaternidadIngresoController.prototype.getAll = function () {
        return this.matIngProConService.getAll();
    };
    protocoloMaternidadIngresoController.prototype.getOne = function (id) {
        return this.matIngProConService.getOne(id);
    };
    protocoloMaternidadIngresoController.prototype.update = function (id, coso) {
        return this.matIngProConService.updateOne(id, coso);
    };
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: require("./entity/mat_protocolo_ingreso.entity").protocoloMaternidadIngreso }),
        __param(0, (0, common_1.Body)())
    ], protocoloMaternidadIngresoController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200, type: [require("./entity/mat_protocolo_ingreso.entity").protocoloMaternidadIngreso] })
    ], protocoloMaternidadIngresoController.prototype, "getAll");
    __decorate([
        (0, common_1.Get)('/:id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/mat_protocolo_ingreso.entity").protocoloMaternidadIngreso })
    ], protocoloMaternidadIngresoController.prototype, "getOne");
    __decorate([
        (0, common_1.Put)('/:id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/mat_protocolo_ingreso.entity").protocoloMaternidadIngreso })
    ], protocoloMaternidadIngresoController.prototype, "update");
    protocoloMaternidadIngresoController = __decorate([
        (0, common_1.Controller)('protocolo/maternidad/ingreso')
    ], protocoloMaternidadIngresoController);
    return protocoloMaternidadIngresoController;
}());
exports.protocoloMaternidadIngresoController = protocoloMaternidadIngresoController;

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
exports.ProtocoloController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var ProtocoloController = /** @class */ (function () {
    function ProtocoloController(protocoloService) {
        this.protocoloService = protocoloService;
    }
    ProtocoloController.prototype.findAllProtocols = function () {
        return this.protocoloService.findAllProtocols();
    };
    ProtocoloController.prototype.getSingleProtocol = function (id_protocolo) {
        return this.protocoloService.getSingleProtocol(id_protocolo);
    };
    ProtocoloController.prototype.addProtocol = function (protocol_data) {
        return this.protocoloService.addProtocol(protocol_data);
    };
    ProtocoloController.prototype.updateProtocol = function (id_outdated_data, updated_data) {
        return this.protocoloService.updateProtocol(id_outdated_data, updated_data);
    };
    ProtocoloController.prototype.deleteProtocol = function (id_protocol) {
        return this.protocoloService.deleteProtocol(id_protocol);
    };
    __decorate([
        (0, common_1.Get)(''),
        openapi.ApiResponse({ status: 200, type: [require("./entity/protocolo.entity").protocolo] })
    ], ProtocoloController.prototype, "findAllProtocols");
    __decorate([
        (0, common_1.Get)('/:id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/protocolo.entity").protocolo }),
        __param(0, (0, common_1.Param)('id'))
    ], ProtocoloController.prototype, "getSingleProtocol");
    __decorate([
        (0, common_1.Post)(''),
        openapi.ApiResponse({ status: 201, type: require("./entity/protocolo.entity").protocolo }),
        __param(0, (0, common_1.Body)())
    ], ProtocoloController.prototype, "addProtocol");
    __decorate([
        (0, common_1.Put)('/:id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/protocolo.entity").protocolo }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ProtocoloController.prototype, "updateProtocol");
    __decorate([
        (0, common_1.Delete)('/:id'),
        openapi.ApiResponse({ status: 200, type: String }),
        __param(0, (0, common_1.Param)('id'))
    ], ProtocoloController.prototype, "deleteProtocol");
    ProtocoloController = __decorate([
        (0, common_1.Controller)('protocolo')
    ], ProtocoloController);
    return ProtocoloController;
}());
exports.ProtocoloController = ProtocoloController;

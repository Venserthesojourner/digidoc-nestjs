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
exports.AntecedentesVacunasController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var AntecedentesVacunasController = /** @class */ (function () {
    function AntecedentesVacunasController(antecedentesVacunasService) {
        this.antecedentesVacunasService = antecedentesVacunasService;
    }
    AntecedentesVacunasController.prototype.getAllVaccines = function () {
        return this.antecedentesVacunasService.getAllAntecedentesVacunas();
    };
    AntecedentesVacunasController.prototype.findVaccine = function (id) {
        return this.antecedentesVacunasService.getOneAntecedenteVacuna(+id);
    };
    AntecedentesVacunasController.prototype.addVaccine = function (createVacunaDto) {
        return this.antecedentesVacunasService.createAntecedenteVacuna(createVacunaDto);
    };
    AntecedentesVacunasController.prototype.updateVaccine = function () {
        return 'Vacuna Actualizada';
    };
    AntecedentesVacunasController.prototype.unrecordVaccine = function () {
        return 'Vacuna Borrada';
        //Metodo delete: tipo de borrado -> Logico
    };
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200, type: [require("./entity/vacunas.entity").antecedentesVacunas] })
    ], AntecedentesVacunasController.prototype, "getAllVaccines");
    __decorate([
        (0, common_1.Get)('/:id'),
        openapi.ApiResponse({ status: 200, type: require("./entity/vacunas.entity").antecedentesVacunas }),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe))
    ], AntecedentesVacunasController.prototype, "findVaccine");
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: require("./entity/vacunas.entity").antecedentesVacunas }),
        __param(0, (0, common_1.Body)())
    ], AntecedentesVacunasController.prototype, "addVaccine");
    __decorate([
        (0, common_1.Put)('/:id'),
        openapi.ApiResponse({ status: 200, type: String })
    ], AntecedentesVacunasController.prototype, "updateVaccine");
    __decorate([
        (0, common_1.Delete)('/:id'),
        openapi.ApiResponse({ status: 200, type: String })
    ], AntecedentesVacunasController.prototype, "unrecordVaccine");
    AntecedentesVacunasController = __decorate([
        (0, common_1.Controller)('antecedentes/vacunas')
    ], AntecedentesVacunasController);
    return AntecedentesVacunasController;
}());
exports.AntecedentesVacunasController = AntecedentesVacunasController;

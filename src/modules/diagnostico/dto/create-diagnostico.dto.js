"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateDiagnosticoDto = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var CreateDiagnosticoDto = /** @class */ (function () {
    function CreateDiagnosticoDto() {
    }
    CreateDiagnosticoDto._OPENAPI_METADATA_FACTORY = function () {
        return {};
    };
    CreateDiagnosticoDto = __decorate([
        (0, common_1.Injectable)()
    ], CreateDiagnosticoDto);
    return CreateDiagnosticoDto;
}());
exports.CreateDiagnosticoDto = CreateDiagnosticoDto;

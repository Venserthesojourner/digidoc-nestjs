"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.protocolo = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var protocolo = /** @class */ (function () {
    function protocolo() {
    }
    protocolo._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Number; } }, nombreProtocolo: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], protocolo.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ name: 'nombre_protocolo' })
    ], protocolo.prototype, "nombreProtocolo");
    protocolo = __decorate([
        (0, typeorm_1.Entity)('protocolo'),
        (0, typeorm_1.TableInheritance)({ column: { type: 'varchar', name: 'nombre_protocolo' } })
    ], protocolo);
    return protocolo;
}());
exports.protocolo = protocolo;

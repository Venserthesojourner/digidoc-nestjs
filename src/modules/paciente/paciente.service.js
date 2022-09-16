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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PacienteService = void 0;
var common_1 = require("@nestjs/common");
var PacienteService = /** @class */ (function () {
    function PacienteService(pacienteRepository, httpService) {
        this.pacienteRepository = pacienteRepository;
        this.httpService = httpService;
        //
    }
    PacienteService.prototype.create = function (createPacienteDto) {
        return __awaiter(this, void 0, void 0, function () {
            var newObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pacienteRepository.save(createPacienteDto)];
                    case 1:
                        newObject = _a.sent();
                        return [2 /*return*/, newObject];
                }
            });
        });
    };
    PacienteService.prototype.findAll = function (take, skip) {
        if (take === void 0) { take = 100; }
        if (skip === void 0) { skip = 0; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pacienteRepository.find({
                            take: take,
                            skip: skip,
                            order: { id: 'ASC' }
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PacienteService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pacienteRepository.findOneBy({ id: id })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    PacienteService.prototype.update = function (id, updatePacienteDto) {
        return __awaiter(this, void 0, void 0, function () {
            var object;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pacienteRepository.update({ id: id }, updatePacienteDto)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.pacienteRepository.findOneBy({ id: id })];
                    case 2:
                        object = _a.sent();
                        return [2 /*return*/, object];
                }
            });
        });
    };
    PacienteService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.pacienteRepository["delete"]({ id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'Borrado Exitoso'];
                }
            });
        });
    };
    PacienteService.prototype.parseToJSON4Fhir = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var parsedFhir;
            return __generator(this, function (_a) {
                parsedFhir = {
                    patient: {
                        resourceType: 'Patient',
                        identificador: {
                            dominio: 'dominio1',
                            id: element.id
                        },
                        documento: [
                            {
                                tipo: element.tipoDocumento,
                                numero: element.documento
                            },
                        ],
                        direccion: {
                            calle: element.direccion,
                            codigo_postal: element.codigoPostal,
                            ciudad: element.localidad,
                            provincia: element.provincia,
                            pais: 'Argentina'
                        },
                        apellidos: [element.primerApellido + element.segundoApellido],
                        nombres: [element.primerNombre + element.segundoNombre],
                        telefono: element.telefonoFijo,
                        email: element.email,
                        celular: element.telefonoMovil,
                        sexo: element.sexo,
                        fecha_nacimiento: element.fecha_nacimiento,
                        fed_nacion_id: element.fedNacion,
                        active: element.activeFedNacion
                    }
                };
                return [2 /*return*/, JSON.parse(JSON.stringify(parsedFhir))];
            });
        });
    };
    PacienteService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)('PACIENTE_REPOSITORY'))
    ], PacienteService);
    return PacienteService;
}());
exports.PacienteService = PacienteService;
/*
{
  "patient": {
    "resourceType": "Patient",
    "identificador": [
      {
        "dominio": "dominio1",
        "id": "123"
      },
      {
        "dominio": "dominio2",
        "id": "456"
      }
    ],
    "documento": [
      {
        "tipo": "DNI",
        "numero": "123456789"
      },
      {
        "tipo": "CUIL",
        "numero": "201234567897"
      }
    ],
    "direccion": {
      "calle": "Avenida Siempre Viva 754",
      "codigo_postal": "8300",
      "ciudad": "Neuquén",
      "provincia": "Neuquén",
      "pais": "Argentina"
    },
    "apellidos": ["Martinez", "Lopez"],
    "nombres": ["Jose", "Maria"],
    "telefono": "299 123 4567",
    "email": "josem@martinezlopez.com",
    "celular": "299 987 6543",
    "sexo": "male",
    "fecha_nacimiento": "1980-01-02",
    "fed_nacion_id": "123123",
    "active": true
  }
}
 */

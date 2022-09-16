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
exports.CliDocumentoDigitalizadoService = void 0;
var common_1 = require("@nestjs/common");
var fs = require("fs");
var endpoint_config_1 = require("../../config/endpoint.config");
var CliDocumentoDigitalizadoService = /** @class */ (function () {
    function CliDocumentoDigitalizadoService(configEnd, cliDocDigiRepository, httpService) {
        this.configEnd = configEnd;
        this.cliDocDigiRepository = cliDocDigiRepository;
        this.httpService = httpService;
        this.fsBaseFhirServer = this.configEnd.fsBaseFhirServer;
    }
    CliDocumentoDigitalizadoService.prototype.create = function (createCliDocumentoDigitalizadoDto) {
        return __awaiter(this, void 0, void 0, function () {
            var newObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cliDocDigiRepository.save(createCliDocumentoDigitalizadoDto)];
                    case 1:
                        newObject = _a.sent();
                        return [2 /*return*/, newObject];
                }
            });
        });
    };
    CliDocumentoDigitalizadoService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cliDocDigiRepository.find({
                            relations: ['cliPaciente', 'cliEpisodio']
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CliDocumentoDigitalizadoService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cliDocDigiRepository.findOne({
                            where: { id: id },
                            relations: ['cliPaciente', 'cliEpisodio']
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CliDocumentoDigitalizadoService.prototype.update = function (id, updateCliDocumentoDigitalizadoDto) {
        return __awaiter(this, void 0, void 0, function () {
            var object;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cliDocDigiRepository.update({ id: id }, updateCliDocumentoDigitalizadoDto)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cliDocDigiRepository.findOneBy({ id: id })];
                    case 2:
                        object = _a.sent();
                        return [2 /*return*/, object];
                }
            });
        });
    };
    CliDocumentoDigitalizadoService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " cliDocumentoDigitalizado");
    };
    CliDocumentoDigitalizadoService.prototype.getAllCliDocumentoDigitalizado = function (limit, date) {
        var _a;
        if (limit === void 0) { limit = 100; }
        if (date === void 0) { date = null; }
        return __awaiter(this, void 0, void 0, function () {
            var url, cliDocumentoDigitalizado;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        url = "".concat(this.fsBaseFhirServer).concat(this.configEnd.fsGetDocumentReference, "?limit=").concat(limit);
                        if (date) {
                            url += "&date=".concat(date);
                        }
                        return [4 /*yield*/, this.httpService.axiosRef.get(url)];
                    case 1:
                        cliDocumentoDigitalizado = _b.sent();
                        return [2 /*return*/, ((_a = cliDocumentoDigitalizado === null || cliDocumentoDigitalizado === void 0 ? void 0 : cliDocumentoDigitalizado.data) === null || _a === void 0 ? void 0 : _a.documentReference) || []];
                }
            });
        });
    };
    CliDocumentoDigitalizadoService.prototype.getAllEncounter = function () {
        return __awaiter(this, void 0, void 0, function () {
            var encounter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.axiosRef.get("".concat(this.fsBaseFhirServer).concat(this.configEnd.fsGetEncounter, "?limit=100000000000"))];
                    case 1:
                        encounter = _a.sent();
                        return [2 /*return*/, encounter.data];
                }
            });
        });
    };
    CliDocumentoDigitalizadoService.prototype.getAllPatient = function () {
        return __awaiter(this, void 0, void 0, function () {
            var patient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.httpService.axiosRef.get("".concat(this.fsBaseFhirServer).concat(this.configEnd.fsGetPatientFilter))];
                    case 1:
                        patient = _a.sent();
                        return [2 /*return*/, patient.data];
                }
            });
        });
    };
    CliDocumentoDigitalizadoService.prototype.findEncounterInArray = function (cliDocumentoDigitalizado, allEncounter) {
        var _a, _b, _c, _d, _e;
        if ((_b = (_a = cliDocumentoDigitalizado === null || cliDocumentoDigitalizado === void 0 ? void 0 : cliDocumentoDigitalizado.JSON_FHIR) === null || _a === void 0 ? void 0 : _a.context) === null || _b === void 0 ? void 0 : _b.encounter) {
            var idEncounter_1 = (_e = (_d = (_c = cliDocumentoDigitalizado === null || cliDocumentoDigitalizado === void 0 ? void 0 : cliDocumentoDigitalizado.JSON_FHIR) === null || _c === void 0 ? void 0 : _c.context) === null || _d === void 0 ? void 0 : _d.encounter[0]) === null || _e === void 0 ? void 0 : _e.reference.split('/').pop();
            var encounter = allEncounter.find(function (e) { return e.id === idEncounter_1; });
            return encounter;
        }
    };
    CliDocumentoDigitalizadoService.prototype.findPatientInArray = function (cliDocumentoDigitalizado, allPatient) {
        var _a, _b, _c;
        var patient;
        if ((_b = (_a = cliDocumentoDigitalizado === null || cliDocumentoDigitalizado === void 0 ? void 0 : cliDocumentoDigitalizado.JSON_FHIR) === null || _a === void 0 ? void 0 : _a.subject) === null || _b === void 0 ? void 0 : _b.reference) {
            var idPatient_1 = (_c = cliDocumentoDigitalizado === null || cliDocumentoDigitalizado === void 0 ? void 0 : cliDocumentoDigitalizado.JSON_FHIR) === null || _c === void 0 ? void 0 : _c.subject.reference.split('/').pop();
            patient = allPatient.find(function (e) { return e.id === idPatient_1; });
        }
        return patient;
    };
    CliDocumentoDigitalizadoService.prototype.findAndDownloadFile = function (id, path) {
        return __awaiter(this, void 0, void 0, function () {
            var url, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "".concat(this.fsBaseFhirServer).concat(this.configEnd.fsGetBinaryDocumentReference.replace(':id', id.toString()));
                        return [4 /*yield*/, this.httpService.axiosRef({
                                url: url,
                                method: 'GET',
                                responseType: 'arraybuffer'
                            })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, fs.promises.writeFile(path, res.data)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CliDocumentoDigitalizadoService.prototype.findPatientInArrayForId = function (id, allPatient) {
        var patient = allPatient.find(function (e) { return e.id === id; });
        return patient;
    };
    CliDocumentoDigitalizadoService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)(endpoint_config_1["default"].KEY)),
        __param(1, (0, common_1.Inject)('CLI_DOCUMENTO_DIGITALIZADO_REPOSITORY'))
    ], CliDocumentoDigitalizadoService);
    return CliDocumentoDigitalizadoService;
}());
exports.CliDocumentoDigitalizadoService = CliDocumentoDigitalizadoService;

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
exports.CliDocumentoDigitalizadoController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var date_util_1 = require("../../utils/date.util");
var CliDocumentoDigitalizadoController = /** @class */ (function () {
    function CliDocumentoDigitalizadoController(cliDocumentoDigitalizadoService, cliDocumentoDigitalizadoAdjuntoService) {
        this.cliDocumentoDigitalizadoService = cliDocumentoDigitalizadoService;
        this.cliDocumentoDigitalizadoAdjuntoService = cliDocumentoDigitalizadoAdjuntoService;
        //
    }
    CliDocumentoDigitalizadoController.prototype.create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!payload.fecha) {
                    payload.fecha = new Date();
                }
                return [2 /*return*/, this.cliDocumentoDigitalizadoService.create(payload)];
            });
        });
    };
    CliDocumentoDigitalizadoController.prototype.findAll = function () {
        return this.cliDocumentoDigitalizadoService.findAll();
    };
    CliDocumentoDigitalizadoController.prototype.migrateCliDocumentoDigitalizado = function (limit, date) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        return __awaiter(this, void 0, void 0, function () {
            var downloadDocument, startProcessMigration, allCliDocumentoDigitalizado, allEncounter, allPatientTemp, allPatient, cantCliCliDocumentoDigitalizado, i, cliDocumentoDigitalizado, idCliDocDigi, encounter, patient, id, nameFile, sourceTmp, startDownloadFile, stopDownloadFile, tags, cantTags, i_1, payload, cliDoc, contentType, payloadAdj, cliDocAdj, nameFolder, dirUpload, name_1, file, responseFile, update, stopProcessMigration, processMigration, resutlProcessMigration;
            return __generator(this, function (_p) {
                switch (_p.label) {
                    case 0:
                        downloadDocument = 0;
                        startProcessMigration = process.hrtime();
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoService.getAllCliDocumentoDigitalizado(limit, date)];
                    case 1:
                        allCliDocumentoDigitalizado = _p.sent();
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoService.getAllEncounter()];
                    case 2:
                        allEncounter = _p.sent();
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoService.getAllPatient()];
                    case 3:
                        allPatientTemp = _p.sent();
                        allPatient = allPatientTemp.patients;
                        cantCliCliDocumentoDigitalizado = allCliDocumentoDigitalizado.length;
                        i = 0;
                        _p.label = 4;
                    case 4:
                        if (!(i < cantCliCliDocumentoDigitalizado)) return [3 /*break*/, 11];
                        cliDocumentoDigitalizado = allCliDocumentoDigitalizado[i];
                        idCliDocDigi = cliDocumentoDigitalizado.id;
                        encounter = this.cliDocumentoDigitalizadoService.findEncounterInArray(cliDocumentoDigitalizado, allEncounter);
                        patient = this.cliDocumentoDigitalizadoService.findPatientInArray(cliDocumentoDigitalizado, allPatient);
                        // No tengo el paciente por lo tanto busco el paciente a partir del encounter
                        if (!patient) {
                            id = (_b = (_a = encounter === null || encounter === void 0 ? void 0 : encounter.JSON_FHIR) === null || _a === void 0 ? void 0 : _a.subject) === null || _b === void 0 ? void 0 : _b.reference.split('/').pop();
                            patient = this.cliDocumentoDigitalizadoService.findPatientInArrayForId(id, allPatient);
                        }
                        if (!patient) return [3 /*break*/, 10];
                        nameFile = cliDocumentoDigitalizado.JSON_FHIR.content[0].attachment.url
                            .split('T')
                            .pop();
                        sourceTmp = "".concat(process.cwd(), "/tmp/").concat(nameFile);
                        startDownloadFile = process.hrtime();
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoService.findAndDownloadFile(idCliDocDigi, sourceTmp)];
                    case 5:
                        _p.sent();
                        stopDownloadFile = process.hrtime(startDownloadFile);
                        downloadDocument +=
                            (stopDownloadFile[0] * 1e9 + stopDownloadFile[1]) / 1e9;
                        tags = [];
                        if ((_c = cliDocumentoDigitalizado === null || cliDocumentoDigitalizado === void 0 ? void 0 : cliDocumentoDigitalizado.JSON_FHIR) === null || _c === void 0 ? void 0 : _c.meta) {
                            cantTags = cliDocumentoDigitalizado.JSON_FHIR.meta.length;
                            for (i_1 = 0; i_1 < cantTags; i_1++) {
                                tags.push(cliDocumentoDigitalizado.JSON_FHIR.meta[i_1].tag);
                            }
                        }
                        payload = {
                            fecha: (_e = (_d = cliDocumentoDigitalizado === null || cliDocumentoDigitalizado === void 0 ? void 0 : cliDocumentoDigitalizado.JSON_FHIR) === null || _d === void 0 ? void 0 : _d.date) !== null && _e !== void 0 ? _e : (0, date_util_1.dateNow)(),
                            cliEpisodio: (_g = (_f = encounter === null || encounter === void 0 ? void 0 : encounter.JSON_FHIR) === null || _f === void 0 ? void 0 : _f.identifier[0].value) !== null && _g !== void 0 ? _g : null,
                            cliPaciente: (_h = patient === null || patient === void 0 ? void 0 : patient.JSON_FHIR) === null || _h === void 0 ? void 0 : _h.identifier[0].value,
                            tags: tags.join(','),
                            tipo: (_l = (_k = (_j = cliDocumentoDigitalizado === null || cliDocumentoDigitalizado === void 0 ? void 0 : cliDocumentoDigitalizado.JSON_FHIR) === null || _j === void 0 ? void 0 : _j.type) === null || _k === void 0 ? void 0 : _k.coding[0]) === null || _l === void 0 ? void 0 : _l.system,
                            descripcion: "DocumentReference ".concat(idCliDocDigi)
                        };
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoService.create(payload)];
                    case 6:
                        cliDoc = _p.sent();
                        contentType = cliDocumentoDigitalizado.JSON_FHIR.content[0].attachment.contentType;
                        payloadAdj = {
                            cliDocumentoDigitalizado: cliDoc,
                            contentType: contentType,
                            filename: sourceTmp
                        };
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoAdjuntoService.create(payloadAdj)];
                    case 7:
                        cliDocAdj = _p.sent();
                        nameFolder = (0, date_util_1.nameFolderDate)((_o = (_m = cliDocumentoDigitalizado === null || cliDocumentoDigitalizado === void 0 ? void 0 : cliDocumentoDigitalizado.JSON_FHIR) === null || _m === void 0 ? void 0 : _m.date) !== null && _o !== void 0 ? _o : (0, date_util_1.dateNow)());
                        dirUpload = "/var/www/html/digidoc/".concat(nameFolder);
                        name_1 = "".concat(cliDoc.id, "-").concat(cliDocAdj.id);
                        file = {
                            mimetype: contentType,
                            path: sourceTmp
                        };
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoAdjuntoService.saveFile(file, dirUpload, name_1)];
                    case 8:
                        responseFile = _p.sent();
                        update = {
                            filename: responseFile === null || responseFile === void 0 ? void 0 : responseFile.filename,
                            filenameThumbnail: responseFile === null || responseFile === void 0 ? void 0 : responseFile.filenameThumbnail,
                            alto: responseFile === null || responseFile === void 0 ? void 0 : responseFile.alto,
                            ancho: responseFile === null || responseFile === void 0 ? void 0 : responseFile.ancho,
                            sha1: responseFile === null || responseFile === void 0 ? void 0 : responseFile.sha1,
                            duracion: responseFile === null || responseFile === void 0 ? void 0 : responseFile.duracion
                        };
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoAdjuntoService.update(cliDocAdj.id, update)];
                    case 9:
                        _p.sent();
                        _p.label = 10;
                    case 10:
                        i++;
                        return [3 /*break*/, 4];
                    case 11:
                        stopProcessMigration = process.hrtime(startProcessMigration);
                        processMigration = (stopProcessMigration[0] * 1e9 + stopProcessMigration[1]) / 1e9;
                        resutlProcessMigration = processMigration - downloadDocument;
                        return [2 /*return*/, {
                                total: processMigration,
                                resutlProcessMigration: resutlProcessMigration,
                                downloadDocument: downloadDocument
                            }];
                }
            });
        });
    };
    CliDocumentoDigitalizadoController.prototype.findOne = function (id) {
        return this.cliDocumentoDigitalizadoService.findOne(+id);
    };
    CliDocumentoDigitalizadoController.prototype.update = function (id, updateCliDocumentoDigitalizadoDto) {
        return this.cliDocumentoDigitalizadoService.update(+id, updateCliDocumentoDigitalizadoDto);
    };
    CliDocumentoDigitalizadoController.prototype.remove = function (id) {
        return this.cliDocumentoDigitalizadoService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)())
    ], CliDocumentoDigitalizadoController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200, type: [Object] })
    ], CliDocumentoDigitalizadoController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)('migrate/:limit'),
        openapi.ApiResponse({ status: 200 }),
        __param(0, (0, common_1.Param)('limit')),
        __param(1, (0, common_1.Query)('date'))
    ], CliDocumentoDigitalizadoController.prototype, "migrateCliDocumentoDigitalizado");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe))
    ], CliDocumentoDigitalizadoController.prototype, "findOne");
    __decorate([
        (0, common_1.Put)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
        __param(1, (0, common_1.Body)())
    ], CliDocumentoDigitalizadoController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: String }),
        __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe))
    ], CliDocumentoDigitalizadoController.prototype, "remove");
    CliDocumentoDigitalizadoController = __decorate([
        (0, common_1.Controller)('cli-documento-digitalizado')
    ], CliDocumentoDigitalizadoController);
    return CliDocumentoDigitalizadoController;
}());
exports.CliDocumentoDigitalizadoController = CliDocumentoDigitalizadoController;

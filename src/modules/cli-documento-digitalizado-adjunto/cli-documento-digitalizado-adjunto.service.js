"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.CliDocumentoDigitalizadoAdjuntoService = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var image_size_1 = require("image-size");
var fs = require("fs");
var crypto = require("crypto");
var file_upload_1 = require("../../utils/file/file.upload");
var image_file_1 = require("../../utils/file/image.file");
var schedule_1 = require("@nestjs/schedule");
var date_util_1 = require("../../utils/date.util");
var endpoint_config_1 = require("../../config/endpoint.config");
//
var Bundle_1 = require("../../../node_modules/fhir-resources/resources/Bundle");
var CliDocumentoDigitalizadoAdjuntoService = /** @class */ (function () {
    function CliDocumentoDigitalizadoAdjuntoService(cliDocDigiAdjRepository, episodeRepository, pacienteRepository, configEnd, httpService, episodeService, pacienteService) {
        this.cliDocDigiAdjRepository = cliDocDigiAdjRepository;
        this.episodeRepository = episodeRepository;
        this.pacienteRepository = pacienteRepository;
        this.configEnd = configEnd;
        this.httpService = httpService;
        this.episodeService = episodeService;
        this.pacienteService = pacienteService;
        //
    }
    CliDocumentoDigitalizadoAdjuntoService.prototype.create = function (createCliDocumentoDigitalizadoAdjuntoDto, idPaciente /* Opcional */, idEpisodio /* Opcional */) {
        return __awaiter(this, void 0, void 0, function () {
            var newPaciente, newEpisodio, newObject;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (idPaciente) {
                            newPaciente = this.pacienteService.findOne(idPaciente);
                            console.log(newPaciente);
                        }
                        if (idEpisodio) {
                            newEpisodio = this.episodeService.getOneEpisodio(idEpisodio);
                            console.log(newEpisodio);
                        }
                        return [4 /*yield*/, this.cliDocDigiAdjRepository.save(createCliDocumentoDigitalizadoAdjuntoDto)];
                    case 1:
                        newObject = _a.sent();
                        newObject.estado;
                        return [2 /*return*/, newObject];
                }
            });
        });
    };
    CliDocumentoDigitalizadoAdjuntoService.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cliDocDigiAdjRepository.find({
                            relations: [
                                'cliDocumentoDigitalizado',
                                'cliDocumentoDigitalizado.cliPaciente',
                                'cliDocumentoDigitalizado.cliEpisodio',
                            ]
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CliDocumentoDigitalizadoAdjuntoService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cliDocDigiAdjRepository.findOne({
                            where: { id: id },
                            relations: [
                                'cliDocumentoDigitalizado',
                                'cliDocumentoDigitalizado.cliPaciente',
                                'cliDocumentoDigitalizado.cliEpisodio',
                            ]
                        })];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CliDocumentoDigitalizadoAdjuntoService.prototype.update = function (id, updateCliDocumentoDigitalizadoAdjuntoDto) {
        return __awaiter(this, void 0, void 0, function () {
            var object;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.cliDocDigiAdjRepository.update({ id: id }, updateCliDocumentoDigitalizadoAdjuntoDto)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cliDocDigiAdjRepository.findOneBy({ id: id })];
                    case 2:
                        object = _a.sent();
                        return [2 /*return*/, object];
                }
            });
        });
    };
    CliDocumentoDigitalizadoAdjuntoService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " cliDocumentoDigitalizadoAdjunto");
    };
    CliDocumentoDigitalizadoAdjuntoService.prototype.saveFile = function (file, output, name) {
        return __awaiter(this, void 0, void 0, function () {
            var ext, response, pathOutput, pathOutputThumbnail, fileFs, sha1, dimensions, duration, dimensiones, duration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ext = file.mimetype.split('/').pop();
                        pathOutput = "".concat(output, "/").concat(name, ".").concat(ext);
                        pathOutputThumbnail = "".concat(output, "/").concat(name, "-thumbnail.jpg");
                        // Creo la carpeta para guarda el archivo
                        return [4 /*yield*/, (0, image_file_1.mkdirPromise)(output)];
                    case 1:
                        // Creo la carpeta para guarda el archivo
                        _a.sent();
                        return [4 /*yield*/, (0, image_file_1.copyFilePromise)(file.path, pathOutput, true)];
                    case 2:
                        _a.sent();
                        fileFs = fs.readFileSync(pathOutput);
                        sha1 = crypto.createHash('sha1').update(fileFs).digest('hex');
                        response = {
                            filename: pathOutput,
                            filenameThumbnail: pathOutputThumbnail,
                            sha1: sha1
                        };
                        if (!(0, file_upload_1.isImage)(file)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, image_file_1.createThumbnail)(pathOutput, pathOutputThumbnail, file.mimetype)];
                    case 3:
                        _a.sent();
                        dimensions = (0, image_size_1["default"])(pathOutput);
                        response = __assign(__assign({}, response), { filenameThumbnail: pathOutputThumbnail, alto: dimensions.height, ancho: dimensions.width });
                        _a.label = 4;
                    case 4:
                        if (!(0, file_upload_1.isVideo)(file)) return [3 /*break*/, 8];
                        return [4 /*yield*/, (0, image_file_1.createThumbnailVideo)(pathOutput, pathOutputThumbnail)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, (0, image_file_1.durationVideo)(pathOutput)];
                    case 6:
                        duration = _a.sent();
                        return [4 /*yield*/, (0, image_file_1.dimensionVideo)(pathOutput)];
                    case 7:
                        dimensiones = _a.sent();
                        response = __assign(__assign({}, response), { ancho: dimensiones.width, alto: dimensiones.height, duracion: Math.round(duration) });
                        _a.label = 8;
                    case 8:
                        if (!(0, file_upload_1.isAudio)(file)) return [3 /*break*/, 11];
                        return [4 /*yield*/, (0, image_file_1.createThumbnailAudio)(pathOutput, pathOutputThumbnail)];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, (0, image_file_1.durationAudio)(pathOutput)];
                    case 10:
                        duration = _a.sent();
                        response = __assign(__assign({}, response), { duracion: Math.round(duration) });
                        _a.label = 11;
                    case 11:
                        if (!(0, file_upload_1.isApplication)(file)) return [3 /*break*/, 13];
                        if (!(0, file_upload_1.isPdf)(file)) return [3 /*break*/, 13];
                        return [4 /*yield*/, (0, image_file_1.createThumbnailPdf)(pathOutput, pathOutputThumbnail)];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13: return [2 /*return*/, response];
                }
            });
        });
    };
    CliDocumentoDigitalizadoAdjuntoService.prototype.saveToFhir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var date, dateTo, yesterday, dateFrom, dataStream;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = (0, date_util_1.dateNow)();
                        dateTo = "".concat(date.year, "-").concat(date.month, "-").concat(date.day, " ").concat(date.hour, ":").concat(date.minute, ":").concat(date.second);
                        yesterday = (0, date_util_1.last24Hours)(date);
                        dateFrom = "".concat(yesterday.year, "-").concat(yesterday.month, "-").concat(yesterday.day, " ").concat(yesterday.hour, ":").concat(yesterday.minute, ":").concat(yesterday.second);
                        console.log("FROM: ".concat(dateFrom));
                        console.log("TO: ".concat(dateTo));
                        return [4 /*yield*/, this.cliDocDigiAdjRepository.find({
                                where: {
                                    createdAt: (0, typeorm_1.Between)(dateFrom, dateTo)
                                },
                                relations: [
                                    'cliDocumentoDigitalizado',
                                    'cliDocumentoDigitalizado.cliPaciente',
                                    'cliDocumentoDigitalizado.cliEpisodio',
                                ]
                            })];
                    case 1:
                        dataStream = _a.sent();
                        dataStream.forEach(function (element) { return __awaiter(_this, void 0, void 0, function () {
                            var episodeToBundle, bundledEncounter, patientToBundle, bundledPatient, bundledFhirbyEncounter, bundledFile, bundledFhirByDocument, patientToBundle, bundledPatient, bundledFile, bundledFhir;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(element.cliDocumentoDigitalizado.cliEpisodio != null)) return [3 /*break*/, 8];
                                        console.log("Tiene episodio");
                                        return [4 /*yield*/, this.episodeRepository.findOne({
                                                where: {
                                                    id: element.cliDocumentoDigitalizado.cliEpisodio.id
                                                },
                                                relations: ['pacientData']
                                            })];
                                    case 1:
                                        episodeToBundle = _a.sent();
                                        return [4 /*yield*/, this.episodeService.parseToJSON4Fhir(episodeToBundle)];
                                    case 2:
                                        bundledEncounter = _a.sent();
                                        return [4 /*yield*/, this.pacienteRepository.findOne({
                                                where: { id: element.cliDocumentoDigitalizado.cliPaciente.id }
                                            })];
                                    case 3:
                                        patientToBundle = _a.sent();
                                        return [4 /*yield*/, this.pacienteService.parseToJSON4Fhir(patientToBundle)];
                                    case 4:
                                        bundledPatient = _a.sent();
                                        return [4 /*yield*/, Bundle_1["default"].createBundle('collection', [
                                                bundledEncounter,
                                                bundledPatient,
                                            ])];
                                    case 5:
                                        bundledFhirbyEncounter = _a.sent();
                                        this.httpService.post("".concat(this.configEnd.fsBaseFhirServer).concat(this.configEnd.fsPostCreateEncounter), bundledFhirbyEncounter);
                                        return [4 /*yield*/, this.parseToJSON4Fhir(element)];
                                    case 6:
                                        bundledFile = _a.sent();
                                        return [4 /*yield*/, Bundle_1["default"].createBundle('collection', [
                                                bundledEncounter,
                                                bundledFile,
                                            ])];
                                    case 7:
                                        bundledFhirByDocument = _a.sent();
                                        common_1.Logger.log(JSON.stringify(bundledPatient));
                                        common_1.Logger.log(JSON.stringify(bundledEncounter));
                                        common_1.Logger.log(JSON.stringify(bundledFile));
                                        common_1.Logger.log(JSON.stringify(bundledFhirbyEncounter));
                                        return [3 /*break*/, 13];
                                    case 8:
                                        if (!(element.cliDocumentoDigitalizado.cliPaciente != null)) return [3 /*break*/, 13];
                                        console.log("No Tiene episodio");
                                        return [4 /*yield*/, this.pacienteRepository.findOne({
                                                where: { id: element.cliDocumentoDigitalizado.cliPaciente.id }
                                            })];
                                    case 9:
                                        patientToBundle = _a.sent();
                                        return [4 /*yield*/, this.pacienteService.parseToJSON4Fhir(patientToBundle)];
                                    case 10:
                                        bundledPatient = _a.sent();
                                        return [4 /*yield*/, this.parseToJSON4Fhir(element)];
                                    case 11:
                                        bundledFile = _a.sent();
                                        return [4 /*yield*/, Bundle_1["default"].createBundle('collection', [
                                                bundledPatient,
                                                bundledFile,
                                            ])];
                                    case 12:
                                        bundledFhir = _a.sent();
                                        this.httpService.post("".concat(this.configEnd.fsBaseFhirServer).concat(this.configEnd.fsPostCreateDocumentReference), bundledFhir);
                                        _a.label = 13;
                                    case 13: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    CliDocumentoDigitalizadoAdjuntoService.prototype.parseToJSON4Fhir = function (element) {
        return __awaiter(this, void 0, void 0, function () {
            var tipo, categorias, tags, content, parsedFhir;
            return __generator(this, function (_a) {
                tipo = [
                    {
                        // 0..1
                        url: 'http://snomed.info/sct',
                        codigo: '772786005',
                        mostrar: 'certificado médico (elemento de registro)'
                    },
                ];
                categorias = element.cliDocumentoDigitalizado.categoria;
                tags = element.cliDocumentoDigitalizado.tags.split(',');
                content = [
                    // R! 1..*
                    {
                        attachment: {
                            contentType: element.contentType,
                            language: 'es-AR',
                            url: 'element.url',
                            size: element.bytes,
                            creation: element.createdAt /*Arreglar bien aca*/,
                            data: element.sha1
                        }
                    },
                ];
                parsedFhir = {
                    documentReference: {
                        resourceType: 'DocumentReference',
                        identificador: [
                            {
                                id: element.id
                            },
                        ],
                        estado: element.estado,
                        tipo: {
                            codigos: { tipo: tipo }
                        },
                        categorias: [categorias],
                        fecha: element.cliDocumentoDigitalizado.fecha,
                        descripcion: element.cliDocumentoDigitalizado.descripcion,
                        meta: tags,
                        content: content
                    }
                };
                return [2 /*return*/, parsedFhir];
            });
        });
    };
    __decorate([
        (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_5_MINUTES)
    ], CliDocumentoDigitalizadoAdjuntoService.prototype, "saveToFhir");
    CliDocumentoDigitalizadoAdjuntoService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)('CLI_DOCUMENTO_DIGITALIZADO_ADJUNTO_REPOSITORY')),
        __param(1, (0, common_1.Inject)('EPISODIO_REPOSITORY')),
        __param(2, (0, common_1.Inject)('PACIENTE_REPOSITORY')),
        __param(3, (0, common_1.Inject)(endpoint_config_1["default"].KEY))
    ], CliDocumentoDigitalizadoAdjuntoService);
    return CliDocumentoDigitalizadoAdjuntoService;
}());
exports.CliDocumentoDigitalizadoAdjuntoService = CliDocumentoDigitalizadoAdjuntoService;

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
exports.CliDocumentoDigitalizadoAdjuntoController = void 0;
var openapi = require("@nestjs/swagger");
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var date_util_1 = require("../../utils/date.util");
var multer_1 = require("multer");
var file_config_1 = require("../../config/file.config");
var file_interceptor_1 = require("../../interceptor/file/file.interceptor");
var file_upload_1 = require("../../utils/file/file.upload");
var CliDocumentoDigitalizadoAdjuntoController = /** @class */ (function () {
    function CliDocumentoDigitalizadoAdjuntoController(fConfig, cliDocumentoDigitalizadoAdjuntoService) {
        var _a;
        this.fConfig = fConfig;
        this.cliDocumentoDigitalizadoAdjuntoService = cliDocumentoDigitalizadoAdjuntoService;
        this.destination = './tmp';
        this.destination = (_a = this === null || this === void 0 ? void 0 : this.fConfig) === null || _a === void 0 ? void 0 : _a.dirUploadTemp;
    }
    CliDocumentoDigitalizadoAdjuntoController.prototype.create = function (createCliDocDigiAdjuntoDto, cliDocumentoDigitalizadoId, file, idPaciente, idEpisodio) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, nameFolder, dirUpload, response, name, responseFile, update, responseUpdate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = {
                            cliDocumentoDigitalizado: createCliDocDigiAdjuntoDto.cliDocumentoDigitalizado,
                            filename: file.path,
                            contentType: file.mimetype,
                            bytes: file.size
                        };
                        nameFolder = (0, date_util_1.nameFolderDate)();
                        dirUpload = "".concat(this.fConfig.dirUpload, "/").concat(nameFolder);
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoAdjuntoService.create(payload, idPaciente, idEpisodio)];
                    case 1:
                        response = _a.sent();
                        name = "".concat(createCliDocDigiAdjuntoDto.cliDocumentoDigitalizado, "-").concat(response.id);
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoAdjuntoService.saveFile(file, dirUpload, name)];
                    case 2:
                        responseFile = _a.sent();
                        update = {
                            filename: responseFile === null || responseFile === void 0 ? void 0 : responseFile.filename,
                            filenameThumbnail: responseFile === null || responseFile === void 0 ? void 0 : responseFile.filenameThumbnail,
                            alto: responseFile === null || responseFile === void 0 ? void 0 : responseFile.alto,
                            ancho: responseFile === null || responseFile === void 0 ? void 0 : responseFile.ancho,
                            sha1: responseFile === null || responseFile === void 0 ? void 0 : responseFile.sha1,
                            duracion: responseFile === null || responseFile === void 0 ? void 0 : responseFile.duracion
                        };
                        return [4 /*yield*/, this.cliDocumentoDigitalizadoAdjuntoService.update(response.id, update)];
                    case 3:
                        responseUpdate = _a.sent();
                        return [2 /*return*/, responseUpdate];
                }
            });
        });
    };
    CliDocumentoDigitalizadoAdjuntoController.prototype.findAll = function () {
        return this.cliDocumentoDigitalizadoAdjuntoService.findAll();
    };
    CliDocumentoDigitalizadoAdjuntoController.prototype.findOne = function (id) {
        return this.cliDocumentoDigitalizadoAdjuntoService.findOne(+id);
    };
    CliDocumentoDigitalizadoAdjuntoController.prototype.update = function (id, updateCliDocumentoDigitalizadoAdjuntoDto) {
        return this.cliDocumentoDigitalizadoAdjuntoService.update(+id, updateCliDocumentoDigitalizadoAdjuntoDto);
    };
    CliDocumentoDigitalizadoAdjuntoController.prototype.remove = function (id) {
        return this.cliDocumentoDigitalizadoAdjuntoService.remove(+id);
    };
    CliDocumentoDigitalizadoAdjuntoController.prototype.migration = function () {
        this.cliDocumentoDigitalizadoAdjuntoService.saveToFhir();
    };
    __decorate([
        (0, swagger_1.ApiConsumes)('multipart/form-data'),
        (0, common_1.UseInterceptors)((0, file_interceptor_1.FastifyFileInterceptor)('file', {
            storage: (0, multer_1.diskStorage)({
                destination: "".concat(process.cwd(), "/tmp"),
                filename: file_upload_1.editFileName
            })
        })),
        (0, common_1.Post)(),
        openapi.ApiResponse({ status: 201, type: Object }),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Param)(':id', common_1.ParseIntPipe)),
        __param(2, (0, common_1.UploadedFile)()),
        __param(3, (0, common_1.Query)('idpaciente', common_1.ParseIntPipe)),
        __param(4, (0, common_1.Query)('idepisodio', common_1.ParseIntPipe))
    ], CliDocumentoDigitalizadoAdjuntoController.prototype, "create");
    __decorate([
        (0, common_1.Get)(),
        openapi.ApiResponse({ status: 200, type: [Object] })
    ], CliDocumentoDigitalizadoAdjuntoController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id'))
    ], CliDocumentoDigitalizadoAdjuntoController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        openapi.ApiResponse({ status: 200, type: Object }),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CliDocumentoDigitalizadoAdjuntoController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        openapi.ApiResponse({ status: 200, type: String }),
        __param(0, (0, common_1.Param)('id'))
    ], CliDocumentoDigitalizadoAdjuntoController.prototype, "remove");
    __decorate([
        (0, common_1.Get)('/migration'),
        openapi.ApiResponse({ status: 200 })
    ], CliDocumentoDigitalizadoAdjuntoController.prototype, "migration");
    CliDocumentoDigitalizadoAdjuntoController = __decorate([
        (0, common_1.Controller)('cli-documento-digitalizado-adjunto'),
        __param(0, (0, common_1.Inject)(file_config_1["default"].KEY))
    ], CliDocumentoDigitalizadoAdjuntoController);
    return CliDocumentoDigitalizadoAdjuntoController;
}());
exports.CliDocumentoDigitalizadoAdjuntoController = CliDocumentoDigitalizadoAdjuntoController;

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UpdateDiagnosticoSignosVitalesDto = void 0;
var openapi = require("@nestjs/swagger");
var mapped_types_1 = require("@nestjs/mapped-types");
var create_diagnostico_signos_vitales_dto_1 = require("./create-diagnostico-signos-vitales-dto");
var UpdateDiagnosticoSignosVitalesDto = /** @class */ (function (_super) {
    __extends(UpdateDiagnosticoSignosVitalesDto, _super);
    function UpdateDiagnosticoSignosVitalesDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateDiagnosticoSignosVitalesDto._OPENAPI_METADATA_FACTORY = function () {
        return {};
    };
    return UpdateDiagnosticoSignosVitalesDto;
}((0, mapped_types_1.PartialType)(create_diagnostico_signos_vitales_dto_1.CreateDiagnosticoSignosVitalesDto)));
exports.UpdateDiagnosticoSignosVitalesDto = UpdateDiagnosticoSignosVitalesDto;

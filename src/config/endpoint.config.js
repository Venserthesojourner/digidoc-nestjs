"use strict";
exports.__esModule = true;
var config_1 = require("@nestjs/config");
exports["default"] = (0, config_1.registerAs)('configEndpoint', function () {
    return {
        apiKey: process.env.API_KEY,
        fsBaseFhirServer: process.env.FS_BASE_FHIR_SERVER,
        fsGetDocumentReference: process.env.FS_GET_DOCUMENT_REFERENCE,
        fsGetEncounter: process.env.FS_GET_ENCOUNTER,
        fsGetPatientFilter: process.env.FS_GET_PATIENT_FILTER,
        fsGetBinaryDocumentReference: process.env.FS_GET_BINARY_DOCUMENT_REFERENCE,
        fsPostCreateDocumentReference: process.env.FS_POST_CREATE_DOCUMENT_REFERENCE,
        fsPostCreateEncounter: process.env.FS_POST_CREATE_ENCOUNTER
    };
});

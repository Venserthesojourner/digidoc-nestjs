import { registerAs } from '@nestjs/config';

export default registerAs('configEndpoint', () => {
  return {
    apiKey: process.env.API_KEY,
    fsBaseFhirServer: process.env.FS_BASE_FHIR_SERVER,
    fsGetDocumentReference: process.env.FS_GET_DOCUMENT_REFERENCE,
    fsGetEncounter: process.env.FS_GET_ENCOUNTER,
    fsGetPatientFilter: process.env.FS_GET_PATIENT_FILTER,
    fsGetBinaryDocumentReference: process.env.FS_GET_BINARY_DOCUMENT_REFERENCE,
  };
});

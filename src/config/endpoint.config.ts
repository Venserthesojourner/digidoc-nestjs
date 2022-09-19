import { registerAs } from '@nestjs/config';

export default registerAs('configEndpoint', () => {
  return {
    apiKey: process.env.API_KEY,
    dirupload: process.env.DIRUPLOAD,
    fsBaseFhirServer: process.env.FS_BASE_FHIR_SERVER,
    fsGetDocumentReference: process.env.FS_GET_DOCUMENT_REFERENCE,
    fsGetEncounter: process.env.FS_GET_ENCOUNTER,
    fsGetPatientFilter: process.env.FS_GET_PATIENT_FILTER,
    fsGetBinaryDocumentReference: process.env.FS_GET_BINARY_DOCUMENT_REFERENCE,
    fsPostCreateDocumentReference:
      process.env.FS_POST_CREATE_DOCUMENT_REFERENCE,
    fsPostCreateEncounter: process.env.FS_POST_CREATE_ENCOUNTER,
  };
});

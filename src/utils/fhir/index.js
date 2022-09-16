import { Bundle } from 'fhir-resources';

export const createBundle = async (packagesToBundle) => {
  const bundledFhir = await Bundle.createBundle('collection', packagesToBundle);
  return bundledFhir;
};

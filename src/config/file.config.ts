import { registerAs } from '@nestjs/config';

export default registerAs('configFile', () => {
  return {
    apiKey: process.env.API_KEY,
    dirUpload: process.env.DIR_UPLOAD,
    dirUploadTemp: process.env.DIR_UPLOAD_TEMP,
  };
});

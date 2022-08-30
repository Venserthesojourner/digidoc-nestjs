import { BadGatewayException } from '@nestjs/common';
import axios from 'axios';

const getRequest = async (api) => {
  try {
    const request = await axios.get(api);
    return request.data;
  } catch (error) {
    BadGatewayException();
  }
};

export { getRequest };

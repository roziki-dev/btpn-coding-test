import axios from 'axios';

import {Config} from '../config';

export const client = axios.create({
  baseURL: Config.baseUrl,
  timeout: 36000,
  headers: {
    Accept: '*/*',
  },
});

client.interceptors.request.use(
  async function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

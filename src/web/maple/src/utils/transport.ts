import type { ResponseBase } from '@/core/model/response-base';
import axios, { type AxiosInstance, type AxiosResponse } from 'axios';

import { CONFIG } from './configuration';

let transport: AxiosInstance;

export const getTransport = () => {
  if (!transport) {
    const baseURL = CONFIG.get<string>('api');
    const timeout = 5 * 60 * 1000;

    transport  = axios.create({
      baseURL,
      timeout
    });

    transport.interceptors.request.use();

    transport.interceptors.response.use(
      (res: AxiosResponse<ResponseBase>) =>{
        if (res.status !== 200) throw new Error(res.statusText);
        const { code, msg } = res.data;
        if (code !== 0) throw new Error(msg);
        return res;
      }, 
      err=>{
        throw err;
    });
  }
  return transport;
}
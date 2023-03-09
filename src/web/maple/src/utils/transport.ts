import type { ResponseBase } from '@/model/response-base';
import axios, { type AxiosResponse } from 'axios';

import { CONFIG } from './configuration';

const baseURL = CONFIG.get<string>('api');
const timeout = 5 * 60 * 1000;

const transport  = axios.create({
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

export { transport };
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";

const baseUrl = "http://127.0.0.1:3000/v1/auth";

type RequestType = "GET" | "POST" | "PATCH" | "DELETE";

export function Request<T>(
  path: string, token:string, type: RequestType, body?: T, params?: any): Promise<T | void> {
  return new Promise<T | void>((resolve, reject) => {

      console.log('type',type)
      console.log('path',path)
      console.log('params',params)
      console.log('body',body)
      console.log('token',token)
      
    axios({
      method: type,
      url: `${baseUrl}/${path}`,
      params: params,
      data: body,
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    }).then((response: AxiosResponse<T>) => {
      if (response.status >= 200 && response.status < 400) { 
        resolve(response.data);
      } else {
        reject();
      }
    });
  });
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";

const baseUrl = "http://127.0.0.1:3000/v1/auth";

type RequestType = "GET" | "POST" | "PATCH" | "DELETE";

export function Request<T, R>(
  path: string, token:string, type: RequestType, body?: T, params?: any): Promise<R> {
  return new Promise<R>((resolve, reject) => {

    axios({
      method: type,
      url: `${baseUrl}/${path}`,
      params: params,
      data: body,
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    }).then((response: AxiosResponse<R>) => {
      if (response.status >= 200 && response.status < 400) { 
        resolve(response.data);
      } else {
        reject();
      }
    }).catch(reason => {
      reject(reason);
    });
  });
}
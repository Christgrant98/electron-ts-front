/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";

const baseUrl = "http://127.0.0.1:6061";

type RequestType = "GET" | "POST" | "PATCH" | "DELETE";

export function Request<T>(
  path: string, token:string, type: RequestType, params?: any, body?: T): Promise<T | void> {
  return new Promise<T | void>((resolve, reject) => {
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

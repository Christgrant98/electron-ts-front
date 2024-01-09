import { ILoginUserPayload, IRegisterUserPayload } from "../Interfaces/User"
import { Request } from "./Network"


export const loginUser = (payload: ILoginUserPayload) => {
  return Request("login", "POST", undefined, payload)
}


export const RegisterUser = (payload: IRegisterUserPayload) => {
  return Request("register", "POST", undefined, payload)
}
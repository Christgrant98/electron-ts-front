import { ILoginUserPayload, IRegisterUserPayload } from "../Interfaces/User"
import { Request } from "./Network"


export const loginUser = (payload: ILoginUserPayload, token: string) => {
  return Request("login", token, "POST", payload)
}


export const RegisterUser = (payload: IRegisterUserPayload, token: string) => {
  return Request("register", token, "POST", payload)
}
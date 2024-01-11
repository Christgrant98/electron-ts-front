import { ILoginUserPayload, IRegisterUserPayload } from "../Interfaces/User"
import { Request } from "./Network"


export const loginUser = (payload: ILoginUserPayload) => {
  console.log('login payload in loginUser API funct', payload)
  return Request("login", '', "POST", payload)
}


export const RegisterUser = (payload: IRegisterUserPayload,) => {
  console.log('register payload in register API funct', payload)
  return Request("register", '', "POST", payload)
}
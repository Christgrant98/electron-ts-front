import { ILoginUserPayload, IRegisterUserPayload } from "../Interfaces/User"
import { Request } from "./Network"


export const loginUser = <R>(payload: ILoginUserPayload) => {
  return Request<ILoginUserPayload, R>("login", '', "POST", payload)
}


export const RegisterUser = <R>(payload: IRegisterUserPayload,) => {
  return Request<IRegisterUserPayload, R>("register", '', "POST", payload)
}
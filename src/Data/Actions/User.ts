import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiUser, ILoginUserPayload, IRegisterUserPayload } from "../Interfaces/User";
import * as UserAPI from "../API/User"
import { State } from "../Objects/State";
import { getAuthToken } from "../Selectors/User";

export const loginUserAsync = createAsyncThunk<IApiUser, ILoginUserPayload, { state: State }>(
  "LOGIN_USER",
  async (payload: ILoginUserPayload, { getState }) => {
    const authToken = getAuthToken(getState());

    if (authToken !== undefined) {
      return UserAPI.loginUser(payload, authToken) as Promise<IApiUser>;
    } else {
      throw new Error("Token is not available");
    }
  }
);

export const registerUserAsync = createAsyncThunk<IApiUser, IRegisterUserPayload, { state: State }>(
  "REGISTER_USER",
  async (payload: IRegisterUserPayload, { getState }) => {
    const authToken = getAuthToken(getState());
    
    if (authToken !== undefined){
      return UserAPI.RegisterUser(payload, authToken) as Promise<IApiUser>;
    } else {
      throw new Error("Token is not available");
    }
  }
);
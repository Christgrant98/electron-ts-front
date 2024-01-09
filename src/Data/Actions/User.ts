import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiUser, ILoginUserPayload, IRegisterUserPayload } from "../Interfaces/User";
import * as UserAPI from "../API/User"
import { State } from "../Objects/State";
import { getAuthToken } from "../Selectors/User";

export const loginUserAsync = createAsyncThunk<IApiUser, ILoginUserPayload, { state: State }>(
  "LOGIN_USER",
  async (payload: ILoginUserPayload, { getState }) => {
    return UserAPI.loginUser(payload, getAuthToken(getState())) as Promise<IApiUser>;
  }
);


export const registerUserAsync = createAsyncThunk<IApiUser, IRegisterUserPayload, { state: State }>(
  "REGISTER_USER",
  async (payload: IRegisterUserPayload, { getState }) => {
    return UserAPI.RegisterUser(payload, getAuthToken(getState())) as Promise<IApiUser>;
  }
);
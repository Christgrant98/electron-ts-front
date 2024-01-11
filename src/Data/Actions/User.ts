/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiUser, ILoginUserPayload, IRegisterUserPayload } from "../Interfaces/User";
import * as UserAPI from "../API/User"
import { State } from "../Objects/State";
import { getAuthToken } from "../Selectors/User";
import { notification } from "antd";

export const loginUserAsync = createAsyncThunk<IApiUser, ILoginUserPayload, { state: State }>(
  "LOGIN_USER",
  async (payload: ILoginUserPayload, { getState, rejectWithValue }) => {
    
    try{
      const authToken = getAuthToken(getState());

      if (authToken !== undefined) {
        const user = UserAPI.loginUser(payload, authToken) as Promise<IApiUser>;
        
        notification.success({
          message: `Session started for: ${payload.email}`,
        });

        return user
      } else {
        throw new Error("Token is not available");
      } 
    }catch (error: any) {
        notification.error({
          message: 'Error during user login',
          description: error.message,

        });
        return rejectWithValue(error.message);
      }    
    }
);

export const registerUserAsync = createAsyncThunk<IApiUser, IRegisterUserPayload, { state: State }>(
  "REGISTER_USER",
  async (payload: IRegisterUserPayload, { getState, rejectWithValue }) => {
    try {
      const authToken = getAuthToken(getState());

      if (authToken !== undefined) {
        const user = await UserAPI.RegisterUser(payload, authToken) as IApiUser;

        notification.success({
          message: `User @${payload.username} Created Successfully`,
        });

        return user;
      } else {
        throw new Error("Token is not available");
      }
    } catch (error: any) {
      notification.error({
        message: 'Error during user registration',
        description: error.message,
      });

      return rejectWithValue(error.message);
    }
  }
);

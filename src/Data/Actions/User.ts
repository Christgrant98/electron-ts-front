/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IApiUser, ILoginUserPayload, IRegisterUserPayload } from "../Interfaces/User";
import * as UserAPI from "../API/User"
import { State } from "../Objects/State";
import { notification } from "antd";

export const loginUserAsync = createAsyncThunk<IApiUser, ILoginUserPayload, { state: State }>(
  "LOGIN_USER",
  async (payload: ILoginUserPayload, { rejectWithValue }) => {
    
    try{

        const user = await UserAPI.loginUser<IApiUser>(payload);
        
        notification.success({
          message: `Session started for: ${payload.email}`,
        });

        return user
      
    }catch (error: any) {
        notification.error({
          message: 'Error during user login',
          description: 'Wrong password or email',

        });
        return rejectWithValue(error.response.data.error);
      }    
    }
);

export const registerUserAsync = createAsyncThunk<IApiUser, IRegisterUserPayload, { state: State }>(
  "REGISTER_USER",
  async (payload: IRegisterUserPayload, { rejectWithValue }) => {
    try {

        const user = await UserAPI.RegisterUser<IApiUser>(payload);

        notification.success({
          message: `User @${payload.username} Created Successfully`,
        });

        return user;
    } catch (error: any) {
      notification.error({
        message: 'Error during user registration',
        description: error.response.data.error,
      });

      return rejectWithValue(error.response.data.error);
    }
  }
);

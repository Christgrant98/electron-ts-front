import { ActionReducerMapBuilder, createReducer, PayloadAction } from '@reduxjs/toolkit';
import { IApiUser } from '../Interfaces/User';
import { loginUserAsync } from '../Actions/User';
import { UserState } from '../Objects/State';


const defaultState: UserState = {
 token: "",
 currentUser: undefined,
};

const handleLoginUserAsync = (state: UserState, action: PayloadAction<IApiUser>) => {
  if (!action.payload) {
    return state;
  }

    const { user: {username, uuid, email}, token } = action.payload;

    const newUser = {
      uuid,
      username,
      email
    }

   state.currentUser = newUser;
   state.token = token;
  }
 

const reducerBuilder = (builder: ActionReducerMapBuilder<UserState>) => {
  builder.addCase(loginUserAsync.fulfilled.type, handleLoginUserAsync) 
};

export default createReducer(defaultState, reducerBuilder);

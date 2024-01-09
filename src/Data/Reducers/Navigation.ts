import { ActionReducerMapBuilder, PayloadAction, createReducer } from "@reduxjs/toolkit";
import { setActivePage } from "../Actions/Navigation";
import update from 'immutability-helper';
import { NavigationState, Pages } from "../Objects/State";

const defaultState: NavigationState = {
  currentPage : Pages.LOGIN
} 

const handleSetActivePage = (state: NavigationState, action: PayloadAction<Pages>) => {
  if (!action?.payload) {
    return state
  }

  return update(state, {
    currentPage: {
      $set: action?.payload
    }
  });
}

const reducerBuilder = (builder: ActionReducerMapBuilder<NavigationState>) => {
  builder.addCase(setActivePage.type, handleSetActivePage);
}

export default createReducer(defaultState, reducerBuilder)
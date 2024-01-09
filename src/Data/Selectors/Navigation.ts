import { createSelector } from "@reduxjs/toolkit";
import { NavigationState, State } from "../Objects/State";

const getNavState = (state: State) => {
  return state.Navigation;
}

const currentPage = (state: NavigationState) => {
  return state.currentPage;
}

export const getCurrentPage = createSelector(
  getNavState, 
  currentPage
);
import { createAction } from "@reduxjs/toolkit";
import { Pages } from "../Objects/State";

export const setActivePage = createAction<Pages>("SET_ACTIVE_PAGE")

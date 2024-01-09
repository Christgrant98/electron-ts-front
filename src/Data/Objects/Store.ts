import { configureStore } from "@reduxjs/toolkit";
import userReducer from  "../Reducers/User"
import navReducer from  "../Reducers/Navigation"


const reducerMap = {
  User: userReducer,
  Navigation: navReducer,
};

export const store = configureStore({
  reducer: reducerMap, 
});

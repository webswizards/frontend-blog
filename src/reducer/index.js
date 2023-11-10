import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice";
import categorySlice from "../slices/categorySlice";
import postSlice from "../slices/postSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categorySlice,
  post: postSlice,
});

export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/authSlice";
import userSlice from "./slice/usersSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});

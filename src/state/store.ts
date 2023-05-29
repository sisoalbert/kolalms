import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the useDispatch and useSelector types
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;

import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

// Define the useDispatch and useSelector types
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Define the reducers
const reducers = combineReducers({
  auth: authReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export default store;

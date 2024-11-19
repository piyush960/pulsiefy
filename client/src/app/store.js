import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from "./services/authApi";
import authReducer from './features/authSlice'
import { appApi } from "./services/appApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [appApi.reducerPath]: appApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware, appApi.middleware]),
})

setupListeners(store.dispatch)
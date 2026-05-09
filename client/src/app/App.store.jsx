import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../features/auth/slice/auth.slice.js"

export const store = configureStore({
    reducer: {
        auth: AuthReducer
    }
})
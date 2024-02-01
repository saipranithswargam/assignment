import { configureStore } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";
import userReducer from "../features/userSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat([
            reduxLogger,
        ]),
});

export default store;

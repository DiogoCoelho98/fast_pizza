import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/UserSlice";

const store = configureStore({
    reducer: {
        user: userReducer
    }
});

export default store;
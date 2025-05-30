import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import movieReducer from "./MoviesSlice";

const appStore = configureStore({
    reducer :{
        user : UserReducer,
        movies : movieReducer,
    }
})
export default appStore;
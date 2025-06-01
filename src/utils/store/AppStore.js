import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import movieReducer from "./MoviesSlice";
import GptReducer from "./GptSlice";
import LangSliceReducer from "./LangSlice";

const appStore = configureStore({
    reducer :{
        user : UserReducer,
        movies : movieReducer,
        Gpt : GptReducer,
        multiLanguage : LangSliceReducer,
    }
})
export default appStore;
import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
    name : "multiLanguage",
    initialState:{
        language: "en"
    },
    reducers:{
        preferLanguage : (state,action)=>{
            state.language = action.payload;
        }
    }
})

export const {preferLanguage} = langSlice.actions;
export default langSlice.reducer;
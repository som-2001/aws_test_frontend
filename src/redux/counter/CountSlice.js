import { createSlice } from "@reduxjs/toolkit"

const initialState={
    count:0
}

export const CountSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.count=state.count+1;
        }
    }
})

export const {increment}=CountSlice.actions;
export default CountSlice.reducer;
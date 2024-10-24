import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from './counter/CountSlice';

export const Store=configureStore({
    reducer:{
        counter:CounterReducer
    }
})
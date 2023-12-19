import { configureStore } from "@reduxjs/toolkit";
import optionReducers from "./slice/action";

const appStore = configureStore({
    reducer: optionReducers,
});

export { appStore };

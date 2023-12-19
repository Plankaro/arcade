"use client";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import { appStore } from ".";
const AppProvider = ({ children }: { children: ReactNode }) => {
    return <Provider store={appStore}>{children}</Provider>;
};

export default AppProvider;

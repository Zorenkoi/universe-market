"use client";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const ReduxProvider = ({ children }: PropsWithChildren) => {
  return (
    // <PersistGate persistor={persistor}>
    <Provider store={store}>{children}</Provider>
    // </PersistGate>
  );
};

export default ReduxProvider;

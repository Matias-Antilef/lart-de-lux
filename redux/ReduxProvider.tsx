"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { ReactNode } from "react";

function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <div>
      <Provider store={store}>{children}</Provider>
    </div>
  );
}
export default ReduxProvider;

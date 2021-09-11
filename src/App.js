import React from "react";
import { GlobalProvider } from "./context/Provider";
import { AppNavContainer } from "./navigations";

export const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

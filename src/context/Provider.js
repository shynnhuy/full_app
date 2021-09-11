import React, { createContext, useContext, useReducer } from "react";
import { authState, contactState } from "./initialStates";
import { authReducer, contactReducer } from "./reducers";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [auth, authDispatch] = useReducer(authReducer, authState);
  const [contact, contactDispatch] = useReducer(contactReducer, contactState);
  return (
    <GlobalContext.Provider
      value={{ auth, authDispatch, contact, contactDispatch }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalContext);
};

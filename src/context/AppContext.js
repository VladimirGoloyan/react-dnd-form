import { createContext } from "react";

export const initialState = {
  tree: null,
  activeElement: null,
};

export const AppContext = createContext(initialState);

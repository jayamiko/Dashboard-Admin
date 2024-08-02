import { createContext, useReducer } from "react";
import { ROLE } from "../constants/role";
import { STATE } from "../constants/state";

const initialValue = {
  isLogin: false,
  user: {
    email: "",
    password: "",
    role: ROLE.Guest,
  },
};

export const AuthContext = createContext();

const Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case STATE.AUTH_SUCCESS:
    case STATE.LOGIN:
      return {
        isLogin: true,
        user: payload,
      };
    case STATE.AUTH_ERROR:
    case STATE.AUTH_ERROR:
      return initialValue;
    default:
      throw new Error("type doesn't match cases");
  }
};

export const AuthContextProvider = ({ children }) => {
  const [stateAuth, dispatch] = useReducer(Reducer, initialValue);

  return (
    <AuthContext.Provider value={{ stateAuth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

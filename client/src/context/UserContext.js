import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducers";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { LOGIN, LOGOUT } from "./actions";
import Auth from "../utils/auth";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import { useNavigate } from "react-router-dom";

// Create our user context using React.CreateContext()
export const UserContext = createContext();

// Create a custom hook that allows easy access to our UserContext values
export const useUser = () => useContext(UserContext);
const initialState = { user: null, logged_in: false };
// Creating our user provider. Accepts an argument of "props"
export default function UserProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  //gets user info
  const { data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data) {
      dispatch({ type: LOGIN, payload: data.me });
    }
  }, []); // want to update state on any change

  return <UserContext.Provider value={[state, dispatch]} {...props} />;
}
//talks to graphql and submits user info
//save user to state and redirects
export function useLogin() {
  //graphql mutation
  const [loginUser] = useMutation(LOGIN_USER);
  //router hook
  const navigate = useNavigate();
  //user state
  const [_, dispatch] = useUser();

  const login = async (formState) => {
    const result = await loginUser({
      variables: { ...formState },
    });
    dispatch({ type: LOGIN, payload: result.data.login.user });
    localStorage.setItem("id_token", result.data.token);
    navigate("/", { replace: true });
  };
  return login;
}

export function useLogout() {
  //need to return a function that will clear the user token from local storage
  //navigate back home
  const logout = () => {
    localStorage.clear();
    window.location = "/";
  };
  return logout;
}

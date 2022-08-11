import React, { createContext, useContext } from 'react';

// Create our user context using React.CreateContext()
export const UserContext = createContext();

// Create a custom hook that allows easy access to our UserContext values
export const useUser = () => useContext(UserContext);

// Creating our user provider. Accepts an argument of "props"
export default function UserProvider(props) {
  const user = null;
  const logged_in = false;

  return <UserContext.Provider value={{ user, logged_in }} {...props} />;
}
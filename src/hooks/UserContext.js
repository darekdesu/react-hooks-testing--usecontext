import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = props => {
  const [user, setUser] = useState(props.user);

  const setUserName = name =>
    setUser({ ...user, name: name.trim() || user.name });

  const value = {
    user,
    setUserName
  };

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

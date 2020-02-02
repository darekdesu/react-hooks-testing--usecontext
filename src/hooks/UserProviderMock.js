import React from "react";
import PropTypes from "prop-types";

import { UserProvider } from "./UserContext";

const UserProviderMock = ({ children, user }) => (
  <UserProvider user={user}>{children}</UserProvider>
);

UserProviderMock.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  children: PropTypes.node.isRequired
};

UserProviderMock.defaultProps = {
  user: {
    name: "Gilbert NOT Garfield!",
    image: "cat.jpg"
  }
};

export default UserProviderMock;

import React from "react";
import PropTypes from "prop-types";

import { LanguageProvider } from "./LanguageContext";

const LanguageProviderMock = ({ children, language }) => (
  <LanguageProvider language={language}>{children}</LanguageProvider>
);

LanguageProviderMock.propTypes = {
  language: PropTypes.string.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }),
  children: PropTypes.node.isRequired
};

LanguageProviderMock.defaultProps = {
  language: "de"
};

export default LanguageProviderMock;

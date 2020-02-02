import React, { useState, useContext, createContext } from "react";
import PropTypes from "prop-types";

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

export const LanguageProvider = props => {
  const [language, setLanguage] = useState(props.language);

  const value = {
    language,
    setLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {props.children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  language: PropTypes.string.isRequired
};

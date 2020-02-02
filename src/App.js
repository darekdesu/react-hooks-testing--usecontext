import React from "react";
import "./styles.css";

import { UserProvider } from "./hooks/UserContext";
import { LanguageProvider } from "./hooks/LanguageContext";
import User from "./components/User";

// static data example, e.g. may be fetched from external source
const externalData = {
  language: "en",
  user: {
    name: "Garfield",
    image: "cat.jpg"
  }
};

export default () => {
  return (
    <div className="App">
      <h1>React Hooks Testing - useContext</h1>
      <UserProvider user={externalData.user}>
        <LanguageProvider language={externalData.language}>
          <User />
        </LanguageProvider>
      </UserProvider>
    </div>
  );
};

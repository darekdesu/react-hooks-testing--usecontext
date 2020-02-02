import React from "react";

import { useLanguage } from "../hooks/LanguageContext";

export default () => {
  const { language, setLanguage } = useLanguage();

  const handleSelectChange = event => setLanguage(event.target.value);

  return (
    <div className="box" data-testid="LanguageComponent">
      <h3>&lt;Language&gt;</h3>
      <select
        data-testid="languageSelect"
        value={language}
        onChange={handleSelectChange}
      >
        <option value="pl">Polish</option>
        <option value="en">English</option>
        <option value="de">German</option>
      </select>
    </div>
  );
};

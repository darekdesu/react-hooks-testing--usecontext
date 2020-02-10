import React from "react";

import Profile from "./Profile";
import Language from "./Language";

export default () => (
  <div className="box">
    <h2>&lt;User&gt;</h2>
    <span>Here you can change your data and preferences.</span>
    <Profile />
    <Language />
  </div>
);

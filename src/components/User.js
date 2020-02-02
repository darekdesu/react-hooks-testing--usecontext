import React from "react";

import UserDetails from "./UserDetails";
import Language from "./Language";

export default () => (
  <div className="box">
    <h2>&lt;User&gt;</h2>
    <span>Here you can change your data and preferences.</span>
    <UserDetails />
    <Language />
  </div>
);

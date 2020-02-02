import React, { useRef } from "react";

import { useUser } from "../hooks/UserContext";

export default () => {
  const { user, setUserName } = useUser();
  const defaultInputName = "";
  const inputName = useRef(defaultInputName);

  const handleChange = () => {
    setUserName(inputName.current.value);
    inputName.current.value = defaultInputName; // reset input after submit
  };

  return (
    <div className="box" data-testid="UserDetailsComponent">
      <h3>&lt;Profile&gt;</h3>
      <img alt="avatar" src={user.image} />
      <h3>Current name: {user.name}</h3>
      <div>
        <input
          data-testid="username"
          type="text"
          ref={inputName}
          placeholder="New username"
          maxlength="20"
        />
        <button type="button" onClick={handleChange} value="Change">
          Change name
        </button>
      </div>
    </div>
  );
};

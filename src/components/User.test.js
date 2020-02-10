import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserProviderMock from "../hooks/UserProviderMock";
import LanguageProviderMock from "../hooks/LanguageProviderMock";
import User from "./User";

const createContainer = () =>
  render(
    <UserProviderMock>
      <LanguageProviderMock>
        <User />
      </LanguageProviderMock>
    </UserProviderMock>
  );

test("should render initial text", () => {
  const { getByText } = createContainer();

  expect(
    getByText(/Here you can change your data and preferences./)
  ).toBeInTheDocument();
});

test("should render UserDetails and Languange components", () => {
  const { getByTestId } = createContainer();

  expect(getByTestId("ProfileComponent")).toBeInTheDocument();
  expect(getByTestId("LanguageComponent")).toBeInTheDocument();
});

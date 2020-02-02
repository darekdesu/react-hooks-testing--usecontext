import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LanguageProviderMock from "../hooks/LanguageProviderMock";
import Language from "./Language";

const createContainer = ({ languageProviderProps }) =>
  render(
    <LanguageProviderMock {...languageProviderProps}>
      <Language />
    </LanguageProviderMock>
  );

test("should render with default language", () => {
  const { getByDisplayValue } = createContainer({});

  expect(getByDisplayValue("German")).toBeInTheDocument();
});

test("should render with custom language", () => {
  const { getByDisplayValue } = createContainer({
    languageProviderProps: { language: "pl" }
  });

  expect(getByDisplayValue("Polish")).toBeInTheDocument();
});

test("should change language", () => {
  const { getByTestId, getByDisplayValue } = createContainer({});

  fireEvent.change(getByTestId("languageSelect"), { target: { value: "de" } });

  expect(getByDisplayValue("German")).toBeInTheDocument();
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserProviderMock from "../hooks/UserProviderMock";
import Profile from "./Profile";

const createContainer = ({ userProviderProps }) =>
  render(
    <UserProviderMock {...userProviderProps}>
      <Profile />
    </UserProviderMock>
  );

test("should render with default user name", () => {
  const { getByText } = createContainer({});

  expect(getByText(/Gilbert NOT Garfield!/)).toBeInTheDocument();
});

test("should render with custom user name", () => {
  const { getByText } = createContainer({
    userProviderProps: { user: { name: "Ann" } }
  });

  expect(getByText(/Ann/)).toBeInTheDocument();
});

test("should change name", () => {
  const { getByText, getByTestId } = createContainer({});

  fireEvent.change(getByTestId("username"), { target: { value: "John" } });
  fireEvent.click(getByText(/Change name/));

  expect(getByText(/John/)).toBeInTheDocument();
});

test("should change name and trim spaces", () => {
  const { getByText, getByTestId } = createContainer({});

  fireEvent.change(getByTestId("username"), {
    target: { value: "   John Lenon  " }
  });
  fireEvent.click(getByText(/Change name/));

  expect(getByText(/John Lenon/)).toBeInTheDocument();
});

test("should preserve previous name if changed name is empty", () => {
  const { getByText, getByTestId } = createContainer({});

  fireEvent.change(getByTestId("username"), { target: { value: "" } });
  fireEvent.click(getByText(/Change name/));

  expect(getByText(/Gilbert NOT Garfield!/)).toBeInTheDocument();
});

test("should preserve previous name if changed name has only spaces", () => {
  const { getByText, getByTestId } = createContainer({});

  fireEvent.change(getByTestId("username"), { target: { value: "   " } });
  fireEvent.click(getByText(/Change name/));

  expect(getByText(/Gilbert NOT Garfield!/)).toBeInTheDocument();
});

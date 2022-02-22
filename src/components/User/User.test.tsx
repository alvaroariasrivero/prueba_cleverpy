import * as React from "react";
import { render, screen } from '@testing-library/react';
import User from "./User";

describe("Card", () => {
  test("matches snapshot", () => {
    render(<User />);
    expect(screen).toMatchSnapshot();
  });
});

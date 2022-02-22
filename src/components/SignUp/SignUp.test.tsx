import * as React from "react";
import { render, screen } from '@testing-library/react';
import SingUp from "./SignUp";

describe("SingUp", () => {
  test("matches snapshot", () => {
    render(<SingUp />);
    expect(screen).toMatchSnapshot();
  });
});

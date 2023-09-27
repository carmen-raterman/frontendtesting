/**
 * @jest-environment jsdom
 */

import React from "react";

import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import App from "../App";

describe("App", () => {
  test("renders", () => {
    const app = render(<App />);

    expect(app).not.toBeNull();
  });
});

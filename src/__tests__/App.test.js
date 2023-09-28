/**
 * @jest-environment jsdom
 */
//we have test: jest in package.json file

import React from "react";

import { render, screen, fireEvent } from "@testing-library/react";

import renderer from "react-test-render"; //npm install react-test-render, helps you to create your snapshots

import "@testing-library/jest-dom";

import App from "../App";

describe("<App />", () => {
  test("renders without crashing", () => {
    render(<App />);

  });

  test('button text starts with "count is 0"', () =>
  {
    //1. render app
    render(<App />);

    //2. select the button element

      //few ways to select this element, getByRole, getByText, getByLabelText, getByTestID
      //1. getByRole- if it does not have a role attribute it would take the HTML tag
      //2. getByText- takes in a string and checks for that string OR a regex
      //3. getByLabelText
      //4. getByTestID
      //5. getAllBy.... or even getAllByTestID

      // const button = screen.getByRole("button");  NUMBER 1 ex
      // const button = screen.getByText("count is 0"); NUMBER 2 ex
    const button = screen.getByTestId("lorenzo")

    //3. test the click button (test clicks the button)
    fireEvent.click(button);
      //fireEvent.click(button); if you were to put this here, the test in step 4 would fail because the count should be 2


    //4. check if the button text is "count is 1" because it shouldve incremented
    expect(button).toHaveTextContent("count is 1")
    // expect(button).not.toHaveTextContent("count is 1") for the negative version, just add the .not.

  })

  test("typing into the input field", () => {
    //1. render the component
    render(<App />)

    //2. select the input field
    const input = screen.getByRole("input");

    //event.target.value
    fireEvent.change(input, { target: { value: "some input"} });

    expect(input).toHaveValue("some input");
  })

  test("snapshot test", () => {
    const reactTree = renderer.create(<App />);

    //if running for the first time, it takes a snapshot of the rendered tree, call it X snapshot
    //if running for a second time and onwards, it takes a snapshot called Y, it compares X with Y
    // SHOULD ALWAYS PASS THE FIRST TIME
    // " npm test -- u " will update the snapshot
    expect(reactTree).toMatchSnapshot();

  })



});

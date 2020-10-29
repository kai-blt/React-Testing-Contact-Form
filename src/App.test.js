import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe('Form Field Testing', () => {

  test('First Name input exists', () => {
    render(<App/>);
    //Grab text input by placeholder
    const firstName = screen.getAllByPlaceholderText(/Edd/i);
    screen.debug(firstName)
  });

  test('First Name can be typed into', () => {
    render(<App/>);
    const firstName = screen.getByPlaceholderText(/Edd/i);
    //It should be empty to start
    expect(firstName).not.toHaveValue()
    //Type into field
    fireEvent.change(firstName, {target: {name: 'firstName', value: 'Brendan'}})
    //Print out debug
    screen.debug(firstName);
    //Check that correct value was input
    expect(firstName).toHaveValue('Brendan');
  });

  test('Last Name can be typed into', () => {
    render(<App/>);
    const firstName = screen.getByPlaceholderText(/Burke/i);
    //It should be empty to start
    expect(firstName).not.toHaveValue()
    //Type into field
    fireEvent.change(firstName, {target: {name: 'firstName', value: 'LT'}})
    //Print out debug
    screen.debug(firstName);
    //Check that correct value was input
    expect(firstName).toHaveValue('LT');
  });



})
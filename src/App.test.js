import React from "react";
import { render, screen, fireEvent, getByRole } from "@testing-library/react";
import App from "./App";

describe('Form Field Testing', () => {

  test('Component Exists', () => {
    render(<App/>)
  })

  test('First Name can be typed into', () => {
    render(<App/>);
    const firstName = screen.getByLabelText(/First Name/i);
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
    const lastName = screen.getByLabelText(/Last Name/i);
    //It should be empty to start
    expect(lastName).not.toHaveValue()
    //Type into field
    fireEvent.change(lastName, {target: {name: 'lastName', value: 'LT'}})
    //Print out debug
    screen.debug(lastName);
    //Check that correct value was input
    expect(lastName).toHaveValue('LT');
  });

  test('Email can be typed into', () => {
    render(<App/>);
    const email = screen.getByPlaceholderText(/Burke/i);
    //It should be empty to start
    expect(email).not.toHaveValue()
    //Type into field
    fireEvent.change(email, {target: {name: 'email', value: 'email@email.com'}})
    //Print out debug
    screen.debug(email);
    //Check that correct value was input
    expect(email).toHaveValue('email@email.com');
  });

  test('Validation appears when nothing filled out in any fields and submit pressed', () => {
    render(<App />);
    
    //Get Button
    const button = screen.getByRole('input', {name: /submit/i});   

    fireEvent.click(button);
    
    const errorMessages = screen.getByDisplayValue(/Looks like there was an error: required/i)

    // console.log(errorMessages)


  })

})
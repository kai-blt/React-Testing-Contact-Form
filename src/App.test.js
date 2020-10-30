import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm'
import { act } from "react-dom/test-utils";

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
    //Check that correct value was input
    expect(lastName).toHaveValue('LT');
  });

  test('Email can be typed into', () => {
    render(<App/>);
    const email = screen.getByLabelText(/Email/i);
    //It should be empty to start
    expect(email).not.toHaveValue()
    //Type into field
    fireEvent.change(email, {target: {name: 'email', value: 'email@email.com'}})
    //Check that correct value was input
    expect(email).toHaveValue('email@email.com');
  });

  test('Message field can be typed into', () => {
    render(<App/>);
    const message = screen.getByLabelText(/Message/i);
    //It should be empty to start
    expect(message).not.toHaveValue()
    //Type into field
    fireEvent.change(message, {target: {name: 'message', value: 'this is a message'}});
    //Check that correct value was input
    expect(message).toHaveValue('this is a message');
  });

  test('Filling out form completely and submitting results in json printout', async () => {
    render(<App/>);
    const firstName = screen.getByLabelText(/First Name/i);
    const lastName = screen.getByLabelText(/Last Name/i);
    const email = screen.getByLabelText(/Email/i);
    const message = screen.getByLabelText(/Message/i);


    fireEvent.change(firstName, {target: {name: 'firstName', value: 'Brendan'}})
    fireEvent.change(lastName, {target: {name: 'lastName', value: 'LT'}})
    fireEvent.change(email, {target: {name: 'email', value: 'email@email.com'}})
    fireEvent.change(message, {target: {name: 'message', value: 'this is a message'}})


    const button = screen.getByTestId(/submit/i);  
    fireEvent.click(button);      
    
    await waitFor(() => {
      expect(screen.getByText(/Bre/i)).toBeInTheDocument();
    });
  })

})
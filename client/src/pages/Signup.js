import React, { useState } from "react";
import { Box, FormControl, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    // console.log(name, value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
          // ...formState,
        },
      });
      console.log(response);
      const token = response.data.addUser.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className="signup" onSubmit={handleFormSubmit}>
        <div className="signup-title">
          <h1>Hello signup!</h1>
          <p>Welcome to Taking Your Stories.</p>
        </div>
        <div className="signup-content">
          <TextField
            id="outlined-email-input"
            name="email"
            label="email"
            type="text"
            onChange={handleChange}
          />
          <TextField
            id="outlined-username-input"
            name="username"
            label="username"
            type="text"
            onChange={handleChange}
          />
          <TextField
            id="outlined-password-input"
            name="password"
            label="password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button variant="filled" type="submit">
            Signup
          </Button>
        </div>
        <div>
          <Link to="/login">Already have an account</Link>
        </div>
      </form>
    </>
  );
}

export default Signup;

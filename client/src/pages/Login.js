import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { error }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    console.log(event);

    try {
      const response = await login({
        variables: {
          email: formState.email,
          password: formState.password,
          // ...formState,
        },
      });
      console.log(response);
      const token = response.data.login.token;
      Auth.login(token);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="login" onSubmit={handleFormSubmit}>
      <div className="login-title">
        <h1>Hello login!</h1>
        <p>Welcome to Taking Your Stories.</p>
      </div>
      <div className="login-content">
        <TextField
          id="outlined-email-input"
          name="email"
          label="email"
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
          Login
        </Button>
      </div>
      <div>
        <Link to="/signup">Don't have an account</Link>
      </div>
    </form>
  );
}

export default Login;

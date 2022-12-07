import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
      className="login"
    >
      <div className="login-title">
        <h1>Hello login!</h1>
        <p>Welcome to Taking Your Stories.</p>
      </div>
      <div className="login-content">
        <TextField id="outlined-email-input" label="Email" type="text" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button variant="filled">Login</Button>
      </div>
      <div>
        <Link to="/signup">Don't have an account</Link>
      </div>
    </Box>
  );
}

export default Login;

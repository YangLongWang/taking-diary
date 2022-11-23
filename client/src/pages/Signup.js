import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      autoComplete="off"
      className="signup"
    >
      <div className="signup-title">
        <h1>Hello signup!</h1>
        <p>Welcome to Taking Your Stories.</p>
      </div>
      <div className="signup-content">
        <TextField id="outlined-email-input" label="Email" type="text" />
        <TextField id="outlined-username-input" label="Username" type="text" />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
      </div>
      <div>
        <Link to="/login">Already have an account</Link>
      </div>
    </Box>
  );
}

export default Signup;

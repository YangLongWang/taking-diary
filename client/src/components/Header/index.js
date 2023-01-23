import React from "react";
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import "./index.css";

export default function Header() {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  }

  return (
    <Box sx={{ mb: 2 }} className="header">
      <div className="title">
        <Typography variant="h3" sx={{ mt: 2 }}>
          Diary Maker
        </Typography>
      </div>

      <div className="register">
        <Breadcrumbs aria-label="breadcrumb">
          <Button>
            <Link to="/">Home</Link>
          </Button>
          {Auth.loggedIn() ? (
            <Button onClick={logout}>
              <Link to="/">Logout</Link>
            </Button>
          ) : (          
            <>
              <Button>
                <Link to="/signup">Signup</Link>
              </Button>
              <Button>
                <Link to="/login">Login</Link>
              </Button>
            </>
          )}
        </Breadcrumbs>
      </div>
    </Box>
  );
}

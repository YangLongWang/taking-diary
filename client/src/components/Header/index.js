import React from "react";
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./index.css";

export default function Header() {
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
          <Button>
            <Link to="/signup">Signup</Link>
          </Button>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </Breadcrumbs>
      </div>
    </Box>
  );
}

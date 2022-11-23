import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";

import "./index.css";

export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>Diary Maker</h1>
      </div>

      <div className="register">
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/">Home</Link>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}

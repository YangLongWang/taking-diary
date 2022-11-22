import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import "./index.css";

import Login from "../../pages/Login";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
  if (event.target.text === "Login") {
    return <Login />;
  }
}

export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>Diary Maker</h1>
      </div>

      <div className="register" role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="#000000" href="/">
            MUI
          </Link>
          <Link underline="hover" color="#000000" href="/signup">
            Signup
          </Link>
          <Link underline="hover" color="#000000" href="/login">
            Login
          </Link>
        </Breadcrumbs>
      </div>
    </div>
  );
}

import React from "react";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Typography align="center" sx={{ mt: 2 }}>
      {" "}
      &copy;{new Date().getFullYear()} Longyang Wang
    </Typography>
  );
}

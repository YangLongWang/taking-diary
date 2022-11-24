import React from "react";
import { Typography, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          my: 2,
          position: "absolute",
          bottom: 0,
        }}
      >
        {" "}
        &copy;{new Date().getFullYear()} Longyang Wang
      </Typography>
    </Box>
  );
}

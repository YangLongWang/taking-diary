import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Time() {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Today:{" "}
        {`${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`}
      </Typography>
    </>
  );
}

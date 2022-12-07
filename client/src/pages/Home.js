import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Journal from "../components/Journal";

function Home() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography>Today:</Typography>
        <Typography></Typography>
        <Journal />
      </Box>

      <Button variant="outlined">add</Button>
    </>
  );
}

export default Home;

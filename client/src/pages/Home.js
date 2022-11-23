import React from "react";
import { Box, Typography, Container, Button } from "@mui/material";

function Home() {
  return (
    <>
      <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }}>
        <Typography variant="h4">Hello! Having a nice day!</Typography>
      </Box>
      <Button variant="outlined">add</Button>
    </>
  );
}

export default Home;

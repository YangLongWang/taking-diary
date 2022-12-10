import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import Journal from "../components/Journal";
import Time from "../components/Time";

function Home() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      mt={2}
    >
      <Time />
      <Journal />
      <Button variant="outlined">add</Button>
    </Grid>
  );
}

export default Home;

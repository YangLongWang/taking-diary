import React from "react";
import { Box, Typography } from "@mui/material";

function Journal() {
  return (
    <Box sx={{ width: "100%", maxWidth: 500 }}>
      <Typography variant="subtitle1" gutterBottom>
        Day 1
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ width: "100%", maxWidth: 500 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
    </Box>
  );
}

export default Journal;

import React from "react";
import { Box, Typography } from "@mui/material";

function Journal() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "600px",
        maxWidth: 500,
        // border: "1px solid black",
        borderRadius: "20px",
        padding: 3,
        mb: 2,
        bgcolor: "#66bb6a",
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        Day 1
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          width: "100%",
          // maxWidth: 500,
          height: "500px",
          // border: "1px solid black",
          borderRadius: "20px",
          padding: 2,
          bgcolor: "#81c784",
          overflowY: "scroll",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
        quam beatae rerum inventore consectetur, neque doloribus, cupiditate
        numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenebeatae rerum inventore consectetur, neque doloribus,
        cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem
        quibusdam.
      </Typography>
    </Box>
  );
}

export default Journal;

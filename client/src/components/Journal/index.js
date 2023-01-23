import React, { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";
import { useMutation } from "@apollo/client";
import { SAVEDIARY } from "../../utils/mutations";

function Journal() {
  const [diaryState, setDiaryState] = useState({
    content: "",
    date: new Date(),
  });

  console.log(diaryState);

  const [saveDiary] = useMutation(SAVEDIARY);

  const handleChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    console.log(name, value);

    setDiaryState({
      ...diaryState,
      [name]: value,
    });
  };

  const handleSave = async (event) => {
    event.preventDefault();

    const response = await saveDiary({
      variables: {
        content: diaryState.content,
        date: diaryState.date,
      },
    });

    console.log(response);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "600px",
        maxWidth: 500,
        borderRadius: "20px",
        padding: 3,
        mb: 2,
        bgcolor: "#66bb6a",
        // border: "1px solid black",
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {/* Title: Weather: Mood: */}
      </Typography>
      {/* <Typography
        variant="body1"
        gutterBottom
        sx={{
          width: "100%",
          // maxWidth: 500,
          height: "500px",
          borderRadius: "20px",
          padding: 2,
          bgcolor: "#81c784",
          // overflowY: "scroll",
          // overflow: "hidden",
          // border: "1px solid black",
        }}
      ></Typography> */}
      <TextField
        id="outlined-multiline-static"
        multiline
        rows={20}
        fullWidth
        color="success"
        focused
        onChange={handleChange}
        onBlur={handleSave}
        name="content"
      />
    </Box>
  );
}

export default Journal;

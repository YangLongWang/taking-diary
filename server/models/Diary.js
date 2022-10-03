const { Schema } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedDiaries` array in User.js
const diarySchema = new Schema({
  content: {
    type: String,
    required: true,
    min: 1,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = diarySchema;

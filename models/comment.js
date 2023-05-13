const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    post:{
    type: String,
    ref: "Post",
    },
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
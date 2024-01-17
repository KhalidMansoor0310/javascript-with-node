const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
});

export const Category = mongoose.model("Category", categorySchema);

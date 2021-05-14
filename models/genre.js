const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  genre: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Genre", GenreSchema);
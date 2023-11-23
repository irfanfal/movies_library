const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  title: { type: String, required: true },
  director: { type: Schema.ObjectId, ref: "Director", required: true },
  summary: { type: String, required: true },
  isbn: { type: String, required: true },
  genre: [{ type: Schema.ObjectId, ref: "Genre" }],
});

// Virtual for this book instance URL.
MovieSchema.virtual("url").get(function () {
  return "/catalog/movie/" + this._id;
});

// Export model.
module.exports = mongoose.model("Movie", MovieSchema);

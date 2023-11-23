const mongoose = require("mongoose");
const { DateTime } = require("luxon"); // for date handling

const Schema = mongoose.Schema;

const DirectorSchema = new Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  family_name: { type: String, required: true, maxLength: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date },
});

// Virtual for author "full" name.
DirectorSchema.virtual("name").get(function () {
  return  this.first_name + " " + this.family_name;
});

// Virtual for this author instance URL.
DirectorSchema.virtual("url").get(function () {
  return "/catalog/director/" + this._id;
});


// Export model.
module.exports = mongoose.model("Director", DirectorSchema);

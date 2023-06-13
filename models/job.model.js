const mongoose = require("mongoose");

let JobSchema = mongoose.Schema({
  company: { type: String, required: true },
  postedAt: { type: String, required: true },
  city: { type: String, required: true },
  location: { type: String, required: true },
  role: { type: String, required: true },
  level: { type: String, required: true },
  contract: { type: String, required: true },
  position: { type: String, required: true },
  language: { type: String, required: true },
});

let JobModel = mongoose.model("jobs", JobSchema);

module.exports = JobModel;

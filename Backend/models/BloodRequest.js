const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  bloodGroup: { type: String, required: true },
 // hospital: { type: String, required: true },
  contactNumber: { type: String, required: true },
  //requestDate: { type: Date, default: Date.now },
  urgencyLevel: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
});

module.exports = mongoose.model("BloodRequest", bloodRequestSchema);


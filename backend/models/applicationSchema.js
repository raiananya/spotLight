import mongoose from "mongoose";
import validator from "validator";

const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name!"],
    minilength: [3, "Name must contain at least 3 characters!"],
    maxlength: [30, "Name connot exceed 30 characters!"],
  },
  email: {
    type: String,
    validator: [validator.isEmail, "Please provide a valid email!"],
    required: [true, "Please provide your email!"],
  },
  coverLetter: {
    type: String,
    required: [true, "Please provide your cover letter!"],
  },
  phone: {
    type: Number,
    required: [true, "please provide your phone number!"],
  },
  address: {
    type: String,
    required: [true, "Please provide your address!"],
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Job Seeker"],
      required: true,
    },
  },
  employerId: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Job Seeker"],
      required: true,
    },
  },
});

export const Application = mongoose.model("Application", applicationSchema);

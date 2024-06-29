import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    picture: {
      type: String,
      trim: true,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    assigned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Report = mongoose.model("Report", reportSchema);

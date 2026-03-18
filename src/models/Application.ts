import mongoose, { Schema, Document } from "mongoose";

export interface IApplication extends Document {
  job: mongoose.Types.ObjectId;
  applicant: mongoose.Types.ObjectId;
  status: "pending" | "reviewing" | "accepted" | "rejected";
  coverLetter?: string;
  resumeUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ApplicationSchema = new Schema<IApplication>(
  {
    job: { type: Schema.Types.ObjectId, ref: "Job", required: true },
    applicant: { type: Schema.Types.ObjectId, ref: "User", required: true },
    status: {
      type: String,
      enum: ["pending", "reviewing", "accepted", "rejected"],
      default: "pending",
    },
    coverLetter: { type: String },
    resumeUrl: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Application || mongoose.model<IApplication>("Application", ApplicationSchema);

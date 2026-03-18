import mongoose, { Schema, Document } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  description: string;
  requirements: string[];
  salary?: { min: number; max: number; currency: string };
  postedBy: mongoose.Types.ObjectId;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    type: { type: String, enum: ["full-time", "part-time", "contract", "remote"], required: true },
    description: { type: String, required: true },
    requirements: [{ type: String }],
    salary: {
      min: Number,
      max: Number,
      currency: { type: String, default: "USD" },
    },
    postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);

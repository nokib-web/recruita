import mongoose, { Schema, Document, Model } from "mongoose";

export interface IJob extends Document {
  title: string;
  company: string;
  companyLogo?: string;
  description: string;
  requirements: string[];
  salaryMin: number;
  salaryMax: number;
  currency: string;
  location: string;
  type: "full-time" | "part-time" | "remote" | "contract";
  category: "Technology" | "Design" | "Marketing" | "Finance" | "Healthcare" | "Education" | "Engineering" | "Sales" | "Other";
  experienceLevel: "junior" | "mid" | "senior";
  status: "active" | "closed";
  postedBy: mongoose.Types.ObjectId;
  applicants: mongoose.Types.ObjectId[];
  views: number;
  createdAt: Date;
}

const JobSchema = new Schema<IJob>(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    companyLogo: { type: String },
    description: { type: String, required: true },
    requirements: [{ type: String }],
    salaryMin: { type: Number, required: true },
    salaryMax: { type: Number, required: true },
    currency: { type: String, default: "USD" },
    location: { type: String, required: true },
    type: {
      type: String,
      enum: ["full-time", "part-time", "remote", "contract"],
      required: true,
    },
    category: {
      type: String,
      enum: ["Technology", "Design", "Marketing", "Finance", "Healthcare", "Education", "Engineering", "Sales", "Other"],
      required: true,
    },
    experienceLevel: {
      type: String,
      enum: ["junior", "mid", "senior"],
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "closed"],
      default: "active",
    },
    postedBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
    applicants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    views: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const Job: Model<IJob> = mongoose.models.Job || mongoose.model<IJob>("Job", JobSchema);
export default Job;

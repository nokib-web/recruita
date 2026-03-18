import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password?: string;
  role: "user" | "admin";
  avatar?: string;
  skills: string[];
  location?: string;
  bio?: string;
  resumeUrl?: string;
  savedJobs: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    avatar: { type: String },
    skills: [{ type: String }],
    location: { type: String },
    bio: { type: String },
    resumeUrl: { type: String },
    savedJobs: [{ type: Schema.Types.ObjectId, ref: "Job" }],
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);
export default User;

import mongoose, { Schema, Document } from "mongoose";

export interface IReview extends Document {
  company: string;
  reviewer: mongoose.Types.ObjectId;
  rating: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema<IReview>(
  {
    company: { type: String, required: true },
    reviewer: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Review || mongoose.model<IReview>("Review", ReviewSchema);

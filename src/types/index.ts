import { IUser } from "@/models/User";
import { IJob } from "@/models/Job";
import { IApplication } from "@/models/Application";
import { IReview } from "@/models/Review";

export type { IUser as User, IJob as Job, IApplication as Application, IReview as Review };

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

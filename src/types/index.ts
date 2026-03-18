// Application Types

export interface User {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "remote";
  description: string;
  requirements: string[];
  salary?: { min: number; max: number; currency: string };
  postedBy: string | User;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Application {
  _id: string;
  job: string | Job;
  applicant: string | User;
  status: "pending" | "reviewing" | "accepted" | "rejected";
  coverLetter?: string;
  resumeUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  _id: string;
  company: string;
  reviewer: string | User;
  rating: number;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalJobs: number;
  totalUsers: number;
  totalApplications: number;
  recentApplications: Application[];
}

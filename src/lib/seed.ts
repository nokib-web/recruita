import connectDB from "./mongodb";

export async function seed() {
  await connectDB();
  console.log("Seed function - add seed logic here");
}

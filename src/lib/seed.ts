import bcryptjs from "bcryptjs";
import connectDB from "./mongodb";
import User from "@/models/User";
import Job from "@/models/Job";

async function seed() {
  try {
    await connectDB();
    console.log("Connected to MongoDB for seeding...");

    // Clear existing data
    await User.deleteMany({});
    await Job.deleteMany({});
    console.log("Existing data cleared.");

    // Create Base Users
    const hashedPassword = await bcryptjs.hash("123456", 10);

    const demoUser = await User.create({
      name: "Demo User",
      email: "user@example.com",
      password: hashedPassword,
      role: "user",
      skills: ["React", "TypeScript", "Next.js"],
      location: "San Francisco, CA",
      bio: "I am a passionate frontend developer.",
    });

    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: hashedPassword,
      role: "admin",
      skills: ["Fullstack", "Management", "Operations"],
      location: "New York, NY",
      bio: "Experienced hiring manager and administrator.",
    });

    console.log("Users created.");

    // Create 20 Realistic Job Listings
    const categories = ["Technology", "Design", "Marketing", "Finance", "Healthcare", "Education", "Engineering", "Sales"] as const;
    const types = ["full-time", "part-time", "remote", "contract"] as const;
    const levels = ["junior", "mid", "senior"] as const;

    const jobSeeds = [
      {
        title: "Senior React Developer",
        company: "TechFlow Solutions",
        description: "Join our core team to build scalable frontend architectures using React and Next.js.",
        requirements: ["5+ years React experience", "Deep TypeScript knowledge", "State management expertise"],
        salaryMin: 120000,
        salaryMax: 180000,
        category: "Technology",
        experienceLevel: "senior",
        type: "remote",
        location: "Remote, USA",
      },
      {
        title: "UX/UI Designer",
        company: "Creative Pulse",
        description: "We are looking for a designer who lives and breathes user-centric design principles.",
        requirements: ["Figma proficiency", "Portfolio of web/mobile apps", "Understanding of design systems"],
        salaryMin: 90000,
        salaryMax: 130000,
        category: "Design",
        experienceLevel: "mid",
        type: "full-time",
        location: "Brooklyn, NY",
      },
      {
        title: "Marketing Manager",
        company: "GrowFast Inc.",
        description: "Scale our user acquisition channels and own the digital marketing strategy.",
        requirements: ["Growth hacking mindset", "Experience with Google Ads/SEO", "Data-driven approach"],
        salaryMin: 85000,
        salaryMax: 120000,
        category: "Marketing",
        experienceLevel: "mid",
        type: "full-time",
        location: "Austin, TX",
      },
      {
        title: "Financial Analyst",
        company: "Prime Capital",
        description: "Provide strategic financial insights and perform complex modeling for our investments.",
        requirements: ["CPA or CFA preferred", "Advanced Excel skills", "Tableau experience"],
        salaryMin: 100000,
        salaryMax: 150000,
        category: "Finance",
        experienceLevel: "senior",
        type: "full-time",
        location: "Chicago, IL",
      },
      {
        title: "Registered Nurse",
        company: "City Health Center",
        description: "Provide compassionate care in our high-traffic outpatient clinic.",
        requirements: ["Valid RN License", "2 years acute care experience", "BLS Certification"],
        salaryMin: 75000,
        salaryMax: 110000,
        category: "Healthcare",
        experienceLevel: "mid",
        type: "full-time",
        location: "Miami, FL",
      },
      {
        title: "DevOps Engineer",
        company: "CloudNative Labs",
        description: "Optimize our CI/CD pipelines and manage AWS infrastructure.",
        requirements: ["Kubernetes mastery", "Terraform experience", "Python/Bash scripting"],
        salaryMin: 130000,
        salaryMax: 190000,
        category: "Technology",
        experienceLevel: "senior",
        type: "full-time",
        location: "Seattle, WA",
      },
      {
        title: "Graphic Designer",
        company: "Pixel Perfect",
        description: "Create stunning visuals for social media and marketing campaigns.",
        requirements: ["Adobe Creative Suite", "Typrography skills", "Attention to detail"],
        salaryMin: 50000,
        salaryMax: 70000,
        category: "Design",
        experienceLevel: "junior",
        type: "contract",
        location: "Los Angeles, CA",
      },
      {
        title: "Content Strategist",
        company: "Vocal Media",
        description: "Define the voice of our brand across multiple platforms.",
        requirements: ["Excellent writing skills", "Editorial experience", "Social media savvy"],
        salaryMin: 65000,
        salaryMax: 90000,
        category: "Marketing",
        experienceLevel: "mid",
        type: "remote",
        location: "Remote",
      },
      {
        title: "Software Engineer Intern",
        company: "AppLaunch",
        description: "Learn on the job while contributing to real production code.",
        requirements: ["Currently enrolled in CS degree", "Knowledge of Git", "Basic JS/Python"],
        salaryMin: 40000,
        salaryMax: 60000,
        category: "Technology",
        experienceLevel: "junior",
        type: "part-time",
        location: "San Jose, CA",
      },
      {
        title: "Account Executive",
        company: "SalesForce Pro",
        description: "Drive revenue growth by closing enterprise-level deals.",
        requirements: ["Proven sales track record", "CRM experience", "Negotiation skills"],
        salaryMin: 80000,
        salaryMax: 150000,
        category: "Sales",
        experienceLevel: "senior",
        type: "full-time",
        location: "Denver, CO",
      },
      {
        title: "Mechanical Engineer",
        company: "Future Dynamics",
        description: "Design and prototype hardware components for robotics.",
        requirements: ["SolidWorks proficiency", "FEA analysis experience", "B.S. in Mech Engineering"],
        salaryMin: 95000,
        salaryMax: 140000,
        category: "Engineering",
        experienceLevel: "mid",
        type: "full-time",
        location: "Boston, MA",
      },
      {
        title: "Data Scientist",
        company: "Insight Analytics",
        description: "Extract actionable insights from large datasets using ML models.",
        requirements: ["Python (Pandas/Scikit-learn)", "SQL expertise", "Statistical modeling"],
        salaryMin: 115000,
        salaryMax: 175000,
        category: "Technology",
        experienceLevel: "mid",
        type: "full-time",
        location: "Portland, OR",
      },
      {
        title: "Product Manager",
        company: "Innovate Ltd.",
        description: "Lead cross-functional teams to deliver high-impact features.",
        requirements: ["Agile/Scrum experience", "User research skills", "Technical background"],
        salaryMin: 110000,
        salaryMax: 160000,
        category: "Other",
        experienceLevel: "senior",
        type: "full-time",
        location: "San Francisco, CA",
      },
      {
        title: "Customer Support Lead",
        company: "Helpful Co.",
        description: "Manage a remote team of support agents and ensure customer satisfaction.",
        requirements: ["Management experience", "Zendesk proficiency", "Communication skills"],
        salaryMin: 60000,
        salaryMax: 85000,
        category: "Other",
        experienceLevel: "mid",
        type: "remote",
        location: "Remote",
      },
      {
        title: "Project Coordinator",
        company: "BuildIt Services",
        description: "Assist project managers in scheduling and resource allocation.",
        requirements: ["Organizational skills", "MS Project experience", "Multi-tasking ability"],
        salaryMin: 55000,
        salaryMax: 75000,
        category: "Other",
        experienceLevel: "junior",
        type: "full-time",
        location: "Atlanta, GA",
      },
      {
        title: "Cybersecurity Analyst",
        company: "SecureNet",
        description: "Monitor and respond to security threats in real-time.",
        requirements: ["Security+ or CEH", "Firewall management", "Intrusion detection"],
        salaryMin: 90000,
        salaryMax: 135000,
        category: "Technology",
        experienceLevel: "mid",
        type: "full-time",
        location: "Washington, DC",
      },
      {
        title: "Math Teacher",
        company: "Bright Futures Academy",
        description: "Inspire high school students to excel in mathematics.",
        requirements: ["Teaching certification", "Passion for education", "Patient approach"],
        salaryMin: 50000,
        salaryMax: 80000,
        category: "Education",
        experienceLevel: "mid",
        type: "full-time",
        location: "Newark, NJ",
      },
      {
        title: "Sales Representative",
        company: "Global Trade",
        description: "Generate leads and maintain client relationships.",
        requirements: ["Extroverted personality", "Resilience", "Basic tech literacy"],
        salaryMin: 50000,
        salaryMax: 90000,
        category: "Sales",
        experienceLevel: "junior",
        type: "full-time",
        location: "Charlotte, NC",
      },
      {
        title: "Civil Engineer",
        company: "Infrastructure Group",
        description: "Plan and oversee construction projects for municipal works.",
        requirements: ["P.E. License", "AutoCAD Civil 3D", "Structural analysis"],
        salaryMin: 85000,
        salaryMax: 130000,
        category: "Engineering",
        experienceLevel: "mid",
        type: "full-time",
        location: "Phoenix, AZ",
      },
      {
        title: "Junior Social Media Specialist",
        company: "Buzz Lab",
        description: "Help manage our clients' social media presence and engagement.",
        requirements: ["Social platform knowledge", "Basic video editing", "Creativity"],
        salaryMin: 45000,
        salaryMax: 60000,
        category: "Marketing",
        experienceLevel: "junior",
        type: "full-time",
        location: "Nashville, TN",
      },
    ];

    for (const jobData of jobSeeds) {
      await Job.create({
        ...jobData,
        postedBy: adminUser._id,
      });
    }

    console.log("20 jobs seeded successfully.");
    console.log("Seeding process complete.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

seed();

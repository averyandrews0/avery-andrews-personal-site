export const links = {
  resume: "/resume.pdf",
  email: "mailto:avery.mz.a@gmail.com",
  emailLabel: "avery.mz.a@gmail.com",
  writingAccess:
    "mailto:avery.mz.a@gmail.com?subject=Request%20for%20writing%20access",
  linkedin: "https://www.linkedin.com/in/avery-andrews-a7a453329/",
  linkedinLabel: "LinkedIn"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const aboutStats = [
  { value: "2x", label: "National qualifier" },
  { value: "1", label: "Paper published" },
  { value: "156+", label: "People taught investing" }
];

export const apCourses = [
  { course: "AP World History", score: "5" },
  { course: "AP U.S. History", score: "5" },
  { course: "AP Biology", score: "5" },
  { course: "AP Macroeconomics", score: "5" },
  { course: "AP Microeconomics", score: "5" },
  { course: "AP Calculus BC", score: "5" },
  { course: "AP Statistics", score: "5" },
  { course: "AP U.S. Government", score: "5" },
  { course: "AP English Language", score: "5" },
  { course: "AP Environmental Science", score: "5" },
  { course: "AP Seminar", score: "5" }
];

export const projects = [
  {
    title: "Cleveland Clinic PTO & Attendance Tracking",
    description:
      "Used AI tools and Excel to simplify attendance and PTO work for a Cleveland Clinic team. The live section-level tracker made approvals clearer, helped prevent understaffing, and became a workflow I could teach back to my mentors.",
    skills: ["AI workflows", "Excel automation", "Operations"],
    href: "#contact",
    linkLabel: "Ask about the project",
    newTab: false
  },
  {
    title: "Solon Investment Society Materials",
    description:
      "Materials, prompts, and conversations built to make investing more approachable for Solon students, from stock ideas and market structure to careers in finance.",
    skills: ["Investing", "Education", "Leadership"],
    href: "https://soloninvestmentsociety.org",
    linkLabel: "Visit the society"
  },
  {
    title: "Apple Spice Outreach Campaign",
    description:
      "A hands-on B2B outreach project for Apple Spice Catering: researching local prospects with AI tools, organizing useful contact data, and turning it into a more focused way to start conversations with potential clients.",
    skills: ["Research", "Sales outreach", "Communication"],
    href: "#contact",
    linkLabel: "Ask about the work",
    newTab: false
  }
];

export const writing = [
  {
    title: "Circle Internet Group Research Report",
    summary:
      "A public-markets report on Circle, USDC, and the opportunities and risks inside the stablecoin business model.",
    href: links.writingAccess,
    linkLabel: "Request access"
  },
  {
    title: "The Impacts of Government Regulation on Economic Health",
    summary:
      "A published economics paper on the balance between innovation, consumer protection, and public welfare across major industries.",
    href: links.writingAccess,
    linkLabel: "Request access"
  },
  {
    title: "Rebuilding Social Infrastructure in the United States",
    summary:
      "An AP Seminar paper on third places, loneliness, and how walkable communities can create stronger everyday connections.",
    href: links.writingAccess,
    linkLabel: "Request access"
  }
];

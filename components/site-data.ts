const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const links = {
  resume: `${basePath}/resume.pdf`,
  circleResearch: `${basePath}/circle-research-report.pdf`,
  email: "mailto:your.email@example.com",
  emailLabel: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/avery-andrews-a7a453329/",
  linkedinLabel: "LinkedIn"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
];

export const aboutStats = [
  { value: "2x", label: "National qualifier" },
  { value: "1", label: "Paper published" },
  { value: "30+", label: "People taught investing" }
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
  { course: "AP Seminar" }
];

export const interests = [
  "Public markets",
  "Private equity",
  "Growth equity",
  "Venture capital",
  "Entrepreneurship",
  "Urban development and walkability",
  "Economics",
  "Track & Field",
  "Ice Hockey"
];

export const experience = [
  {
    title: "Co-Founder, Solon Investing Club",
    eyebrow: "Solon Investment Society",
    description:
      "Helped launch Solon's first student investing club, focused on market education, stock analysis, and discussion of finance careers.",
    details: [
      "Co-founded and helped lead the first official investing club at Solon High School.",
      "Supported weekly lessons, interactive activities, guest speakers, and student teams in the Wharton Global High School Investment Competition."
    ]
  },
  {
    title: "Marketing Outreach, Apple Spice Catering",
    eyebrow: "Apple Spice Box Lunch Delivery & Catering Co.",
    description:
      "Built an independent outreach campaign to identify and contact potential business customers, developing communication, sales, and marketing skills.",
    details: [
      "Researched office decision-makers for corporate catering outreach.",
      "Built an initial prospect database of roughly 620 verified email contacts and 700 office addresses."
    ]
  },
  {
    title: "Varsity Athlete, Hockey and Pole Vault",
    eyebrow: "Solon High School Athletics",
    description:
      "Compete in team and individual sports requiring discipline, consistency, leadership, and performance under pressure.",
    details: [
      "Compete on Solon High School's varsity hockey team.",
      "Pole vault PR of 13'0, with conference and invitational placements."
    ]
  },
  {
    title: "Public Forum Debate",
    eyebrow: "OSDA & NSDA",
    description:
      "Develop research, argumentation, public speaking, and evidence-based communication skills through competitive debate.",
    details: [
      "Qualified to the 2026 Ohio State Tournament.",
      "Finalist at the 2025 Last Chance National Qualifier."
    ]
  }
];

export const projects = [
  {
    title: "Circle Startup Investment Pitch",
    description:
      "A closer look at Circle (NYSE: CRCL): how the USDC business earns money, where growth could come from, and the questions around rates, distribution costs, and competition.",
    skills: ["Market research", "Startup evaluation", "Competitive analysis"],
    href: links.circleResearch,
    linkLabel: "Open research report"
  },
  {
    title: "Solon Investment Society Materials",
    description:
      "Materials, prompts, and conversations built to make investing more approachable for Solon students, from stock ideas and market structure to careers in finance.",
    skills: ["Investing", "Education", "Leadership"],
    href: "https://soloninvestmentsociety.org",
    linkLabel: "Visit the society"
  }
];

export const writing = [
  {
    title: "The Impacts of Government Regulation on Economic Health",
    summary:
      "A published economics paper that weighs the trade-offs in environmental, health, and financial regulation, with a focus on where policy can protect people without closing off innovation.",
    href: links.email,
    linkLabel: "Request access"
  },
  {
    title: "Rebuilding Social Infrastructure in the United States",
    summary:
      "An AP Seminar paper on third places, loneliness, and social infrastructure. It argues for accessible community spaces through local investment, walkable design, and zoning reform.",
    href: links.email,
    linkLabel: "Request access"
  }
];

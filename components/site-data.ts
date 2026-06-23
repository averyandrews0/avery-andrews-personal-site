const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Replace these placeholder links with Avery's final public links before publishing.
export const links = {
  resume: `${basePath}/resume.pdf`,
  email: "mailto:your.email@example.com",
  emailLabel: "your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-linkedin/",
  linkedinLabel: "LinkedIn"
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Writing", href: "#writing" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" }
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
      "Created a venture-style investment pitch analyzing Circle's embedded finance model, market opportunity, competitive positioning, and growth potential.",
    skills: ["Market research", "Startup evaluation", "Competitive analysis"],
    // Replace with the final project URL, deck, or PDF when ready.
    href: "#"
  },
  {
    title: "Solon Investment Society Materials",
    description:
      "Developed materials and discussion topics for a student investing club focused on stock analysis, market structure, and financial literacy.",
    skills: ["Investing", "Education", "Leadership"],
    // Replace with a folder, Notion page, or selected materials link when ready.
    href: "#"
  },
  {
    title: "Apple Spice Outreach Campaign",
    description:
      "Designed and executed a business outreach campaign to identify potential customers and communicate Apple Spice's catering value proposition.",
    skills: ["Marketing", "Sales outreach", "Communication"],
    // Replace with a sanitized case study link if you want this public.
    href: "#"
  },
  {
    title: "Selected Writing and Research",
    description:
      "Research and writing on finance, work-life imbalance, urban design, third places, economics, and public policy.",
    skills: ["Research", "Writing", "Analysis"],
    // Replace with a writing portfolio link when ready.
    href: "#"
  }
];

export const writing = [
  {
    title: "Finance and Work-Life Imbalance",
    summary:
      "A short essay placeholder for thinking about demanding finance careers, incentives, and sustainable ambition.",
    // Replace with the final article URL or local route.
    href: "#"
  },
  {
    title: "Third Places and Loneliness",
    summary:
      "A placeholder for writing on the role of libraries, cafes, parks, and shared civic spaces in everyday life.",
    // Replace with the final article URL or local route.
    href: "#"
  },
  {
    title: "Urban Design and Walkability",
    summary:
      "A placeholder for research on walkable neighborhoods, local development, and how design shapes behavior.",
    // Replace with the final article URL or local route.
    href: "#"
  },
  {
    title: "Market Commentary",
    summary:
      "A placeholder for selected notes on public markets, business models, and current investment themes.",
    // Replace with the final article URL or local route.
    href: "#"
  }
];

export const resumeSummary = {
  education: [
    "Solon High School, Class of 2027",
    "3.9 unweighted GPA / 4.405 weighted GPA",
    "35 ACT earned twice, with a 36 superscore",
    "5s on AP World History, AP United States History, AP Biology, AP Microeconomics, and AP Macroeconomics"
  ],
  experience: [
    "Apple Spice Catering: marketing outreach, delivery, and prospect research",
    "Lao Sze Chuan: serving and hosting, including customer service and Mandarin language support",
    "Case Western Reserve University Essay Contest: 2nd place, with published economics writing"
  ],
  leadership: [
    "Co-Founder and President, Solon Investment Society",
    "Helped organize guest speakers from Ernst & Young, Kaulig Capital, and JumpStart Ventures",
    "Directed students in the Wharton Global High School Investment Competition",
    "Future Business Leaders of America: 2026 Ohio State Leadership Conference finalist and national qualifier"
  ],
  athletics: [
    "Solon High School varsity hockey",
    "Pole vault, OHSAA Division I",
    "13'0 pole vault PR and 2026 conference meet placement"
  ],
  skills: [
    "Market research",
    "Investment analysis",
    "Sales outreach",
    "Public speaking",
    "Research writing",
    "Team leadership",
    "Customer communication"
  ]
};

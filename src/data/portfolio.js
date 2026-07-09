export const personalInfo = {
  name: "Rohit",
  lastName: "Singh",
  fullName: "Rohit Singh",
  title: "Java Full Stack Developer",
  subtitle: "Spring Boot • React • Node.js",
  location: "Greater Noida, India",
  email: "rohitsinghop11@gmail.com",
  phone: "+91 91934 96868",
  github: "https://github.com/Rohitsingh910",
  linkedin: "https://www.linkedin.com/in/rohit-singh910/",
  resume: "/Rohit_Resume.pdf",
  avatar: "/Rohit.jpg",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Backend: [
    { name: "Java", icon: "java", color: "#f89820" },
    { name: "Spring Boot", icon: "spring", color: "#6db33f" },
    { name: "REST APIs", icon: "api", color: "#22d3ee" },
    { name: "Node.js", icon: "js", color: "#6db33f" },
  ],
  Frontend: [
    { name: "React.js", icon: "react", color: "#61dafb" },
    { name: "JavaScript", icon: "js", color: "#f7df1e" },
    { name: "HTML5/CSS3", icon: "html", color: "#e34f26" },
  ],
  Database: [
    { name: "MySQL", icon: "mysql", color: "#4479a1" },
    { name: "MongoDB", icon: "mongodb", color: "#47a248" },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "git", color: "#f05032" },
    { name: "GitHub", icon: "github", color: "#ffffff" },
    { name: "VS Code", icon: "github", color: "#007acc" },
    { name: "Postman", icon: "postman", color: "#ff6c37" },
  ],
  "Core Concepts": [
    { name: "DSA", icon: "ds", color: "#3b82f6" },
    { name: "OOP", icon: "oop", color: "#f59e0b" },
    { name: "DBMS", icon: "dbms", color: "#22d3ee" },
    { name: "Software Engineering", icon: "mvc", color: "#8b5cf6" },
  ],
  "AI & Emerging Technologies": [
    { name: "Python", icon: "python", color: "#3776ab" },
    { name: "Scikit-learn", icon: "tensorflow", color: "#f89939" },
    { name: "PyTorch", icon: "tensorflow", color: "#ee4c2c" },
    { name: "OpenCV", icon: "genai", color: "#5c3ee6" },
    { name: "YOLOv5", icon: "genai", color: "#00ff00" },
    { name: "Microsoft Azure", icon: "aws", color: "#0089d6" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "RFID Library Self-Service Kiosk",
    subtitle: "Deployed @ IIT Jammu & Punjabi University",
    description:
      "A production-grade self-service library kiosk system built and deployed during NIELIT Internship, actively used by 15,000+ students. Integrated Koha ILS via SIP2 protocol, added secure fine payments, and packaged a secure Electron desktop client.",
    image: "/images/vaultedge.png",
    features: [
      "Production-deployed check-out/in logic for 15,000+ students",
      "Created Node.js backend for Koha ILS integration via SIP2",
      "Integrated Razorpay for fine payments & automated receipt printing",
      "Secured source code with obfuscation & encryption before delivery",
    ],
    tech: ["Node.js", "Electron.js", "SIP2", "Koha ILS", "Razorpay", "RFID"],
    color: "#22d3ee",
    github: "https://github.com/Rohitsingh910/RFID-Based-Library-Management-System",
    demo: null,
    type: "Desktop / Backend",
  },
  {
    id: 2,
    title: "Airline Management System",
    subtitle: "Flight Booking & Administrative Backend",
    description:
      "A relational database-backed airline administrative system featuring normalized schemas, transactional integrity, and REST endpoints for booking management.",
    image: "/images/medsync.png",
    features: [
      "Designed normalized MySQL schema with 10+ relational entities",
      "Optimized complex JOIN queries & foreign key constraints",
      "Developed Desktop interface with user and administrator modules",
      "Built Spring Boot REST APIs for smooth data query flows",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "Java Swing"],
    color: "#10b981",
    github: "https://github.com/Rohitsingh910/Airline-Management-System",
    demo: null,
    type: "Java Full Stack",
  },
  {
    id: 3,
    title: "PayPal Payment Microservices",
    subtitle: "Enterprise Payment Processing Service",
    description:
      "Developed a secure and reliable payment microservice integrating the PayPal REST API. Designed to support scalable transaction logging and asynchronous webhook processing.",
    image: "/images/vaultedge.png",
    features: [
      "Integrated PayPal REST API for merchant transactions",
      "Designed database logging patterns for payment tracking",
      "Utilized Spring Boot for rapid microservice bootstrapping",
    ],
    tech: ["Java", "Spring Boot", "PayPal API", "REST APIs", "MySQL"],
    color: "#3b82f6",
    github: "https://github.com/Rohitsingh910/PayPal-Payment-Microservices",
    demo: null,
    type: "Java Microservices",
  },
  {
    id: 4,
    title: "Medical Diagnosis System",
    subtitle: "Multi-Disease Machine Learning Web Platform",
    description:
      "Developed a predictive healthcare application trained on real clinical datasets, featuring a clean Streamlit interface with real-time inference.",
    image: "/images/expenseiq.png",
    features: [
      "Built multi-disease prediction models (Diabetes, Heart, Parkinson's)",
      "Evaluated SVM, Random Forest, and Logistic Regression algorithms",
      "Deployed as a responsive Streamlit multi-page web application",
      "Serialized best-performing models using Pickle for live prediction",
    ],
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Pickle"],
    color: "#8b5cf6",
    github: "https://github.com/Rohitsingh910/Medical-Diagnosis-System-using-AI",
    demo: null,
    type: "AI / ML & Web",
  },
  {
    id: 5,
    title: "DesiRent Car Rental Application",
    subtitle: "Full-Stack Vehicle Rental Platform",
    description:
      "A responsive vehicle rental platform designed with React and Node.js. Features user authentication, vehicle catalogs, booking workflows, and administrative listings management.",
    image: "/images/vaultedge.png",
    features: [
      "Created a full-stack rental platform with user authentication",
      "Managed catalogs, rental logs, bookings, and customer details",
      "Designed clean, responsive interfaces with Tailwind CSS",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    color: "#f59e0b",
    github: "https://github.com/Rohitsingh910/DesiRent-car-rental-application",
    demo: null,
    type: "Full Stack",
  },
  {
    id: 6,
    title: "Let's Go Tourism Website",
    subtitle: "Responsive Tourism & Booking Portal",
    description:
      "Designed and built Let's Go, a responsive frontend portal for booking holiday packages and renting vehicles.",
    image: "/images/medsync.png",
    features: [
      "Built highly interactive landing pages and forms",
      "Designed responsive navigation and layout grids using Tailwind CSS",
      "Fully structured user flow for package bookings",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap"],
    color: "#14b8a6",
    github: "https://github.com/Rohitsingh910/Let-s-Go-tourism-Website",
    demo: "https://rohitsingh910.github.io/Let-s-Go-tourism-Website/",
    type: "Frontend Development",
  },
];

export const achievements = [
  {
    id: 1,
    title: "AIR 239",
    subtitle: "Naukri Campus Young Turks 2025",
    description:
      "Ranked 239 nationwide in India's largest skill & aptitude contest out of 5+ lakh participants.",
    icon: "trophy",
    stat: "239",
    statLabel: "National Rank",
    color: "#f59e0b",
  },
  {
    id: 2,
    title: "AINCAT Top Scorer",
    subtitle: "100 Percentile Verbal",
    description:
      "Scored 42/60 overall in AINCAT 2025, securing a 100 percentile in the Verbal section and 87.26 percentile in Quant.",
    icon: "shield",
    stat: "100%",
    statLabel: "Verbal Percentile",
    color: "#22d3ee",
  },
  {
    id: 3,
    title: "Professional Certifications",
    subtitle: "Java • Azure • NPTEL",
    description:
      "Certified in Programming Using Java (Infosys), DSA using Java (NPTEL), and Microsoft Azure cloud services.",
    icon: "certificate",
    stat: "5+",
    statLabel: "Certifications",
    color: "#8b5cf6",
  },
  {
    id: 4,
    title: "Coding Contests Winner",
    subtitle: "TalentHunt@IET & InnovateX'23",
    description:
      "Winner in TalentHunt@IET Coding Club Agra and National Finalist in Consigliere Case Study (InnovateX'23 NSUT Delhi).",
    icon: "code",
    stat: "3+",
    statLabel: "Event Finals",
    color: "#10b981",
  },
];

export const experiences = [
  {
    id: 1,
    role: "AI / ML Intern",
    company: "NIELIT, Noida",
    period: "Feb 2026 – Aug 2026",
    duration: "6 Months",
    description:
      "Developed end-to-end Python ML pipelines, preprocessed structured datasets, and built production-deployed systems during internship.",
    highlights: [
      "Built ML pipelines: Pandas/NumPy → Scikit-learn → Matplotlib/Seaborn",
      "Designed and production-deployed the RFID Library Self-Service Kiosk (used by 15,000+ students)",
      "Implemented Node.js integration for Koha ILS via SIP2 and Razorpay payments",
    ],
    color: "#22d3ee",
  },
  {
    id: 2,
    role: "AI Intern",
    company: "TechSaksham (Microsoft & SAP CSR Initiative)",
    period: "Feb – Mar 2025",
    duration: "2 Months",
    description:
      "Integrated cloud-based AI cognitive models into working prototypes and applied responsible AI design principles.",
    highlights: [
      "Integrated Azure Cognitive Services (Vision API) to cut setup time by 40%",
      "Earned 4 Microsoft Learn badges, including Azure OpenAI Fundamentals",
      "Applied responsible AI guidelines to prototype designs",
    ],
    color: "#8b5cf6",
  },
  {
    id: 3,
    role: "Ethical Hacking & Pen Testing Intern",
    company: "C-DAC, Noida",
    period: "Dec 2024 – Jan 2025",
    duration: "2 Months",
    description:
      "Conducted vulnerability assessments on systems and designed secure API architectures.",
    highlights: [
      "Classified 5+ high-severity security risks on simulated environments",
      "Strengthened understanding of secure coding practices and API security",
    ],
    color: "#10b981",
  },
  {
    id: 4,
    role: "Web Development Intern",
    company: "Octanet Services / TechnoHacks",
    period: "Jan – Feb 2024",
    duration: "2 Months",
    description:
      "Built responsive frontend components in React.js and designed interactive user interfaces.",
    highlights: [
      "Delivered React.js components for data dashboard integrations",
      "Designed static web apps and improved responsive layout behaviors",
    ],
    color: "#f59e0b",
  },
  {
    id: 5,
    role: "Full Stack Java Developer Training",
    company: "Cetpa Infotech, Noida",
    period: "Jul – Aug 2023",
    duration: "2 Months",
    description:
      "Received intensive hands-on training on core Java, Spring Boot, and enterprise database integration.",
    highlights: [
      "Developed Spring Boot applications with MySQL integration",
      "Built custom CRUD REST APIs and designed relational database schemas",
    ],
    color: "#ec4899",
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Science & Engineering",
  institution: "Dr. Bhimrao Ambedkar University",
  location: "Agra, India",
  period: "Dec 2021 – Jun 2025",
  cgpa: "6.52 / 10",
  coursework: [
    "DSA",
    "OOPs (Java)",
    "DBMS",
    "Operating Systems",
    "Software Engineering",
    "Artificial Intelligence",
  ],
};

export const techMarquee = [
  "Java",
  "Spring Boot",
  "React.js",
  "MySQL",
  "REST APIs",
  "Node.js",
  "Python",
  "MongoDB",
  "Git",
  "GitHub",
  "VS Code",
  "Postman",
  "Scikit-learn",
  "PyTorch",
  "Microsoft Azure",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
];

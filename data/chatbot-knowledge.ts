// Knowledge base for the portfolio chatbot.
// Each entry has: keywords to match against the user's question,
// and the answer to give back. Add as many entries as you want.

export interface QAEntry {
  keywords: string[];
  answer: string;
}

export const FALLBACK_ANSWER =
  "I don't know about this — please ask Amit directly by calling +91 8637814826.";

export const predefinedQuestions: string[] = [
  "What are your skills?",
  "Tell me about your projects",
  "What is your education?",
  "Are you available for hire?",
  "How can I contact you?",
];

export const qaKnowledgeBase: QAEntry[] = [
  {
    keywords: ["who are you", "about you", "yourself", "introduce", "who is amit"],
    answer:
      "I'm Amit Mandal, an M.Tech. Computer Science from NIT Durgapur (CGPA 8.49). I completed my B.Tech. from Cooch Behar Government Engineering College (CGPA 8.89). I build systems software, full-stack apps and AI/ML-driven solutions & I’m actively seeking SDE roles where I can contribute, learn and grow as an engineer.",
  },
  {
    keywords: ["skill", "tech stack", "technologies", "language", "programming"],
    answer:
      "My core skills include C++, C, Python, JavaScript, SQL & GenAI. On the frameworks side: React.js, Node.js, Express.js, Django, FastAPI, Tailwind CSS, Pandas and NumPy. I also work with MySQL, MongoDB, Docker, Postman, Git and Linux.",
  },
  {
    keywords: ["your projects","Tell me about your projects", "built", "work on", "portfolio project"],
    answer:
      "My main projects include a Smart Job Tracker (MERN + Gemini AI) for intelligent job application management, a multi-threaded Deep Packet Inspection (DPI) Engine in C++ for systems-level packet analysis, GradeSync — a practical academic conversion platform for CGPA and percentage calculations and a Water Quality Index Prediction model built using Machine Learning for environmental data analysis. Explore the Projects page for more details.",
  },
  {
    keywords: ["dpi", "packet", "network", "wireshark"],
    answer:
      "The DPI Engine is a high-performance Deep Packet Inspection system built in C++ with multi-threaded packet processing. It parses Ethernet, IP, TCP/UDP protocols, extracts SNI from encrypted traffic, and uses hash-based load balancing across threads for efficient traffic analysis.",
  },
  // {
  //   keywords: ["fuel", "route", "optimizer", "openrouteservice"],
  //   answer:
  //     "The Fuel Route Optimizer is a full-stack platform built with Django REST Framework and React. It helps plan long-distance trips across the USA by integrating the OpenRouteService API to find nearby fuel stations and optimize routes for lowest cost.",
  // },
  {
  keywords: ["gradesync", "converter"],
  answer:
    "GradeSync is a practical web application designed to simplify academic grade conversions. It helps students convert CGPA to percentage and vice versa across multiple universities like MAKAUT, Calcutta University, Kalyani University, IITs and NITs, making the process faster, accurate and accessible.",
},
  {
    keywords: ["job tracker", "gemini", "mern", "kanban"],
    answer:
      "The Smart Job Application Tracker is a MERN stack app with Google Gemini AI integration. It features resume/job description match scoring, AI-rewritten resume bullets, cover letter generation, and a drag-and-drop Kanban board. Deployed with the backend on Render and frontend on Vercel.",
  },
  {
    keywords: ["water quality", "machine learning", "ml model", "wqi"],
    answer:
      "The Water Quality Index Prediction project uses CPCB data with Random Forest and SVM algorithms to predict water quality. I applied feature engineering, model tuning, and used Pandas, NumPy, scikit-learn, and Seaborn for analysis.",
  },
  {
  keywords: ["education", "degree", "college", "university", "cgpa", "gpa", "nit", "btech", "mtech"],
  answer:
    "I recently completed my M.Tech. in Computer Science from NIT Durgapur with a CGPA of 8.49. Before that, I earned my B.Tech. in Computer Science from  with a CGPA of 8.89.",
},
  {
    keywords: ["experience", "internship", "job history", "deloitte", "accenture"],
    answer:
      "I completed a Data Analytics Job Simulation at Deloitte (May–Jul 2025), working on anomaly detection and fraud scenarios. I also did a Developer Virtual Experience at Accenture (Jun–Aug 2023), focused on cloud migration and secure software development.",
  },
  {
    keywords: ["leetcode", "dsa", "competitive", "coding problems"],
    answer: "I've solved 150+ LeetCode problems, which has strengthened my data structures, algorithms and problem-solving skills.",
  },
  {
    keywords: ["gate", "webjee", "exam", "qualified"],
    answer: "I qualified GATE in 2024 and WebJEE in 2020.",
  },
  {
    keywords: ["cricket", "sport", "hobby", "interest", "wicketkeeper"],
    answer:
      "Outside of tech, I played competitive cricket — I represented the Malda district as a Wicketkeeper-Batsman at the inter-district level tournament. I'm also passionate about cinematography and exploring new cultures and places.",
  },
  {
    keywords: ["hire", "available", "job opportunity", "looking for", "open to work", "sde role"],
    answer:
      "Yes! I'm actively looking for full-time SDE, Development, Full/MERN Stack or AI/ML engineering roles. Feel free to reach out via the Contact page or check my resume for more details.",
  },
  {
    keywords: ["contact", "email", "phone", "number", "reach", "call"],
    answer:
      "You can reach me at marchamit07@gmail.com or call +91 8637814826. There's also a Contact page on this site with a message form.",
  },
  {
    keywords: ["github", "repo", "repository", "code", "source code"],
    answer: "You can find all my project code on GitHub: github.com/amit-mndal",
  },
  {
    keywords: ["resume", "cv", "download resume"],
    answer:
      "You can download my resume directly from the homepage using the 'Resume' button or access it anytime through the Quick Links section.",
  },
  {
    keywords: ["location", "where are you", "based in", "city", "live"],
    answer:
      "I’m based in West Bengal, India and recently completed my M.Tech. in Computer Science from NIT Durgapur. I am actively seeking Software Development Engineer (SDE) opportunities across Bangalore, Delhi, Pune, Mumbai, Gurugram,Noida, Hyderabad as well as remote roles in India and internationally.",
  },
  {
    keywords: ["hello", "hi", "hey", "yo", "sup"],
    answer: "Hi there! I’m Amit’s portfolio assistant. Feel free to ask me about his skills, projects, education, experience or career interests.",
  },
  {
    keywords: ["thank", "thanks", "thank you"],
    answer: "You're welcome! Let me know if you have any other questions about Amit.",
  },
];
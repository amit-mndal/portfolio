export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  
  {
    id: "job-tracker",
    title: "Smart Job Application Tracker",
    description:
      "AI-powered MERN stack job tracker with Kanban board, PDF parsing, and Google Gemini AI integration.",
    longDescription:
      "A polished full-stack job application management platform inspired by Linear.app and Notion. Features a drag-and-drop Kanban board for tracking application stages, PDF resume parsing via Google Gemini AI, and JWT-based authentication. Deployed on Vercel and Render with MongoDB Atlas. Designed with a professional dark aesthetic.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Google Gemini AI",
      "JWT",
      "Tailwind CSS",
      "Vercel",
      "Render",
    ],
    achievements: [
      "Built drag and drop Kanban board to track application stages from applied to offer.",
      "Integrated Google Gemini AI for intelligent PDF resume parsing and job description analysis.",
      "Implemented JWT authentication with secure route protection and session management.",
      "Deployed frontend on Vercel and backend on Render with MongoDB Atlas cloud database.",
    ],
    github: "https://github.com/amit-mndal",
    liveUrl: "https://jobtrackerai-am.vercel.app/",
    featured: true,
  },
   {
  id: "gradesync",
  title: "GradeSync – CGPA ↔ Percentage Converter",
  description:
    "Web application for converting CGPA to Percentage and Percentage to CGPA using university-specific conversion formulas.",
  longDescription:
    "GradeSync is a lightweight and user-friendly web application that helps students accurately convert CGPA and Percentage based on the grading policies of different Indian universities. The platform eliminates confusion caused by varying university formulas and provides instant results through a clean, responsive interface.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "Responsive Design"
  ],
  achievements: [
    "Implemented bidirectional CGPA ↔ Percentage conversion functionality.",
    "Supported multiple university-specific conversion formulas across India.",
    "Designed a responsive and mobile-friendly user interface.",
    "Provided instant and accurate conversion results for students and job applicants."
  ],
  github: "https://github.com/amit-mndal",
  liveUrl: "https://gradesync.netlify.app/",
  featured: true,
},
  {
    id: "dpi-engine",
    title: "Deep Packet Inspection Engine",
    description:
      "High-performance C++ DPI engine with multi-threaded packet processing for real-time network traffic analysis and filtering.",
    longDescription:
      "Engineered a high-performance Deep Packet Inspection engine in C++ that processes network packets across multiple threads simultaneously. The engine implements a full protocol-aware parsing pipeline supporting Ethernet, IP, TCP, and UDP. Uses SNI extraction for encrypted traffic identification and hash-based load balancing for efficient thread distribution. Includes a scalable rule-based traffic control system.",
    technologies: ["C++", "Multithreading", "Networking", "TCP/IP", "Wireshark", "Linux"],
    achievements: [
      "Built multi-threaded packet processing pipeline with hash-based load balancing across worker threads.",
      "Implemented full protocol-aware parsing: Ethernet → IP → TCP/UDP with SNI extraction for HTTPS traffic.",
      "Designed scalable rule-based system to control traffic by application, domain, and IP address.",
      "Identified real-world traffic patterns for services like YouTube and Facebook in live captures.",
    ],
    github: "https://github.com/amit-mndal",
    featured: true,
  },
  {
    id: "water-quality",
    title: "Water Quality Index Prediction",
    description:
      "Machine learning model predicting Water Quality Index using CPCB data with Random Forest and SVM algorithms.",
    longDescription:
      "Developed a machine learning pipeline to predict Water Quality Index (WQI) from real CPCB (Central Pollution Control Board) sensor data. Applied feature engineering and hyperparameter tuning across multiple algorithms including Random Forest and SVM. Performed thorough data analysis and visualization to extract actionable environmental insights.",
    technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Seaborn", "Jupyter", "Random Forest", "SVM"],
    achievements: [
      "Developed ML pipeline predicting WQI from CPCB dataset using Random Forest and SVM algorithms.",
      "Applied feature engineering and model tuning to maximize prediction accuracy.",
      "Performed data analysis and visualization using Pandas, NumPy, and Seaborn.",
      "Generated actionable insights from environmental sensor data for water quality assessment.",
    ],
    github: "https://github.com/amit-mndal",
    featured: true,
  },
  {
  id: "portfolio-website",
  title: "Personal Portfolio Website",
  description:
    "A modern developer portfolio showcasing my projects, skills, experience, and achievements with an interactive AI-powered assistant.",

  longDescription:
    "Designed and developed a fully responsive personal portfolio website to showcase my technical expertise, projects, and professional journey. Built with Next.js and Tailwind CSS, the portfolio features smooth animations, dark/light theme support, integrated contact form with EmailJS, downloadable resume, dynamic project sections, and an AI-powered assistant for interactive user engagement.",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "EmailJS",
    "Vercel",
  ],

  achievements: [
    "Built a fully responsive portfolio with modern UI/UX and optimized performance.",
    "Integrated AI-powered portfolio assistant for answering questions about skills, projects, and experience.",
    "Implemented dynamic metadata, Open Graph previews, and SEO optimization for professional sharing.",
    "Added EmailJS contact integration, resume download, and theme customization for enhanced recruiter interaction.",
  ],

  github: "https://github.com/amit-mndal/portfolio",
  liveUrl: "https://amit-mandal.vercel.app/",
  featured: false,
},
  {
    id: "fuel-route-optimizer",
    title: "Fuel Route Optimizer",
    description:
      "Full-stack fuel route optimization platform for long-distance trip planning across the USA using Django and React.",
    longDescription:
      "Developed a full-stack web application that helps long-distance drivers plan fuel-efficient routes across the USA. Integrates the OpenRouteService API for route generation with geographic filtering to locate nearby fuel stations. Provides real-time fuel cost optimization and interactive map visualization to help drivers minimize trip costs.",
    technologies: [
      "Django REST Framework",
      "React",
      "Python",
      "Tailwind CSS",
      "Pandas",
      "Geopy",
      "OpenRouteService API",
    ],
    achievements: [
      "Developed REST API with Django REST Framework, serving route and fuel station data to the frontend.",
      "Integrated OpenRouteService API with geographic filtering to find nearby fuel stations along the route.",
      "Built interactive map visualization and fuel cost optimization engine using Pandas and Geopy.",
      "Implemented real-time route generation with live pricing data for cost-minimized trip planning.",
    ],
    github: "https://github.com/amit-mndal",
    featured: false,
  },
 
{
  id: "leetmetric",
  title: "LeetMetric",
  description:
    "LeetCode analytics dashboard that visualizes coding progress, submissions, and problem-solving statistics.",
  longDescription:
    "LeetMetric is a frontend application that fetches and visualizes LeetCode statistics using GraphQL APIs. Users can enter a LeetCode username and instantly view solved problems by difficulty level, submission statistics, and progress indicators through a clean and intuitive dashboard.",
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "GraphQL API"
  ],
  achievements: [
    "Integrated GraphQL APIs to fetch real-time LeetCode statistics.",
    "Visualized solved problems across Easy, Medium, and Hard categories.",
    "Displayed submission statistics and coding activity insights.",
    "Built a clean and responsive user interface with animated progress indicators."
  ],
  github: "https://github.com/amit-mndal",
  featured: false,
},
{
  id: "movie-recommendation",
  title: "Movie Recommendation System",
  description:
    "Machine Learning-powered movie recommendation system built with Python and Streamlit.",
  longDescription:
    "Developed a content-based movie recommendation engine using cosine similarity and machine learning techniques. The application recommends similar movies based on user selection and dynamically fetches movie posters using the TMDB API. Built with Streamlit for an interactive and user-friendly experience.",
  technologies: [
    "Python",
    "Streamlit",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Cosine Similarity",
    "TMDB API"
  ],
  achievements: [
    "Built a recommendation engine using cosine similarity.",
    "Integrated TMDB API to fetch movie posters dynamically.",
    "Developed an interactive web interface using Streamlit.",
    "Generated real-time recommendations from a precomputed similarity matrix."
  ],
  github: "https://github.com/amit-mndal/MovieRecommendation",
  featured: false,
},
  
  
];

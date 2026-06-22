export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
  certificateUrl?: string;
}

export const experiences: Experience[] = [
  {
    id: "deloitte",
    title: "Data Analytics — Virtual Internship",
    company: "Deloitte",
    location: "Remote",
    startDate: "May 2025",
    endDate: "Jul 2025",
    // description:
    //   "Performed data analysis as part of Deloitte's Job Simulation program, working on digital forensic investigations.",
    // achievements: [
    //   "Performed data analysis on structured datasets to identify anomalies, trends, and potential fraud scenarios in digital forensic investigations.",
    //   "Generated insights to support risk assessment and data-driven decision-making in simulated client environments.",
    // ],
    description:
     "Completed Deloitte’s Data Analytics Job Simulation, gaining practical experience in data analysis and digital forensic investigation workflows.",

    achievements: [
      "Analyzed structured datasets to identify anomalies, trends, and potential risk indicators in simulated digital forensic cases.",
      "Derived actionable insights to support risk assessment, investigation processes, and data-driven decision-making in client-focused scenarios.",
    ],
    certificateUrl: "https://drive.google.com/file/d/1NtiUFN37KBLL7QjK_9a-uLLKmI-FNyf5/view",
    type: "work",
  },
  {
    id: "accenture",
    title: "Developer — Virtual Experience",
    company: "Accenture",
    location: "Remote",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    // description:
    //   "Participated in Accenture's Developer Virtual Experience, working on cloud migration and backend system architecture.",
    // achievements: [
    //   "Defined technical requirements and enhanced system architecture, enabling cloud migration and implementing IAM policies for secure backend systems.",
    //   "Performed debugging, unit testing, and User Acceptance Testing (UAT) to ensure system reliability.",
    //   "Applied secure SDLC practices and conducted privacy assessments.",
    // ],
    description:
  "Completed Accenture’s Developer Virtual Experience, gaining hands-on exposure to cloud migration strategies, backend architecture, and secure software development practices.",

achievements: [
  //"Defined technical requirements and contributed to system architecture improvements to support scalable cloud migration.",
  "Implemented Identity and Access Management (IAM) policies to strengthen security and access control for backend systems.",
  "Performed debugging, unit testing, and User Acceptance Testing (UAT) to ensure system reliability and performance.",
  "Applied secure SDLC practices and conducted privacy assessments to align with security and compliance standards.",
],
    certificateUrl: "https://drive.google.com/file/d/1JSyh4XY-zmge9CL_Hzf7gsaTtbk53YsY/view",
    type: "work",
  },
];

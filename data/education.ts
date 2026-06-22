export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "nit-durgapur",
    degree: "M.Tech. in Computer Science and Engineering",
    institution: "National Institute of Technology Durgapur",
    location: "West Bengal, India",
    startDate: "Aug 2024",
    endDate: "May 2026",
    gpa: "8.49 / 10.0",
    //description: "Pursuing post-graduate studies in Computer Science with focus on systems and algorithms.",
  },
  {
    id: "cbgec",
    degree: "B.Tech. in Computer Science and Engineering",
    institution: "Cooch Behar Government Engineering College",
    location: "West Bengal, India",
    startDate: "Nov 2020",
    endDate: "Jul 2024",
    gpa: "8.89 / 10.0",
  },
  {
    id: "hs",
    degree: "Higher Secondary (Science)",
    institution: "Akrurmoni Coronation Institution",
    location: "West Bengal, India",
    startDate: "May 2017",
    endDate: "Jun 2019",
    gpa: "90%",
  },
];

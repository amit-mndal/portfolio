export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
}

export const achievements: Achievement[] = [
  {
    id: "gate",
    title: "Qualified GATE in 2024",
    icon: "award",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "webjee",
    title: "Qualified WebJEE in 2020",
    icon: "trophy",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "leetcode",
    title: "Solved 150+ LeetCode Problems",
    icon: "code",
    colorClass: "text-orange-600 dark:text-orange-400",
  },
  {
  id: "research",
  title: "Authored Research Thesis on Malware Detection for Cyber Physical Systems",
  icon: "book-open",
  colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "cricket",
    title: "Represented Malda District — Inter-District Cricket Tournament  (Wicketkeeper-Batsman)",
    icon: "medal",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
  id: "cinema",
  title: "Passionate About Cinematography and Visual Storytelling",
  icon: "film",
  colorClass: "text-red-600 dark:text-red-400",
},
{
  id: "journey",
  title: "Love Traveling, Discovering New Cultures and Creating Experiences",
  icon: "globe",
  colorClass: "text-sky-600 dark:text-sky-400",
},
  // {
  //   id: "nit",
  //   title: "M.Tech. at NIT Durgapur — CGPA 8.16",
  //   icon: "book-open",
  //   colorClass: "text-cyan-600 dark:text-cyan-400",
  // },
  // {
  //   id: "btech",
  //   title: "B.Tech. CGPA 8.89 — Cooch Behar Govt. Engineering College",
  //   icon: "zap",
  //   colorClass: "text-purple-600 dark:text-purple-400",
  // },
  // {
  //   id: "deloitte",
  //   title: "Deloitte Data Analytics Virtual Internship",
  //   icon: "cpu",
  //   colorClass: "text-indigo-600 dark:text-indigo-400",
  // },
  // {
  //   id: "dpi",
  //   title: "Built C++ DPI Engine — Multi-threaded Packet Analysis",
  //   icon: "trophy",
  //   colorClass: "text-teal-600 dark:text-teal-400",
  // },
];

//export const achievementTags = ["Systems Engineering", "Problem Solving", "Research", "Athletics"];
export const achievementTags = [
  "Computer Engineer",
  "Student",
  "Quick Thinker",
  "Problem Solver",
  "Growth Driven",
  "Curious Learner",
  "Tech Explorer",
  "Research",
  "Athlete",
  "Traveler",
];

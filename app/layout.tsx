// import type { Metadata } from "next";
// import { ClientLayout } from "./client-layout";
// import "./globals.css";

// export const metadata: Metadata = {
//   title: "Amit Mandal | Software Engineer",
//   description:
//     "description:
//     "Software Engineer specializing in systems programming, full-stack development, and AI-powered applications. Explore my projects, skills, and experience.",
//   metadataBase: new URL("https://amitmandal.dev"),
//   authors: [{ name: "Amit Mandal" }],
//   keywords: [
//     "Software Developer",
//     "Full Stack Developer",
//     "C++ Engineer",
//     "Systems Programming",
//     "NIT Durgapur",
//     "React",
//     "Python",
//     "Machine Learning",
//   ],
//   openGraph: {
//     type: "website",
//     title: "Amit Mandal | Software Engineer",
//     description:
//       "M.Tech. CS student at NIT Durgapur. Building systems software, full-stack applications, and ML models.",
//     siteName: "Amit Mandal",
//     locale: "en_US",
//   },
//   icons: {
//     icon: [{ url: "/FinalFevicon.png" }],
//   },
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return <ClientLayout>{children}</ClientLayout>;
// }




import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Mandal | Software Engineer",

  description:
    "Software Engineer specializing in Software, Full/MERN stack development and AI powered applications. Recent M.Tech. graduate from NIT Durgapur, actively seeking SDE opportunities.",

  metadataBase: new URL("https://amitmandal.dev"),

  authors: [{ name: "Amit Mandal" }],

  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "Systems Programming",
    "C++ Developer",
    "MERN Stack",
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "LangChain",
    "NIT Durgapur",
    "Backend Developer",
  ],

  openGraph: {
    type: "website",
    title: "Amit Mandal | Software Engineer",
    description:
      "Software Engineer specializing in Software, Full/MERN Stack development and AI-powered applications. Explore my projects, skills, and experience.",
    siteName: "Amit Mandal",
    locale: "en_US",
  },

  icons: {
    icon: [{ url: "/FinalFevicon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amit Mandal | Software Engineer",
  description:
    "M.Tech. CS student at NIT Durgapur. Building systems software, full-stack applications, and ML models. Open to SDE roles.",
  metadataBase: new URL("https://amitmandal.dev"),
  authors: [{ name: "Amit Mandal" }],
  keywords: [
    "Software Developer",
    "Full Stack Developer",
    "C++ Engineer",
    "Systems Programming",
    "NIT Durgapur",
    "React",
    "Python",
    "Machine Learning",
  ],
  openGraph: {
    type: "website",
    title: "Amit Mandal | Software Engineer",
    description:
      "M.Tech. CS student at NIT Durgapur. Building systems software, full-stack applications, and ML models.",
    siteName: "Amit Mandal",
    locale: "en_US",
  },
  icons: {
    icon: [{ url: "/FinalFevicon.png" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}

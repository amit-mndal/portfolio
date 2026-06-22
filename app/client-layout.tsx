"use client";

import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/shared/scroll-to-top";
import { ScrollProgress } from "@/components/shared/scroll-progress";
import { SmoothScrollProvider } from "@/components/shared/smooth-scroll-provider";
import { FloatingSocials } from "@/components/shared/floating-socials";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SmoothScrollProvider>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1 pt-16">{children}</main>
              <Footer />
            </div>
            <FloatingSocials />
            <ScrollToTop />
            <ScrollProgress />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

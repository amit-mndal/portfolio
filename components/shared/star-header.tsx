"use client";

import { StarsCanvas } from "@/components/star-background";

export function StarHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-[45vh] flex-col justify-center overflow-hidden">
      <StarsCanvas />
      {children}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-56"
        style={{
          background:
            "linear-gradient(to top, var(--background) 0%, color-mix(in oklch, var(--background) 60%, transparent) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}

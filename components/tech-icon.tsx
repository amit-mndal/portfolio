"use client";

import { useState } from "react";
import Image from "next/image";
import { Code } from "lucide-react";

interface TechIconProps {
  logoKey: string;
  name: string;
  className?: string;
}

const darkLogoKeys = new Set(["nextjs", "express", "threejs", "flask", "github", "markdown"]);

export function TechIcon({ logoKey, name, className = "h-5 w-5" }: TechIconProps) {
  // const getIconUrl = () => {
  //   if (logoKey === "nextjs")
  //     return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
  //   if (logoKey === "tailwindcss")
  //     return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg";
  //   return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-original.svg`;
  // };

  const getIconUrl = () => {
  if (logoKey === "nextjs")
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";

  if (logoKey === "tailwindcss")
  return "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg";

  if (logoKey === "scikitlearn")
    return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg";

  if (logoKey === "streamlit")
    return "https://streamlit.io/images/brand/streamlit-logo-primary-colormark-darktext.svg";

  if (logoKey === "huggingface")
    return "https://huggingface.co/front/assets/huggingface_logo-noborder.svg";

  if (logoKey === "langchain")
    return "/icons/langchain2.svg";

  if (logoKey === "wireshark")
  return "https://upload.wikimedia.org/wikipedia/commons/d/db/Wireshark_Icon.png";

if (logoKey === "amazonwebservices")
  return "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg";

if (logoKey === "pinecone")
  return "https://avatars.githubusercontent.com/u/54333248?s=200&v=4";

if (logoKey === "chromadb")
  return "https://avatars.githubusercontent.com/u/109399122?s=200&v=4";

if (logoKey === "faiss")
  return "icons/faiss.svg";

if (logoKey === "langgraph")
  return "/icons/langgraph.svg";

if (logoKey === "llamaindex")
  return "/icons/llamaindex.svg";

if (logoKey === "ollama")
  return "https://ollama.com/public/ollama.png";

if (logoKey === "mlflow")
  return "/icons/mlflow.svg";

if (logoKey ==="assembly")
  return "/icons/asm.svg";

if (logoKey ==="dsa")
  return "/icons/dsa.svg";

if (logoKey ==="sD")
  return "/icons/systemD.svg";

if (logoKey ==="ml")
  return "/icons/ml.svg";

if (logoKey ==="ai")
  return "/icons/ai.svg";

  return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-original.svg`;
};

  const getFallbackUrl = () =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${logoKey}/${logoKey}-plain.svg`;

  const [src, setSrc] = useState(getIconUrl());
  const [usedFallback, setUsedFallback] = useState(false);
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div
        className={`${className} flex items-center justify-center rounded bg-primary/10 text-primary`}
      >
        <Code className="h-3 w-3" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} logo`}
      width={20}
      height={20}
      className={`${className} object-contain ${darkLogoKeys.has(logoKey) ? "dark:invert" : ""}`}
      onError={() => {
        if (!usedFallback) {
          setSrc(getFallbackUrl());
          setUsedFallback(true);
        } else {
          setImageError(true);
        }
      }}
    />
  );
}

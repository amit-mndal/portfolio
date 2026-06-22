export type SkillCategory =
  | "Languages"
  | "Frameworks & Libraries"
  | "Databases"
  | "Tools & Platforms"
  | "Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string;
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "C++", category: "Languages", logoKey: "cplusplus" },
    { name: "C", category: "Languages", logoKey: "c" },
    { name: "Python", category: "Languages", logoKey: "python" },
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    { name: "SQL", category: "Languages", logoKey: "mysql" },
    { name: "HTML", category: "Languages", logoKey: "html5" },
    { name: "CSS", category: "Languages", logoKey: "css3" },
    //{ name: "MySQL", category: "Languages", logoKey: "mysql" },
    { name: "TypeScript", category: "Languages", logoKey: "typescript" },
    { name: "Prolog", category: "Languages", logoKey: "prolog" },
    { name: "Assembly", category: "Languages", logoKey: "assembly" },
    { name: "Shell", category: "Languages", logoKey: "bash" },
    
    //{ name: "English", category: "Languages", logoKey: "english" },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", category: "Frameworks & Libraries", logoKey: "react" },
    { name: "Node.js", category: "Frameworks & Libraries", logoKey: "nodejs" },
    { name: "Express.js", category: "Frameworks & Libraries", logoKey: "express" },
    { name: "Django", category: "Frameworks & Libraries", logoKey: "django" },
    { name: "Next.js", category: "Frameworks & Libraries", logoKey: "nextjs" },
    { name: "FastAPI", category: "Frameworks & Libraries", logoKey: "fastapi" },
    { name: "Tailwind CSS", category: "Frameworks & Libraries", logoKey: "tailwindcss" },
    { name: "Redux Toolkit", category: "Frameworks & Libraries", logoKey: "redux" },
    { name: "Pandas", category: "Frameworks & Libraries", logoKey: "pandas" },
    { name: "NumPy", category: "Frameworks & Libraries", logoKey: "numpy" },
    { name: "scikit-learn", category: "Frameworks & Libraries", logoKey: "scikitlearn" },
    { name: "LangChain", category: "Frameworks & Libraries", logoKey: "langchain" },
    { name: "Streamlit", category: "Frameworks & Libraries", logoKey: "streamlit" },
    { name: "Hugging Face", category: "Frameworks & Libraries", logoKey: "huggingface" },
    { name: "Matplotlib", category: "Frameworks & Libraries", logoKey: "matplotlib" },
    { name: "TensorFlow", category: "Frameworks & Libraries", logoKey: "tensorflow" },
    { name: "PyTorch", category: "Frameworks & Libraries", logoKey: "pytorch" },
    { name: "Seaborn", category: "Frameworks & Libraries", logoKey: "python" },
    { name: "LangGraph", category: "Frameworks & Libraries", logoKey: "langgraph" },
    { name: "LlamaIndex", category: "Frameworks & Libraries", logoKey: "llamaindex" },
    { name: "Ollama", category: "Frameworks & Libraries", logoKey: "ollama" },
    { name: "MLflow", category: "Frameworks & Libraries", logoKey: "mlflow" },
  ],
  Databases: [
    { name: "MySQL", category: "Databases", logoKey: "mysql" },
    { name: "MongoDB", category: "Databases", logoKey: "mongodb" },
    { name: "MongoDB Atlas", category: "Databases", logoKey: "mongodb" },
    { name: "Pinecone", category: "Databases", logoKey: "pinecone" },
    { name: "ChromaDB", category: "Databases", logoKey: "chromadb" },
    { name: "FAISS", category: "Databases", logoKey: "faiss" },
  ],
  "Tools & Platforms": [
    { name: "Git", category: "Tools & Platforms", logoKey: "git" },
    { name: "GitHub", category: "Tools & Platforms", logoKey: "github" },
    { name: "Docker", category: "Tools & Platforms", logoKey: "docker" },
    { name: "Linux", category: "Tools & Platforms", logoKey: "linux" },
    { name: "Postman", category: "Tools & Platforms", logoKey: "postman" },
    { name: "VSCode", category: "Tools & Platforms", logoKey: "vscode" },
    { name: "Jupyter", category: "Tools & Platforms", logoKey: "jupyter" },
    { name: "Wireshark", category: "Tools & Platforms", logoKey: "wireshark" },
    { name: "Kaggle", category: "Tools & Platforms", logoKey: "kaggle" },
    { name: "Google Colab", category: "Tools & Platforms", logoKey: "googlecolab" },
    { name: "AWS", category: "Tools & Platforms", logoKey: "amazonwebservices" },
    { name: "Vercel", category: "Tools & Platforms", logoKey: "vercel" },
  ],
  Concepts: [
    { name: "Data Structures & Algorithms", category: "Concepts", logoKey: "dsa" },
    { name: "Operating Systems", category: "Concepts", logoKey: "linux" },
    { name: "Object-Oriented Programming", category: "Concepts", logoKey: "github" },
    { name: "Computer Networks", category: "Concepts", logoKey: "github" },
    { name: "Database Management", category: "Concepts", logoKey: "mysql" },
    { name: "Machine Learning", category: "Concepts", logoKey: "ml" },
    { name: "Artificial Intelligence", category: "Concepts", logoKey: "ai" },
    { name: "System Design", category: "Concepts", logoKey: "sD" },
    { name: "Retrieval-Augmented Generation (RAG)", category: "Concepts", logoKey: "langchain" },
    { name: "Vector Search", category: "Concepts", logoKey: "pinecone" },
    { name: "AI Agents", category: "Concepts", logoKey: "langgraph" },
    
  ],
};

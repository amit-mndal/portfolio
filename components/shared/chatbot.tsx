


"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

// import { Bot, X, Send, User } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { qaKnowledgeBase, predefinedQuestions, FALLBACK_ANSWER } from "@/data/chatbot-knowledge";

// interface Message {
//   id: string;
//   role: "user" | "bot";
//   text: string;
// }

import { Bot, X, Send, User, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { qaKnowledgeBase, predefinedQuestions, FALLBACK_ANSWER } from "@/data/chatbot-knowledge";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
}

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "bot",
  text: "Hi! I'm Amit's portfolio assistant. Ask me about his skills, projects, education, or experience — or tap a question below to get started.",
};

function findAnswer(question: string): string {
  const lowerQ = question.toLowerCase();

  let bestMatch: { score: number; answer: string } | null = null;

  for (const entry of qaKnowledgeBase) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (lowerQ.includes(keyword.toLowerCase())) {
        score += keyword.split(" ").length;
      }
    }
    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { score, answer: entry.answer };
    }
  }

  return bestMatch ? bestMatch.answer : FALLBACK_ANSWER;
}

export function Chatbot() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [showTooltip, setShowTooltip] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const [mounted, setMounted] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "welcome",
//       role: "bot",
//       text: "Hi! I'm Amit's portfolio assistant. Ask me about his skills, projects, education, or experience — or tap a question below to get started.",
//     },
//   ]);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const [anchorRight, setAnchorRight] = useState(24);

  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-show the tooltip once after 5–7 seconds, but only if it hasn't
  // been manually dismissed by the user (dismiss is permanent for the session).
  useEffect(() => {
    if (tooltipDismissed || isOpen) return;
    const delay = 5000 + Math.random() * 2000; // 5–7 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, delay);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once on mount only



  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping]);

  // Position the popup so it lines up under the toggle button, independent of
  // the navbar's own 3D-tilt transform (we render the popup via a portal so
  // the tilt never touches it).
  useEffect(() => {
    function updatePosition() {
      if (toggleBtnRef.current) {
        const rect = toggleBtnRef.current.getBoundingClientRect();
        const rightOffset = Math.max(window.innerWidth - rect.right - 8, 12);
        setAnchorRight(rightOffset);
      }
    }
    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [isOpen]);

  // IMPORTANT: no outside-click listener and no scroll listener here.
  // The chat panel only closes when the user manually clicks the X button
  // or clicks the toggle icon again — never automatically.

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: `u-${Date.now()}`, role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");


//     setIsTyping(true);

//     setTimeout(() => {
//       const answer = findAnswer(text);
//       const botMsg: Message = { id: `b-${Date.now()}`, role: "bot", text: answer };
//       setMessages((prev) => [...prev, botMsg]);
//       setIsTyping(false);
//     }, 500 + Math.random() * 400);
//   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     sendMessage(input);
// //   };
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     sendMessage(input);
//   };

//   const handleRestart = () => {
//     setMessages([WELCOME_MESSAGE]);
//     setInput("");
//     setIsTyping(false);
//   };


   setIsTyping(true);

    setTimeout(() => {
      const answer = findAnswer(text);
      const botMsgId = `b-${Date.now()}`;

      // Insert an empty bot message first, then stream words into it.
      setMessages((prev) => [...prev, { id: botMsgId, role: "bot", text: "" }]);
      setIsTyping(false);
      setStreamingId(botMsgId);

      const words = answer.split(" ");
      let wordIndex = 0;

      const streamInterval = setInterval(() => {
        wordIndex++;
        const partialText = words.slice(0, wordIndex).join(" ");

        setMessages((prev) =>
          prev.map((m) => (m.id === botMsgId ? { ...m, text: partialText } : m))
        );

        if (wordIndex >= words.length) {
          clearInterval(streamInterval);
          setStreamingId(null);
        }
      }, 45); // ms between each word — tweak for faster/slower streaming
    }, 500 + Math.random() * 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleRestart = () => {
    setMessages([WELCOME_MESSAGE]);
    setInput("");
    setIsTyping(false);
    setStreamingId(null);
  };

  






  const panel = isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      style={{ right: anchorRight }}
      className="fixed top-18 z-100 flex h-[min(32rem,75vh)] w-[min(22rem,90vw)] flex-col overflow-hidden rounded-2xl border-[0.5px] border-white/20 bg-background shadow-2xl shadow-black/30 dark:border-white/10"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b bg-primary/5 px-4 py-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Bot className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold leading-tight">Ask about Amit</p>
          <p className="text-xs text-muted-foreground">Usually replies instantly</p>
        </div>
        {/* <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={() => setIsOpen(false)}
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </Button> */}

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={handleRestart}
          aria-label="Restart conversation"
          title="Restart conversation"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="h-7 w-7"
          onClick={() => setIsOpen(false)}
          aria-label="Close chat"
        >
          <X className="h-4 w-4" />
        </Button>


      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-3 py-4">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-start gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}
            >
              {msg.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
            </div>
            {/* <div
              className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "rounded-tr-sm bg-primary text-primary-foreground"
                  : "rounded-tl-sm bg-muted text-foreground"
              }`}
            >
              {msg.text}
            </div> */}

            <div
              className={`max-w-[78%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "rounded-tr-sm bg-primary text-primary-foreground"
                  : "rounded-tl-sm bg-muted text-foreground"
              }`}
            >
              {msg.text}
              {msg.id === streamingId && (
                <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-current align-middle" />
              )}
            </div>





          </motion.div>
        ))}

        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
              <Bot className="h-3.5 w-3.5" />
            </div>
            <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-muted px-3.5 py-2.5">
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-muted-foreground"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {messages.length === 1 && !isTyping && (
          <div className="flex flex-col gap-2 pt-1">
            {predefinedQuestions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => sendMessage(q)}
                className="rounded-xl border border-primary/30 bg-primary/5 px-3 py-2 text-left text-xs font-medium text-primary transition-colors hover:bg-primary/10"
              >
                {q}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t p-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 rounded-full border bg-background px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-ring"
        />
        <Button
          type="submit"
          size="icon"
          className="h-9 w-9 shrink-0 rounded-full"
          disabled={!input.trim()}
          aria-label="Send message"
        >
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </motion.div>
  );

  return (
    <>
      {/* Toggle button with hover tooltip */}
      {/* <div
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      > */}


      <div
        className="relative"
        onMouseEnter={() => { if (!tooltipDismissed) setShowTooltip(true); }}
        onMouseLeave={() => setShowTooltip(false)}
      >





        <Button
          ref={toggleBtnRef}
          type="button"
          variant="ghost"
          size="icon"
          // onClick={() => setIsOpen((prev) => !prev)}
          onClick={() => { setIsOpen((prev) => !prev); setShowTooltip(false); }}


          aria-label="Open chat assistant"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-5 w-5" />
              </motion.span>
            ) : (
              <motion.span
                key="chat"
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.15 }}
              >
                <Bot className="h-5 w-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </Button>

        {/* Tooltip */}
        {/* <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-1/2 top-full z-100 mt-2 w-max translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-3 py-1.5 text-xs font-medium text-background shadow-lg"
            >
              Have any questions? Ask here
              <div className="absolute -top-1 right-1/2 h-2 w-2 translate-x-1/2 rotate-45 bg-foreground" />
            </motion.div>
          )}
        </AnimatePresence> */}


        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-1/2 top-full z-100 mt-2 flex translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-lg bg-foreground py-2 pl-3 pr-2 text-xs font-medium text-background shadow-lg"
            >
              Have any questions? Ask here
              {/* Close button inside the tooltip */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                  setTooltipDismissed(true);
                }}
                className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-background/20 transition-colors hover:bg-background/40"
                aria-label="Dismiss"
              >
                <X className="h-2.5 w-2.5" />
              </button>
              {/* Arrow */}
              <div className="absolute -top-1 right-1/2 h-2 w-2 translate-x-1/2 rotate-45 bg-foreground" />
            </motion.div>
          )}
        </AnimatePresence>






      </div>

      {/* Panel rendered via portal at document.body so the navbar's 3D tilt
          transform never applies to it (fixes the "shrinking on hover" bug) */}
      {mounted && createPortal(<AnimatePresence>{panel}</AnimatePresence>, document.body)}
    </>
  );
}
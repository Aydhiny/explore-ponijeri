"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import { FaSnowflake } from "react-icons/fa";

const QUICK_QUESTIONS = [
  "Šta su Ponijeri?",
  "Kako da stignem do Ponijera?",
  "Recite mi nešto o Kaknju!",
];

const getBotReply = (input) => {
  const q = input.toLowerCase();
  if (q.includes("ponijeri") || q.includes("šta su"))
    return "Ponijeri su planinsko izletište na 1200m nadmorske visine, udaljeno oko 20km od Kaknja — idealno za skijanje i planinarenje.";
  if (q.includes("kakanj"))
    return "Kakanj je grad bogate historije i prirodnih ljepota u središnjoj Bosni. Poznato je po rijeci Bosni i industrijskom naslijeđu.";
  if (q.includes("stign") || q.includes("prevoz") || q.includes("bus"))
    return (
      <span>
        Do Ponijera možete doći autobusom iz Kaknja ili automobilom.{" "}
        <a
          href="https://www.google.com/maps?daddr=R456,+Vukanovići"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-300 hover:text-blue-100"
        >
          Pogledajte rutu →
        </a>
      </span>
    );
  return "Za više informacija kontaktirajte Općinu Kakanj: opcinaka@bih.net.ba ili pozovite +387 32 771 800.";
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Zdravo! Pitajte me nešto o Ponijerima. 🏔️", sender: "bot", id: 0 },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");

    setMessages(prev => [...prev, { text: msg, sender: "user", id: Date.now() }]);
    setTyping(true);

    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { text: getBotReply(msg), sender: "bot", id: Date.now() + 1 }]);
    }, 1200);
  };

  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      {/* Floating button */}
      <motion.button
        className="fixed bottom-6 right-6 z-[200] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        style={{
          background: open ? "#002F5A" : "linear-gradient(135deg, #0084FF, #005fcc)",
          boxShadow: "0 0 30px rgba(0,132,255,0.4)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", bounce: 0.4 }}
        onClick={() => setOpen(o => !o)}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <FiX className="text-white text-xl" />
              </motion.span>
            : <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <FiMessageCircle className="text-white text-xl" />
              </motion.span>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[200] w-80 sm:w-96 rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "rgba(10,22,50,0.92)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(0,132,255,0.2)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,132,255,0.1)",
              maxHeight: "480px",
            }}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(0,132,255,0.2)", border: "1px solid rgba(0,132,255,0.3)" }}
                >
                  <FaSnowflake className="text-blue-300 text-xs" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Ponijeri Asistent</p>
                  <p className="text-green-400 text-xs mt-0.5">● Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/30 hover:text-white/60 transition-colors">
                <FiX />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: "280px" }}>
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className="max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed"
                    style={
                      msg.sender === "user"
                        ? { background: "linear-gradient(135deg, #0084FF, #005fcc)", color: "#fff", borderBottomRightRadius: "4px" }
                        : { background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.85)", borderBottomLeftRadius: "4px", border: "1px solid rgba(255,255,255,0.08)" }
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3 rounded-2xl text-sm"
                    style={{ background: "rgba(255,255,255,0.07)", borderBottomLeftRadius: "4px" }}
                  >
                    <span className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <span
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-blue-400"
                          style={{ animation: `bounce 1s infinite ${i * 0.2}s` }}
                        />
                      ))}
                    </span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-3 flex flex-col gap-1.5">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-left text-xs px-3 py-2 rounded-xl transition-all duration-150 hover:scale-[1.01] text-blue-200"
                    style={{ background: "rgba(0,132,255,0.1)", border: "1px solid rgba(0,132,255,0.15)" }}
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div
              className="px-3 py-3 flex gap-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Postavite pitanje..."
                className="flex-1 text-sm px-3 py-2 rounded-xl text-white placeholder-white/30 outline-none"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-150 disabled:opacity-30"
                style={{ background: "linear-gradient(135deg, #0084FF, #005fcc)" }}
              >
                <FiSend className="text-white text-sm" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
      `}</style>
    </>
  );
}

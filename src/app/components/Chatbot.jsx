"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMessage } from "react-icons/ai";
import { motion } from "framer-motion";

const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Zdravo! Kako Vam mogu pomoći?", sender: "bot", id: 1 },
    { text: "Postavite pitanje o Ponijerima:", sender: "bot", id: 2 },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [typingDots, setTypingDots] = useState(".");

  // Typing animation
  useEffect(() => {
    if (isTyping) {
      const interval = setInterval(() => {
        setTypingDots((prev) => (prev.length < 3 ? prev + "." : "."));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isTyping]);

  const handleUserMessage = (e) => {
    if ((e.key === "Enter" || e.type === "click") && userInput.trim() !== "") {
      const newMessages = [
        ...messages,
        { text: userInput, sender: "user", id: messages.length + 1 },
        { text: "…", sender: "bot", isTyping: true, id: messages.length + 2 },
      ];
      setMessages(newMessages);
      setUserInput("");
      setIsTyping(true);

      setTimeout(() => {
        let botReply =
          "Šaljemo Vam mejl Općine Kakanj za bilo kakvu pomoć ili informacije: opcinaka@bih.net.ba";

        if (userInput.toLowerCase().includes("ponijeri")) {
          botReply =
            "Ponijeri su prekrasna planina u blizini Kaknja, idealna za planinarenje i uživanje u prirodi.";
        } else if (userInput.toLowerCase().includes("kakanj")) {
          botReply =
            "Kakanj je grad bogate istorije i prirodnih ljepota. Posjetite ga da otkrijete više!";
        } else if (
          userInput.toLowerCase().includes("kako da stignem do ponijera")
        ) {
          botReply = (
            <>
              Do Ponijera možete doći iz Kaknja autobusom ili automobilom. Evo
              rute:{" "}
              <a
                href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=ba&sa=X&geocode=KYsgbz6B3F5HMRlDVnq-xa1Q&daddr=R456,+Vukanovi%C4%87i"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Kliknite ovdje za mapu
              </a>
              .
            </>
          );
        }

        setMessages((prevMessages) => [
          ...prevMessages.filter((msg) => !msg.isTyping),
          { text: botReply, sender: "bot", id: messages.length + 3 },
        ]);
        setIsTyping(false);
      }, 2000);
    }
  };

  const handleQuestionClick = (question) => {
    setUserInput(question);
    handleUserMessage({ type: "click" });
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
    if (!chatOpen) {
      setMessages([
        { text: "Zdravo! Kako Vam mogu pomoći?", sender: "bot", id: 1 },
        { text: "Postavite pitanje o Ponijerima:", sender: "bot", id: 2 },
      ]);
    }
  };

  return (
    <div>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-5 right-5 z-[200] cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={toggleChat}
      >
        <AiOutlineMessage size={50} color="blue" />
      </motion.div>

      {/* Chat Window */}
      {chatOpen && (
        <motion.div
          className="fixed bottom-10 right-10 z-[200] bg-white shadow-lg rounded-lg w-80 p-4 border border-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Pomoć</h3>
            <AiOutlineClose
              className="cursor-pointer"
              size={20}
              onClick={toggleChat}
            />
          </div>

          {/* Messages */}
          <div className="space-y-4 max-h-60 overflow-y-auto mb-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : ""
                }`}
              >
                <div
                  className={`max-w-xs p-2 rounded-lg break-words ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {message.isTyping ? typingDots : message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Questions Section */}
          {messages[messages.length - 1]?.sender === "bot" &&
            messages[messages.length - 1]?.text ===
              "Postavite pitanje o Ponijerima:" && (
              <div className="flex flex-col space-y-2 mt-4">
                <button
                  onClick={() => handleQuestionClick("Šta su Ponijeri?")}
                  className="bg-blue-500 text-white p-2 rounded-lg"
                >
                  Šta su Ponijeri?
                </button>
                <button
                  onClick={() =>
                    handleQuestionClick("Recite mi nešto zanimljivo o Kaknju!")
                  }
                  className="bg-blue-500 text-white p-2 rounded-lg"
                >
                  Recite mi nešto zanimljivo o Kaknju!
                </button>
                <button
                  onClick={() =>
                    handleQuestionClick("Kako da stignem do Ponijera?")
                  }
                  className="bg-blue-500 text-white p-2 rounded-lg"
                >
                  Kako da stignem do Ponijera?
                </button>
              </div>
            )}

          {/* Input Section */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Postavite pitanje..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleUserMessage}
            />
            <button
              className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
              onClick={handleUserMessage}
            >
              Pošaljite
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;

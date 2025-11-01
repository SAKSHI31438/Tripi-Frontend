"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import React from "react";
import { Ellipsis, MessageCircle, X } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!); // ⚠️ Exposed in frontend
const genAI = new GoogleGenerativeAI("AIzaSyCEU8IaLYQpC7mkLFiTiV66vwCUP3zrE7A"); // ⚠️ Exposed in frontend

const ChatBot = () => {
  console.log(process.env.GEMINI_API_KEY!);
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const [messages, setMessages] = useState<{ role: string; text: string }[]>(
    []
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  const sendMessage = async () => {
    if (!inputRef.current) return;

    // Add user message
    if (inputRef.current && inputRef.current.value) {
      setMessages((prev) => [
        ...prev,
        { role: "user", text: inputRef.current?.value ?? "" },
      ]);
    }

    // Show typing indicator
    setIsTyping(true);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
    const result = await model.generateContent(
      "You are Tripi, a friendly AI travel assistant for the Tripi website. " +
        "Always give answers related to travel, tourism, destinations, itineraries, cultural tips, " +
        "and experiences. Keep your responses **concise, clear, and under 3 sentences**. " +
        "If a user asks something unrelated, politely guide them back to travel. " +
        "User: " +
        inputRef.current.value
    );
    const reply = result.response.text();

    // Hide typing indicator
    setIsTyping(false);

    console.log(reply);

    // Add bot reply
    setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    inputRef.current.value = "";
  };
  useEffect(() => {
    const toggleVisiblity = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisiblity);
    return () => window.removeEventListener("scroll", toggleVisiblity);
  }, []);

  return (
    <div className="fixed bottom-18 right-4 cursor-pointer z-[9999]">
      {isVisible && (
        <div>
          {isOpen && (
            <div className="bg-white text-white overflow-hidden shadow-2xl rounded-2xl h-[500px] lg:w-[370px] md:w-[340px] sm:w-[280px] w-[90vw] flex-shrink-0 flex flex-col justify-between mb-14">
              {/* Header */}
              <div className="bg-blue-950 text-white flex rounded-tl-2xl rounded-tr-2xl items-center justify-between border-b border-blue-600 pb-2 p-3">
                <h2 className="text-lg font-bold">Chat With Us</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Messages area */}
              <div className="bg-slate-200 flex-1 overflow-y-auto py-2 space-y-2 text-sm p-3">
                {/* <div className="bg-white text-gray-800 rounded-xl px-3 py-2 w-fit shadow">
                  Hello 👋, how can I help you?
                </div> */}
                {/* <div className="bg-blue-800 text-white rounded-xl px-3 py-2 w-fit ml-auto shadow"></div> */}
                <div className="flex-1 overflow-y-auto py-2 space-y-2 text-sm">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`px-3 py-2 rounded-xl text-justify shadow w-fit max-w-[100%] sm:max-w-[80%] md:max-w-[70%] text-sm break-words ${
                        msg.role === "user"
                          ? "bg-blue-800 text-white ml-auto"
                          : "bg-white text-gray-800"
                      }`}
                    >
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  ))}
                </div>
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="px-4 py-2 rounded-xl shadow w-fit text-sm bg-white text-gray-800 animate-pulse">
                    <Ellipsis />
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="rounded-bl-2xl rounded-br-2xl ">
                <div className="flex items-center  gap-2 p-3 bg-blue-950">
                  <input
                    id="chatInput"
                    type="text"
                    ref={inputRef}
                    required
                    placeholder="Type a message..."
                    className="flex-1 px-3 py-2 rounded-lg text-sm outline-none border placeholder-black bg-white text-black"
                  />
                  <button
                    onClick={sendMessage}
                    className="bg-white border-none hover:opacity-90 cursor-pointer text-gray-800 px-3 py-1.5 rounded-lg font-medium transition"
                  >
                    Send
                  </button>
                </div>
                <p className="w-full bg-blue-950 text-[10px] mx-auto text-center pb-1 pt-1">
                  Copyright © 2025 Tripi . All rights are reserved.
                </p>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-rose-700 text-white rounded-full w-12 h-12 flex items-center justify-center
            absolute bottom-0 right-0 focus:outline-none animate-pulse "
          >
            <MessageCircle />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;

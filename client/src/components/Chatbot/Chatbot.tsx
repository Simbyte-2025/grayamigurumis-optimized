import React, { useState, useEffect } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";
import "./chat.css";
import { sendChatMessage } from "@/services/chatService";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Mensaje de bienvenida al abrir por primera vez
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: `bot-${Date.now()}`,
        text: "¡Hola! 🧵 Soy GrayBot, tu asistente creativa. Puedo ayudarte a imaginar tu amigurumi personalizado. ¿Qué te gustaría crear?",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: input.trim(),
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const userInput = input.trim();
    setInput("");
    setIsLoading(true);

    try {
      // Historial de conversación (excluyendo el mensaje de bienvenida)
      const conversationHistory = messages
        .filter((msg) => msg.id !== messages[0]?.id)
        .map((msg) => ({ sender: msg.sender, text: msg.text }));

      // Llamar al servicio de chat
      const response = await sendChatMessage(userInput, conversationHistory);

      // Agregar respuesta del bot
      const botResponse: Message = {
        id: `bot-${Date.now()}`,
        text: response.message || "Lo siento, no pude procesar tu mensaje.",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      
      // Mensaje de error amigable
      const errorMessage: Message = {
        id: `bot-${Date.now()}`,
        text: "Ups, tuve un problema técnico 😅 ¿Podrías intentar de nuevo?",
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Botón flotante */}
      <ChatButton onClick={toggleChat} isOpen={isOpen} />

      {/* Ventana del chat */}
      {isOpen && (
        <ChatWindow
          messages={messages}
          input={input}
          isLoading={isLoading}
          onInputChange={setInput}
          onSendMessage={handleSendMessage}
          onClose={closeChat}
        />
      )}
    </>
  );
}

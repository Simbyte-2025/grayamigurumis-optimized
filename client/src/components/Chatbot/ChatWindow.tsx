import React, { useEffect, useRef } from "react";
import { X, Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ChatWindowProps {
  messages: Message[];
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSendMessage: () => void;
  onClose: () => void;
}

export default function ChatWindow({
  messages,
  input,
  isLoading,
  onInputChange,
  onSendMessage,
  onClose,
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll al nuevo mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  // Focus en input al abrir
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && input.trim()) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="chat-window">
      {/* Cabecera */}
      <div className="chat-header">
        <div className="chat-header-title">
          <span role="img" aria-label="teddy bear">
            🧸
          </span>
          <span>Asistente Gray Amigurumis</span>
        </div>
        <button
          className="chat-header-close"
          onClick={onClose}
          aria-label="Cerrar chat"
          type="button"
        >
          <X size={24} />
        </button>
      </div>

      {/* Mensajes */}
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-bubble ${
              message.sender === "user" ? "chat-bubble-user" : "chat-bubble-bot"
            }`}
          >
            {message.text}
          </div>
        ))}

        {/* Indicador de escritura */}
        {isLoading && (
          <div className="chat-typing-indicator">
            <div className="chat-typing-dot" />
            <div className="chat-typing-dot" />
            <div className="chat-typing-dot" />
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input de mensaje */}
      <div className="chat-input-container">
        <input
          ref={inputRef}
          type="text"
          className="chat-input"
          placeholder="Escribe tu idea aquí..."
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button
          className="chat-send-button"
          onClick={onSendMessage}
          disabled={!input.trim() || isLoading}
          type="button"
          aria-label="Enviar mensaje"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}

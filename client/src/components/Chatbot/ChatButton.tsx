import React from "react";
import { MessageCircle } from "lucide-react";

interface ChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatButton({ onClick, isOpen }: ChatButtonProps) {
  return (
    <button
      className="chat-fab"
      onClick={onClick}
      aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      type="button"
    >
      {/* Ícono de ovillo/chat */}
      <MessageCircle strokeWidth={2.5} />
      
      {/* Indicator de disponibilidad */}
      {!isOpen && (
        <span
          className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
          aria-hidden="true"
        />
      )}
    </button>
  );
}

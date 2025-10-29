import React from "react";

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
      {/* Robot amigurumi */}
      <img 
        src="/robot-face.webp" 
        alt="GrayBot - Asistente de Grayamigurumis"
        className="w-full h-full object-contain p-1"
      />
      
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

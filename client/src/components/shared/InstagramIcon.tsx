import React from "react";

export default function InstagramIcon({ 
  size = 20, 
  title = "Instagram",
  className = ""
}: { 
  size?: number; 
  title?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-label={title}
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block" }}
    >
      <title>{title}</title>
      <rect 
        x="2" 
        y="2" 
        width="20" 
        height="20" 
        rx="5" 
        ry="5" 
        fill="currentColor" 
      />
      <path 
        d="M12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm0 8a3 3 0 1 1 0-6a3 3 0 0 1 0 6z" 
        fill="#fff"
      />
      <circle 
        cx="17.5" 
        cy="6.5" 
        r="1" 
        fill="#fff"
      />
    </svg>
  );
}

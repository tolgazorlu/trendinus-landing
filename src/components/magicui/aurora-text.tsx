"use client";

import React, { memo } from "react";

interface AuroraTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#8b5cf6", "#ec4899", "#06b6d4", "#f59e0b", "#10b981"],
    speed = 2,
  }: AuroraTextProps) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
        colors[0]
      })`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`,
    };

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="relative animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(139,92,246,0.5)]"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
        {/* Glow effect */}
        <span
          className="absolute inset-0 animate-aurora bg-[length:200%_auto] bg-clip-text text-transparent blur-sm opacity-30"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    );
  }
);

AuroraText.displayName = "AuroraText";

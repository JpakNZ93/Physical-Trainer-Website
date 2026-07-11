"use client";

import { useEffect, useRef } from "react";

interface IndustrialCardProps {
  children: React.ReactNode;
  className?: string;
}

export function IndustrialCard({ children, className = "" }: IndustrialCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    function handleMouseEnter() {
      card!.style.transform = "translate(-4px, -4px)";
      card!.style.boxShadow = "14px 14px 0px 0px rgba(0,0,0,1)";
    }

    function handleMouseLeave() {
      card!.style.transform = "translate(0px, 0px)";
      card!.style.boxShadow = "10px 10px 0px 0px rgba(0,0,0,1)";
    }

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`brutalist-border industrial-shadow group cursor-default bg-surface transition-none hover:bg-surface-container-low ${className}`}
    >
      {children}
    </div>
  );
}

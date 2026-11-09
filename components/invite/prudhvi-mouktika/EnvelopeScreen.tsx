"use client";

import React from "react";
import { invitationData } from "./invitationData";

interface EnvelopeScreenProps {
  onOpen: () => void;
  opening: boolean;
}

export default function EnvelopeScreen({ onOpen, opening }: EnvelopeScreenProps) {
  return (
    <div
      className="min-h-[100dvh] w-full flex flex-col items-center justify-center relative px-6 pb-16 md:pb-0 select-none overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(95 30% 80%), hsl(95 22% 68%))",
      }}
    >
      {/* Drifting subtle floral emojis */}
      <span className="absolute top-6 left-6 text-3xl opacity-70 animate-drift">🌸</span>
      <span
        className="absolute top-8 right-10 text-2xl opacity-60 animate-drift"
        style={{ animationDelay: "1s" }}
      >
        🌼
      </span>
      <span
        className="absolute bottom-8 left-10 text-3xl opacity-70 animate-drift"
        style={{ animationDelay: "2s" }}
      >
        🌿
      </span>
      <span
        className="absolute bottom-6 right-6 text-3xl opacity-70 animate-drift"
        style={{ animationDelay: "0.5s" }}
      >
        🌿
      </span>

      {/* Envelope Button */}
      <button
        onClick={onOpen}
        aria-label="Open invitation"
        className={`relative group transition-transform duration-500 hover:scale-105 cursor-pointer ${
          opening ? "animate-envelope-open" : ""
        }`}
        style={{ perspective: "1000px" }}
      >
        <img
          src={invitationData.assets.envelope}
          alt="Engagement invitation envelope"
          className="w-[280px] sm:w-[360px] md:w-[420px] h-auto drop-shadow-2xl"
        />
        {/* Wax Seal with Gold Shimmer */}
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-full gradient-gold shadow-gold animate-shimmer flex items-center justify-center border border-white/30">
            <span className="font-cinzel text-xs font-semibold text-white/95 tracking-widest">
              {invitationData.couple.monogram}
            </span>
          </span>
        </span>
      </button>

      {/* Heading Text */}
      <div
        className={`mt-6 md:mt-10 text-center animate-fade-up delay-300 transition-opacity duration-300 ${
          opening ? "opacity-0" : "opacity-100"
        }`}
      >
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] text-[#334626] font-semibold uppercase">
          WEDDING INVITATION
        </p>
        <h1 className="font-script text-4xl sm:text-5xl text-[#6b1e2c] mt-2">
          {invitationData.couple.groom.name} &amp; {invitationData.couple.bride.name}
        </h1>
        <p className="mt-4 text-xs tracking-widest text-[#334626]/80 font-cinzel animate-pulse">
          TAP THE SEAL TO OPEN
        </p>
      </div>
    </div>
  );
}


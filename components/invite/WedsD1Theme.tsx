"use client";

import React, { useEffect } from "react";
import type { InviteData } from "@/data/invites";
import App from "./weds-d1/App";

export function WedsD1Theme({ invite }: { invite?: InviteData }) {
  useEffect(() => {
    document.title = "Yaswanth & Mrudula | Wedding Invitation";
  }, []);

  return (
    <div className="weds-d1-scope relative min-h-screen bg-[#240609] text-[#FFF6D8]">
      {/* 
        Embedded Fonts and Authentic Temple Theme Styling
        Importing: Cinzel, Cormorant Garamond, Great Vibes, Karla, Outfit, Pinyon Script, Playfair Display
      */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Karla:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500;600;700&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap');

        .weds-d1-scope {
          --maroon-deep: #2A0B0E;
          --maroon-temple: #7B1F2B;
          --brass: #C9922F;
          --brass-soft: #E8BD6D;
          --paper: #FFF6D8;
          --leaf: #1F6B4A;
          --ink: #421217;
          font-family: 'Karla', 'Outfit', sans-serif;
        }

        .weds-d1-scope h1, 
        .weds-d1-scope h2, 
        .weds-d1-scope h3, 
        .weds-d1-scope h4, 
        .weds-d1-scope .font-serif,
        .weds-d1-scope .font-serif-luxury {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .weds-d1-scope .font-display {
          font-family: 'Cinzel', serif;
        }

        .weds-d1-scope .font-playfair {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .weds-d1-scope .font-pinyon {
          font-family: 'Pinyon Script', cursive;
        }

        .weds-d1-scope .font-script {
          font-family: 'Great Vibes', cursive;
        }

        .weds-d1-scope .font-sans {
          font-family: 'Karla', 'Outfit', sans-serif;
        }

        /* Ambient temple lighting background layer */
        .weds-d1-scope .bg-ambient-temple {
          background: 
            radial-gradient(circle at 50% 15%, rgba(201, 146, 47, 0.12) 0%, transparent 65%),
            radial-gradient(circle at 10% 40%, rgba(123, 31, 43, 0.18) 0%, transparent 55%),
            radial-gradient(circle at 90% 70%, rgba(201, 146, 47, 0.1) 0%, transparent 60%),
            linear-gradient(180deg, rgba(26, 5, 7, 0.45) 0%, rgba(42, 11, 14, 0.22) 30%, rgba(42, 11, 14, 0.26) 70%, rgba(20, 4, 7, 0.55) 100%);
          backdrop-filter: blur(0.5px);
        }

        /* Authentic Paper-Cut / Sandalwood Parchment Card Styling */
        .weds-d1-scope .paper-cut-card {
          position: relative;
          background: linear-gradient(180deg, rgba(255, 253, 248, 0.98) 0%, rgba(255, 247, 232, 0.96) 100%);
          color: #421217;
          border-radius: 1.5rem;
          box-shadow: 
            0 22px 55px -12px rgba(15, 3, 5, 0.85),
            0 0 0 1px rgba(201, 146, 47, 0.4),
            0 0 35px rgba(201, 146, 47, 0.18);
          backdrop-filter: blur(10px);
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .weds-d1-scope .paper-cut-card::before {
          content: '';
          position: absolute;
          inset: 6px;
          border: 1px solid rgba(201, 146, 47, 0.38);
          border-radius: 1.25rem;
          pointer-events: none;
        }

        .weds-d1-scope .paper-cut-card:hover {
          box-shadow: 
            0 30px 65px -12px rgba(15, 3, 5, 0.95),
            0 0 0 1.5px rgba(201, 146, 47, 0.65),
            0 0 45px rgba(201, 146, 47, 0.28);
          transform: translateY(-2px);
        }

        /* Traditional temple gold shimmer text */
        .weds-d1-scope .text-gold-gradient {
          background: linear-gradient(135deg, #FFE8A3 0%, #C9922F 45%, #E8BD6D 70%, #7D5117 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .weds-d1-scope .text-brass-gradient {
          background: linear-gradient(135deg, #FFCF5C 0%, #C9922F 50%, #996515 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .weds-d1-scope .toran-accent-line {
          background: linear-gradient(90deg, transparent 0%, #C9922F 50%, transparent 100%);
          height: 1px;
          width: 100%;
        }

        .weds-d1-scope .diya-glow {
          filter: drop-shadow(0 0 12px rgba(255, 207, 92, 0.65));
        }

        .weds-d1-scope .corner-ornament {
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #C9922F;
          pointer-events: none;
        }
        .weds-d1-scope .corner-tl { top: 10px; left: 10px; border-top: 1.5px solid; border-left: 1.5px solid; }
        .weds-d1-scope .corner-tr { top: 10px; right: 10px; border-top: 1.5px solid; border-right: 1.5px solid; }
        .weds-d1-scope .corner-bl { bottom: 10px; left: 10px; border-bottom: 1.5px solid; border-left: 1.5px solid; }
        .weds-d1-scope .corner-br { bottom: 10px; right: 10px; border-bottom: 1.5px solid; border-right: 1.5px solid; }

        .weds-d1-scope .perspective-temple {
          perspective: 1200px;
        }

        .weds-d1-scope .temple-door-left {
          transform-origin: left center;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .weds-d1-scope .temple-door-right {
          transform-origin: right center;
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .weds-d1-scope .doors-parted .temple-door-left {
          transform: rotateY(-88deg) translateX(-15%);
          opacity: 0.2;
        }

        .weds-d1-scope .doors-parted .temple-door-right {
          transform: rotateY(88deg) translateX(15%);
          opacity: 0.2;
        }

        @keyframes floatGentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .weds-d1-scope .animate-float-gentle {
          animation: floatGentle 4.5s ease-in-out infinite;
        }

        .weds-d1-scope .text-royal-gold {
          color: #FFF2D1;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.9), 0 0 20px rgba(201, 146, 47, 0.4);
        }

        .weds-d1-scope .text-royal-title {
          background: linear-gradient(135deg, #FFFDF0 0%, #FFDF88 40%, #D4A034 85%, #9E6B15 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 4px 14px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 24px rgba(201, 146, 47, 0.45));
        }

        /* Color classes */
        .weds-d1-scope .bg-brass { background-color: #C9922F; }
        .weds-d1-scope .bg-brass-glow { background-color: #FFCF5C; }
        .weds-d1-scope .bg-brass-soft { background-color: #E8BD6D; }
        .weds-d1-scope .text-brass { color: #C9922F; }
        .weds-d1-scope .text-brass-glow { color: #FFCF5C; }
        .weds-d1-scope .text-brass-soft { color: #E8BD6D; }
        .weds-d1-scope .text-paper { color: #FFF6D8; }
        .weds-d1-scope .bg-paper { background-color: #FFF6D8; }
        .weds-d1-scope .bg-paper-card { background-color: #FFFBF0; }
        .weds-d1-scope .text-ink { color: #421217; }
        .weds-d1-scope .border-brass { border-color: #C9922F; }
        .weds-d1-scope .border-brass-soft { border-color: #E8BD6D; }

        @keyframes petalFall {
          0% { opacity: 0; transform: translateY(-10vh) rotate(0deg); }
          15% { opacity: 0.85; }
          85% { opacity: 0.85; }
          100% { opacity: 0; transform: translateY(110vh) rotate(360deg); }
        }

        @keyframes sparkRise {
          0% { opacity: 0; transform: translate(0, 0) scale(0.6); }
          30% { opacity: 0.9; transform: translate(10px, -40px) scale(1.1); }
          70% { opacity: 0.9; transform: translate(-10px, -90px) scale(0.9); }
          100% { opacity: 0; transform: translate(5px, -140px) scale(0.4); }
        }

        @keyframes lampFlicker {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.06); }
        }

        .weds-d1-scope .animate-petal-fall {
          animation: petalFall 9s linear infinite;
        }

        .weds-d1-scope .animate-spark-rise {
          animation: sparkRise 4.5s ease-in-out infinite;
        }

        .weds-d1-scope .animate-lamp-flicker {
          animation: lampFlicker 3s ease-in-out infinite;
        }
      `}</style>

      {/* Render the complete weds-d1 application */}
      <App />
    </div>
  );
}

export const YaswanthMrudulaTheme = WedsD1Theme;
export default WedsD1Theme;


"use client";

import React, { useState, useEffect } from "react";
import type { InviteData } from "@/data/invites";
import EnvelopeScreen from "./prudhvi-mouktika/EnvelopeScreen";
import HeroSection from "./prudhvi-mouktika/HeroSection";
import ScratchCard from "./prudhvi-mouktika/ScratchCard";
import CountdownTimer from "./prudhvi-mouktika/CountdownTimer";
import MeetTheCouple from "./prudhvi-mouktika/MeetTheCouple";
import EventsSchedule from "./prudhvi-mouktika/EventsSchedule";
import PresenceSection from "./prudhvi-mouktika/PresenceSection";
import FamiliesSection from "./prudhvi-mouktika/FamiliesSection";
import VenueSection from "./prudhvi-mouktika/VenueSection";
import Footer from "./prudhvi-mouktika/Footer";
import PetalsOverlay from "./prudhvi-mouktika/PetalsOverlay";
import ButterflyOverlay from "./prudhvi-mouktika/ButterflyOverlay";
import AudioPlayer from "./prudhvi-mouktika/AudioPlayer";
import { SectionDivider, FloralCornerDecorations } from "./prudhvi-mouktika/FloralDecorations";
import { invitationData } from "./prudhvi-mouktika/invitationData";

export function PrudhviMouktikaTheme({ invite }: { invite?: InviteData }) {
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const titleText = `${invitationData.couple.groom.name} & ${invitationData.couple.bride.name} — Wedding Invitation · ${invitationData.ceremony.dateText}`;
    document.title = titleText;
  }, []);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(() => {
      setOpened(true);
    }, 900);
  };

  return (
    <div className="prudhvi-mouktika-root relative min-h-screen bg-[#f9f5ed] text-[#251a14] overflow-x-hidden font-serif-display">
      {/* Dynamic Google Fonts & Stylesheet */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,600&family=Great+Vibes&display=swap');

        .prudhvi-mouktika-root {
          --background: 38 40% 96%;
          --foreground: 25 30% 18%;
          --sage: 95 22% 65%;
          --sage-deep: 95 25% 45%;
          --sage-soft: 95 30% 88%;
          --cream: 38 50% 95%;
          --gold: 36 55% 55%;
          --gold-soft: 36 60% 75%;
          --gold-deep: 36 55% 35%;
          --rose: 348 60% 50%;
          --rose-deep: 348 65% 35%;
          --ink: 25 30% 18%;

          --gradient-sage: linear-gradient(135deg, hsl(95 30% 78%), hsl(95 22% 62%));
          --gradient-cream: linear-gradient(180deg, hsl(38 50% 96%), hsl(38 40% 92%));
          --gradient-gold: linear-gradient(135deg, hsl(36 55% 60%), hsl(36 45% 45%));
          --gradient-rose: linear-gradient(135deg, hsl(348 55% 55%), hsl(348 65% 38%));

          --shadow-elegant: 0 20px 60px -20px rgba(45, 60, 30, 0.25);
          --shadow-soft: 0 8px 30px -10px rgba(37, 26, 20, 0.15);
          --shadow-gold: 0 10px 40px -10px rgba(184, 133, 63, 0.4);
        }

        .prudhvi-mouktika-root .font-script {
          font-family: 'Great Vibes', cursive;
        }

        .prudhvi-mouktika-root .font-serif-display {
          font-family: 'Cormorant Garamond', Georgia, serif;
        }

        .prudhvi-mouktika-root .font-cinzel {
          font-family: 'Cinzel', serif;
          letter-spacing: 0.15em;
        }

        .prudhvi-mouktika-root .gradient-gold {
          background: linear-gradient(135deg, #d4a574, #b8853f);
        }

        .prudhvi-mouktika-root .shadow-gold {
          box-shadow: 0 10px 40px -10px rgba(184, 133, 63, 0.4);
        }

        .prudhvi-mouktika-root .shadow-elegant {
          box-shadow: 0 20px 60px -20px rgba(45, 60, 30, 0.25);
        }

        .prudhvi-mouktika-root .shadow-soft {
          box-shadow: 0 8px 30px -10px rgba(37, 26, 20, 0.15);
        }

        .prudhvi-mouktika-root .bg-cream {
          background-color: #f9f5ed;
        }

        .prudhvi-mouktika-root .text-rose-deep {
          color: #6b1e2c;
        }

        .prudhvi-mouktika-root .text-rose {
          color: #c73855;
        }

        .prudhvi-mouktika-root .text-sage-deep {
          color: #556c4b;
        }

        .prudhvi-mouktika-root .text-gold {
          color: #c9933b;
        }

        .prudhvi-mouktika-root .text-gold-soft {
          color: #e5c790;
        }

        .prudhvi-mouktika-root .text-gold-deep {
          color: #8c601f;
        }

        .prudhvi-mouktika-root .border-gold-soft {
          border-color: rgba(229, 199, 144, 0.8);
        }

        .prudhvi-mouktika-root .border-gold {
          border-color: #c9933b;
        }

        @keyframes float-petal {
          0% {
            transform: translateY(-10vh) translate(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(110vh) translate(40px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(8deg);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 0.85;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.04);
          }
        }

        @keyframes envelope-open {
          0% {
            transform: scale(1) rotateX(0deg);
          }
          50% {
            transform: scale(1.05) rotateX(-15deg);
          }
          100% {
            transform: scale(1.4) rotateX(-90deg);
            opacity: 0;
          }
        }

        @keyframes fade-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        .prudhvi-mouktika-root .animate-float-petal {
          animation: float-petal linear infinite;
        }

        .prudhvi-mouktika-root .animate-drift {
          animation: drift 6s ease-in-out infinite;
        }

        .prudhvi-mouktika-root .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .prudhvi-mouktika-root .animate-envelope-open {
          animation: envelope-open 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .prudhvi-mouktika-root .animate-fade-up {
          animation: fade-up 1s cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .prudhvi-mouktika-root .animate-fade-in {
          animation: fade-in 1.2s ease-out both;
        }
      `}</style>

      {/* Ambient floating flower petals */}
      <PetalsOverlay count={12} />

      {/* Floating fluttering butterfly once invitation is opened */}
      {opened && <ButterflyOverlay />}

      {/* Background music player */}
      <AudioPlayer play={opening || opened} src={invitationData.assets.audio} />

      {!opened ? (
        <EnvelopeScreen onOpen={handleOpen} opening={opening} />
      ) : (
        <main className="relative animate-fade-in">
          {/* Hero Banner with Lord Ganesha invocation & Couple Names */}
          <HeroSection />

          {/* Interactive Scratch-To-Reveal Card and Live Countdown Timer */}
          <section className="relative py-20 px-6 bg-cream">
            <FloralCornerDecorations />
            <div className="relative max-w-3xl mx-auto text-center">
              <SectionDivider />

              {/* Scratch to reveal the Save the Date */}
              <div className="mb-10">
                <ScratchCard
                  revealed={revealed}
                  onRevealed={() => setRevealed(true)}
                />
              </div>

              {/* Live Countdown Timer revealed after scratching */}
              <div
                className={`transition-all duration-700 ${
                  revealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 pointer-events-none h-0 overflow-hidden"
                }`}
                aria-hidden={!revealed}
              >
                <CountdownTimer />
              </div>
            </div>
          </section>

          {/* Meet the Couple & Cherished Memories */}
          <MeetTheCouple />

          {/* Events Schedule */}
          <EventsSchedule />

          {/* Presence Invocation */}
          <PresenceSection />

          {/* The Families */}
          <FamiliesSection />

          {/* Venue & Directions */}
          <VenueSection />

          {/* Footer */}
          <Footer />
        </main>
      )}
    </div>
  );
}

export const PrudhviMoutikaTheme = PrudhviMouktikaTheme;


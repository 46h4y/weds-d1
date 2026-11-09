"use client";

import React, { useState } from "react";
import { Navigation, MapPin } from "lucide-react";
import { invitationData } from "./invitationData";
import { SectionDivider, FloralCornerDecorations } from "./FloralDecorations";

export default function VenueSection() {
  const { venues } = invitationData;
  const [activeVenueId, setActiveVenueId] = useState(venues[0].id);

  const activeVenue = venues.find((v) => v.id === activeVenueId) || venues[0];

  return (
    <section className="relative py-20 px-6 bg-cream">
      <FloralCornerDecorations />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-cinzel text-xs text-sage-deep tracking-widest uppercase">
          LOCATIONS &amp; DIRECTIONS
        </p>
        <h2 className="font-script text-5xl sm:text-6xl text-rose-deep mt-2">
          Where We Celebrate
        </h2>
        <SectionDivider />
        <p className="font-serif-display italic text-lg text-sage-deep max-w-xl mx-auto mb-8">
          Select a venue below to view the interactive map and get driving directions
        </p>

        {/* Venue Selector Tabs */}
        <div className="flex justify-center gap-3 sm:gap-4 mb-8 flex-wrap">
          {venues.map((venue) => {
            const isSelected = venue.id === activeVenueId;
            return (
              <button
                key={venue.id}
                type="button"
                onClick={() => setActiveVenueId(venue.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-cinzel tracking-wider transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#6b1e2c] text-white shadow-soft scale-105"
                    : "bg-[#f9f5ed]/80 text-[#251a14]/80 border border-gold-soft hover:bg-[#faeed6]"
                }`}
              >
                <MapPin className="h-4 w-4" />
                <span>{venue.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Active Venue Details */}
        <div className="animate-fade-in">
          <h3 className="font-serif-display text-2xl sm:text-3xl text-[#251a14] font-semibold">
            {activeVenue.name}
          </h3>
          <p className="font-serif-display italic text-base sm:text-lg text-sage-deep mt-1">
            {activeVenue.subtitle}
          </p>

          {/* Google Maps Embed */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-gold-soft shadow-elegant bg-zinc-100">
            <iframe
              key={activeVenue.mapEmbedUrl}
              title={`${activeVenue.name} map`}
              src={activeVenue.mapEmbedUrl}
              className="w-full h-[360px] border-0"
              loading="lazy"
            />
          </div>

          {/* Get Directions Button */}
          <a
            href={activeVenue.directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8"
          >
            <span className="gradient-gold text-white rounded-full px-8 py-3 h-11 inline-flex items-center justify-center font-medium shadow-gold hover:opacity-95 transition-all cursor-pointer">
              <Navigation className="mr-2 h-4 w-4" />
              Get Directions to {activeVenue.tag}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}


"use client";

import React from "react";
import { invitationData } from "./invitationData";

export default function Footer() {
  const { groom, bride, hashtag } = invitationData.couple;
  const { dateText } = invitationData.ceremony;

  return (
    <footer className="bg-[#1c1410] text-[#f9f5ed] py-16 px-6 text-center">
      <p className="font-cinzel text-xs tracking-[0.4em] text-gold-soft font-semibold">
        WITH LOVE
      </p>
      <h3 className="font-script text-5xl sm:text-6xl text-[#f9f5ed] mt-3">
        {groom.name} &amp; {bride.name}
      </h3>
      <div className="my-5 flex items-center justify-center gap-3">
        <span className="h-px w-12 bg-gold-soft/40" />
        <span className="text-2xl select-none">💐</span>
        <span className="h-px w-12 bg-gold-soft/40" />
      </div>
      <p className="font-serif-display text-lg italic text-[#f9f5ed]/90">
        {dateText}
      </p>
      <p className="mt-3 font-cinzel text-xs tracking-widest text-[#f9f5ed]/70">
        {hashtag}
      </p>
    </footer>
  );
}


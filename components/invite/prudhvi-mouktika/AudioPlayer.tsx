"use client";

import React, { useRef, useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer({
  play,
  src = "/audio/background.mp3",
}: {
  play: boolean;
  src?: string;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.45;
      audio.loop = true;
      if (play && !muted) {
        audio.play().catch(() => {
          // Autoplay policy prevented playback until user interaction
        });
      } else {
        audio.pause();
      }
    }
  }, [play, muted]);

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" />
      {play && (
        <button
          type="button"
          aria-label={muted ? "Unmute background music" : "Mute background music"}
          onClick={() => setMuted((prev) => !prev)}
          className="fixed bottom-5 right-5 z-50 h-11 w-11 rounded-full bg-[#251a14]/85 text-[#f9f6f0] backdrop-blur shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition"
        >
          {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </button>
      )}
    </>
  );
}


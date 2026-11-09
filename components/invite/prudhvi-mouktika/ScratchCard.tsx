"use client";

import React, { useRef, useEffect } from "react";
import { invitationData } from "./invitationData";

interface ScratchCardProps {
  revealed: boolean;
  onRevealed: () => void;
}

export default function ScratchCard({ revealed, onRevealed }: ScratchCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container || revealed) return;

    const initCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.scale(dpr, dpr);
      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
      gradient.addColorStop(0, "#d4a574");
      gradient.addColorStop(0.5, "#f5d199");
      gradient.addColorStop(1, "#b8853f");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width, rect.height);

      ctx.shadowColor = "rgba(255, 255, 255, 0.6)";
      ctx.shadowBlur = 1;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 1;
      ctx.fillStyle = "#5c3b12";
      ctx.font = '700 15px "Cinzel", serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("✦  SCRATCH TO REVEAL  ✦", rect.width / 2, rect.height / 2);
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
    };

    initCanvas();
    window.addEventListener("resize", initCanvas);
    return () => window.removeEventListener("resize", initCanvas);
  }, [revealed]);

  const fireConfetti = () => {
    // Lightweight self-contained confetti explosion
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "9999";
    canvas.style.pointerEvents = "none";
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      canvas.remove();
      return;
    }

    const colors = ["#d4a574", "#f5d199", "#c75a6b", "#7a8a6a", "#ffffff", "#e87a90"];
    const particles = Array.from({ length: 80 }).map(() => ({
      x: window.innerWidth * (0.35 + Math.random() * 0.3),
      y: window.innerHeight * 0.45,
      vx: (Math.random() - 0.5) * 16,
      vy: -(Math.random() * 12 + 6),
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
      alpha: 1,
    }));

    let animId: number;
    const startTime = performance.now();

    const animate = (time: number) => {
      const elapsed = (time - startTime) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.vx *= 0.98; // friction
        p.rotation += p.rotationSpeed;
        p.alpha = Math.max(0, 1 - elapsed / 2.2);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx.restore();
      });

      if (elapsed < 2.5) {
        animId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animId);
        canvas.remove();
      }
    };

    animId = requestAnimationFrame(animate);
  };

  const checkScratchPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    const imageData = ctx.getImageData(0, 0, width, height).data;
    let transparentCount = 0;

    // Sample every 160th pixel alpha channel
    for (let i = 3; i < imageData.length; i += 160) {
      if (imageData[i] < 60) transparentCount++;
    }

    const totalSamples = imageData.length / 160;
    if (transparentCount / totalSamples > 0.45) {
      ctx.clearRect(0, 0, width, height);
      fireConfetti();
      onRevealed();
    }
  };

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(clientX - rect.left, clientY - rect.top, 28, 0, Math.PI * 2);
    ctx.fill();
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    isDrawing.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (isDrawing.current) {
      e.preventDefault();
      scratch(e.clientX, e.clientY);
    }
  };

  const handlePointerUp = () => {
    isDrawing.current = false;
    checkScratchPercentage();
  };

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-md h-32 rounded-2xl overflow-hidden border-2 border-gold-soft shadow-elegant select-none"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-cream">
        <p className="font-cinzel tracking-[0.35em] text-sage-deep text-base">
          SAVE THE DATE
        </p>
        <p className="font-script text-4xl text-rose-deep mt-1">
          {invitationData.ceremony.dateText}
        </p>
      </div>

      {!revealed && (
        <canvas
          ref={canvasRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none"
        />
      )}
    </div>
  );
}


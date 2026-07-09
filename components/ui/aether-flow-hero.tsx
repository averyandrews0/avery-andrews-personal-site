"use client";

import React from "react";
import { motion } from "framer-motion";

const cn = (...classes: Array<string | undefined>) =>
  classes.filter(Boolean).join(" ");

type AetherFlowHeroProps = {
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
};

// A restrained adaptation of the supplied canvas component for the portfolio hero.
const AetherFlowHero = ({ className }: AetherFlowHeroProps) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!canvas || reducedMotion.matches) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let animationFrameId = 0;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const bounds = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(bounds.width * dpr);
      canvas.height = Math.round(bounds.height * dpr);
      canvas.style.width = `${bounds.width}px`;
      canvas.style.height = `${bounds.height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(18, Math.min(48, Math.round(bounds.width / 26)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * bounds.width,
        y: Math.random() * bounds.height,
        dx: (Math.random() - 0.5) * 0.22,
        dy: (Math.random() - 0.5) * 0.22,
        radius: 1 + Math.random() * 1.2
      }));
    };

    const animate = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);

      for (const particle of particles) {
        particle.x += particle.dx;
        particle.y += particle.dy;
        if (particle.x < 0 || particle.x > width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > height) particle.dy *= -1;

        const mouseDistance = Math.hypot(particle.x - mouse.x, particle.y - mouse.y);
        if (mouseDistance < 130) {
          particle.x += (particle.x - mouse.x) * 0.008;
          particle.y += (particle.y - mouse.y) * 0.008;
        }

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = "rgba(197, 170, 255, 0.78)";
        context.fill();
      }

      for (let a = 0; a < particles.length; a += 1) {
        for (let b = a + 1; b < particles.length; b += 1) {
          const distance = Math.hypot(
            particles[a].x - particles[b].x,
            particles[a].y - particles[b].y
          );
          if (distance < 118) {
            context.beginPath();
            context.moveTo(particles[a].x, particles[a].y);
            context.lineTo(particles[b].x, particles[b].y);
            context.strokeStyle = `rgba(126, 224, 197, ${0.28 * (1 - distance / 118)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
    };

    const handlePointerLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    resizeCanvas();
    animate();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
    />
  );
};

export default AetherFlowHero;

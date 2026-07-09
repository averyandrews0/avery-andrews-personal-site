"use client";

import React, { useEffect, useMemo, useState } from "react";

interface WordData {
  text: string;
  duration: number;
  delay: number;
  blur: number;
  scale?: number;
}

interface BlurTextAnimationProps {
  text?: string;
  words?: WordData[];
  className?: string;
  fontSize?: string;
  fontFamily?: string;
  textColor?: string;
  animationDelay?: number;
  repeat?: boolean;
}

export default function BlurTextAnimation({
  text = "Elegant blur animation that brings your words to life with cinematic transitions.",
  words,
  className = "",
  fontSize = "text-4xl md:text-5xl lg:text-6xl",
  fontFamily = "font-['Avenir_Next',_'Avenir',_system-ui,_sans-serif]",
  textColor = "text-white",
  animationDelay = 4000,
  repeat = true
}: BlurTextAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  const textWords = useMemo(() => {
    if (words) return words;

    return text.split(" ").map((word, index, allWords) => ({
      text: word,
      duration: 0.42 + (index % 3) * 0.04,
      delay: index * 0.025 + (index / allWords.length) * 0.14,
      blur: 8 + (index % 4) * 2,
      scale: 0.97
    }));
  }, [text, words]);

  useEffect(() => {
    let replayTimeout: ReturnType<typeof setTimeout> | undefined;
    let resetTimeout: ReturnType<typeof setTimeout> | undefined;

    const play = () => {
      setIsAnimating(false);
      replayTimeout = setTimeout(() => setIsAnimating(true), 80);

      if (repeat) {
        const maxTime = Math.max(
          ...textWords.map((word) => word.delay + word.duration)
        );
        resetTimeout = setTimeout(play, (maxTime + animationDelay / 1000) * 1000);
      }
    };

    play();
    return () => {
      if (replayTimeout) clearTimeout(replayTimeout);
      if (resetTimeout) clearTimeout(resetTimeout);
    };
  }, [animationDelay, repeat, textWords]);

  return (
    <p
      className={`${className} ${textColor} ${fontSize} ${fontFamily} leading-8`}
    >
      {textWords.map((word, index) => (
        <span
          key={`${word.text}-${index}`}
          className={`inline-block transition-all ${isAnimating ? "opacity-100" : "opacity-0"}`}
          style={{
            transitionDuration: `${word.duration}s`,
            transitionDelay: `${word.delay}s`,
            transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            filter: isAnimating ? "blur(0px)" : `blur(${word.blur}px)`,
            transform: isAnimating
              ? "translateY(0) scale(1)"
              : `translateY(8px) scale(${word.scale || 1})`,
            marginRight: "0.28em",
            willChange: "filter, transform, opacity"
          }}
        >
          {word.text}
        </span>
      ))}
    </p>
  );
}

export function Component() {
  return <BlurTextAnimation />;
}

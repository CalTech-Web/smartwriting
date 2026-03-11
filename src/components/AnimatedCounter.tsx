"use client";

import { useInView } from "@/hooks/useInView";
import { useEffect, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const { ref, isInView } = useInView();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(end);
      return;
    }

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center relative">
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-white" />
      </div>
      <div className="relative">
        <div className="text-5xl md:text-7xl font-black gradient-text mb-2" style={{ fontFamily: "var(--font-display)" }}>
          {prefix}
          {count.toLocaleString()}
          {suffix}
        </div>
        <div className="text-white/60 text-sm font-semibold tracking-widest uppercase">{label}</div>
      </div>
    </div>
  );
}

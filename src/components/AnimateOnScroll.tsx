"use client";

import { useInView } from "@/hooks/useInView";

type AnimationType =
  | "fade-up"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "scale-in"
  | "slide-rotate"
  | "blur-in"
  | "clip-reveal";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section";
}

export default function AnimateOnScroll({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  as: Component = "div",
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView();

  return (
    <Component
      ref={ref}
      className={`animate-on-scroll ${animation} ${isInView ? "is-visible" : ""} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </Component>
  );
}

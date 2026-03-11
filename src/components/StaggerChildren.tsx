"use client";

import { useInView } from "@/hooks/useInView";
import { Children, isValidElement } from "react";

interface StaggerChildrenProps {
  children: React.ReactNode;
  staggerDelay?: number;
  animation?: string;
  className?: string;
}

export default function StaggerChildren({
  children,
  staggerDelay = 100,
  animation = "fade-up",
  className = "",
}: StaggerChildrenProps) {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  return (
    <div ref={ref} className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        return (
          <div
            className={`animate-on-scroll ${animation} ${isInView ? "is-visible" : ""}`}
            style={{
              transitionDelay: `${index * staggerDelay}ms`,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

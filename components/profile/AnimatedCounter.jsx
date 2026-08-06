"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value, suffix = "", prefix = "" }) {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            let frameId;
            const endValue = Number(value) || 0;
            const duration = 1600;
            const startTime = performance.now();

            const step = (currentTime) => {
              const progress = Math.min((currentTime - startTime) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setDisplayValue(Math.round(endValue * eased));

              if (progress < 1) {
                frameId = window.requestAnimationFrame(step);
              }
            };

            frameId = window.requestAnimationFrame(step);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [value]);

  return (
    <span ref={elementRef} className="tw-tabular-nums">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}


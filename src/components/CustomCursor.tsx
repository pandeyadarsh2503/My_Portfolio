"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) setIsVisible(true);
    };

    const updatePosition = () => {
      // Extremely subtle easing for professional feel
      currentX += (targetX - currentX) * 0.4;
      currentY += (targetY - currentY) * 0.4;
      
      setPosition({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div
      className="fixed top-0 left-0 w-2.5 h-2.5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] rounded-full pointer-events-none z-[9999] mix-blend-exclusion transition-opacity duration-300"
      style={{
        transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0)`,
        opacity: isVisible ? 1 : 0
      }}
    />
  );
}

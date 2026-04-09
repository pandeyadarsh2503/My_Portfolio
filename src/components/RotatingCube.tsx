"use client";

import { useState, useRef, useEffect } from 'react';
import { FaAws, FaDocker, FaPython, FaReact } from 'react-icons/fa';
import { SiMysql, SiMongodb } from 'react-icons/si';

export default function RotatingCube() {
  const [rotation, setRotation] = useState({ x: -20, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const cubeRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(undefined);
  const lastMousePos = useRef({ x: 0, y: 0 });

  // Auto rotation
  useEffect(() => {
    if (isDragging) {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      return;
    }
    
    const animate = () => {
      setRotation(prev => ({
        x: prev.x,
        y: prev.y + 0.5
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isDragging]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    if (cubeRef.current) {
        cubeRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    
    setRotation(prev => ({
      x: prev.x - deltaY * 0.5,
      y: prev.y + deltaX * 0.5
    }));
    
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    if (cubeRef.current) {
        cubeRef.current.releasePointerCapture(e.pointerId);
    }
  };

  return (
    <div className="w-full lg:w-[40%] flex items-center justify-center z-50 relative pointer-events-auto h-[300px] lg:h-auto py-10 lg:py-0 select-none touch-none">
      <div className="cube-scene cursor-grab active:cursor-grabbing">
        <div 
          ref={cubeRef}
          className="w-full h-full relative"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
        >
          <div className="cube-face face-front">
            <FaAws className="text-7xl text-[#FF9900]" />
          </div>
          <div className="cube-face face-back">
            <FaDocker className="text-7xl text-[#2496ED]" />
          </div>
          <div className="cube-face face-right">
            <FaPython className="text-7xl text-[#3776AB]" />
          </div>
          <div className="cube-face face-left">
            <SiMysql className="text-7xl text-[#4479A1]" />
          </div>
          <div className="cube-face face-top">
            <FaReact className="text-7xl text-[#61DAFB]" />
          </div>
          <div className="cube-face face-bottom">
            <SiMongodb className="text-7xl text-[#47A248]" />
          </div>
        </div>
      </div>
    </div>
  );
}

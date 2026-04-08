"use client";

import { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let isActive = false;
    let idleTimer = 0;
    
    // Position starts offscreen
    const mouse = { x: -100, y: -100 };
    const lastMouse = { x: -100, y: -100 };
    
    const numPoints = 25;
    const points: Array<{x: number, y: number, lx: number, ly: number, size: number, alpha: number}> = [];
    
    let time = 0;
    let animationFrameId: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const init = () => {
      resize();
      for(let i = 0; i < numPoints; i++) {
        points.push({
          x: mouse.x,
          y: mouse.y,
          lx: mouse.x,
          ly: mouse.y,
          size: 0,
          alpha: 0
        });
      }
      window.addEventListener('resize', resize);
      window.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      isActive = true;
      idleTimer = 0;
    };

    const update = () => {
      time += 0.052;
      let dx = mouse.x - points[0].x;
      let dy = mouse.y - points[0].y;
      
      points[0].x += dx * 0.15;
      points[0].y += dy * 0.15;
      
      for(let i = 1; i < numPoints; i++) {
        const p = points[i];
        const prev = points[i-1];
        
        p.lx = p.x;
        p.ly = p.y;
        
        // Spiral / Vortex modulation
        const swirlForce = (numPoints - i) * 0.15;
        const swirlX = Math.cos(time + i * 0.4) * swirlForce;
        const swirlY = Math.sin(time + i * 0.4) * swirlForce;

        p.x += (prev.x - p.x) * 0.35 + swirlX;
        p.y += (prev.y - p.y) * 0.35 + swirlY;

        p.alpha = Math.max(0, 1 - (i / numPoints)) * (isActive ? 1 : 0);
      }
      
      if (isActive) {
        idleTimer++;
        if (idleTimer > 100) isActive = false;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      
      const cubeScene = document.querySelector('.cube-scene');
      let isOverCube = false;
      let cubeRect = { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 };
      const padding = 20;

      if (cubeScene) {
        cubeRect = cubeScene.getBoundingClientRect();
        if (
          mouse.x >= cubeRect.left - padding && 
          mouse.x <= cubeRect.right + padding && 
          mouse.y >= cubeRect.top - padding && 
          mouse.y <= cubeRect.bottom + padding
        ) {
          isOverCube = true;
        }
      }
      
      ctx.save();
      
      if (cubeScene) {
        ctx.beginPath();
        ctx.rect(0, 0, width, height);
        ctx.rect(cubeRect.left - padding, cubeRect.top - padding, cubeRect.width + padding * 2, cubeRect.height + padding * 2);
        ctx.clip('evenodd');
      }

      for(let i = 1; i < numPoints; i++) {
        const p = points[i];
        const opacity = Math.pow(p.alpha, 2.5);
        if (opacity <= 0.01) continue;
        
        const ratio = i / numPoints;
        const r = Math.floor(177 + (239 - 177) * ratio);
        const g = 158;
        const b = Math.floor(239 + (205 - 239) * ratio);
        const baseColor = `rgba(${r}, ${g}, ${b},`;

        const gradOuter = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, (numPoints - i) * 5);
        gradOuter.addColorStop(0, `${baseColor} ${opacity * 0.3})`);
        gradOuter.addColorStop(0.6, `${baseColor} ${opacity * 0.03})`);
        gradOuter.addColorStop(1, `${baseColor} 0)`);
        
        ctx.beginPath();
        ctx.fillStyle = gradOuter;
        ctx.arc(p.x, p.y, (numPoints - i) * 5, 0, Math.PI * 2);
        ctx.fill();

        const gradInner = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, (numPoints - i) * 2);
        gradInner.addColorStop(0, `${baseColor} ${opacity * 0.6})`);
        gradInner.addColorStop(1, `${baseColor} 0)`);
        
        ctx.beginPath();
        ctx.fillStyle = gradInner;
        ctx.arc(p.x, p.y, (numPoints - i) * 2, 0, Math.PI * 2);
        ctx.fill();

        if (i % 2 === 0) {
          const noiseX = Math.cos(time * 3 + i) * (numPoints - i) * 1.5;
          const noiseY = Math.sin(time * 3 + i) * (numPoints - i) * 1.5;
          ctx.beginPath();
          ctx.fillStyle = `${baseColor} ${opacity * 0.6})`;
          ctx.arc(p.x + noiseX, p.y + noiseY, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
    };

    const loop = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(loop);
    };

    init();
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas-container"
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1] mix-blend-screen"
    />
  );
}

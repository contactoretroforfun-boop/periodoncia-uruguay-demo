"use client";

import React, { useState, useRef, useEffect, MouseEvent as ReactMouseEvent, TouchEvent as ReactTouchEvent } from "react";
import Image from "next/image";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const startDragging = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      {/* Visual Container */}
      <div 
        ref={containerRef}
        className="relative aspect-video w-full overflow-hidden rounded-2xl border border-gray-100 shadow-xl bg-gray-100 select-none cursor-ew-resize group"
        onMouseDown={(e: ReactMouseEvent<HTMLDivElement>) => {
          e.preventDefault();
          startDragging(e.clientX);
        }}
        onTouchStart={(e: ReactTouchEvent<HTMLDivElement>) => {
          if (e.touches && e.touches[0]) {
            startDragging(e.touches[0].clientX);
          }
        }}
      >
        {/* After Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/after.jpg"
            alt="Resultado Después del Tratamiento Dental"
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover pointer-events-none"
            priority
          />
        </div>

        {/* Before Image (Clipped overlay using clipPath for perfect 100% width alignment) */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <Image
            src="/before.jpg"
            alt="Caso Inicial Antes del Tratamiento Dental"
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover pointer-events-none"
            priority
          />
        </div>

        {/* Minimal Premium Discreet Labels (Pinned to top corners, non-invasive) */}
        <div className="absolute top-4 left-4 z-10 bg-black/55 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold tracking-widest px-3 py-1.5 rounded-lg uppercase border border-white/10 pointer-events-none shadow-sm">
          Antes
        </div>
        <div className="absolute top-4 right-4 z-10 bg-brand-primary/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold tracking-widest px-3 py-1.5 rounded-lg uppercase border border-white/10 pointer-events-none shadow-sm">
          Después
        </div>

        {/* Divider Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-brand-accent transition-transform duration-200 group-hover:scale-110 pointer-events-none">
            <svg 
              className="w-6 h-6 text-brand-primary select-none pointer-events-none" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth={3}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Slider caption */}
      <p className="text-center text-sm text-gray-500 mt-4 italic font-sans">
        Arrastra el control deslizante central para comparar el caso real antes y después del tratamiento.
      </p>
    </div>
  );
}

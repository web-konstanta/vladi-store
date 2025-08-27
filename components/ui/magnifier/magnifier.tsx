"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

interface MagnifierProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  zoomLevel?: number;
}

const Magnifier = ({ src, alt, width, height, zoomLevel = 2.5 }: MagnifierProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [transformOrigin, setTransformOrigin] = useState("center center");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Вычисляем процентное положение курсора для transform-origin
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    setTransformOrigin(`${xPercent}% ${yPercent}%`);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        style={{ width, height }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-full w-full object-cover transition-transform duration-300 ease-out"
          style={{
            transform: isHovering ? `scale(${zoomLevel})` : "scale(1)",
            transformOrigin: transformOrigin
          }}
        />
      </div>
    </div>
  );
};

export default Magnifier;

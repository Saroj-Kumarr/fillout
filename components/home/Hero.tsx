"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DatabaseIcon,
  CalendarIcon,
  ChartIcon,
  NetworkIcon,
  FormIcon,
  CursorIcon,
} from "../icons/HomeIcons";

interface FloatingIcon {
  id: number;
  Icon: React.ComponentType<{ className?: string }>;
  baseX: number;
  baseY: number;
  x: number;
  y: number;
}

export default function Hero() {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);

  // Effect to initialize icons with responsive positions
  useEffect(() => {
    const updateIconPositions = () => {
      const isMobile = window.innerWidth < 768;

      const iconComponents = [
        DatabaseIcon,
        CalendarIcon,
        ChartIcon,
        NetworkIcon,
        FormIcon,
        CursorIcon,
      ];

      // Positions for DESKTOP
      const desktopFixedPositions = [
        { x: -350, y: -180 },
        { x: 350, y: -150 },
        { x: -400, y: 50 },
        { x: 400, y: 100 },
        { x: -250, y: 250 },
        { x: 300, y: 200 },
      ];

      // Tighter positions for MOBILE
      const mobileFixedPositions = [
        { x: -80, y: -90 }, // Top left
        { x: 120, y: -80 }, // Top right
        { x: -140, y: 0 }, // Middle left
        { x: 140, y: 20 }, // Middle right
        { x: -100, y: 150 }, // Bottom left
        { x: 140, y: 160 }, // Bottom right
      ];

      const fixedPositions = isMobile
        ? mobileFixedPositions
        : desktopFixedPositions;

      const initialIcons: FloatingIcon[] = iconComponents.map((Icon, index) => {
        const centerX = window.innerWidth / 2;
        // Adjust vertical center based on hero height for better positioning
        const heroElement = document.getElementById("hero-section");
        const heroHeight = heroElement
          ? heroElement.offsetHeight
          : window.innerHeight;
        const centerY = heroHeight / 2 - 100; // Shift vertical center up
        const position = fixedPositions[index];

        return {
          id: index,
          Icon,
          baseX: centerX + position.x,
          baseY: centerY + position.y,
          x: centerX + position.x,
          y: centerY + position.y,
        };
      });

      setIcons(initialIcons);
    };

    updateIconPositions();
    window.addEventListener("resize", updateIconPositions);

    return () => window.removeEventListener("resize", updateIconPositions);
  }, []);

  // Effect for mouse movement, disabled on mobile
  useEffect(() => {
    if (window.innerWidth < 768) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setIcons((prevIcons) =>
        prevIcons.map((icon) => {
          const distanceX = e.clientX - icon.baseX;
          const distanceY = e.clientY - icon.baseY;
          const totalDistance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          );
          const moveFactorX = distanceX * 0.015;
          const moveFactorY = distanceY * 0.015;
          const distanceScale = Math.max(0.3, Math.min(1, 500 / totalDistance));

          return {
            ...icon,
            x: icon.baseX + moveFactorX * distanceScale,
            y: icon.baseY + moveFactorY * distanceScale,
          };
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [icons]); // Rerun if base positions change

  return (
    <section
      id="hero-section" // Added ID for height calculation
      className="
        relative
        min-h-[600px] md:min-h-[850px] // Adjusted mobile height
        overflow-hidden
        isolate
        radial-design
      "
    >
      {/* Floating Icons */}
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute transition-all duration-300 ease-out z-20 pointer-events-none"
          style={{
            left: `${icon.x}px`,
            top: `${icon.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="backdrop-blur-md bg-white/40 rounded-sm h-12 w-14 md:h-16 md:w-[72px] flex items-center justify-center shadow-lg border border-white/20">
            <icon.Icon className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
          </div>
        </div>
      ))}

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full min-h-[500px] md:min-h-[850px] px-4 text-center">
        <div className="max-w-6xl mx-auto">
          {/* Unified h1 with responsive text sizing */}
          <h1 className="text-6xl -mt-40 md:-mt-10 sm:text-7xl md:text-9xl lg:text-[140px] font-bold text-gray-900 leading-tight mb-8">
            Forms that <span className="md:hidden">do</span>
            <br className="hidden md:inline" />
            <span className="hidden md:inline">do</span> it all
          </h1>
          <Button className="h-12 w-full max-w-xs sm:h-14 sm:w-60 text-lg sm:text-xl text-yellow-300">
            Get started - it&apos;s free
          </Button>
        </div>
      </div>
    </section>
  );
}

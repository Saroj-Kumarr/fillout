"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { testimonials } from "@/constants/testimonial";

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // State for items per view, to be updated based on window size
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && !isDragging) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isDragging, maxIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setDragStart(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const offset = e.clientX - dragStart;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const threshold = 50; // Smaller threshold for better responsiveness
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setIsAutoPlaying(true);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setDragStart(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const offset = e.touches[0].clientX - dragStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        goToPrev();
      } else {
        goToNext();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setIsAutoPlaying(true);
  };

  return (
    <section className="py-20 md:py-16 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <path
            d="M-100 400C200 300 400 500 600 400C800 300 1000 500 1300 400"
            stroke="rgb(229 231 235)"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M-100 600C200 500 400 700 600 600C800 500 1000 700 1300 600"
            stroke="rgb(229 231 235)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-6">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 text-center md:text-left">
            How people use <span className="font-semibold">Fillout</span>
          </h2>
          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              className="rounded-md w-12 h-12 border-gray-300 bg-gray-100 hover:bg-gray-200"
            >
              <svg
                className="rotate-180"
                width="20"
                height="20"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0099 15.7648L15.2073 13.9699L19.9392 9.24585H0.397995V6.61965H19.9392L15.2073 1.88781L17.0099 0.100747L24.8419 7.93275L17.0099 15.7648Z"
                  fill="black"
                ></path>
              </svg>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-md w-12 h-12 border-gray-300 bg-gray-100 hover:bg-gray-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 25 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0099 15.7648L15.2073 13.9699L19.9392 9.24585H0.397995V6.61965H19.9392L15.2073 1.88781L17.0099 0.100747L24.8419 7.93275L17.0099 15.7648Z"
                  fill="black"
                ></path>
              </svg>
            </Button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
            style={{
              transform: `translateX(calc(-${
                currentIndex * (100 / itemsPerView)
              }% + ${isDragging ? dragOffset : 0}px))`,
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-2 py-5"
              >
                <Card className="p-6 select-none relative h-[300px] bg-white border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col h-full justify-between">
                    {/* Quote and Logo */}
                    <div className="flex-grow">
                      <blockquote className="text-gray-800 text-base leading-relaxed mb-4">
                        {testimonial.quote}
                      </blockquote>
                    </div>
                    <div className="flex justify-end w-full">
                      <img
                        src={testimonial.logo || "/placeholder.svg"}
                        alt={`${testimonial.company} logo`}
                        className="w-12 h-12 object-contain"
                      />
                    </div>
                    {/* Author */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.title}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-gray-900" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
// Assuming tabData is imported from your constants file
import { tabData } from "@/constants/home";

type TabColor = "blue" | "green" | "red" | "purple" | "orange" | "teal";

interface TabIconProps {
  color: TabColor;
  children: React.ReactNode;
  className?: string;
}

const TabIcon = ({ color, children, className = "" }: TabIconProps) => {
  const backgroundColors = {
    blue: "bg-[#2E72E2]",
    green: "bg-[#E45D3B]",
    red: "bg-[#17CCB6]",
    purple: "bg-[#5EC269]",
    orange: "bg-[#8240EA]",
    teal: "bg-[#E49356]",
  };

  return (
    <div
      className={`${backgroundColors[color]} flex items-center justify-center rounded-lg p-2 ${className}`}
    >
      {children}
    </div>
  );
};

// Color variants for styling different tab elements
const colorVariants = {
  blue: {
    border: "border-[#2E72E2]",
    text: "text-[#2E72E2]",
    bg: "bg-blue-50",
    fill: "bg-[#2E72E2]",
    bg_active: "bg-[#2E72E2]",
  },
  green: {
    border: "border-[#E45D3B]",
    text: "text-[#E45D3B]",
    bg: "bg-orange-50",
    fill: "bg-[#E45D3B]",
    bg_active: "bg-[#E45D3B]",
  },
  red: {
    border: "border-[#17CCB6]",
    text: "text-[#17CCB6]",
    bg: "bg-teal-50",
    fill: "bg-[#17CCB6]",
    bg_active: "bg-[#17CCB6]",
  },
  purple: {
    border: "border-[#5EC269]",
    text: "text-[#5EC269]",
    bg: "bg-green-50",
    fill: "bg-[#5EC269]",
    bg_active: "bg-[#5EC269]",
  },
  orange: {
    border: "border-[#8240EA]",
    text: "text-[#8240EA]",
    bg: "bg-purple-50",
    fill: "bg-[#8240EA]",
    bg_active: "bg-[#8240EA]",
  },
  teal: {
    border: "border-[#E49356]",
    text: "text-[#E49356]",
    bg: "bg-orange-50",
    fill: "bg-[#E49356]",
    bg_active: "bg-[#E49356]",
  },
};

const MainTabs = () => {
  const [activeTab, setActiveTab] = useState("forms");

  const activeTabData = tabData.find((tab) => tab.id === activeTab);
  if (!activeTabData) return null; // Gracefully handle missing data

  const activeColors =
    colorVariants[activeTabData.color as keyof typeof colorVariants];

  return (
    <div className="w-full max-w-6xl mx-auto md:py-12">
      {/* Responsive negative margin */}
      <div className="relative -top-44 md:-top-40">
        {/* --- MODIFIED: Responsive Tab Navigation --- */}
        <div className="flex flex-wrap px-5 md:px-0 justify-center gap-2 md:justify-between md:gap-8 md:flex-nowrap">
          {tabData.map((tab) => {
            const isActive = activeTab === tab.id;
            const colors =
              colorVariants[tab.color as keyof typeof colorVariants];

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                // --- NEW: Different styles for mobile (pills) and desktop (underline) ---
                className={`
                  transition-all duration-200 font-bold py-2 px-4 rounded-lg text-base flex-shrink-0 md:bg-transparent md:rounded-none md:pb-4 md:px-2 md:text-xl md:border-b-8
                  
                  ${
                    isActive
                      ? `text-white ${colors.bg_active} md:text-black md:bg-transparent ${colors.border}`
                      : "bg-white text-[#6B6644] hover:bg-gray-100 md:border-transparent md:bg-transparent md:hover:bg-transparent md:hover:text-gray-700"
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div
          className={`rounded-2xl p-4 md:p-6 glass-2 transition-all duration-300 md:mt-0 mt-4`}
        >
          <div className="mb-6 md:hidden">
            <h1
              className={`text-lg uppercase font-semibold ${activeColors.text}`}
            >
              {activeTabData.label}
            </h1>
          </div>

          {/* --- MODIFIED: Responsive flex container with content reordering --- */}
          <div className="flex flex-col h-[550px] md:h-auto md:flex-row gap-8 md:gap-12">
            {/* Left Content Block */}
            <div className="w-full md:max-w-xs lg:max-w-sm space-y-6 order-2 md:order-1">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-[20px] font-medium text-gray-900">
                  {activeTabData.title}
                </h2>
                <div className="space-y-4">
                  {activeTabData.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div
                        className={`w-4 h-4 mt-1 rounded-full ${activeColors.bg} border-2 ${activeColors.border} flex-shrink-0 flex items-center justify-center`}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${activeColors.fill}`}
                        />
                      </div>
                      <p className="font-medium leading-relaxed text-gray-700">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button className="flex items-center gap-3 text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors group">
                  <TabIcon
                    color={activeTabData.color as TabColor}
                    className="w-14 h-14"
                  >
                    {activeTabData.actionIcon}
                  </TabIcon>
                  {activeTabData.actionText} →
                </button>
              </div>
            </div>

            {/* --- MODIFIED: Right Content Block (Image) --- */}
            <div className="w-full md:flex-1 order-1 md:order-2">
              <div className="relative aspect-video">
                <Image
                  src={activeTabData.imageUrl || "/placeholder.svg"}
                  alt={`${activeTabData.label} interface`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  // --- FIX: Using object-contain to prevent image cropping ---
                  className="object-contain shadow-md rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTabs;

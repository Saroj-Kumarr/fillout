"use client";

import { useState } from "react";

const IntegrationsShowcase = () => {
  // Top row integrations (scrolling left)
  const topRowIntegrations = [
    {
      icons: ["👥", "💬", "📧"],
      title: "Get notified instantly",
      apps: ["Teams", "Discord"],
    },
    {
      icons: ["💎", "📊", "📱"],
      title: "Track lead conversions",
      apps: ["Google Analytics", "Figma"],
    },
    {
      icons: ["📦", "📝", "📊"],
      title: "Create or update records",
      apps: ["Notion", "Excel"],
    },
    {
      icons: ["🎯", "☁️", "📌"],
      title: "Capture and manage leads",
      apps: ["HubSpot", "Salesforce", "Pipedrive"],
    },
    {
      icons: ["🔔", "👥", "💬"],
      title: "Get notified instantly",
      apps: ["Figma", "Teams", "Discord"],
    },
    {
      icons: ["📊", "🔍", "📈"],
      title: "Track conversions",
      apps: ["Analytics", "Mixpanel"],
    },
  ];

  // Bottom row integrations (scrolling right)
  const bottomRowIntegrations = [
    {
      icons: ["📅", "📞", "📧"],
      title: "Book more meetings",
      apps: ["Cal.com", "Calendar"],
    },
    {
      icons: ["🔗", "⚡", "🎵"],
      title: "Send data where you need it",
      apps: ["API", "Zapier", "Make"],
    },
    {
      icons: ["📊", "🎯", "🎧"],
      title: "Support your customers",
      apps: ["Zendesk", "GitHub"],
    },
    {
      icons: ["💾", "☁️", "📁"],
      title: "Collect and store files",
      apps: ["Google Drive", "OneDrive", "Dropbox"],
    },
    {
      icons: ["📅", "📞", "📧"],
      title: "Book more meetings",
      apps: ["Cal.com", "Calendar"],
    },
    {
      icons: ["🔗", "⚡", "🎵"],
      title: "Send data everywhere",
      apps: ["API", "Zapier", "Make"],
    },
  ];

  const [isTopRowHovered, setIsTopRowHovered] = useState(false);
  const [isBottomRowHovered, setIsBottomRowHovered] = useState(false);

  return (
    <section className="py-20 bg-[#FBBF24] overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">
          Integrate with all your apps
        </h2>
        <p className="text-xl mb-8">
          Get more done with the tools you already use.
        </p>
        <a
          href="#"
          className="inline-flex items-center  text-lg text-gray-900 font-semibold hover:underline"
        >
          See all integrations →
        </a>
      </div>

      {/* Top row - scrolling left */}
      <div className="relative mb-10">
        <div
          className={`flex ${
            isTopRowHovered ? "animate-paused" : "animate-scroll-left"
          }`}
        >
          {[...topRowIntegrations, ...topRowIntegrations].map(
            (integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass-3 rounded-2xl p-6 mx-3 w-72 h-40 shadow-lg hover:bg-white transition-colors duration-200"
                onMouseEnter={() => setIsTopRowHovered(true)}
                onMouseLeave={() => setIsTopRowHovered(false)}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  {integration.icons.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-black text-center mb-2">
                  {integration.title}
                </h3>
              </div>
            )
          )}
        </div>
      </div>

      {/* Bottom row - scrolling right */}
      <div className="relative">
        <div
          className={`flex ${
            isBottomRowHovered ? "animate-paused" : "animate-scroll-right"
          }`}
        >
          {[...bottomRowIntegrations, ...bottomRowIntegrations].map(
            (integration, index) => (
              <div
                key={index}
                className="flex-shrink-0 glass-3 rounded-2xl p-6 mx-3   w-72 h-40 shadow-lg hover:bg-white transition-colors duration-200"
                onMouseEnter={() => setIsBottomRowHovered(true)}
                onMouseLeave={() => setIsBottomRowHovered(false)}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  {integration.icons.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
                <h3 className="font-semibold text-black text-center mb-2">
                  {integration.title}
                </h3>
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }

        /* Added paused animation class to stop scrolling on hover */
        .animate-paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default IntegrationsShowcase;

import type React from "react";
import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ReviewCardProps {
  platform: string;
  logo: React.ReactNode;
  rating: number;
  maxRating: number;
  stars: number;
  partialStar?: boolean;
}

function ReviewCard({
  platform,
  logo,
  rating,
  maxRating,
  stars,
  partialStar,
}: ReviewCardProps) {
  return (
    // Card now has a max-width and is full-width on small screens
    <Card className="p-4 w-full max-w-xs md:w-40  flex flex-col justify-center items-center bg-gray-50 border-gray-200">
      <div className="flex items-center gap-2">
        {logo}
        <span className="font-medium text-xs">{platform}</span>
      </div>
      <div className="text-5xl text-center font-medium">
        {rating}/{maxRating}
      </div>
      <div className="flex items-center gap-1">
        {Array.from({ length: stars }, (_, i) => (
          <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
        ))}
        {partialStar && (
          <div className="relative">
            <Star className="w-4 h-4 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-3">
              <Star className="w-4 h-4 fill-gray-900 text-gray-900" />
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default function TrustTestimonials() {
  return (
    <section className="md:py-16 bg-white">
      <div className="container mx-auto md:px-4">
        <div className="max-w-6xl mx-auto">
          {/* Grid now stacks on mobile and becomes 2-col on large screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            {/* Text is now centered on mobile and left-aligned on desktop */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
                100,000+ organizations trust Fillout for secure data intake
              </h2>
              <p className="text-left md:text-lg px-2 md:px-0 leading-relaxed max-w-prose mx-auto lg:mx-0">
                <span className="font-medium">
                  Average rating of 4.8 out of 5
                </span>{" "}
                from hundreds of reviews across Trustpilot, G2 and Product Hunt.
              </p>
            </div>

            {/* Right side - Review cards */}
            {/* Card container now wraps and centers items on mobile */}
            <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8">
              <ReviewCard
                platform="Trustpilot"
                logo={
                  <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white text-white" />
                  </div>
                }
                rating={4.7}
                maxRating={5}
                stars={4}
                partialStar={true}
              />

              <ReviewCard
                platform="Business Reviews"
                logo={
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                }
                rating={5}
                maxRating={5}
                stars={5}
              />

              <ReviewCard
                platform="Product Hunt"
                logo={
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                }
                rating={5}
                maxRating={5}
                stars={5}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

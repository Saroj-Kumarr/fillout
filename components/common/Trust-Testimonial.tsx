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
    <Card className="p-4 w-60 flex flex-col justify-center items-center bg-gray-50 border-gray-200">
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h2 className="text-3xl font-bold mb-6 leading-tight">
                100,000+ organizations trust Fillout for secure data intake
              </h2>
              <p className="text-lg leading-relaxed">
                <span className="font-medium">
                  {" "}
                  Average rating of 4.8 out of 5{" "}
                </span>
                from hundreds of reviews across Trustpilot, G2 and Product Hunt.
              </p>
            </div>

            {/* Right side - Review cards */}
            <div className="flex items-center  gap-8">
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

"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Share2, Zap, Gift } from "lucide-react";

interface ReferralModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ReferralModal({ open, onOpenChange }: ReferralModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="sm:max-w-xl p-0 gap-0 ">
        {/* Close button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute -right-3 -top-3 rounded-full border bg-gray-100 hover:bg-gray-200 p-2 z-10"
        >
          <X className="h-4 w-4 text-gray-600" />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-start gap-3 mb-6">
            <svg
              width="501"
              height="501"
              viewBox="0 0 501 501"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-white"
            >
              <rect
                x="0.5"
                y="0.5"
                width="500"
                height="500"
                rx="65.5308"
                fill="#211C20"
              ></rect>
              <g clip-path="url(#clip0_15_2)">
                <path
                  d="M124.331 107.402C132.594 99.9972 143.299 95.9021 154.394 95.9021H310.936L243.368 163.85C229.268 178.028 210.098 186.001 190.102 186.001H154.394C113.062 186.001 93.5506 134.988 124.331 107.402Z"
                  fill="#FFC738"
                ></path>
                <path
                  d="M377.819 394.079C369.559 401.484 358.851 405.578 347.758 405.578H191.215L258.783 337.632C272.883 323.452 292.053 315.48 312.048 315.48H347.758C389.088 315.48 408.599 366.493 377.819 394.079Z"
                  fill="#FFC738"
                ></path>
                <path
                  d="M338.418 105.966L105.566 338.833C89.915 354.485 89.915 379.863 105.566 395.515C121.218 411.167 146.594 411.167 162.245 395.515L395.097 162.648C410.749 146.996 410.749 121.619 395.097 105.966C379.446 90.3138 354.07 90.3138 338.418 105.966Z"
                  fill="#FFC738"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_15_2">
                  <rect
                    width="316.514"
                    height="318.48"
                    fill="white"
                    transform="translate(92.2432 91.5879)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl font-semibold text-gray-900">
                  Invites friends to Zite, earn credits
                </h2>
                <Badge
                  variant="secondary"
                  className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1"
                >
                  New
                </Badge>
              </div>
              <p className="text-gray-600 text-sm">
                Get 10 free prompts for every friend who signs up
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="mb-8 bg-gray-100 p-6 rounded-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              How it works
            </h3>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-start gap-3 bg-white rounded-md p-2">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Share2 className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    Invite friends to Zite
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Share your unique referral link
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 bg-white rounded-md p-2">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 ">
                    Earn credits per signup
                  </h4>
                  <p className="text-gray-600 text-sm">
                    10 free prompts per friend that signs up
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 bg-white rounded-md p-2">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gift className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">
                    50% more signup credits
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Your friends get bonus credits too
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 justify-end">
            <Button
              variant="ghost"
              onClick={() => onOpenChange(false)}
              className="text-gray-600 hover:text-gray-800"
            >
              Maybe later
            </Button>
            <Button className="">
              <Gift className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

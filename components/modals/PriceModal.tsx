import { useState } from "react";
import { X, Check } from "lucide-react";

interface SelectedFeatures {
  customEndings: boolean;
  allQuestionTypes: boolean;
  customThemes: boolean;
  customEmails: boolean;
  removeAllBranding: boolean;
  customShareLinks: boolean;
  formAnalytics: boolean;
  customDomain: boolean;
  customCode: boolean;
  partialSubmissions: boolean;
  unlimitedResponses: boolean;
  enterpriseFeatures: boolean;
  dedicatedSupport: boolean;
}

interface Feature {
  key: keyof SelectedFeatures;
  label: string;
}

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface PlanData {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonStyle: string;
  popular?: boolean;
}

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  const [selectedFeatures, setSelectedFeatures] = useState<SelectedFeatures>({
    customEndings: false,
    allQuestionTypes: false,
    customThemes: false,
    customEmails: false,
    removeAllBranding: false,
    customShareLinks: false,
    formAnalytics: false,
    customDomain: false,
    customCode: false,
    partialSubmissions: false,
    unlimitedResponses: false,
    enterpriseFeatures: false,
    dedicatedSupport: false,
  });

  const [activePlan, setActivePlan] = useState<string>("Free");

  const toggleFeature = (feature: keyof SelectedFeatures): void => {
    setSelectedFeatures((prev) => ({
      ...prev,
      [feature]: !prev[feature],
    }));
  };

  const features: Feature[] = [
    { key: "customEndings", label: "Custom endings" },
    { key: "allQuestionTypes", label: "All question types" },
    { key: "customThemes", label: "Custom themes" },
    { key: "customEmails", label: "Custom emails" },
    { key: "removeAllBranding", label: "Remove all branding" },
    { key: "customShareLinks", label: "Custom share links" },
    { key: "formAnalytics", label: "Form analytics" },
    { key: "customDomain", label: "Custom domain" },
    { key: "customCode", label: "Custom code" },
    { key: "partialSubmissions", label: "Partial submissions" },
    { key: "unlimitedResponses", label: "Unlimited responses" },
    { key: "enterpriseFeatures", label: "Enterprise features" },
    { key: "dedicatedSupport", label: "Dedicated support" },
  ];

  const plans: Record<string, PlanData> = {
    Free: {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "For individuals who need basic forms, on a budget.",
      features: [
        "Unlimited forms & questions",
        "1000 responses/mo",
        "Form embedding",
        "PDF document generation",
        "File uploads",
        "Pre-fills and URL parameters",
      ],
      buttonText: "Current plan",
      buttonStyle: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    },
    "Your plan": {
      name: "Your plan",
      price: "$0",
      period: "/month",
      description: "Your current active plan with selected features.",
      features: [
        "All Free plan features",
        "Custom plan based on your needs",
        "Selected premium features included",
        "Unlimited seats",
        "Calculations and scoring",
      ],
      buttonText: "Current plan",
      buttonStyle: "bg-orange-500 text-white hover:bg-orange-600",
    },
    Starter: {
      name: "Starter",
      price: "$25",
      period: "/month",
      description: "For small teams and growing businesses.",
      features: [
        "All Free plan features",
        "5,000 responses/mo",
        "Custom endings",
        "All question types",
        "Custom themes",
        "Remove branding",
      ],
      buttonText: "Choose plan",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
    },
    Pro: {
      name: "Pro",
      price: "$59",
      period: "/month",
      description: "For professional teams who need advanced features.",
      features: [
        "All Starter plan features",
        "25,000 responses/mo",
        "Custom emails",
        "Custom share links",
        "Advanced form analytics",
        "Partial submissions",
      ],
      buttonText: "Choose plan",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
      popular: true,
    },
    Business: {
      name: "Business",
      price: "$129",
      period: "/month",
      description: "For businesses that need custom branding and domains.",
      features: [
        "All Pro plan features",
        "100,000 responses/mo",
        "Custom domain",
        "Custom code injection",
        "Advanced analytics & reporting",
        "Team collaboration tools",
      ],
      buttonText: "Choose plan",
      buttonStyle: "bg-blue-600 text-white hover:bg-blue-700",
    },
    Enterprise: {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with specific requirements.",
      features: [
        "All Business plan features",
        "Unlimited responses",
        "Enterprise security features",
        "SSO integration",
        "Dedicated support manager",
      ],
      buttonText: "Contact sales",
      buttonStyle: "bg-gray-800 text-white hover:bg-gray-900",
    },
  };

  const planTabs = [
    "Free",
    "Your plan",
    "Starter",
    "Pro",
    "Business",
    "Enterprise",
  ];

  if (!isOpen) return null;

  const currentPlan = plans[activePlan];

  return (
    <div className="fixed inset-0 glass-4 flex items-center justify-center p-4 z-50">
      <div className="bg-white border rounded-lg relative z-50 max-w-6xl w-full max-h-[90vh] overflow-hidden flex">
        {/* Left Sidebar - Features */}
        <div className="bg-slate-800 text-white p-6 w-80 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-6">
            Which features do you need?
          </h2>

          <div className="space-y-4">
            {features.map((feature) => (
              <label
                key={feature.key}
                className="flex items-center space-x-3 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={selectedFeatures[feature.key]}
                  onChange={() => toggleFeature(feature.key)}
                  className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm">{feature.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Right Content - Pricing Plans */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">
              Pricing plans
            </h1>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
          </div>

          {/* Plan Tabs */}
          <div className="flex space-x-8 mb-8 border-b border-gray-200">
            {planTabs.map((plan) => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`pb-3 px-1 font-medium transition-colors relative ${
                  activePlan === plan
                    ? "border-b-2 border-orange-400 text-orange-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {plan}
                {plan === "Pro" && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1 py-0.5 rounded text-[10px]">
                    Popular
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Plan Details */}
          <div className="mb-8">
            <div className="flex items-baseline space-x-2 mb-2">
              <h2 className="text-3xl font-bold text-orange-600">
                {currentPlan.name}
              </h2>
              <div className="flex items-baseline ml-auto">
                <span className="text-4xl font-bold text-gray-900">
                  {currentPlan.price}
                </span>
                <span className="text-gray-500 ml-1">{currentPlan.period}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-6">{currentPlan.description}</p>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Included features
            </h3>

            <div className="grid grid-cols-1 gap-y-3">
              {currentPlan.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Choose Plan Button */}
          <div className="flex justify-center w-full">
            <button
              className={`w-full px-8 py-3 rounded-lg font-medium transition-colors ${currentPlan.buttonStyle}`}
            >
              {currentPlan.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

// Types
interface MenuItemType {
  name: string;
  hasDropdown: boolean;
}

interface DropdownItemType {
  icon?: string;
  title: string;
  isClickable?: boolean;
}

interface IntegrationItemType {
  name: string;
  imageUrl: string;
  width?: number;
  height?: number;
}

// Dummy icons
const FormIcon = () => <span>📄</span>;
const CalendarIcon = () => <span>📅</span>;
const WorkflowIcon = () => <span>🔗</span>;
const PdfIcon = () => <span>📄</span>;
const PaymentsIcon = () => <span>💳</span>;

// Data Arrays
const menuItems: MenuItemType[] = [
  { name: "Products", hasDropdown: true },
  { name: "Templates", hasDropdown: true },
  { name: "Integrations", hasDropdown: true },
  { name: "Resources", hasDropdown: true },
  { name: "Pricing", hasDropdown: false },
];

const productsItems: DropdownItemType[] = [
  { title: "Forms", icon: "FormIcon" },
  { title: "Scheduling", icon: "CalendarIcon" },
  { title: "Workflows", icon: "WorkflowIcon" },
  { title: "PDF", icon: "PdfIcon" },
  { title: "Payments", icon: "PaymentsIcon" },
];

const featuresItems: DropdownItemType[] = [
  { title: "Conditional logic" },
  { title: "Login forms" },
  { title: "Make a quiz" },
  { title: "Styling" },
  { title: "Sharing forms" },
  { title: "Results & analytics" },
];

const templateCategories: DropdownItemType[] = [
  { title: "Lead generation" },
  { title: "Feedback" },
  { title: "Marketing" },
  { title: "Legal" },
  { title: "Personal" },
  { title: "E-commerce" },
  { title: "Survey" },
  { title: "Quizzes" },
];

const popularTemplates: DropdownItemType[] = [
  { title: "RSVP form" },
  { title: "Newsletter signup" },
  { title: "Sign up sheet" },
  { title: "Client intake form" },
  { title: "Bug report form" },
  { title: "Net Promoter Score" },
  { title: "Job application" },
  { title: "Online registration" },
];

const integrationItems: IntegrationItemType[] = [
  {
    name: "Airtable",
    imageUrl:
      "https://play-lh.googleusercontent.com/Kv6IIya1TLiCSQCHOz1ihsxuBfSeriuVd8Qpsgby6RFjiWzIJeTnoOWEzHwzttHlhmGM",
    width: 30,
    height: 30,
  },
  {
    name: "Notion",
    imageUrl:
      "https://avatars.slack-edge.com/2022-11-04/4337716049777_09e09654eb84cb3b4d8b_512.png",
    width: 20,
    height: 20,
  },
  {
    name: "Google Sheets",
    imageUrl:
      "https://qualitytraining.be/content/uploads/2022/07/formation-google-sheet-belgique.png",
    width: 30,
    height: 30,
  },
  {
    name: "SmartSuite",
    imageUrl:
      "https://play-lh.googleusercontent.com/vRzqhjjfj9MTlvcRULtMk3-f7DiRHt-gb9MnIxEu01Z-HICc4cVn7ExTSx0KjrogPF0",
    width: 30,
    height: 30,
  },
  {
    name: "HubSpot",
    imageUrl: "https://avatars.githubusercontent.com/u/326419?s=200&v=4",
    width: 30,
    height: 30,
  },
  {
    name: "Slack",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaPlbD42KHzVMn8SG2t54umtxYfOz2Mcwm8w&s",
    width: 30,
    height: 30,
  },
  {
    name: "Dropbox",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4s3ECJJwiCX0hLvu4r9XHOEXMjqhxJ6T-PQ&s",
    width: 20,
    height: 20,
  },
  {
    name: "Mailchimp",
    imageUrl:
      "https://i.pinimg.com/736x/32/a9/e0/32a9e00cdc1b3a25df1650d4018063ec.jpg",
    width: 25,
    height: 25,
  },
  {
    name: "Monday",
    imageUrl: "https://monday.i4asiacorp.com/images/monday_og_logo.png",
    width: 30,
    height: 30,
  },
  {
    name: "Calendly",
    imageUrl:
      "https://play-lh.googleusercontent.com/0FNnNtu7VCpoP0ZJFWdvoGKFe3RIhk2cnDIR1NcNBu82V93LHwDHP1G7IfyYblctng",
    width: 30,
    height: 30,
  },
  {
    name: "Salesforce",
    imageUrl:
      "https://mitto.ch/wp-content/uploads/2024/01/salesforce@2x-8-1.png",
    width: 30,
    height: 30,
  },
  {
    name: "Stripe",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0tpPUn3i_x5jgRcENKrC5S0hfUNU1tUQRA&s",
    width: 20,
    height: 20,
  },
];

const resourceItems: DropdownItemType[] = [
  { title: "Blog" },
  { title: "About" },
  { title: "What's new" },
  { title: "Enterprise" },
  { title: "Press kit" },
  { title: "Help center" },
];

// Component: Dropdown Item
const DropdownItem: React.FC<{
  item: DropdownItemType;
  className?: string;
}> = ({ item, className = "" }) => {
  const IconComponent =
    item.icon === "FormIcon"
      ? FormIcon
      : item.icon === "CalendarIcon"
      ? CalendarIcon
      : item.icon === "WorkflowIcon"
      ? WorkflowIcon
      : item.icon === "PdfIcon"
      ? PdfIcon
      : item.icon === "PaymentsIcon"
      ? PaymentsIcon
      : null;

  return (
    <div
      className={`flex items-center gap-3 font-bold text-lg hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer ${className}`}
    >
      {IconComponent && <IconComponent />}
      {item.title}
    </div>
  );
};

// Component: Feature Item
const FeatureItem: React.FC<{ title: string }> = ({ title }) => (
  <div className="text-base font-medium hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer">
    {title}
  </div>
);

// Component: Template Item
const TemplateItem: React.FC<{ title: string }> = ({ title }) => (
  <span className="hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer">
    {title}
  </span>
);

// Component: Integration Item
const IntegrationItem: React.FC<{ integration: IntegrationItemType }> = ({
  integration,
}) => (
  <span className="flex items-center gap-2 text-base font-medium hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer">
    <Image
      src={integration.imageUrl}
      alt={integration.name}
      width={integration.width || 30}
      height={integration.height || 30}
    />
    {integration.name}
  </span>
);

// Component: Resource Item
const ResourceItem: React.FC<{ title: string }> = ({ title }) => (
  <span className="hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200 cursor-pointer">
    {title}
  </span>
);

// Component: Products Dropdown
const ProductsDropdown: React.FC = () => (
  <div className="flex relative top-5 gap-6 bg-white rounded-2xl p-7">
    <div className="flex flex-col gap-3 w-1/2">
      {productsItems.map((item, index) => (
        <DropdownItem key={index} item={item} />
      ))}
    </div>
    <div className="flex flex-col w-1/2 gap-1">
      <div className="text-xs font-semibold text-gray-500">FEATURES</div>
      {featuresItems.map((item, index) => (
        <FeatureItem key={index} title={item.title} />
      ))}
    </div>
  </div>
);

// Component: Templates Dropdown
const TemplatesDropdown: React.FC = () => (
  <div className="bg-white rounded-2xl relative top-5 p-7 w-[800px]">
    <div className="grid grid-cols-2 gap-14">
      <div>
        <div className="text-xs font-semibold text-gray-500 mb-2">
          CATEGORIES
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-1 text-base font-medium">
          {templateCategories.map((category, index) => (
            <TemplateItem key={index} title={category.title} />
          ))}
        </div>
      </div>
      <div>
        <div className="text-xs font-semibold text-gray-500 mb-2">
          POPULAR TEMPLATES
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-1 text-base font-medium">
          {popularTemplates.map((template, index) => (
            <TemplateItem key={index} title={template.title} />
          ))}
        </div>
      </div>
    </div>
    <div className="flex px-20 justify-between items-center mt-6 border-t border-gray-200 pt-3 text-sm text-gray-700">
      <span className="cursor-pointer hover:underline hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
        Make a form with AI →
      </span>
      <span className="cursor-pointer hover:underline hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
        All templates →
      </span>
    </div>
  </div>
);

// Component: Integrations Dropdown
const IntegrationsDropdown: React.FC = () => (
  <div className="bg-white relative top-5 rounded-2xl p-6 pr-8">
    <div className="grid grid-cols-3 gap-x-10 gap-y-2 w-[480px]">
      {integrationItems.map((integration, index) => (
        <IntegrationItem key={index} integration={integration} />
      ))}
    </div>
    <div className="flex justify-end mt-6 border-t border-gray-200 pt-3 text-gray-700">
      <span className="cursor-pointer font-medium hover:underline hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200">
        See all integrations →
      </span>
    </div>
  </div>
);

// Component: Resources Dropdown
const ResourcesDropdown: React.FC = () => (
  <div className="bg-white w-40 relative top-5 rounded-2xl p-6">
    <div className="flex flex-col text-lg font-medium">
      {resourceItems.map((item, index) => (
        <ResourceItem key={index} title={item.title} />
      ))}
    </div>
  </div>
);

// Component: Dropdown Content
const DropdownContent: React.FC<{ itemName: string }> = ({ itemName }) => {
  const dropdownComponents = {
    Products: <ProductsDropdown />,
    Templates: <TemplatesDropdown />,
    Integrations: <IntegrationsDropdown />,
    Resources: <ResourcesDropdown />,
  };

  return (
    dropdownComponents[itemName as keyof typeof dropdownComponents] || null
  );
};

// Main Header Component
const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownClick = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const getDropdownWidth = (itemName: string) => {
    const widths = {
      Templates: 650,
      Integrations: 400,
      Products: 420,
      Resources: 220,
    };
    return widths[itemName as keyof typeof widths] || 300;
  };

  return (
    <header className="glass bg-white rounded-2xl max-w-7xl mx-auto fixed top-5 left-0 right-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/icons/logo.svg"
              alt="Fillout Logo"
              height={30}
              width={130}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
                  onClick={() =>
                    item.hasDropdown && handleDropdownClick(item.name)
                  }
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </button>
                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-5 -left-12 mt-4 glass-dropdown z-50 text-gray-900"
                    style={{ minWidth: getDropdownWidth(item.name) }}
                  >
                    <DropdownContent itemName={item.name} />
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline">
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="h-11 w-32">
              <Link href="/sign-up">Get started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-yellow-100 bg-yellow-50">
            <div className="py-4 space-y-3">
              {menuItems.map((item, index) => (
                <button
                  key={index}
                  className="flex items-center w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-yellow-100 transition-colors duration-200"
                  onClick={() =>
                    item.hasDropdown && handleDropdownClick(item.name)
                  }
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  )}
                </button>
              ))}

              <div className="border-t border-yellow-200 pt-4 px-4 space-y-3">
                <Button variant="outline">Log in</Button>
                <Button className="h-11 w-32">Get started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

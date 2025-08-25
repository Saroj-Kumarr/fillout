"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DropdownItemType,
  FormIcon,
  CalendarIcon,
  WorkflowIcon,
  PdfIcon,
  PaymentsIcon,
  IntegrationItemType,
  productsItems,
  featuresItems,
  templateCategories,
  popularTemplates,
  integrationItems,
  resourceItems,
  MenuItemType,
  menuItems,
} from "@/constants/header";

// Types

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

// Component: Dropdown Content (For Desktop)
const DropdownContent: React.FC<{ itemName: string }> = ({ itemName }) => {
  const dropdownComponents: { [key: string]: React.ReactNode } = {
    Products: <ProductsDropdown />,
    Templates: <TemplatesDropdown />,
    Integrations: <IntegrationsDropdown />,
    Resources: <ResourcesDropdown />,
  };
  return <>{dropdownComponents[itemName] || null}</>;
};

// Component for Mobile Dropdown Content
const MobileDropdownItem: React.FC<{ title: string }> = ({ title }) => (
  <div className="px-5 py-2 text-gray-700 hover:bg-yellow-200 transition-colors duration-200 cursor-pointer">
    {title}
  </div>
);

const MobileDropdownContent: React.FC<{ itemName: string }> = ({
  itemName,
}) => {
  const renderContent = () => {
    switch (itemName) {
      case "Products":
        return (
          <>
            <div className="px-5 py-2 font-semibold text-gray-800">
              Products
            </div>
            {productsItems.map((item, i) => (
              <MobileDropdownItem key={`prod-${i}`} title={item.title} />
            ))}
            <div className="px-5 py-2 mt-2 font-semibold text-gray-800">
              Features
            </div>
            {featuresItems.map((item, i) => (
              <MobileDropdownItem key={`feat-${i}`} title={item.title} />
            ))}
          </>
        );
      case "Integrations":
        return (
          <>
            {integrationItems.map((item, i) => (
              <MobileDropdownItem key={`int-${i}`} title={item.name} />
            ))}
          </>
        );
      case "Resources":
        return (
          <>
            {resourceItems.map((item, i) => (
              <MobileDropdownItem key={`res-${i}`} title={item.title} />
            ))}
          </>
        );
      default:
        return null;
    }
  };
  return <div className="flex flex-col w-full">{renderContent()}</div>;
};

// Main Header Component
const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // --- CREATE REORDERED MENU FOR MOBILE ---
  const reorderForMobile = (items: MenuItemType[]): MenuItemType[] => {
    const reordered = [...items];
    const templatesItem = reordered.find((item) => item.name === "Templates");

    if (!templatesItem) return items; // Return original if Templates isn't found

    const otherItems = reordered.filter((item) => item.name !== "Templates");
    const resourcesIndex = otherItems.findIndex(
      (item) => item.name === "Resources"
    );

    // Place it after Resources, or at the end if Resources isn't found
    if (resourcesIndex > -1) {
      otherItems.splice(resourcesIndex + 1, 0, templatesItem);
    } else {
      otherItems.push(templatesItem);
    }

    return otherItems;
  };
  const mobileMenuItems = reorderForMobile(menuItems);

  const handleDropdownClick = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getDropdownWidth = (itemName: string) => {
    const widths: { [key: string]: number } = {
      Templates: 650,
      Integrations: 400,
      Products: 420,
      Resources: 220,
    };
    return widths[itemName] || 300;
  };

  if (pathname === "/home") return null;

  return (
    <header
      ref={headerRef}
      className="glass bg-white rounded-2xl max-w-7xl mx-auto fixed top-5 left-0 right-0 z-50 shadow-md"
    >
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

          {/* --- DESKTOP NAVIGATION (UNCHANGED) --- */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button
                  className="flex items-center text-gray-800 hover:text-gray-600 font-medium transition-colors duration-300"
                  onClick={() =>
                    item.hasDropdown
                      ? handleDropdownClick(item.name)
                      : (window.location.href = `/${item.name.toLowerCase()}`)
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

        {/* --- MOBILE MENU (WITH REORDERED ITEMS) --- */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-2">
            <div className="py-4 space-y-1">
              {mobileMenuItems.map((item, index) => (
                <React.Fragment key={index}>
                  <button
                    className="flex items-center justify-between w-full text-left px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-yellow-100 transition-colors duration-200 font-medium"
                    onClick={() => {
                      if (item.name === "Templates") {
                        console.log("Navigate to Templates page");
                        setIsMobileMenuOpen(false);
                      } else if (item.hasDropdown) {
                        handleDropdownClick(item.name);
                      } else {
                        setIsMobileMenuOpen(false);
                      }
                    }}
                  >
                    {item.name}
                    {item.hasDropdown && item.name !== "Templates" && (
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name
                            ? "rotate-180"
                            : "rotate-0"
                        }`}
                      />
                    )}
                  </button>
                  {item.hasDropdown &&
                    item.name !== "Templates" &&
                    activeDropdown === item.name && (
                      <div className="glass-2">
                        <MobileDropdownContent itemName={item.name} />
                      </div>
                    )}
                </React.Fragment>
              ))}

              <div className="border-t border-yellow-200 pt-4 px-4 space-y-3 flex flex-col items-start">
                <Button variant="outline">
                  <Link href="/login">Log in</Link>
                </Button>
                <Button className="h-11 w-32">
                  <Link href="/sign-up">Get started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

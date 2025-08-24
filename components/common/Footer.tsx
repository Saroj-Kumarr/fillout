import { Button } from "@/components/ui/button";
import {
  aiToolsLinks,
  navigationSections,
  resourcesLinks,
  socialLinks,
} from "@/constants/footer";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="relative pt-20 bg-[#F9FAFB]">
      {/* CTA Section */}
      <div className="absolute w-full max-w-6xl -top-16 lg:-top-8 left-1/2 -translate-x-1/2 px-4">
        <div className="bg-white/50 border backdrop-blur-md rounded-3xl lg:rounded-full px-6 py-8 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="flex-1">
            <h2 className="text-3xl leading-snug lg:text-5xl font-bold text-black">
              Make your first form in minutes.
            </h2>
          </div>
          <div className="flex-1 w-full">
            <p className="text-base lg:text-lg">
              Unlimited forms with 1000 submissions/month.
            </p>
            <p className="text-base lg:text-lg mb-6">
              Unlimited team seats. See{" "}
              <Link href="/pricing" className="underline cursor-pointer">
                pricing
              </Link>{" "}
              for details.
            </p>
            <Button
              className="w-full bg-[#F2C14B] font-medium text-lg text-black h-14 lg:h-13 hover:bg-yellow-400"
              variant="secondary"
            >
              <span className="font-semibold text-xl">Get started</span> —
              it&apos;s free
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#211C20] text-white pt-48 lg:pt-40 px-4">
        <div className="max-w-7xl mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Logo and Description */}
            <div className="col-span-1 md:col-span-2 text-center md:text-left">
              <div className="mb-6 relative w-full h-[100px] lg:w-[410px] lg:h-[130px] flex justify-center lg:justify-start">
                <Image
                  src="/icons/logo_2.svg"
                  alt="Fillout"
                  width={250}
                  height={80}
                  className="object-contain"
                />
              </div>
              <p className="text-2xl lg:text-3xl text-gray-300 mb-8">
                The all-in-one form solution
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="hover:opacity-80 transition-opacity"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {navigationSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-semibold text-gray-400 uppercase tracking-wider mb-6">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-gray-300 text-lg hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div>
                <h3 className="font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  AI TOOLS
                </h3>
                <ul className="space-y-4">
                  {aiToolsLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 text-lg hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-400 uppercase tracking-wider mb-6">
                  RESOURCES
                </h3>
                <ul className="space-y-4">
                  {resourcesLinks.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-gray-300 text-lg hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 py-8">
          <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 px-4">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-full px-4 py-1 text-sm text-gray-300 border border-gray-600">
                <span className="font-medium">SOC II Type 2</span>{" "}
                <span className="text-gray-400">Compliant</span>
              </div>
              <div className="rounded-full px-4 py-1 text-sm text-gray-300 border border-gray-600">
                <span className="font-medium">256-bit AES</span>{" "}
                <span className="text-gray-400">Data encryption</span>
              </div>
              <div className="rounded-full px-4 py-1 text-sm text-gray-300 border border-gray-600">
                <span className="font-medium">24/5 Tech support</span>{" "}
                <span className="text-gray-400">Here if you need us</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#F3BF26]">
              <Link
                href="/press-kit"
                className="hover:text-yellow-300 transition-colors"
              >
                Press kit
              </Link>
              <Link
                href="/privacy"
                className="hover:text-yellow-300 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="hover:text-yellow-300 transition-colors"
              >
                Terms
              </Link>
              <span className="text-gray-400">© 2025 Restly, Inc.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

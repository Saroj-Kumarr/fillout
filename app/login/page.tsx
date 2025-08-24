import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import Image from "next/image";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F8F8]">
      <header className="flex border-b items-center justify-between p-4 md:p-5 md:py-[22px] md:px-8 bg-white">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="Fillout Logo"
            width={100}
            height={40}
          />
        </Link>
        <Link
          href="/sign-up"
          className="text-gray-600 hover:text-gray-800 font-medium"
        >
          Sign Up
        </Link>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left side - Sign in form */}
        <div className="flex-1 flex flex-col bg-[#F8F8F8] py-12 px-4 sm:px-6 lg:px-0">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-sm">
              <h2 className="text-2xl text-center font-medium text-gray-900 mb-8">
                Sign in to Fillout
              </h2>

              <div className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
                {/* Google Sign In */}
                <Button
                  variant="outline"
                  className="w-full h-11 justify-start gap-3 border border-gray-300 hover:bg-gray-50 bg-white relative text-sm sm:text-base"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Sign in with Google
                  <span className="ml-auto text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    Last used
                  </span>
                </Button>

                {/* Microsoft Sign In */}
                <Button
                  variant="outline"
                  className="w-full h-11 justify-start gap-3 border border-gray-300 hover:bg-gray-50 bg-white text-sm sm:text-base"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#F25022" d="M1 1h10v10H1z" />
                    <path fill="#00A4EF" d="M13 1h10v10H13z" />
                    <path fill="#7FBA00" d="M1 13h10v10H1z" />
                    <path fill="#FFB900" d="M13 13h10v10H13z" />
                  </svg>
                  Sign in with Microsoft
                </Button>

                {/* Divider */}
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or</span>
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="email"
                      placeholder="Email address"
                      className="pl-10 h-11 border-gray-300"
                    />
                  </div>
                </div>

                {/* Continue button */}
                <Button variant="secondary" className="w-full h-11">
                  Sign in with email
                </Button>
              </div>
              <div className="p-6 text-center font-medium text-xs text-gray-500">
                By signing in, you are agreeing to our{" "}
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 underline"
                >
                  privacy policy
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  className="text-gray-600 hover:text-gray-800 underline"
                >
                  terms
                </Link>
                .
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Marketing content */}
        <div className="hidden lg:flex flex-1 bg-[#FADF9A] relative overflow-hidden">
          <div className="relative h-full flex flex-col items-center justify-center p-12">
            <h1 className="text-7xl font-bold text-black mb-20 text-center leading-tight">
              Make a Fillout
            </h1>
            <p className="text-gray-800 mb-12 text-center text-lg">
              100,000+ organizations build with Fillout
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-gray-600 font-bold text-lg">HACK CLUB</div>
              <div className="text-gray-600 font-serif text-xl">Berkeley</div>
              <div className="text-gray-600 font-bold text-lg">
                GAP CONSULTING
              </div>
              <div className="text-gray-600 font-medium text-lg flex items-center gap-1">
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
                airbnb
              </div>
              <div className="text-gray-600 font-bold text-lg">wayfair</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

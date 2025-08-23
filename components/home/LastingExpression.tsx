import Image from "next/image";

export default function LastingImpression() {
  return (
    <section className="">
      <div className="">
        <div className="flex">
          {/* Left Content */}
          <div className="space-y-8 min-w-[600px] bg-white py-16 pl-20">
            <div className="flex items-center gap-4">
              <h2 className="text-5xl lg:text-7xl font-[600] text-black leading-16">
                Create
                <br />a lasting
                <br />
                impression
              </h2>
              <div className="bg-yellow-400 p-3 flex items-center justify-center rounded-md flex-shrink-0">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9L17 14.74L18.18 22L12 18.77L5.82 22L7 14.74L2 9L8.91 8.26L12 2Z"
                    fill="currentColor"
                  />
                  <path
                    d="M8 12L10 14L16 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <p className="text-3xl font-medium">
              Elevate your brand with
              <br />
              each customer touch point.
            </p>

            {/* Yellow Feature Box */}
            <div className="bg-[#FFD572] p-6 rounded-2xl w-96">
              <div className="flex items-start gap-3 mb-3">
                <div className="bg-black p-2 rounded-lg">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M12 2L3 7L12 12L21 7L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 17L12 22L21 17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12L12 17L21 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-black">
                  Eye-catching designs, every time
                </h3>
              </div>
              <p className="ml-5 mb-2">Choose from pre-built themes.</p>
              <p className="ml-5">
                Or create your own, with your fonts,
                <br />
                logo, colors, custom CSS & more.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-2">
              <div className="flex items-center gap-4 bg-gray-100  rounded-md w-96">
                <div className="p-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-black"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="9"
                      cy="9"
                      r="2"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M21 15L16 10L5 21"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium text-black">
                  Control every brand touch point
                </span>
              </div>

              <div className="flex items-center gap-4 bg-gray-100 rounded-md w-96">
                <div className="p-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-black"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
                    <path
                      d="M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium text-black">
                  Share with your own domain
                </span>
              </div>

              <div className="flex items-center gap-4 bg-gray-100  rounded-md w-96">
                <div className=" p-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-black"
                  >
                    <polyline
                      points="16 18 22 12 16 6"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <polyline
                      points="8 6 2 12 8 18"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <span className="text-lg font-medium text-black">
                  Lightning fast embeds on any site
                </span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[700px] w-full bg-gray-100 py-16">
            <Image
              src="https://www.fillout.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlastingImpressionBg.849c6843.png&w=3840&q=75"
              alt="Form designer interface showing theme customization"
              width={700}
              height={800}
              className="ml-20"
              priority
            />

            <Image
              className="absolute top-44 right-28"
              src="https://www.fillout.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider1Img1.108a254d.png&w=640&q=75"
              alt="Form designer interface showing theme customization"
              width={240}
              height={680}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

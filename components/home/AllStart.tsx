export default function FormBuilderShowcase() {
  return (
    <section className="bg-[#211C20] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 relative -top-6 md:-top-8 bg-[#29A452] rounded-lg flex items-center justify-center transform -rotate-12">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#FFC721]">
              It all starts with a form
            </h2>
            <div className="w-10 h-10 md:w-12 md:h-12 relative top-6 md:top-8 bg-[#F6512B] rounded-lg flex items-center justify-center transform rotate-12">
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 3v2H6v2h2v2h2V7h2V5h-2V3H8zm8 0v2h2v2h-2v2h-2V7h-2V5h2V3h2zM8 13v2H6v2h2v2h2v-2h2v-2h-2v-2H8zm8 0v2h2v2h-2v2h-2v-2h-2v-2h2v-2h2z" />
              </svg>
            </div>
          </div>
          <p className="text-xl md:text-2xl font-medium text-gray-300">
            Build the exact form you need, in minutes.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-16">
          {/* Drag and Drop Card */}
          <div className="bg-gray-100 rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl text-black font-bold mb-2">
              Create with drag-and-drop
            </h3>
            <p className="mb-6 text-black">
              Collect the right answers with 50+ customizable field types.
            </p>

            <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Field Types Sidebar */}
                <div className="flex text-black flex-row md:flex-col gap-4 md:gap-3 overflow-x-auto pb-2 md:pb-0">
                  <div className="flex items-center gap-2 text-sm flex-shrink-0">
                    <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                      </svg>
                    </div>
                    <span>Short Text</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm flex-shrink-0">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                      </svg>
                    </div>
                    <span>Paragraph</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm flex-shrink-0">
                    <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-purple-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                    <span>Multiple Choice</span>
                  </div>
                </div>

                {/* Form Preview */}
                <div className="flex-1 bg-gray-50 text-black rounded-lg p-4">
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Registration Form</h4>
                    <p className="text-sm text-gray-600">
                      Please provide your details below.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-xs text-gray-500">
                          First name
                        </label>
                        <div className="h-8 bg-white border rounded"></div>
                      </div>
                      <div>
                        <label className="text-xs text-gray-500">
                          Last name
                        </label>
                        <div className="h-8 bg-white border rounded"></div>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500">
                        Email address
                      </label>
                      <div className="h-8 bg-white border rounded"></div>
                    </div>
                    <button className="bg-orange-400 text-white px-4 py-2 rounded text-sm font-medium w-full sm:w-auto">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Forms Card */}
          <div className="bg-gray-100 rounded-2xl relative overflow-hidden text-gray-900">
            <div className="bg-[#FED770] px-6 md:px-8 py-4 md:py-2">
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
                Automate with smart forms
              </h3>
              <p className="mb-6">
                Reduce manual work with intelligent routing.
              </p>
            </div>

            <div className="p-6 md:p-8">
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm space-y-4">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap">
                  {/* Qualified Badge */}
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                    QUALIFIED
                  </div>

                  {/* Arrow */}
                  <svg
                    className="w-6 h-6 text-gray-400 transform rotate-90 sm:rotate-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>

                  {/* Book Meeting */}
                  <div className="bg-orange-100 border-2 border-orange-300 rounded-lg px-4 py-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 6H9v5h5V9z" />
                      </svg>
                    </div>
                    <span className="font-medium text-orange-700">
                      Book Meeting
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 flex-wrap">
                  {/* Payment */}
                  <div className="bg-green-100 border-2 border-green-300 rounded-lg px-4 py-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-green-700">Payment</span>
                    <div className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-medium">
                      APPROVED
                    </div>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="w-6 h-6 text-gray-400 transform rotate-90 sm:rotate-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>

                  {/* Email Sent */}
                  <div className="bg-purple-100 border-2 border-purple-300 rounded-lg px-4 py-2 flex items-center gap-2">
                    <div className="w-6 h-6 bg-purple-500 rounded flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <span className="font-medium text-purple-700">
                      Email sent
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="bg-[#FED770] rounded-2xl">
          <div className="grid md:grid-cols-2 gap-0 md:gap-8 items-center">
            <div className="p-6 md:p-8">
              <h3 className="text-3xl md:text-4xl text-black font-bold mb-4">
                Analyze, review, and collaborate
              </h3>
              <p className="mb-2 text-black">
                Track your data with flexible views and analytics.
              </p>
              <p className="text-black">
                Collaborate with team members in real-time.
              </p>
            </div>

            <div className="bg-white text-black rounded-lg md:rounded-l-none md:rounded-r-lg p-6 shadow-sm min-h-[384px]">
              {/* Response Counter */}
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-bold text-lg">Responses</h4>
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                  </svg>
                  +300
                </div>
              </div>

              {/* Data Table */}
              <div className="space-y-3">
                {/*-- Desktop Header --*/}
                <div className="hidden md:grid grid-cols-4 gap-4 text-xs text-gray-500 border-b pb-2">
                  <span>Name</span>
                  <span>Position</span>
                  <span>Location</span>
                  <span>Date</span>
                </div>
                {/*-- Responsive Rows --*/}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-2 text-sm py-2 border-b">
                  <div className="flex justify-between md:block">
                    <span className="font-bold text-gray-500 md:hidden">
                      Name
                    </span>
                    <span>Cameron James Clark</span>
                  </div>
                  <div className="flex justify-between md:block">
                    <span className="font-bold text-gray-500 md:hidden">
                      Position
                    </span>
                    <span>Dentist</span>
                  </div>
                  <div className="flex justify-between md:block">
                    <span className="font-bold text-gray-500 md:hidden">
                      Location
                    </span>
                    <span>Florida</span>
                  </div>
                  <div className="flex justify-between md:block">
                    <span className="font-bold text-gray-500 md:hidden">
                      Date
                    </span>
                    <span>10/14/1983</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-2 border-b">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 py-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-4 py-2">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-1/3"></div>
                </div>
                <span className="text-xs text-gray-500">33%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

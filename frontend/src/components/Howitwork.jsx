import React from "react";

const Timeline = () => {
  const steps = [
    {
      title: "Step 1: Report Your Issue",
      description: "Open the app and report your vehicle issue, such as breakdown, low fuel, or need for a mechanic, with just a few clicks.",
    },
    {
      title: "Step 2: Choose a Service",
      description: "Select the required service—towing, fuel delivery, or mechanic assistance—based on your situation and preferences.",
    },
    {
      title: "Step 3: Real-Time Tracking",
      description: "Track your assigned service provider in real time and view their estimated time of arrival directly on the app.",
    },
    {
      title: "Step 4: Get Assistance",
      description: "Receive the required help, resolve your issue on the spot, and get back on the road stress-free!",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-12 px-3 mx-8">
      <h2 className="text-5xl font-bold text-center text-gray-600 mb-8">How It Works</h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute top-0 left-8 w-1 bg-blue-500 h-full hidden md:block"></div>

        {steps.map((step, index) => (
          <div key={index} className="mb-12 flex flex-col md:flex-row items-start md:items-center">
            {/* Icon/Symbol */}
            <div className="relative w-16 h-16 flex items-center justify-center bg-gradient-to-r from-purple-300 to-blue-100 rounded-full text-white text-lg font-semibold mx-auto md:mx-0">
              {index + 1}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -right-2 hidden md:block"></div>
            </div>

            {/* Content Box */}
            <div className="mt-4 md:mt-0 md:ml-12 bg-gradient-to-r from-purple-300 to-blue-300 text-white p-6 rounded-lg shadow-lg w-full">
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;

import React from "react";
import Image from "../assets/WM_Image2.jpg"; // Your logo image import
import Image2 from "../assets/VM2.jpg";
import Image3 from "../assets/WM3.png";
import Image4 from "../assets/WM4.png";

const Awareness = () => {
  return (
    <main className="flex-1 bg-gray-50 p-4">

      {/* Content Section */}
      <div className="flex flex-col h-auto items-center justify-center space-y-8 mt-8 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Waste Management: An Urgent Need</h2>
        <p className="text-lg text-gray-600 max-w-3xl px-4">
          The growing challenge of waste management has led to environmental concerns that affect our health and ecosystems. The Garbage Segregator aims to automate the process of segregating waste into recyclables, organics, and non-recyclables, contributing to a cleaner environment and a sustainable future.
        </p>

        <div className="space-y-8 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={Image4}
              alt="Waste Segregation"
              className="w-full md:w-1/2 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            />
            <div className="space-y-4 md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">How It Works</h3>
              <p className="text-gray-600 text-lg">
                The system uses sensors and AI to identify different types of waste, automatically sorting them into categories like paper, plastic, metal, and organic waste. This makes the recycling process easier and more efficient.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            <div className="space-y-4 md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">Eco-Friendly Benefits</h3>
              <p className="text-gray-600 text-lg">
                By segregating waste at the source, we reduce landfill waste, conserve resources, and minimize pollution, helping create a greener and healthier planet for future generations.
              </p>
            </div>
            <img
              src={Image3}
              alt="Eco Friendly"
              className="w-full md:w-1/2 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={Image2}
              alt="Community Involvement"
              className="w-full md:w-1/2 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
            />
            <div className="space-y-4 md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800">Community Impact</h3>
              <p className="text-gray-600 text-lg">
                The project encourages community participation in waste segregation, helping people learn about proper waste disposal techniques and make a positive environmental impact.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Join the Movement</h2>
          <p className="text-lg text-gray-600 max-w-3xl px-4 mt-4">
            Together, we can make a significant difference in waste management and environmental conservation. Let's take action and build a cleaner, greener future.
          </p>
          <button
            className="mt-6 bg-green-600 text-white py-3 px-8 rounded-lg text-xl hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://www.epa.gov/recycle", "_blank")}
          >
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
};

export default Awareness;

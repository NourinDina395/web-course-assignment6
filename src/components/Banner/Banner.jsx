import React from "react";
import bannerImg from "../../assets/banner.png";
import { FaCirclePlay } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className="bg-white py-16 min-h-[520px]">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-xs font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
            New: AI-Powered Tools Available
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black text-gray-900 leading-tight mb-4">
            Supercharge Your<br />Digital Workflow
          </h1>

          {/* Description */}
          <p className="text-gray-500 text-base mb-2 max-w-md leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>
          <p className="text-gray-500 text-sm mb-8">Explore Products</p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold px-7 py-3 rounded-full transition-colors">
              Explore Products
            </button>
            <button className="flex items-center gap-2 border border-gray-300 hover:border-violet-400 text-gray-700 font-semibold px-7 py-3 rounded-full transition-colors">
              <FaCirclePlay className="text-violet-600 text-xl" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <img
            src={bannerImg}
            alt="DigiTools"
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
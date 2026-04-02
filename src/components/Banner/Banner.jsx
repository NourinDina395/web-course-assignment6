import React from "react";
import bannerImg from "../../assets/banner.png";

const Banner = () => {
  return (
    <section className="bg-gradient-to-br from-violet-50 via-white to-indigo-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-violet-100 text-violet-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            🚀 New Tools Added Weekly
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Supercharge Your Work With{" "}
            <span className="text-violet-600">Digital Tools</span>
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Discover handpicked software tools for designers, developers, marketers, and entrepreneurs. One subscription, unlimited productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <button className="btn bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8">
              Explore Tools
            </button>
            <button className="btn btn-outline border-violet-300 text-violet-600 hover:bg-violet-50 rounded-full px-8">
              Watch Demo
            </button>
          </div>
          <div className="flex gap-6 mt-8 justify-center md:justify-start text-sm text-gray-500">
            <span>✅ No credit card required</span>
            <span>✅ Free 14-day trial</span>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={bannerImg}
            alt="DigiTools Banner"
            className="max-w-sm w-full drop-shadow-xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;

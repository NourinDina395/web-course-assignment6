import React from "react";

const Stats = () => {
  return (
    <section className="bg-violet-600 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-0">

          {/* Stat 1 */}
          <div className="flex-1 text-center py-4">
            <p className="text-5xl font-black text-white">50K+</p>
            <p className="text-violet-200 text-base mt-2">Active Users</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-violet-400"></div>

          {/* Stat 2 */}
          <div className="flex-1 text-center py-4">
            <p className="text-5xl font-black text-white">200+</p>
            <p className="text-violet-200 text-base mt-2">Premium Tools</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-16 bg-violet-400"></div>

          {/* Stat 3 */}
          <div className="flex-1 text-center py-4">
            <p className="text-5xl font-black text-white">4.9</p>
            <p className="text-violet-200 text-base mt-2">Rating</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
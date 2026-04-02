import React from "react";

const CTA = () => {
  return (
    <section className="bg-violet-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-black text-white mb-4">
          Ready To Transform Your Workflow?
        </h2>
        <p className="text-violet-200 text-sm mb-8 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <button className="bg-white text-violet-600 hover:bg-violet-50 font-semibold px-7 py-3 rounded-full transition-colors text-sm">
            Explore Products
          </button>
          <button className="border border-white text-white hover:bg-violet-700 font-semibold px-7 py-3 rounded-full transition-colors text-sm">
            View Pricing
          </button>
        </div>

        {/* Note */}
        <p className="text-violet-300 text-xs">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
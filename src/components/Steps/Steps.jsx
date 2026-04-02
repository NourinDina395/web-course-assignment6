import React from "react";
import rocketImg from "../../assets/rocket.png";

const steps = [
  {
    number: "01",
    title: "Browse & Discover",
    desc: "Explore our curated catalog of 120+ professional digital tools across design, marketing, development, and more.",
  },
  {
    number: "02",
    title: "Add to Cart",
    desc: "Select the tools that fit your workflow and budget. Mix one-time purchases with monthly subscriptions.",
  },
  {
    number: "03",
    title: "Checkout Securely",
    desc: "Complete your purchase with our encrypted payment system. Instant access delivered to your email.",
  },
  {
    number: "04",
    title: "Start Building",
    desc: "Activate your tools and start supercharging your productivity from day one with full support.",
  },
];

const Steps = () => {
  return (
    <section id="steps" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-violet-600 font-bold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            Get started in 4 simple steps
          </h2>
          <p className="text-gray-500 mt-2 max-w-md mx-auto">
            From discovery to deployment — we make it effortless to equip your digital toolkit.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step) => (
              <div key={step.number} className="p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-violet-200 hover:bg-violet-50 transition-colors">
                <span className="text-4xl font-black text-violet-200">{step.number}</span>
                <h3 className="font-bold text-gray-900 text-lg mt-2 mb-1">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 hidden lg:block">
            <img src={rocketImg} alt="Launch" className="w-48 drop-shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;

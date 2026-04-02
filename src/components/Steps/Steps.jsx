import React from "react";
import { FiUser, FiBox, FiZap } from "react-icons/fi";

const steps = [
  {
    number: "01",
    icon: <FiUser className="text-violet-600 text-3xl" />,
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    number: "02",
    icon: <FiBox className="text-violet-600 text-3xl" />,
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    number: "03",
    icon: <FiZap className="text-violet-600 text-3xl" />,
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
  },
];

const Steps = () => {
  return (
    <section id="steps" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-400 text-sm">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-6 relative border border-gray-100 shadow-sm"
            >
              {/* Step number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white text-xs font-black rounded-full flex items-center justify-center shadow">
                {step.number}
              </div>

              {/* Icon circle */}
              <div className="w-16 h-16 bg-violet-50 rounded-full flex items-center justify-center mb-5 m-20">
                {step.icon}
              </div>

              {/* Text */}
              <h3 className="text-center font-bold text-gray-900 text-lg mb-2">{step.title}</h3>
              <p className="text-center text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
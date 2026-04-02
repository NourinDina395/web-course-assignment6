import React from "react";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for getting started",
    price: 0,
    period: "Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    highlighted: false,
    buttonText: "Get Started Free",
    buttonStyle: "bg-violet-600 hover:bg-violet-700 text-white",
  },
  {
    name: "Pro",
    desc: "Best for professionals",
    price: 29,
    period: "Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    highlighted: true,
    buttonText: "Start Pro Trial",
    buttonStyle: "bg-white hover:bg-gray-100 text-violet-600 font-bold",
  },
  {
    name: "Enterprise",
    desc: "For teams and businesses",
    price: 99,
    period: "Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    highlighted: false,
    buttonText: "Contact Sales",
    buttonStyle: "bg-violet-600 hover:bg-violet-700 text-white",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-400 text-sm">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col relative ${
                plan.highlighted
                  ? "bg-violet-600 text-white shadow-xl"
                  : "bg-white border border-gray-200 shadow-sm"
              }`}
            >
              {/* Most Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className={`text-xl font-black mb-1 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-5 ${plan.highlighted ? "text-violet-200" : "text-gray-400"}`}>
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-4xl font-black ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm ml-1 ${plan.highlighted ? "text-violet-200" : "text-gray-400"}`}>
                  /{plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <FiCheck className={plan.highlighted ? "text-violet-200" : "text-violet-500"} />
                    <span className={plan.highlighted ? "text-violet-100" : "text-gray-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className={`w-full py-3 rounded-full font-semibold text-sm transition-colors ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
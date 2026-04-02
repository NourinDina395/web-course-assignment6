import React from "react";
import { FiCheck } from "react-icons/fi";

const plans = [
  {
    name: "Starter",
    price: 9,
    period: "month",
    desc: "Perfect for freelancers getting started",
    features: ["3 tool access", "5GB cloud storage", "Email support", "Basic analytics", "1 user"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 29,
    period: "month",
    desc: "For professionals who need more power",
    features: ["15 tool access", "50GB cloud storage", "Priority support", "Advanced analytics", "5 users", "API access"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 99,
    period: "month",
    desc: "For teams and growing businesses",
    features: ["Unlimited tools", "500GB cloud storage", "Dedicated support", "Custom reports", "Unlimited users", "SLA guarantee", "SSO & security"],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-violet-600 font-bold text-sm uppercase tracking-widest">Pricing</span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">Simple, transparent pricing</h2>
          <p className="text-gray-500 mt-2">No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col ${
                plan.highlighted
                  ? "bg-violet-600 text-white shadow-xl shadow-violet-200 scale-105"
                  : "bg-white border border-gray-100 shadow-sm text-gray-900"
              }`}
            >
              <div className="mb-5">
                {plan.highlighted && (
                  <span className="bg-white text-violet-600 text-xs font-black px-3 py-1 rounded-full mb-3 inline-block">
                    Most Popular
                  </span>
                )}
                <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
                <p className={`text-sm mt-1 ${plan.highlighted ? "text-violet-200" : "text-gray-500"}`}>{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-black ${plan.highlighted ? "text-white" : "text-gray-900"}`}>${plan.price}</span>
                <span className={`text-sm ml-1 ${plan.highlighted ? "text-violet-200" : "text-gray-400"}`}>/{plan.period}</span>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <FiCheck className={plan.highlighted ? "text-violet-200" : "text-violet-500"} />
                    <span className={plan.highlighted ? "text-violet-100" : "text-gray-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn w-full rounded-full ${
                  plan.highlighted
                    ? "bg-white text-violet-600 hover:bg-violet-50"
                    : "bg-violet-600 text-white hover:bg-violet-700"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

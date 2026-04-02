import React from "react";

const stats = [
  { value: "50K+", label: "Active Users" },
  { value: "120+", label: "Digital Tools" },
  { value: "4.9★", label: "Avg. Rating" },
  { value: "99.9%", label: "Uptime SLA" },
];

const Stats = () => {
  return (
    <section className="bg-violet-600 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {stats.map((stat, i) => (
            <div key={i}>
              <p className="text-3xl font-extrabold">{stat.value}</p>
              <p className="text-violet-200 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: "$14.99",
    features: [
      "Free Setup",
      "Bandwidth Limit 10 GB",
      "20 User Connection",
      "Analytics Report",
      "Public API Access",
      "Plugins Integration",
      "Custom Content Management",
    ],
    buttonStyle: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  },
  {
    title: "Standard",
    price: "$49.99",
    features: [
      "Free Setup",
      "Bandwidth Limit 10 GB",
      "20 User Connection",
      "Analytics Report",
      "Public API Access",
      "Plugins Integration",
      "Custom Content Management",
    ],
    buttonStyle: "border border-blue-500 text-blue-500 hover:bg-blue-50",
  },
  {
    title: "Premium",
    price: "$89.99",
    features: [
      "Free Setup",
      "Bandwidth Limit 10 GB",
      "20 User Connection",
      "Analytics Report",
      "Public API Access",
      "Plugins Integration",
      "Custom Content Management",
    ],
    buttonStyle: "bg-blue-500 text-white hover:bg-blue-600",
  },
];

const PricingPage = () => {
  return (
    <div className="mx-10">
      <h2 className="text-3xl font-extrabold mb-8">Pricing</h2>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden
                            transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl "
          >
            {/* Light Texture Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('/bg-pattern.png')] bg-cover"></div>

            <h3 className="text-xl font-semibold mb-1 relative z-10">
              {plan.title}
            </h3>
            <p className="text-gray-500 text-sm mb-4 relative z-10">
              Monthly Charge
            </p>

            <h2 className="text-4xl font-extrabold text-blue-500 mb-6 relative z-10">
              {plan.price}
            </h2>

            {/* Divider */}
            <div className="w-full h-px bg-gray-200 mb-6 relative z-10"></div>

            {/* Features */}
            <ul className="flex flex-col gap-3 text-gray-600 relative z-10">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-8 px-6 py-3 rounded-full font-medium transition relative z-10 ${plan.buttonStyle}`}
            >
              Get Started
            </button>

            {/* Trial Link */}
            <p className="text-sm mt-3 text-gray-600 underline cursor-pointer relative z-10">
              Start Your 30 Day Free Trial
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;

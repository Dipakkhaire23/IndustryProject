import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic Move',
    price: '299',
    features: [
      'Local moving (up to 20 miles)',
      'Professional movers',
      'Basic packing materials',
      'Loading and unloading',
      'Standard insurance coverage'
    ]
  },
  {
    name: 'Premium Move',
    price: '499',
    features: [
      'Local moving (up to 50 miles)',
      'Professional movers',
      'Complete packing service',
      'Premium packing materials',
      'Loading and unloading',
      'Enhanced insurance coverage',
      'Furniture disassembly/assembly'
    ]
  },
  {
    name: 'Long Distance',
    price: '999',
    features: [
      'Long distance moving',
      'Professional movers',
      'Complete packing service',
      'Premium packing materials',
      'Loading and unloading',
      'Full insurance coverage',
      'Storage solutions',
      '24/7 support'
    ]
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Transparent Pricing</h2>
          <p className="text-lg text-gray-600">Choose the package that fits your needs</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div key={index} className="p-8 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-blue-600">₹{plan.price}</span>
                <span className="text-gray-600">/move</span>
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <Check className="w-5 h-5 mr-2 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full px-6 py-3 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
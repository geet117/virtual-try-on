'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic Plan',
    price: 9.99,
    features: ['100 Virtual Try-ons', 'Basic Analytics', 'Email Support'],
  },
  {
    name: 'Standard Plan',
    price: 19.99,
    features: ['500 Virtual Try-ons', 'Advanced Analytics', 'Priority Email Support', 'Custom Branding'],
  },
  {
    name: 'Premium Plan',
    price: 39.99,
    features: ['Unlimited Virtual Try-ons', 'Real-time Analytics', '24/7 Phone Support', 'API Access', 'Custom Integration'],
  },
  {
    name: 'Enterprise Plan',
    price: 99.99,
    features: ['Everything in Premium', 'Dedicated Account Manager', 'Custom Feature Development', 'On-site Training'],
  },
]

export function ComponentsPricing({ onSubscribe }) {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Subscription Plans
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your virtual try-on needs
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 ${
                selectedPlan === plan.name ? 'ring-2 ring-indigo-500' : ''
              }`}
            >
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                <p className="mt-4 text-sm text-gray-500">{plan.features[0]}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                  <span className="text-base font-medium text-gray-500">/mo</span>
                </p>
                <button
                  onClick={() => setSelectedPlan(plan.name)}
                  className={`mt-8 block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-md py-2 text-sm font-semibold hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                    selectedPlan === plan.name ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                  disabled={selectedPlan === plan.name}
                >
                  {selectedPlan === plan.name ? 'Selected' : 'Select Plan'}
                </button>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h4 className="text-sm font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h4>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {selectedPlan && (
          <div className="mt-8 text-center">
            <button
              onClick={() => onSubscribe(selectedPlan)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Subscribe to {selectedPlan}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
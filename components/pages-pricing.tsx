'use client'

import React from 'react'
import Header from './components-header'
import Footer from './components-footer'
import Pricing from './components-pricing'

export function PagesPricing() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Pricing Plans for Every Need</h1>
            <p className="text-xl sm:text-2xl mb-8">
              Choose the perfect plan for your virtual try-on experience. Click, Try, Buy!
            </p>
          </div>
        </section>

        {/* Pricing Component */}
        <Pricing onSubscribe={(plan) => console.log(`Subscribed to ${plan}`)} />
      </main>

      <Footer />
    </div>
  )
}
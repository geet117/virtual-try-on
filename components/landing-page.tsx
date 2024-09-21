"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Montserrat } from "next/font/google";
import { useState } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    setIsPlaying(true);
    // Add your video playing logic here
  };

  return (
    <div className={`flex flex-col min-h-screen ${montserrat.className}`}>
      <main className={montserrat.className}>
        <section
          className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center" // Updated to use gradient background
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
          {/* Overlay for text visibility */}
          <div className="container mx-auto flex items-center relative z-10">
            <div className="flex-shrink-0">
              {" "}
              {/* Image container */}
              <Image
                src="/hero-banner-2.png"
                alt="Hero Banner"
                width={800}
                height={600}
                className="object-cover h-full" // Ensure the image covers the height
              />
            </div>
            <div className="flex flex-col max-w-md ml-8">
              {" "}
              {/* Text container */}
              <h1 className="text-5xl sm:text-6xl font-medium mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                CLICK. TRY. BUY.
              </h1>
              <p className="text-3xl mb-4 font-medium">
                Increase Conversions, Reduce Returns
              </p>
              {/* <button
                onClick={playVideo}
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white border border-white border-opacity-30 hover:bg-opacity-30 text-lg px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isPlaying ? "Watch Again" : "See What's New"}
              </button> */}
            </div>
          </div>
        </section>

        <div className="bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
          <section id="features" className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-200">
                {" "}
                Why Use Virtual Try-On?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  "Better customer experience",
                  "Low returns",
                  "Increase sales",
                  "Reduce shipping costs",
                  "Increase business",
                  "Enhance brand loyalty",
                ].map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-indigo-700 dark:text-indigo-300">
                        {feature}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Experience the power of virtual try-ons and see your
                        business grow.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-200">
                What Our Users Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "Sarah Johnson",
                    role: "E-commerce Manager",
                    quote:
                      "Virtual Try has revolutionized our online store. Our return rates have dropped by 30%!",
                  },
                  {
                    name: "Mike Chen",
                    role: "Boutique Owner",
                    quote:
                      "The virtual try-on feature has significantly boosted our customer engagement and sales.",
                  },
                  {
                    name: "Emily Rodriguez",
                    role: "Fashion Retailer",
                    quote:
                      "Our customers love the virtual trial room. It's been a game-changer for our business.",
                  },
                  {
                    name: "Alex Thompson",
                    role: "Online Marketplace Director",
                    quote:
                      "Implementing Virtual Try has increased our conversion rates and customer satisfaction scores.",
                  },
                ].map((testimonial, index) => (
                  <Card
                    key={index}
                    className="bg-white dark:bg-gray-800 shadow-lg"
                  >
                    <CardContent className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-semibold text-indigo-600 dark:text-indigo-400">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h5 className="scroll-m-20 text-lg font-semibold tracking-tight mb-6 text-indigo-800 dark:text-indigo-200">
                Stay Updated with Our Latest Features
              </h5>
              <form className="max-w-md mx-auto">
                <div className="flex flex-col gap-4 items-center justify-center">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full shadow-md dark:shadow-gray-700 bg-white dark:bg-gray-800 h-8"
                  />
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-sm py-1.5 px-6 rounded-full h-8"
                  >
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </section>
        </div>

        {/* The component-level footer will be rendered here by the layout */}
      </main>
    </div>
  );
}

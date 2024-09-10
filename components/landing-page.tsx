'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image
              src="/virtual-try-logo.png"
              alt="Virtual Try Logo"
              width={50}
              height={50}
            />
            <span className="text-2xl font-bold text-purple-700">Virtual Try-On</span>
          </div>
          <nav>
            <ul className="flex space-x-6 items-center">
              <li><Link href="#features" className="text-gray-600 hover:text-purple-700">Features</Link></li>
              <li><Link href="#about" className="text-gray-600 hover:text-purple-700">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-600 hover:text-purple-700">Contact Us</Link></li>
              <li>
                <Link href="/login" className="text-purple-700 hover:text-purple-800 font-semibold">
                  Sign Up/Login
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="h-px bg-gray-200"></div>
      </header>

      <main>
        <section className="bg-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">Transform Your E-Commerce with Virtual Try-Ons</h1>
            <p className="text-3xl font-bold mb-8">CLICK. TRY. BUY.</p>
            <p className="text-xl mb-8">Boost sales and reduce returns with our cutting-edge virtual trial room technology</p>
            <Button className="bg-white text-purple-800 hover:bg-gray-100 hover:text-purple-900 text-lg px-8 py-3 rounded-full">
              Get Started
            </Button>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Use Virtual Try?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Better customer experience",
                "Low returns",
                "Increase sales",
                "Reduce shipping costs",
                "Increase business",
                "Enhance brand loyalty"
              ].map((feature, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                    <p className="text-gray-600">Experience the power of virtual try-ons and see your business grow.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "E-commerce Manager",
                  quote: "Virtual Try has revolutionized our online store. Our return rates have dropped by 30%!"
                },
                {
                  name: "Mike Chen",
                  role: "Boutique Owner",
                  quote: "The virtual try-on feature has significantly boosted our customer engagement and sales."
                },
                {
                  name: "Emily Rodriguez",
                  role: "Fashion Retailer",
                  quote: "Our customers love the virtual trial room. It's been a game-changer for our business."
                },
                {
                  name: "Alex Thompson",
                  role: "Online Marketplace Director",
                  quote: "Implementing Virtual Try has increased our conversion rates and customer satisfaction scores."
                }
              ].map((testimonial, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-purple-100 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Stay Updated with Our Latest Features</h2>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="bg-purple-800 text-white hover:bg-purple-900">
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Virtual Try</h3>
              <p className="text-gray-400">Revolutionizing e-commerce with cutting-edge virtual try-on technology.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Virtual Try. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
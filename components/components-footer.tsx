'use client'

import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export function ComponentsFooter() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Virtual Try-On</h2>
            <p className="text-gray-300">
              Revolutionizing e-commerce with cutting-edge virtual try-on technology.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Solutions</h2>
          <ul className="inline-grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <li><Link href="#" className="text-gray-300 hover:text-white">Virtual Try-On</Link></li>
            <li><Link href="#" className="text-gray-300 hover:text-white">AR Catalog</Link></li>
            <li><Link href="#" className="text-gray-300 hover:text-white">3D Modeling</Link></li>
            <li><Link href="#" className="text-gray-300 hover:text-white">Analytics</Link></li>
          </ul>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Virtual Try. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ImageIcon } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function VirtualTryPage() {
  const [userPhoto, setUserPhoto] = useState<string | null>(null)
  const [garmentPhoto, setGarmentPhoto] = useState<string | null>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, setPhoto: (value: string | null) => void) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/virtual-try-logo.png" 
              alt="Virtual Try Logo" 
              width={40} 
              height={40} 
              className="mr-2"
            />
            <h1 className="text-2xl font-bold text-purple-600">Virtual Try</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link>
            <Link href="#about" className="text-gray-600 hover:text-gray-900">About Us</Link>
            <Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            <Button className="bg-purple-600 text-white hover:bg-purple-700">
              Logout
            </Button>
          </nav>
          <Button className="md:hidden">Menu</Button>
        </div>
        <div className="h-1 bg-purple-600"></div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Experience Fashion Like Never Before</h2>
            <p className="text-xl mb-4">
              Upload your photo, choose a garment, and see how it looks on you instantly. 
              Virtual Try brings the fitting room to your screen!
            </p>
            <p className="text-2xl font-bold mb-8">CLICK. TRY. BUY.</p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3">
              Get Started
            </Button>
          </div>
        </section>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <Label htmlFor="user-photo" className="block text-sm font-medium text-gray-700 mb-2">
                Upload Your Photo
              </Label>
              <Input
                id="user-photo"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, setUserPhoto)}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-purple-50 file:text-purple-700
                  hover:file:bg-purple-100"
              />
              <div className="mt-4 rounded-lg overflow-hidden aspect-square bg-gray-200 flex flex-col items-center justify-center">
                {userPhoto ? (
                  <img src={userPhoto} alt="User preview" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                    <p className="text-gray-500 text-sm">Your Photo</p>
                  </>
                )}
              </div>
            </div>
            <div>
              <Label htmlFor="garment-photo" className="block text-sm font-medium text-gray-700 mb-2">
                Upload the Garment
              </Label>
              <Input
                id="garment-photo"
                type="file"
                accept="image/*"
                onChange={(e) => handleFileUpload(e, setGarmentPhoto)}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-purple-50 file:text-purple-700
                  hover:file:bg-purple-100"
              />
              <div className="mt-4 rounded-lg overflow-hidden aspect-square bg-gray-200 flex flex-col items-center justify-center">
                {garmentPhoto ? (
                  <img src={garmentPhoto} alt="Garment preview" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                    <p className="text-gray-500 text-sm">Garment Photo</p>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <Button className="bg-purple-600 text-white hover:bg-purple-700 text-lg px-8 py-3">
              Try On
            </Button>
          </div>
          
          <div className="bg-gray-200 rounded-lg aspect-video flex items-center justify-center">
            <p className="text-gray-500 text-lg">Your virtual try-on will appear here</p>
          </div>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger>How does Virtual Try work?</AccordionTrigger>
              <AccordionContent>
                Virtual Try uses advanced AI technology to overlay garments onto your photo, giving you a realistic preview of how the clothing will look on you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Is my personal data safe?</AccordionTrigger>
              <AccordionContent>
                Yes, we take data protection seriously. Your photos are processed securely and are not stored after the try-on session unless you explicitly save them.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I try on any garment?</AccordionTrigger>
              <AccordionContent>
                You can try on any garment available in our partner stores' catalogs. We're constantly expanding our selection to offer more options.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How accurate are the try-ons?</AccordionTrigger>
              <AccordionContent>
                Our AI model provides a highly accurate representation of how garments will look on you, considering factors like size, fit, and drape. However, slight variations may occur in real life.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">About Virtual Try</h3>
              <p className="text-sm">
                We're revolutionizing e-commerce with cutting-edge virtual try-on technology, helping businesses boost sales and customer satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Protection</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm">© 2023 Virtual Try. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
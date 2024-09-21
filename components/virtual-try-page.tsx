"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function VirtualTryPage() {
  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [garmentPhoto, setGarmentPhoto] = useState<string | null>(null);
  const [resultPhoto, setResultPhoto] = useState<string | null>(null);

  const handleFileUpload = (
    event: React.ChangeEvent<HTMLInputElement>,
    setPhoto: (value: string | null) => void
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTryOn = async () => {
    if (!userPhoto || !garmentPhoto) {
      alert("Please upload both a user photo and a garment photo");
      return;
    }

    try {
      const response = await fetch("/api/virtual-try", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userPhoto: userPhoto,
          garmentPhoto: garmentPhoto,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorText}`
        );
      }

      const data = await response.json();
      console.log(data);
      setResultPhoto(data.output);
    } catch (error) {
      console.error("Error:", error);
      alert(`An error occurred: ${error.message}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main>
        <section className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-500 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Experience Fashion Instantly
            </h2>
            <p className="text-xl mb-4">
              Upload your photo, pick a garment, and see it on you. Virtual Try
              brings the fitting room to your screen!
            </p>
            <p className="text-2xl font-bold mb-8">CLICK. TRY. BUY.</p>
            <Button className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white border border-white border-opacity-30 hover:bg-opacity-30 text-lg px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Get Started
            </Button>
          </div>
        </section>

        <div className="bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900">
          <section id="features" className="py-12">
            {" "}
            {/* Changed from py-20 to py-12 */}
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-8 font-montserrat">
                {" "}
                {/* Changed mb-12 to mb-8 */}
                Your Virtual Trial Room?
              </h2>
              <div className="flex justify-center gap-8 mb-8">
                {/* Upload Your Photo */}
                <div className="w-[256px] flex flex-col">
                  <Label
                    htmlFor="user-photo"
                    className="block text-sm font-medium text-gray-700 mb-2 text-center"
                  >
                    Upload Your Photo
                  </Label>
                  <div className="bg-white p-2 rounded-md mb-2 shadow-md">
                    <Input
                      id="user-photo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, setUserPhoto)}
                      className="block w-full text-sm text-gray-500
                      ffile:mr-4 file:py-1 file:px-2
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-gradient-to-r file:from-purple-600 file:to-indigo-600 file:text-white
hover:file:bg-gradient-to-r hover:file:from-purple-700 hover:file:to-indigo-700"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden w-[256px] h-[320px] bg-white flex flex-col items-center justify-center shadow-lg">
                    {userPhoto ? (
                      <img
                        src={userPhoto}
                        alt="User preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                        <p className="text-gray-500 text-sm">Your Photo</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Upload the Garment */}
                <div className="w-[256px] flex flex-col">
                  <Label
                    htmlFor="garment-photo"
                    className="block text-sm font-medium text-gray-700 mb-2 text-center"
                  >
                    Upload the Garment
                  </Label>
                  <div className="bg-white p-2 rounded-md mb-2 shadow-md">
                    <Input
                      id="garment-photo"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileUpload(e, setGarmentPhoto)}
                      className="block w-full text-sm text-gray-500
                   file:mr-4 file:py-1 file:px-2
file:rounded-full file:border-0
file:text-sm file:font-semibold
file:bg-gradient-to-r file:from-purple-600 file:to-indigo-600 file:text-white
hover:file:bg-gradient-to-r hover:file:from-purple-700 hover:file:to-indigo-700"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden w-[256px] h-[320px] bg-white flex flex-col items-center justify-center shadow-lg">
                    {garmentPhoto ? (
                      <img
                        src={garmentPhoto}
                        alt="Garment preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                        <p className="text-gray-500 text-sm">Garment Photo</p>
                      </>
                    )}
                  </div>
                </div>

                {/* Your Garment Preview */}
                <div className="w-[256px] flex flex-col">
                  <Label className="block text-sm font-medium text-gray-700 mb-2 text-center">
                    Your Garment Preview
                  </Label>
                  <div className="bg-white p-2 rounded-md mb-2 shadow-md">
                    <Label className="block text-sm font-medium text-gray-700 text-center">
                      Your New Look
                    </Label>
                  </div>
                  <div className="rounded-lg overflow-hidden w-[256px] h-[320px] bg-white flex flex-col items-center justify-center shadow-lg">
                    {resultPhoto ? (
                      <img
                        src={resultPhoto}
                        alt="Virtual try-on result"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <>
                        <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                        <p className="text-gray-500 text-sm">
                          Your garment preview
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-700 hover:to-indigo-700 text-lg px-8 py-3 rounded-full transition-all duration-300"
                  onClick={handleTryOn}
                >
                  Try On
                </Button>
              </div>
            </div>
            <div className="container mx-auto px-4"></div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 mt-8">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl text-gray-700 mx-auto"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>How does Virtual Try work?</AccordionTrigger>
                <AccordionContent>
                  Virtual Try uses advanced AI technology to overlay garments
                  onto your photo, giving you a realistic preview of how the
                  clothing will look on you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is my personal data safe?</AccordionTrigger>
                <AccordionContent>
                  Yes, we take data protection seriously. Your photos are
                  processed securely and are not stored after the try-on session
                  unless you explicitly save them.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I try on any garment?</AccordionTrigger>
                <AccordionContent>
                  You can try on any garment available in our partner stores'
                  catalogs. We're constantly expanding our selection to offer
                  more options.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>
                  How accurate are the try-ons?
                </AccordionTrigger>
                <AccordionContent>
                  Our AI model provides a highly accurate representation of how
                  garments will look on you, considering factors like size, fit,
                  and drape. However, slight variations may occur in real life.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        {/* The component-level footer will be rendered here by the layout */}
      </main>
    </div>
  );
}

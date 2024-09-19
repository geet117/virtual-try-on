"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ComponentsHeader } from "./components-header";
import { ComponentsFooter } from "./components-footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

const modelPhotos = [
  { src: "/model-1.jpg", alt: "Model 1" },
  { src: "/model-2.jpg", alt: "Model 2" },
  { src: "/model-3.jpg", alt: "Model 3" },
  { src: "/model-4.jpg", alt: "Model 4" },
  { src: "/model-5.jpg", alt: "Model 5" },
  { src: "/model-6.jpg", alt: "Model 6" },
];

const garmentPhotos = [
  { src: "/garment-1.jpg", alt: "Garment 1" },
  { src: "/garment-2.jpg", alt: "Garment 2" },
  { src: "/garment-3.jpg", alt: "Garment 3" },
  { src: "/garment-4.jpg", alt: "Garment 4" },
  { src: "/garment-5.jpg", alt: "Garment 5" },
  { src: "/garment-6.jpg", alt: "Garment 6" },
];

export function Vto() {
  console.log("Vto component rendering");

  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [garmentPhoto, setGarmentPhoto] = useState<string | null>(null);
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);

  const handleUserPhotoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGarmentPhotoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGarmentPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTryOn = () => {
    // This is a placeholder function for the try-on logic
    // In a real application, you would integrate with a backend service or AI model here
    console.log("Trying on the garment...");
    // For now, we'll just set a placeholder image as the preview
    setPreviewPhoto("/preview-placeholder.jpg");
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${montserrat.className} font-light`}
    >
      {/* Header Component */}
      <ComponentsHeader />

      <main className={montserrat.className}>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-500 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light mb-4">
              CLICK. TRY. BUY.
            </h1>
            <p className="text-xl sm:text-2xl mb-8 font-light">
              Drive sales and lower returns with virtual try-on.
            </p>
          </div>
        </section>

        {/* Image Upload Section */}
        <section className="bg-gradient-to-b from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                <h2 className="text-purple-800 text-2xl font-light mb-4">
                  Upload Your Photo
                </h2>
                <div className="bg-purple-200 rounded-lg p-4 h-64 flex flex-col items-center justify-center">
                  {userPhoto ? (
                    <Image
                      src={userPhoto}
                      alt="User"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <div className="text-purple-800 font-light">
                      No image uploaded
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUserPhotoUpload}
                  className="hidden"
                  id="user-photo-upload"
                />
                <label
                  htmlFor="user-photo-upload"
                  className="mt-4 block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-purple-700 transition duration-300 font-light"
                >
                  Upload Photo
                </label>
              </div>

              <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                <h2 className="text-purple-800 text-2xl font-light mb-4">
                  Upload the Garment
                </h2>
                <div className="bg-purple-200 rounded-lg p-4 h-64 flex flex-col items-center justify-center">
                  {garmentPhoto ? (
                    <Image
                      src={garmentPhoto}
                      alt="Garment"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <div className="text-purple-800 font-light">
                      No image uploaded
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleGarmentPhotoUpload}
                  className="hidden"
                  id="garment-photo-upload"
                />
                <label
                  htmlFor="garment-photo-upload"
                  className="mt-4 block w-full text-center bg-purple-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-purple-700 transition duration-300 font-light"
                >
                  Upload Photo
                </label>
              </div>

              <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                <h2 className="text-purple-800 text-2xl font-light mb-4">
                  Your Garment Preview
                </h2>
                <div className="bg-purple-200 rounded-lg p-4 h-64 flex flex-col items-center justify-center">
                  {previewPhoto ? (
                    <Image
                      src={previewPhoto}
                      alt="Preview"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <div className="text-purple-800 font-light">
                      No preview available
                    </div>
                  )}
                </div>
                <button
                  onClick={handleTryOn}
                  className="mt-4 block w-full bg-purple-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-purple-700 transition duration-300 font-light"
                  disabled={!userPhoto || !garmentPhoto}
                >
                  Try On
                </button>
              </div>
            </div>

            {/* Galleries Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                <h2 className="text-purple-800 text-2xl font-light mb-4">
                  Model Photos
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={`model-${num}`}
                      className="bg-purple-200 rounded-lg p-2 cursor-pointer hover:bg-purple-300 transition duration-300"
                      onClick={() => setUserPhoto(`/model-${num}.jpg`)}
                    >
                      <Image
                        src={`/model-${num}.jpg`}
                        alt={`Model ${num}`}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                <h2 className="text-purple-800 text-2xl font-light mb-4">
                  Garment Photos
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={`garment-${num}`}
                      className="bg-white rounded-lg p-2 cursor-pointer hover:bg-purple-100 transition duration-300"
                      onClick={() => setGarmentPhoto(`/garment-${num}.jpg`)}
                    >
                      <Image
                        src={`/garment-${num}.jpg`}
                        alt={`Garment ${num}`}
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Component */}
      </main>
    </div>
  );
}

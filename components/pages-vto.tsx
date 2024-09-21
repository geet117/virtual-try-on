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
  // { src: "/model-3.jpg", alt: "Model 3" },
  // { src: "/model-4.jpg", alt: "Model 4" },
  // { src: "/model-5.jpg", alt: "Model 5" },
  // { src: "/model-6.jpg", alt: "Model 6" },
];

const garmentPhotos = [
  { src: "/garment-1.jpg", alt: "Garment 1" },
  { src: "/garment-2.jpg", alt: "Garment 2" },
  { src: "/garment-3.jpg", alt: "Garment 3" },
  { src: "/garment-4.jpg", alt: "Garment 4" },
  // { src: "/garment-5.jpg", alt: "Garment 5" },
  // { src: "/garment-6.jpg", alt: "Garment 6" },
];

const previewPhotos = [
  [
    "preview-11.jpg",
    "preview-12.jpg",
    // "preview-13.jpg",
    // "preview-14.jpg",
    // "preview-15.jpg",
    // "preview-16.jpg",
  ],
  [
    // "preview-21.jpg",
    "preview-22.jpg",
    "preview-23.jpg",
    "preview-24.jpg",
    // "preview-25.jpg",
    // "preview-26.jpg",
  ],
  // [
  //   "preview-31.jpg",
  //   "preview-32.jpg",
  //   "preview-33.jpg",
  //   "preview-34.jpg",
  //   "preview-35.jpg",
  //   "preview-36.jpg",
  // ],
  // [
  //   "preview-41.jpg",
  //   "preview-42.jpg",
  //   "preview-43.jpg",
  //   "preview-44.jpg",
  //   "preview-45.jpg",
  //   "preview-46.jpg",
  // ],
  // [
  //   "preview-51.jpg",
  //   "preview-52.jpg",
  //   "preview-53.jpg",
  //   "preview-54.jpg",
  //   "preview-55.jpg",
  //   "preview-56.jpg",
  // ],
  // [
  //   "preview-61.jpg",
  //   "preview-62.jpg",
  //   "preview-63.jpg",
  //   "preview-64.jpg",
  //   "preview-65.jpg",
  //   "preview-66.jpg",
  // ],
];

export function Vto() {
  console.log("Vto component rendering");

  const [userPhoto, setUserPhoto] = useState<string | null>(null);
  const [garmentPhoto, setGarmentPhoto] = useState<string | null>(null);
  const [previewPhoto, setPreviewPhoto] = useState<string | null>(null);
  const [selectedModelIndex, setSelectedModelIndex] = useState<number | null>(
    null
  );
  const [selectedGarmentIndex, setSelectedGarmentIndex] = useState<
    number | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTryOnMe = () => {
    if (selectedModelIndex !== null && selectedGarmentIndex !== null) {
      setIsLoading(true); // Start loading

      setTimeout(() => {
        let previewSrc;

        // Check for specific combinations
        if (selectedModelIndex === 0) {
          // Model-1
          if (selectedGarmentIndex === 0) {
            // Garment-1
            previewSrc = "preview-11.jpg"; // Render preview-11.jpg
          } else if (selectedGarmentIndex === 1) {
            // Garment-2
            previewSrc = "preview-12.jpg"; // Render preview-12.jpg
          }
        } else if (selectedModelIndex === 1) {
          // Model-2
          if (selectedGarmentIndex === 2) {
            // Garment-3
            previewSrc = "preview-23.jpg"; // Render preview-23.jpg
          } else if (selectedGarmentIndex === 3) {
            // Garment-4
            previewSrc = "preview-24.jpg"; // Render preview-24.jpg
          }
        }

        // If no specific combination is matched, you can set a default or handle it accordingly
        if (!previewSrc) {
          console.log("No valid combination found");
          previewSrc = "/preview-placeholder.jpg"; // Default placeholder
        }

        setPreviewPhoto(`/${previewSrc}`);
        setIsLoading(false); // Stop loading after 5 seconds
      }, 5000); // 5-second delay
    } else {
      console.log("Please select both a model and a garment");
      setPreviewPhoto("/preview-placeholder.jpg");
    }
  };

  const handleUserPhotoUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserPhoto(reader.result as string);
        const index = modelPhotos.findIndex(
          (photo) => photo.src === reader.result
        );
        setSelectedModelIndex(index !== -1 ? index : null);
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
        const index = garmentPhotos.findIndex(
          (photo) => photo.src === reader.result
        );
        setSelectedGarmentIndex(index !== -1 ? index : null);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${montserrat.className} font-light`}
    >
      {/* Header Component */}
      <ComponentsHeader />

      <main className={montserrat.className}>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-200 to-blue-200 relative flex items-center">
          {" "}
          {/* Light gradient from gray to light blue */}
          <div className="absolute inset-0 bg-white opacity-80"></div>{" "}
          {/* Overlay for text visibility */}
          <div className="container mx-auto flex flex-row items-center relative z-10">
            {" "}
            {/* Flex row for side-by-side layout */}
            <div className="flex flex-col items-start justify-center w-1/2 p-4">
              {" "}
              {/* Text container */}
              <h1
                className={`text-4xl sm:text-5xl font-medium mb-2 ${montserrat.className} text-3xl font-bold mb-12 text-indigo-800 dark:text-indigo-200`}
              >
                {" "}
                {/* Changed to a soft cream color */}
                CLICK. TRY. BUY.
              </h1>
              <p
                className={`text-3xl mb-4 font-medium ${montserrat.className} text-indigo-800 dark:text-indigo`}
              >
                {" "}
                {/* Changed to a lighter cream color */}
                Enhance Customer Exeperience, Increase Sales
              </p>
              {/* 
              <button
                onClick={playVideo} // Ensure playVideo is defined if uncommented
                className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white border border-white border-opacity-30 hover:bg-opacity-30 text-lg px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isPlaying ? "Watch Again" : "See What's New"}
              </button>
              */}
            </div>
            <div className="w-1/2 flex justify-center">
              {" "}
              {/* Image container */}
              <Image
                src="/hero-banner-1.png" // Ensure this image is in the public folder
                alt="Hero Banner 1"
                width={600} // Set width to 600
                height={450} // Set height to 450
                className="rounded-lg object-contain" // Ensure the entire image is visible
              />
            </div>
          </div>
        </section>

        {/* Image Upload Section */}
        <section className="py-20 bg-gradient-to-b from-blue-100 to-purple-200">
          {" "}
          {/* Very light gradient from blue to light purple */}
          <div className="container mx-auto">
            <h2
              className={`text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-200`}
            >
              Let's Try It
            </h2>{" "}
            {/* Updated section heading */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-4 shadow-lg w-3/4 mx-auto">
                <h2 className="text-purple-800 text-xl font-light mb-4 justify-centre">
                  Upload Your Photo
                </h2>
                <div className="flex flex-col items-center justify-center h-80 w-full mx-auto">
                  {userPhoto ? (
                    <Image
                      src={userPhoto}
                      alt="User"
                      width={800}
                      height={800}
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
                  className="mt-4 block w-full text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gradient-to-l transition duration-300 font-light"
                >
                  Upload Photo
                </label>
              </div>

              <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-4 shadow-lg w-3/4 mx-auto">
                <h2 className="text-purple-800 text-xl font-light mb-4">
                  Upload the Garment
                </h2>
                <div className="flex flex-col items-center justify-center h-80 w-full mx-auto">
                  {garmentPhoto ? (
                    <Image
                      src={garmentPhoto}
                      alt="Garment"
                      width={800}
                      height={800}
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
                  className="mt-4 block w-full text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gradient-to-l transition duration-300 font-light"
                >
                  Upload Photo
                </label>
              </div>

              <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg w-3/4 mx-auto">
                <h2 className="text-purple-800 text-xl font-light mb-4">
                  Your Garment Preview
                </h2>
                <div className="flex flex-col items-center justify-center h-80 w-full mx-auto">
                  {isLoading ? (
                    <div className="text-purple-800 font-light">
                      Processing...
                    </div>
                  ) : previewPhoto ? (
                    <Image
                      src={previewPhoto}
                      alt="Preview"
                      width={800}
                      height={800}
                      className="rounded-lg object-cover"
                    />
                  ) : (
                    <div className="text-purple-800 font-light">
                      No preview available
                    </div>
                  )}
                </div>
                <button
                  onClick={handleTryOnMe}
                  className="mt-4 block w-full bg-purple-600 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gradient-to-l transition duration-300 font-light"
                  disabled={
                    selectedModelIndex === null || selectedGarmentIndex === null
                  }
                >
                  Try On Me
                </button>
              </div>
            </div>
            {/* Galleries Section */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-xl p-6 shadow-lg">
                <h2 className="text-purple-800 text-2xl font-light mb-4">
                  User Photos
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {modelPhotos.slice(0, 2).map((photo, index) => (
                    <div
                      key={`model-${index}`}
                      className="bg-purple-200 rounded-lg p-2 cursor-pointer hover:bg-purple-300 transition duration-300"
                      onClick={() => {
                        setUserPhoto(photo.src);
                        setSelectedModelIndex(index);
                      }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={1080}
                        height={1080}
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
                <div className="grid grid-cols-2 gap-4">
                  {garmentPhotos.slice(0, 4).map((photo, index) => (
                    <div
                      key={`garment-${index}`}
                      className="bg-white rounded-lg p-2 cursor-pointer hover:bg-purple-100 transition duration-300"
                      onClick={() => {
                        setGarmentPhoto(photo.src);
                        setSelectedGarmentIndex(index);
                      }}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={1080}
                        height={1080}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Component - Ensure this is only included once */}
        <ComponentsFooter />
      </main>
    </div>
  );
}

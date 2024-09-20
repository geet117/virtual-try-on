import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function AboutUs() {
  const teamMembers = ["Geetha", "Akhil", "Devandra"];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-500 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white-800">
            We're on a mission to elevate online shopping with augmented
            reality.
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            CLICK. TRY. BUY.
          </h1>

          <button className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm text-white border border-white border-opacity-30 hover:bg-opacity-30 text-lg px-8 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-200">
            Our Story
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2024, Virtual TryOn emerged from a simple idea: what if
            you could try on clothes without leaving your home? Our team of
            passionate developers and fashion enthusiasts came together to
            create a solution that bridges the gap between online shopping and
            the in-store experience.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Using state-of-the-art augmented reality and machine learning
            algorithms, we've developed a platform that allows shoppers to
            virtually try on clothes, accessories, and even makeup with
            astonishing accuracy. Our technology not only enhances the shopping
            experience but also helps reduce returns and increases customer
            satisfaction.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-200">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-indigo-800 dark:text-indigo-200 mb-4">
                Augmented Reality
              </h3>
              <p className="text-gray-600">
                Cutting-edge AR technology for realistic virtual try-ons
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-indigo-800 dark:text-indigo-200  ">
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <p className="text-gray-600">
                Advanced algorithms for accurate size and fit recommendations
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-indigo-800 dark:text-indigo-200">
              <h3 className="text-xl font-semibold mb-4">3D Modeling</h3>
              <p className="text-gray-600">
                High-fidelity 3D models of clothing and accessories
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 text-indigo-800 dark:text-indigo-200">
              <h3 className="text-xl font-semibold mb-4">UX Design</h3>
              <p className="text-gray-600">
                Intuitive and seamless user experiences across devices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800 dark:text-indigo-200">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-8">
            {teamMembers.map((name, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl sm:text-3xl font-bold">
                  {name[0]}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Features", "Pricing", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Terms of Service", "Privacy Policy", "Cookie Policy"].map(
                (item, index) => (
                  <li key={index}>
                    <Link
                      href="#"
                      className="hover:text-gray-300 transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-white hover:text-gray-300 transition duration-300"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 Virtual Try. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

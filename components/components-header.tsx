"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";
import { Session } from "@supabase/supabase-js";
import { Button } from "./ui/button";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function ComponentsHeader() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      setIsLoggedIn(!!data.session);
      setSession(data.session);
    };
    checkSession();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
      setSession(session);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLogoutClick = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogoutConfirm = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setShowLogoutConfirmation(false);
  };

  const handleLogoutCancel = () => {
    setShowLogoutConfirmation(false);
  };

  const handleLogin = () => {
    // Implement your login logic here
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setShowLogoutConfirmation(false);
  };

  const gradientButtonClasses =
    "bg-gradient-to-r from-purple-600 to-indigo-600 to-blue-600 hover:from-purple-700 hover:to-indigo-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300";

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center no-underline">
              {" "}
              {/* Link to the landing page */}
              <Image
                src="/virtual-try-logo.png" // Update this path to match your logo file location
                alt="Virtual Try Logo"
                width={50}
                height={50}
                priority
              />
              <span className="text-2xl font-bold text-purple-600 font-montserrat no-underline">
                Virtual Try-On
              </span>
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/vto" className="text-gray-600 hover:text-gray-900">
              Product
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
            <Link
              href="/about-us"
              className="text-gray-600 hover:text-gray-900"
            >
              {" "}
              {/* Updated About Us link */}
              About Us
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact Us
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/my-account">
                  <Button className={gradientButtonClasses}>My Account</Button>
                </Link>
                <Button
                  className={gradientButtonClasses}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button className={gradientButtonClasses}>Login</Button>
                </Link>
                <Link href="/signup">
                  <Button className={gradientButtonClasses}>Sign Up</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {showLogoutConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h3 className="text-lg font-semibold mb-4">Confirm Logout</h3>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleLogoutCancel}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 text-base"
              >
                Cancel
              </button>
              <button
                onClick={handleLogoutConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-base"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
  {
    session?.user ? (
      <li>
        <button
          onClick={() => setShowLogoutConfirmation(true)}
          className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-base"
        >
          Logout
        </button>
      </li>
    ) : (
      <>
        <li>
          <Link
            href="/signup"
            className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-base"
          >
            Sign Up
          </Link>
        </li>
        <li>
          <Link
            href="/login"
            className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity text-base"
          >
            Login
          </Link>
        </li>
      </>
    );
  }
}

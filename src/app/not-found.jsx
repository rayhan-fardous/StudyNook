"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { FaArrowLeft, FaCompass } from "react-icons/fa";

export default function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-size-[20px_20px] sm:bg-size-[24px_24px]" />

      <div className="absolute top-0 left-0 h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-48 w-48 sm:h-64 sm:w-64 lg:h-80 lg:w-80 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="flex items-center justify-center h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-cyan-500/10 border border-cyan-500/20 shadow-lg">
            <FaCompass className="text-cyan-500 text-4xl sm:text-5xl" />
          </div>
        </div>

        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-extrabold text-slate-900 dark:text-white leading-none">
          404
        </h1>

        <h2 className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Oops! The page you're looking for doesn't exist or may have been
          moved. Let’s get you back to your perfect study space.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-cyan-500/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              <Button
                color="primary"
                radius="full"
                size="lg"
                className="relative px-6 sm:px-8 py-5 text-sm sm:text-base font-semibold shadow-lg transition-all duration-300 group-hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <FaArrowLeft className="text-xs sm:text-sm" />
                  Back To Home
                </span>
              </Button>
            </div>
          </Link>

          <Link href="/rooms">
            <Button
              variant="bordered"
              radius="full"
              size="lg"
              className="border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300 px-6 sm:px-8 py-5 text-sm sm:text-base"
            >
              Explore Rooms
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

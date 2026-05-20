"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { FaBookReader, FaArrowRight } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="absolute inset-0 opacity-10 dark:opacity-10 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-size-[20px_20px] sm:bg-size-[24px_24px]" />

      <div className="absolute top-0 left-0 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72 bg-cyan-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72 bg-indigo-500/20 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 text-center">
        <div className="flex justify-center mb-5 sm:mb-6">
          <div className="p-4 sm:p-5 rounded-full bg-slate-200/60 dark:bg-white/10 border border-slate-300 dark:border-white/10 shadow-lg">
            <FaBookReader className="text-4xl sm:text-5xl text-cyan-500" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          Find Your Perfect <br></br>
          <span className="text-cyan-500">Study Room</span>
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 max-w-xl lg:max-w-2xl mx-auto leading-relaxed">
          Browse and book quiet, private study rooms in your library. List your
          own room and earn.
        </p>

        <div className="mt-8 sm:mt-10 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-cyan-500/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

            <Link href="/rooms">
              <Button
                color="primary"
                size="lg"
                radius="full"
                className="relative font-semibold px-6 sm:px-8 py-5 text-sm sm:text-base shadow-lg transition-all duration-300 group-hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  Explore Rooms
                  <FaArrowRight className="text-xs sm:text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

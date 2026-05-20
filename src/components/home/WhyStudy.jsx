"use client";

import { FiCalendar, FiShield, FiSliders } from "react-icons/fi";

const WhyStudy = () => {
  const cards = [
    {
      icon: (
        <FiCalendar className="text-cyan-500 text-2xl sm:text-3xl" />
      ),
      title: "Easy Booking",
      description:
        "Pick a date, choose an hour, and reserve your ideal study space in seconds.",
    },
    {
      icon: (
        <FiShield className="text-cyan-500 text-2xl sm:text-3xl" />
      ),
      title: "Conflict-Free Scheduling",
      description:
        "Smart booking protection prevents overlaps so your reserved room is always available.",
    },
    {
      icon: (
        <FiSliders className="text-cyan-500 text-2xl sm:text-3xl" />
      ),
      title: "Manage Your Listings",
      description:
        "List your own study room, set pricing, and manage reservations from your dashboard.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 py-16 sm:py-20 lg:py-28 transition-colors duration-300">
      
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-size-[20px_20px] sm:bg-size-[24px_24px]" />

      <div className="absolute top-0 left-0 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-40 w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72 bg-indigo-500/10 blur-3xl rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 dark:text-white">
            Why{" "}
            <span className="text-cyan-500">
              StudyNook?
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
            Built for focused learners who need quiet, flexible, and reliable
            study environments anytime.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/5 transition duration-300" />

              <div className="relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                {card.icon}
              </div>

              <div className="relative mt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="relative mt-6 h-1 w-16 rounded-full bg-cyan-500/70 group-hover:w-24 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyStudy;
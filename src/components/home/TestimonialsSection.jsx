"use client";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ariana Rahman",
      role: "University Student",
      review:
        "StudyNook helped me find a quiet place during exam season. The booking process was incredibly smooth and fast.",
    },
    {
      name: "Nafis Ahmed",
      role: "Remote Learner",
      review:
        "I love how easy it is to reserve rooms nearby. The environment is always peaceful and productive.",
    },
    {
      name: "Sadia Karim",
      role: "Medical Student",
      review:
        "The best platform for focused studying. Clean design, simple booking, and reliable room availability.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-16 sm:py-20 lg:py-28 transition-colors duration-300">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-48 w-48 sm:h-64 sm:w-64 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 h-48 w-48 sm:h-64 sm:w-64 bg-indigo-500/10 blur-3xl rounded-full" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,currentColor_1px,transparent_1px)] bg-size-[20px_20px] sm:bg-size-[24px_24px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            What Students{" "}
            <span className="text-cyan-500">Say</span>
          </h2>

          <p className="mt-5 text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 leading-relaxed">
            Trusted by students and learners who value focus, comfort,
            and productivity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl p-6 sm:p-8 shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-2 transition-all duration-300"
            >
              
              {/* Quote Icon */}
              <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
                <FaQuoteLeft className="text-cyan-500 text-xl" />
              </div>

              {/* Review */}
              <p className="mt-6 text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed">
                "{item.review}"
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mt-5 text-cyan-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* User Info */}
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-gray-400">
                  {item.role}
                </p>
              </div>

              {/* Hover Accent */}
              <div className="mt-6 h-1 w-16 rounded-full bg-cyan-500/70 group-hover:w-24 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
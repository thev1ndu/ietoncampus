"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your summer school event date here
  const eventDate = new Date("2025-08-15T09:00:00").getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  return (
    <section
      className="relative lg:h-[65vh] flex flex-col justify-center bg-gradient-to-b overflow-hidden mb-16"
      id="home"
      ref={ref}
    >
      <div className="relative z-[1] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Mobile Layout - Stacked vertically */}
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Welcome section - Full width on mobile, left side on desktop */}
          <div className="w-full lg:flex-[2] text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
                Welcome to{" "}
                <span className="bg-gradient-to-b from-black to-blue-600 dark:from-white dark:to-blue-600 bg-clip-text text-transparent">
                  IET on Campus
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0">
                Empowering the next generation of engineers and technologists
                through innovation, collaboration, and cutting-edge learning
                experiences.
              </p>
            </motion.div>

            {/* Glassmorphism Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start"
            >
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10 text-gray-800 dark:text-white font-semibold text-sm sm:text-base">
                  Join Our Community
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                <span className="relative z-10 text-gray-800 dark:text-white font-semibold text-sm sm:text-base">
                  Explore Events
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>
          </div>

          {/* Countdown section - Full width on mobile, right side on desktop */}
          <div className="w-full lg:flex-1 mt-8 sm:mb-4 lg:mt-0 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="backdrop-blur-lg rounded-3xl border border-white/20 dark:border-gray-700/20 shadow-xl p-6 sm:p-8 sm:mb-4">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4 text-center">
                  Summer School 2025
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 lg:mb-6 text-center">
                  Join us for an intensive learning experience with industry
                  experts
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 sm:mb-6 mb-4 lg:mb-6">
                  {[
                    {
                      label: "Days",
                      value: timeLeft.days,
                      size: "text-xl sm:text-2xl lg:text-3xl",
                    },
                    {
                      label: "Hours",
                      value: timeLeft.hours,
                      size: "text-xl sm:text-2xl lg:text-3xl",
                    },
                    {
                      label: "Minutes",
                      value: timeLeft.minutes,
                      size: "text-xl sm:text-2xl lg:text-3xl",
                    },
                    {
                      label: "Seconds",
                      value: timeLeft.seconds,
                      size: "text-xl sm:text-2xl lg:text-3xl",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="backdrop-blur-sm rounded-xl p-3 sm:p-4 flex flex-col items-center"
                    >
                      <div
                        className={`${item.size} font-bold text-gray-900 dark:text-white`}
                      >
                        {item.value.toString().padStart(2, "0")}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-1">
                        {item.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full text-sm sm:text-base"
                >
                  <span className="relative z-10 text-m">REGISTER</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./section-heading";
import Image from "next/image";

const teamMembers = [
  {
    name: "Surruthisha Sundareswaran",
    role: "President",
    image: "/team/president.jpeg",
  },
  {
    name: "Dhulinde Thevarapperuma",
    role: "Vice President",
    image: "/team/lol",
  },
  {
    name: "Sumuthna Herath",
    role: "Secretary",
    image: "/team/sumathna.jpeg",
  },
  {
    name: "Lihini Hewavissa",
    role: "Treasurer",
    image: "/team/lihini.jpeg",
  },
  {
    name: "James Motha",
    role: "Director of Finance",
    image: "/team/joel.jpeg",
  },
  {
    name: "Sunera Manimendra",
    role: "Director of Events",
    image: "/team/vice.jpeg",
  },
  {
    name: "Anusigan Sivanathan",
    role: "Director of Media",
    image: "/team/anusigan.jpeg",
  },
  {
    name: "Ravindi Welagedara",
    role: "Director of PR",
    image: "/team/rivindi.jpeg",
  },
];

export default function TeamSection() {
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateCount = () => {
      setVisibleCount(window.innerWidth < 640 ? 1 : 3);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + visibleCount) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  return (
    <section
      id="skills"
      className="mt-16 sm:mt-20 mb-20 px-4 sm:px-6 lg:px-8 scroll-mt-28 text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 uppercase tracking-wide text-muted-foreground">
          Our Team
        </h3>

        <SectionHeading>
          The dedicated team behind IET on Campus Informatics Institute of
          Technology.
        </SectionHeading>

        <div className="overflow-x-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex gap-6 overflow-x-auto px-4 sm:justify-center"
            >
              {teamMembers
                .slice(index, index + visibleCount)
                .concat(
                  index + visibleCount > teamMembers.length
                    ? teamMembers.slice(0, (index + visibleCount) % teamMembers.length)
                    : []
                )
                .map((member, idx) => (
                  <div
                    key={idx}
                    className="p-6 flex flex-col items-center bg-white dark:bg-slate-800 border rounded-2xl shadow-md w-80"
                  >
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-3 sm:mb-4 rounded-full overflow-hidden border border-gray-300 dark:border-slate-700">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                      />
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white">
                      {member.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

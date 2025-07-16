"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import SectionHeading from "./section-heading";

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
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleCount(1); // Mobile
      } else if (width < 1024) {
        setVisibleCount(2); // Tablet
      } else {
        setVisibleCount(3); // Desktop
      }
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
      id="team"
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

        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
            >
              {teamMembers
                .slice(index, index + visibleCount)
                .concat(
                  index + visibleCount > teamMembers.length
                    ? teamMembers.slice(
                        0,
                        (index + visibleCount) % teamMembers.length
                      )
                    : []
                )
                .map((member, idx) => (
                  <Card
                    key={idx}
                    className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4">
                        <AvatarImage
                          src={member.image}
                          alt={member.name}
                          className="object-cover"
                        />
                      </Avatar>
                      <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2">
                        {member.name}
                      </h4>
                      <Badge variant="outline" className="text-xs sm:text-sm">
                        {member.role}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

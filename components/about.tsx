"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <h3 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 uppercase tracking-wide text-muted-foreground text-center">
        ABOUT US
      </h3>
      <SectionHeading>
        The Institution of Engineering and Technology on Campus - Informatics
        Institute of Technology
      </SectionHeading>
      <p className="mb-3">
        <span className="font-medium">
          IET On Campus – Informatics Institute of Technology (IIT)
        </span>{" "}
        is a vibrant student chapter affiliated with the prestigious Institution
        of Engineering and Technology (IET). Our mission is to empower the next
        generation of engineers, technologists, and innovators by bridging the
        gap between academic knowledge and real-world applications.
      </p>

      <p className="mb-3">
        At IIT, we create an engaging environment where students can thrive
        through hands-on workshops, technical talks, industry exposure, and
        collaborative projects. From cutting-edge tech events to professional
        networking sessions, we provide a platform for students to enhance their
        skills, explore emerging technologies, and grow as future leaders in
        engineering.
      </p>

      <p className="mb-3">
        We believe in fostering a passion for innovation, encouraging teamwork,
        and nurturing career development through continuous learning. Join us in
        our journey to inspire, innovate, and make a meaningful impact in the
        world of technology.
      </p>
    </motion.section>
  );
}

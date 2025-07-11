"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    name: "Dr. Jane Fernando",
    role: "Advisor",
    image: "/team/jane.jpg",
  },
  {
    name: "John Perera",
    role: "Chairperson",
    image: "/team/john.jpg",
  },
  {
    name: "Meera Silva",
    role: "Secretary",
    image: "/team/meera.jpg",
  },
  {
    name: "Lakshan Fernando",
    role: "Treasurer",
    image: "/team/lakshan.jpg",
  },
  {
    name: "Ruwani Kariyawasam",
    role: "Event Coordinator",
    image: "/team/ruwani.jpg",
  },
  {
    name: "Kavindu Gunasekara",
    role: "Technical Lead",
    image: "/team/kavindu.jpg",
  },
  {
    name: "Sajani Wickramasinghe",
    role: "Media Manager",
    image: "/team/sajani.jpg",
  },
];

export default function TeamSection() {
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
          The Institution of Engineering and Technology on Campus – Informatics
          Institute of Technology
        </SectionHeading>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mt-8"
        >
          <CarouselContent>
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={index}
                className="basis-[90%] sm:basis-[60%] md:basis-[45%] lg:basis-1/3"
              >
                <div className="p-4 flex flex-col items-center bg-white dark:bg-slate-800 border rounded-xl shadow-sm h-full mx-auto max-w-[95%] sm:max-w-sm">
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
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-center gap-4 mt-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, ArrowRight } from "lucide-react";

export default function Intro() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [stats, setStats] = useState({
    members: 1250,
    events: 20,
    rating: 4.8,
  });

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

  const timeUnits = [
    { label: "Days", value: timeLeft.days, icon: Calendar },
    { label: "Hours", value: timeLeft.hours, icon: Clock },
    { label: "Minutes", value: timeLeft.minutes, icon: Clock },
    { label: "Seconds", value: timeLeft.seconds, icon: Clock },
  ];

  return (
    <section
      className="relative lg:h-[65vh] flex flex-col justify-center bg-gradient-to-b overflow-hidden mb-16"
      id="home"
    >
      <div className="relative z-[1] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
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

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6"
              >
                <Badge variant="secondary" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {stats.events}+ Events
                </Badge>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start"
            >
              <Button
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                variant="outline"
              >
                <span className="relative z-10 font-semibold text-sm sm:text-base flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Join Our Community
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>

              <Button
                className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-lg border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                variant="outline"
              >
                <span className="relative z-10 font-semibold text-sm sm:text-base flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Explore Events
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </motion.div>
          </div>

          <div className="w-full lg:flex-1 mt-8 sm:mb-4 lg:mt-0 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <Card className="backdrop-blur-lg border border-white/20 dark:border-gray-700/20 shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Summer School 2025
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    Join us for an intensive learning experience with industry
                    experts
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                    {timeUnits.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                        className="backdrop-blur-sm rounded-xl p-3 sm:p-4 flex flex-col items-center border border-white/10"
                      >
                        <item.icon className="h-4 w-4 text-gray-500 dark:text-gray-400 mb-1" />
                        <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                          {item.value.toString().padStart(2, "0")}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide mt-1">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

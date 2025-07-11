"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Menu, X } from "lucide-react";
import type { SectionName } from "@/lib/types";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Close menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleLinkClick = (linkName: SectionName) => {
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
    setIsMenuOpen(false);

    // Special handling for Home link - scroll to top
    if (linkName === "Home") {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    } else {
      // For other links, scroll to the element
      const element = document.querySelector(`#${linkName.toLowerCase()}`);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="z-[999] relative">
      {/* Desktop Header */}
      <motion.div
        className="hidden sm:block fixed top-6 left-1/2 h-[3.25rem] w-[36rem] rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      {/* Mobile Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-[1001] p-2 rounded-full bg-white bg-opacity-80 backdrop-blur-[0.5rem] shadow-lg border border-white border-opacity-40 sm:hidden dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={20} className="text-gray-700 dark:text-gray-300" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={20} className="text-gray-700 dark:text-gray-300" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex fixed top-[1.7rem] left-1/2 h-[initial] -translate-x-1/2 py-0">
        <ul className="flex w-[initial] flex-nowrap items-center justify-center gap-5 text-[0.9rem] font-medium text-gray-500">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:hover:text-gray-300",
                  {
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.name);
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[1000] bg-black bg-opacity-50 backdrop-blur-sm sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl dark:bg-gray-950"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-20 px-6">
                <nav>
                  <ul className="space-y-1">
                    {links.map((link, index) => (
                      <motion.li
                        key={link.hash}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: index * 0.1,
                          duration: 0.3,
                        }}
                      >
                        <Link
                          href={link.hash}
                          onClick={(e) => {
                            e.preventDefault();
                            handleLinkClick(link.name);
                          }}
                          className={clsx(
                            "flex items-center w-full px-4 py-3 text-lg font-medium rounded-lg transition-colors relative overflow-hidden",
                            {
                              "text-gray-950 bg-gray-100 dark:text-gray-200 dark:bg-gray-800":
                                activeSection === link.name,
                              "text-gray-600 hover:text-gray-950 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-800":
                                activeSection !== link.name,
                            }
                          )}
                        >
                          {link.name}
                          {link.name === activeSection && (
                            <motion.div
                              className="absolute inset-0 bg-gray-100 dark:bg-gray-800 -z-10"
                              layoutId="activeMobileSection"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

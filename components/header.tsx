"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const pathname = usePathname();

  const handleLinkClick = (
    linkName: "Home" | "About" | "Events" | "Team" | "Contact"
  ) => {
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
    const element = document.querySelector(`#${linkName.toLowerCase()}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">IET</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              IET on Campus
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Innovation Excellence Technology
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex space-x-6">
          {links.map((link) => (
            <Button
              key={link.hash}
              variant="ghost"
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === link.name
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              )}
              onClick={() => handleLinkClick(link.name)}
            >
              {link.name}
            </Button>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64 bg-white dark:bg-gray-950"
            >
              <div className="pt-6 px-4">
                <div className="flex flex-col items-start">
                  <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                      IET on Campus
                    </h2>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Innovation Excellence Technology
                    </p>
                  </div>
                  <nav className="w-full space-y-2">
                    {links.map((link) => (
                      <Button
                        key={link.hash}
                        variant="ghost"
                        className={cn(
                          "w-full justify-start text-base",
                          activeSection === link.name
                            ? "text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                            : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        )}
                        onClick={() => handleLinkClick(link.name)}
                      >
                        {link.name}
                      </Button>
                    ))}
                  </nav>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

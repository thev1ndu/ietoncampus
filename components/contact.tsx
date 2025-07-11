"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-full max-w-4xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3 className="text-xs sm:text-sm font-medium mb-3 sm:mb-4 uppercase tracking-wide text-muted-foreground text-center">
        Contact Us
      </h3>

      <SectionHeading>
        We’re here to connect, support, and collaborate get in touch with us.
      </SectionHeading>

      <TooltipProvider>
        <Card className="mt-6 border rounded-2xl shadow-lg bg-white dark:bg-slate-900">
          <CardHeader>
            <CardTitle className="text-lg text-primary">
              We'd love to hear from you!
            </CardTitle>
          </CardHeader>

          <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-6">
            {/* Address */}
            <div>
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <MapPin size={18} />
                Address
              </h4>
              <p className="text-sm text-muted-foreground">
                435 Galle Rd,
                <br />
                Colombo 03,
                <br />
                Sri Lanka.
              </p>
            </div>

            {/* Email */}
            <div>
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Mail size={18} />
                Email
              </h4>
              <Button variant="link" asChild className="px-0 text-sm ml-0">
                <Link href="mailto:iet@iit.ac.lk">iet@iit.ac.lk</Link>
              </Button>
            </div>

            {/* Phone */}
            <div>
              <h4 className="font-semibold flex items-center gap-2 mb-2">
                <Phone size={18} />
                Phone
              </h4>
              <Button variant="link" asChild className="px-0 text-sm ml-0">
                <a href="tel:+9471234567">+94 76 123 4567</a>
              </Button>
            </div>

            {/* Socials */}
            <div>
              <h4 className="font-semibold mb-2">Social Media</h4>
              <div className="flex gap-4 items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" aria-label="Facebook">
                      <Facebook className="w-5 h-5 hover:text-blue-600 transition-colors" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Facebook</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" aria-label="X (Twitter)">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 hover:text-black transition-colors"
                      >
                        <path d="M22.67 2h-4.78l-5.31 7.23L6.79 2H2l7.91 11.04L2 22h4.79l5.6-7.63L17.2 22h4.8l-8.18-11.42L22.67 2z" />
                      </svg>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Twitter (X)</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5 hover:text-blue-700 transition-colors" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#" aria-label="Instagram">
                      <Instagram className="h-5 w-5 hover:text-pink-500 transition-colors" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>
              </div>
            </div>
          </CardContent>
        </Card>
      </TooltipProvider>
    </motion.section>
  );
}

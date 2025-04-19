"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0"
        >
          <pattern
            id="pattern-circles"
            x="0"
            y="0"
            width="50"
            height="50"
            patternUnits="userSpaceOnUse"
            patternContentUnits="userSpaceOnUse"
          >
            <circle id="pattern-circle" cx="25" cy="25" r="12.5" fill="white" />
          </pattern>
          <rect
            id="rect"
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#pattern-circles)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Find the Service You're Looking For?
            </h2>
            <p className="text-lg text-white/90 mb-10">
              With our specialist expertise, no project is too small or too large.
              We relish a challenge and are happy to think outside the box to achieve results.
              Get in touch with our team to discuss your specific requirements.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 transition-colors"
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 100"
          className="w-full h-[60px] fill-white"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C240,95 480,95 720,50 C960,5 1200,5 1440,40 L1440,100 L0,100 Z"
          />
        </svg>
      </div>
    </section>
  );
}

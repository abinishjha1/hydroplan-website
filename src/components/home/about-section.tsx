"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BriefcaseBusiness, DollarSign, Clock, ClipboardCheck, Users, Droplet } from "lucide-react";

// Stats array for the company
const stats = [
  {
    value: "800+",
    label: "Completed Projects",
    icon: <BriefcaseBusiness className="h-6 w-6 text-blue-500" />,
  },
  {
    value: "150m",
    label: "Invested by Clients",
    icon: <DollarSign className="h-6 w-6 text-blue-500" />,
  },
  {
    value: "30",
    label: "Years in Business",
    icon: <Clock className="h-6 w-6 text-blue-500" />,
  },
  {
    value: "40",
    label: "Schemes in the Last 7 Years",
    icon: <ClipboardCheck className="h-6 w-6 text-blue-500" />,
  },
  {
    value: "25",
    label: "Members of Staff",
    icon: <Users className="h-6 w-6 text-blue-500" />,
  },
  {
    value: "80m³/s",
    label: "Maximum Design Flow",
    icon: <Droplet className="h-6 w-6 text-blue-500" />,
  },
];

export function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden h-[500px]"
          >
            <Image
              src="/images/about.jpg"
              alt="Hydroplan Renewable Energy Consultancy"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Hydroplan Group</h2>
              <p className="text-lg text-slate-700 mb-6">
                A leading renewable energy consultancy, with a multi-disciplined team of skilled engineers,
                specialising in the design, construction and project management of renewable energy projects
                in the UK and internationally.
              </p>
              <p className="text-lg text-slate-700 mb-8">
                Hydroplan has been offering powerful solutions to its ever-growing customer base for over 30 years,
                with high customer satisfaction and an impressive portfolio. During this time, Hydroplan has undertaken
                over 800 projects ranging from modifications of existing schemes to the full implementation of new
                renewable energy projects.
              </p>
              <Link href="/about">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-6 rounded-lg flex items-center space-x-4"
              >
                <div className="p-3 bg-blue-50 rounded-full">{stat.icon}</div>
                <div>
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

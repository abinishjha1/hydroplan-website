"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, FileText, Leaf, PenTool, Wrench, Activity, Compass, Zap, Droplet } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Feasibility",
    description: "Comprehensive assessments to determine project viability and potential returns.",
    icon: <FileText className="h-8 w-8 text-blue-500" />,
    href: "/services#feasibility",
  },
  {
    title: "Environmental & Survey",
    description: "Expert environmental analysis and surveys to support sustainable development.",
    icon: <Leaf className="h-8 w-8 text-blue-500" />,
    href: "/services#environmental",
  },
  {
    title: "Due Diligence",
    description: "Thorough evaluations and risk assessments for investors and financial institutions.",
    icon: <PenTool className="h-8 w-8 text-blue-500" />,
    href: "/services#due-diligence",
  },
  {
    title: "In-House Design",
    description: "Innovative and efficient designs tailored to specific project requirements.",
    icon: <Compass className="h-8 w-8 text-blue-500" />,
    href: "/services#design",
  },
  {
    title: "Project Management",
    description: "End-to-end project coordination and supervision to ensure timely delivery.",
    icon: <Activity className="h-8 w-8 text-blue-500" />,
    href: "/services#project-management",
  },
  {
    title: "Operation & Maintenance",
    description: "Ongoing support to maximize efficiency and extend the lifespan of installations.",
    icon: <Wrench className="h-8 w-8 text-blue-500" />,
    href: "/services#maintenance",
  },
  {
    title: "HV Electrical",
    description: "Specialized high voltage electrical engineering services for renewable projects.",
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    href: "/services#electrical",
  },
  {
    title: "Dam Engineering",
    description: "Expert dam design, construction, and maintenance services for hydropower.",
    icon: <Droplet className="h-8 w-8 text-blue-500" />,
    href: "/services#dam-engineering",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            At Hydroplan, we have the knowledge and experience to provide services right across the renewable industry spectrum.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariants}>
              <Card className="h-full transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{service.description}</p>
                </CardContent>
                <CardFooter>
                  <Link href={service.href} className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link href="/services">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

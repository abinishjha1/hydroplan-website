"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Sample featured projects
const featuredProjects = [
  {
    id: "consented-built-schemes",
    title: "Consented & Built Schemes",
    category: "Schemes",
    imageUrl: "/images/projects/consented-built-schemes.jpg",
    href: "/projects/consented-built-schemes",
  },
  {
    id: "corrour-sustainable-energy",
    title: "Corrour Sustainable Energy Project",
    category: "Infrastructure",
    imageUrl: "/images/projects/corrour-sustainable-energy.jpg",
    href: "/projects/corrour-sustainable-energy",
  },
  {
    id: "expert-witness",
    title: "Expert Witness",
    category: "Due Diligence / Expert Witness",
    imageUrl: "/images/projects/expert-witness.jpg",
    href: "/projects/expert-witness",
  },
  {
    id: "knottingley-battery-storage",
    title: "Knottingley Battery Storage",
    category: "Storage",
    imageUrl: "/images/projects/knottingley-battery-storage.jpg",
    href: "/projects/knottingley-battery-storage",
  },
  {
    id: "brynteg-flood-risk",
    title: "Brynteg Flood Risk Assessment & Culvert Sizing",
    category: "Survey & Design",
    imageUrl: "/images/projects/brynteg-flood-risk.jpg",
    href: "/projects/brynteg-flood-risk",
  },
  {
    id: "mov-hv-network",
    title: "MOV HV Network",
    category: "Grid",
    imageUrl: "/images/projects/mov-hv-network.jpg",
    href: "/projects/mov-hv-network",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export function ProjectsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We have completed over 800 projects ranging from modifications of existing schemes to
            full implementation of new renewable energy projects.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={project.href} className="block group">
                <div className="relative overflow-hidden rounded-lg h-[300px] mb-4">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <span className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full mb-2 inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link href="/projects">
            <Button variant="outline" size="lg" className="border-blue-500 text-blue-600 hover:bg-blue-50 group">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

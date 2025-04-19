"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with sophisticated overlay */}
      <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(29, 78, 216, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(29, 78, 216, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(29, 78, 216, 0.05) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(29, 78, 216, 0.05) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.1]">
            Powering the
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-300">
              Future Flow
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Expert consultancy services for hydropower projects worldwide.
            From feasibility studies to operational optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/25">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '100+', label: 'Projects Completed' },
              { number: '50+', label: 'Expert Engineers' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-0 right-0 flex justify-center z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ y: -2 }}
        >
          <span className="text-gray-400 text-sm font-medium mb-3">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="h-6 w-6 text-blue-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

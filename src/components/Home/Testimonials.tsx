"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anna",
      text: "I found an amazing travel partner through Travel-Clique! We explored Bali together and had the best time.",
    },
    {
      name: "Mark",
      text: "Travel-Clique helped me connect with like-minded travelers. Planning trips is now fun and stress-free.",
    },
    {
      name: "Sofia",
      text: "As a solo traveler, this platform gave me confidence and companionship. Highly recommended!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5s
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Slide animation variants
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-gray-100">
      <h2 className="text-center text-4xl font-bold mb-12 text-gray-900">
        Traveler Stories
      </h2>

      <div className="relative w-full max-w-4xl mx-auto h-96 flex justify-center items-center overflow-hidden">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="absolute w-72 sm:w-80 md:w-96 rounded-3xl bg-white/70 backdrop-blur-md border border-white/50 p-8 sm:p-10 shadow-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-700 italic leading-relaxed text-base sm:text-lg">
              “{testimonials[currentIndex].text}”
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

            <div className="flex items-center gap-4 justify-center">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-500 text-white flex items-center justify-center font-semibold text-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <p className="font-semibold text-gray-900 text-sm sm:text-lg">
                {testimonials[currentIndex].name}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center mt-12 gap-4 sm:gap-6">
        <button
          onClick={handlePrev}
          className="px-4 sm:px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="px-4 sm:px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
        >
          Next
        </button>
      </div>
    </section>
  );
}

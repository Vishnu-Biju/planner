'use client'

import { motion } from 'framer-motion'


export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
          <video
        src="/assets/trip1.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white"
      >
        <motion.h1
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-9xl md:text-9xl font-extrabold mb-4"
        >
         Seize the moments
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-3xl md:text-2xl mb-8"
        >
          A day filled with love, nature, and unforgettable moments
        </motion.p>
        <motion.a
          href="#itinerary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-8 py-3 rounded-full hover:text-white hover:bg-black transition-colors"
        >
          View Itinerary
        </motion.a>
      </motion.div>
    </section>
  )
}
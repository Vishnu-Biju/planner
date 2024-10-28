'use client'

import { motion } from 'framer-motion'
export default function Footer() {
  return (
    <footer className=" text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg mb-4">Can't wait to create beautiful memories with you!</p>
          <p className="mt-4 text-sm text-gray-400"> Our Romantic Adventure</p>
        </motion.div>
      </div>
    </footer>
  )
}
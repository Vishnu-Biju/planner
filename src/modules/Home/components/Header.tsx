'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = ['Itinerary', 'Map', 'Gallery']

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-8 transition-all duration-300 ${
        scrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="text-white text-2xl font-bold hover:text-yellow-300 transition-colors">
          Our Adventure
        </Link>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-yellow-300  transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <motion.ul
          className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          } md:flex absolute md:relative top-full left-0 right-0 bg-black md:bg-transparent p-4 md:p-0`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map((item) => (
            <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-yellow-300 transition-colors block py-2 md:py-0"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>
    </motion.header>
  )
}
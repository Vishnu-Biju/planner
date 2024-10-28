'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import PlaceDetail from './place-detail'

const images = [
  { src: "/assets/thomman1.jpg", alt: "Thomman Kuth Waterfalls", name: "Thomman Kuth Waterfalls" },
  { src: "/assets/thattekkad1.jpg", alt: "thattekkad kayaking", name: "Thattekkad" },
  { src: "/assets/forestroad.jpg", alt: "Scenic Forest Road", name: "Forest Road" },
  { src: "/assets/paniyeli2.jpg", alt: "Paniyeli Poru", name: "Paniyeli Poru" },
  { src: "/assets/kadamakkudi1.webp", alt: "Kadamakkudi Backwaters", name: "Kadamakkudi" },
  { src: "/assets/vypin1.avif", alt: "Vypin Beach", name: "Vypin Beach" },
  { src: "/assets/toddy1.jpg", alt: "Local Toddy Shop", name: "Toddy Shop" },
]

export default function Gallery() {
  const [selectedPlace, setSelectedPlace] = useState(null)

  return (
    <section id="gallery" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold text-center mb-12 text-white"
        >
          Glimpses of Our Journey
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative h-64 overflow-hidden rounded-xl group cursor-pointer"
              onClick={() => setSelectedPlace(image)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-300 group-hover:scale-110 group-hover:blur-sm"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center">{image.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedPlace && (
          <PlaceDetail place={selectedPlace} onClose={() => setSelectedPlace(null)} />
        )}
      </AnimatePresence>
    </section>
  )
}
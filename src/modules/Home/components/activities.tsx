'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Activity = {
  name: string;
  description: string;
  image: string;
}

const activities: Activity[] = [
    {
      name: "Waterfall Sightseeing",
      description: "Discover the enchanting beauty of Kerala's waterfalls, where cascading waters create a peaceful and refreshing atmosphere amidst the forest. A perfect spot for nature lovers and a romantic escape.",
      image: "/assets/waterfalls.jpg",
    },
    {
      name: "Forest Trekking",
      description: "Explore the heart of Kerala’s forests with a thrilling trek through lush greenery and rugged trails. Ideal for adventure seekers eager to uncover hidden streams and experience nature up close.",
      image: "/assets/forestroad.jpg"
    },
    {
      name: "Toddy Shop Lunch",
      description: "Experience the local flavors with a traditional lunch at a Toddy Shop. Savor the unique taste of 'toddy' and authentic Kerala dishes, immersing yourself in the region’s rich culinary culture.",
      image: "/assets/kallushapu4.jpg"
    },
    {
      name: "Kayaking Adventure",
      description: "Glide along Kerala’s backwaters in a kayak, navigating through calm waters surrounded by stunning scenery. Perfect for a peaceful, adventurous experience in nature.",
      image: "/assets/kayaking.jpg"
    },
    {
      name: "Zoo Exploration",
      description: "Get close to Kerala’s diverse wildlife with a visit to the zoo. An ideal outing for animal enthusiasts and those looking to explore the region's fauna in a well-preserved habitat.",
      image: "/assets/zoo1.jpg"
    },
    {
      name: "Forest Route Bike Ride",
      description: "Take a scenic bike ride through Kerala’s lush forest routes. Enjoy the fresh forest air, beautiful surroundings, and the occasional wildlife sighting on this relaxing journey.",
      image: "/assets/forestroad2.jpg"
    },
    {
      name: "Beach Sunset Viewing",
      description: "Relax on the sandy shores of Kerala’s beaches and enjoy a mesmerizing sunset. The golden hues over the horizon make for an unforgettable experience by the sea.",
      image: "/assets/sunset.jpg"
    },
    {
      name: "Dinner Date",
      description: "End the day with a romantic dinner date. Savor delicious local or international cuisine with your loved one, making memories to cherish.",
      image: "/assets/dinner.jpg"
    }
  ]
  

export default function Activities() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextActivity = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activities.length)
  }

  const prevActivity = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activities.length) % activities.length)
  }

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      }
    }
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Romantic Activities</h2>
        <div className="relative h-[600px] overflow-hidden rounded-xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 flex flex-col md:flex-row"
            >
              <div className="w-full md:w-1/2 h-64 md:h-full relative">
                <Image
                  src={activities[currentIndex].image}
                  alt={activities[currentIndex].name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60" />
              </div>
              <div className="w-full md:w-1/2 bg-gray-800 p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold mb-4 text-white">{activities[currentIndex].name}</h3>
                <p className="text-gray-300 mb-6">{activities[currentIndex].description}</p>
               
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={prevActivity}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextActivity}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {activities.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-pink-500' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
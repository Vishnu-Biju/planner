'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const itineraryItems = [
  { time: "10:00 AM", activity: "Start from Kakkanad", description: "Begin our romantic journey on bikes." },
  { time: "10:30 AM", activity: "Thomman Kuth Waterfalls", description: "Enjoy breathtaking nature views and capture memories." },
  { time: "12:30 PM", activity: "Lunch Stop", description: "Savor local flavors at a charming toddy shop." },
  { time: "1:30 PM", activity: "Thattekkad", description: "A brief stop to stretch our legs and admire the scenery." },
  { time: "1:45 PM", activity: "Forest Road Journey", description: "Ride through picturesque forest roads, feeling the cool breeze." },
  { time: "2:00 PM", activity: "Paniyeli Poru", description: "Explore serene forest trails and peaceful nature views." },
  { time: "4:00 PM", activity: "Depart from Paniyeli Poru", description: "Head back, filled with wonderful memories." },
  { time: "6:30 PM", activity: "Evening Destination", description: "Choose between a romantic backwaters sunset at Kadamakkudi or a peaceful beach evening at Vypin Beach." },
  { time: "8:00 PM", activity: "Dinner stop", description: "End the day with a relaxing dinner at a cozy spot" },
  { time: "9:30 PM", activity: "End", description: "Dropping of my love safe and sound" },
]

export default function Itinerary() {
    return (
      <section id="itinerary" className="py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-12 text-white"
          >
            Plan for the Day
          </motion.h2>
          <div className="relative">
            <div className="absolute left-[1.2rem] top-0 bottom-0 w-0.5 bg-[#ffd700]"></div>
            {itineraryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-8 flex items-start"
              >
                <div className="bg-[#ffd700] rounded-full p-2 mr-4 z-10 shadow-md shadow-gold-300/60">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div className="bg-gray-800/80 p-6 rounded-2xl shadow-lg shadow-black/50 flex-grow border border-gray-700">
                  <h3 className="text-xl font-semibold text-[#ffd700]">{item.time}</h3>
                  <h4 className="text-lg font-medium mt-2 text-white">{item.activity}</h4>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
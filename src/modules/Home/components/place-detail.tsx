'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, MapPin, Activity, Camera } from 'lucide-react'

type Place = {
  name: string;
  src: string;
  alt: string;
}

type PlaceInfo = {
  description: string;
  activities: string[];
  additionalImages: string[];
}

type PlaceInfoMap = {
  [key: string]: PlaceInfo;
}

const placeInfo: PlaceInfoMap = {
  "Thomman Kuth Waterfalls": {
    description: "Thomman Kuth Waterfalls is a hidden gem nestled in the lush forests of Kerala. The cascading waters create a mesmerizing spectacle, perfect for nature lovers and photographers alike. The serene atmosphere and the soothing sound of water make it an ideal spot for relaxation and rejuvenation.",
    activities: ["Photography", "Nature Walk", "Picnic"],
    additionalImages: ["/assets/thomman2.jpg", "/assets/thomman1.jpg"]
  },
  "Forest Road": {
    description: "The scenic Forest Road offers a captivating journey through dense, verdant forests. As you ride along this picturesque route, you'll be surrounded by towering trees, diverse flora, and the occasional glimpse of local wildlife. The cool shade and fresh air make for a refreshing travel experience.",
    activities: ["Scenic Drive", "Birdwatching", "Photography"],
    additionalImages: ["/assets/forestroad.jpg","/assets/forestroad2.jpg","/assets/forestroad2.webp", "/assets/forestroad3.jpg"]
  },
  "Paniyeli Poru": {
    description: "Paniyeli Poru is a breathtaking river-side destination known for its rocky terrain and gushing waters. The area offers a perfect blend of natural beauty and adventure. Visitors can enjoy the panoramic views of the river, explore the unique rock formations, or simply relax by the water's edge.",
    activities: ["Rock Climbing", "River Trekking", "Picnic"],
    additionalImages: []
  },
  "Kadamakkudi": {
    description: "Kadamakkudi is a serene backwater destination that showcases the tranquil beauty of Kerala's waterways. The area is known for its network of canals, lush paddy fields, and traditional village life. A visit here offers a glimpse into the peaceful rural lifestyle of Kerala.",
    activities: ["Backwater Cruise", "Fishing", "Village Walk"],
    additionalImages: [ "/assets/kadamakkudi2.webp"]
  },
  "Vypin Beach": {
    description: "Vypin Beach is a pristine coastal paradise known for its golden sands and clear waters. The beach offers a perfect setting for a romantic evening stroll or to watch a spectacular sunset. The peaceful atmosphere and the rhythmic sound of waves create a soothing ambiance.",
    activities: ["Beach Walk", "Sunset Viewing", "Swimming"],
    additionalImages: ["/assets/sunset.jpg", "/assets/vypin1.avif"]
  },
  "Toddy Shop": {
    description: "A visit to a local Toddy Shop offers a unique cultural experience. These traditional establishments serve 'toddy', a mildly alcoholic beverage made from palm sap, along with authentic Kerala cuisine. It's a great place to taste local flavors and immerse yourself in the local culture.",
    activities: ["Toddy Tasting", "Local Cuisine", "Cultural Experience"],
    additionalImages: ["/assets/toddy2.jpg", "/assets/toddy3.jpg"]
  },
  "Thattekkad": {
    description: "The Thattekkad Bird Sanctuary, Kerala's first bird sanctuary, is a haven for bird enthusiasts, nestled in a lush, flat forest alongside the Periyar River. Spanning around 25 square kilometers, it boasts rich biodiversity and a tranquil environment that offers a peaceful retreat and beautiful forested landscapes.",
    activities: ["Kayaking", "Forest Route Ride", "Peaceful Ambience"],
    additionalImages: ["/assets/thattekkad1.jpg", "/assets/thattekkad2.webp"]
  }
}

type PlaceDetailProps = {
  place: Place;
  onClose: () => void;
}

export default function PlaceDetail({ place, onClose }: PlaceDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const info = placeInfo[place.name]

  if (!info) {
    return null
  }

  const allImages = [place.src, ...info.additionalImages]

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div className="min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 15 }}
          className="bg-gray-800 rounded-xl p-6 max-w-4xl w-full relative"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
          >
            <X size={24} />
          </button>
          
          <h2 className="text-4xl font-bold mb-6 text-green-400">{place.name}</h2>
          
          <div className="mb-8 relative h-96 rounded-xl overflow-hidden group">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={allImages[currentImageIndex]}
                  alt={`Image of ${place.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? 'bg-white' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Description</h3>
                  <p className="text-gray-300">
                    {showFullDescription ? info.description : `${info.description.slice(0, 150)}...`}
                    <button
                      onClick={() => setShowFullDescription(!showFullDescription)}
                      className="text-pink-400 hover:underline ml-2"
                    >
                      {showFullDescription ? 'Read less' : 'Read more'}
                    </button>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Activity className="text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Activities</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    {info.activities.map((activity, index) => (
                      <li key={index}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col space-y-4">
  <div className="flex items-center space-x-3">
    <Camera className="text-green-400 mt-1 flex-shrink-0" />
    <h3 className="text-xl font-semibold text-white">Photo Gallery</h3>
  </div>

  <div className="grid grid-cols-2 gap-3 w-full">
    {allImages.map((img, index) => (
      <div
        key={index}
        className="relative h-24 md:h-36 rounded-md overflow-hidden cursor-pointer"
        onClick={() => setCurrentImageIndex(index)}
      >
        <Image
          src={img}
          alt={`Gallery image of ${place.name}`}
          layout="fill"
          objectFit="cover"
          className="hover:scale-110 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</div>

          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
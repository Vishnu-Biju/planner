'use client'
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Itinerary from "../components/itinerary";
import Gallery from "../components/gallery";
import Footer from "../components/Footer";
import Map from "../components/map";
import Activities from "../components/activities";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      <main>
        <Hero />
        <Itinerary />
        <Map />
        <Gallery />
        <Activities/>
      </main>
      <Footer />
    </motion.div>
  )
}
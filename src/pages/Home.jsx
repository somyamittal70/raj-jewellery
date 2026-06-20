import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import FeaturedCollection from '../components/FeaturedCollection'
import BrandStory from '../components/BrandStory'
import GalleryGrid from '../components/GalleryGrid'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <FeaturedCollection />
      <BrandStory />
      <GalleryGrid />
      <Testimonials />
      <CTASection />
    </motion.div>
  )
}

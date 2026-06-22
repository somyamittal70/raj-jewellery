import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  return (
<section className="relative min-h-screen flex items-center justify-start overflow-hidden">      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/banner.png"
          alt="Luxury jewellery"
          className="w-full h-full object-cover"
  //           animate={{
  //   scale: [1, 1.1, 1],
  //   x: [0, -20, 0],
  //   y: [0, -10, 0]
  // }}
  // transition={{
  //   duration: 25,
  //   repeat: Infinity,
  //   ease: "easeInOut"
  // }}
        />
        {/* Multi-layer overlay for depth */}
        {/* <div className="absolute inset-0 bg-charcoal/65" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/50" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 text-left px-14 max-w-5xl ">
        {/* Pre-heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-start gap-2 mb-4"
        >
          {/* <div className="h-px w-5 bg-[#1A1410]/30" />
          <div className=" text-[#1A1410]/30 tracking-[0.3em] text-xs">Est. 1999</div>
          <div className="h-px w-5 bg-[#1A1410]/30" /> */}
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-[#1A1410]/80 text-4xl sm:text-6xl lg:text-6xl xl:text-6xl leading-[1.1] tracking-wide mb-5 gold-glow"
        >
          The Name of the
          <br />
          <span className="text-gold">Crafted for</span>
          <br />
          Trust
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[#1A1410]/80 text-[9px] sm:text-[15px] tracking-wide max-w-md mb-8 font-light"
        >
          Discover handcrafted jewellery where artistry meets luxury.
          Each piece is a testament to generations of mastery.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-start"
        >
          <Link to="/gallery" className="btn-gold">
            Explore Collection
          </Link>
          {/* <Link to="/contact" className="border-[#1A1410]" style={{ color: '#1A1410', borderColor: 'rgba(221,215,209,0.5)' }}>
            Book Consultation
          </Link> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/40"
      >
        <span className="section-label text-[0.6rem] tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div> */}
    </section>
  )
}

import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=900&q=85',
    alt: 'Diamond Ring',
    gridClass: 'lg:[grid-column:1/6] lg:[grid-row:1/4]',
  },
 
  {
    src: 'https://images.pexels.com/photos/16055232/pexels-photo-16055232.jpeg',
    alt: 'Earrings',
    gridClass: 'lg:[grid-column:6/10] lg:[grid-row:1/3]',
  },
   {
    src: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&q=85',
    alt: 'Gold Necklace',
    gridClass: 'lg:[grid-column:6/10] lg:[grid-row:3/4]',
  },
  {
    src: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=700&q=85',
    alt: 'Bracelet',
    gridClass: 'lg:[grid-column:10/13] lg:[grid-row:2/3]',
  },
  {
    src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=700&q=85',
    alt: 'Ring Collection',
    gridClass: 'lg:[grid-column:10/13] lg:[grid-row:1/2]',
  },
  {
    src: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=85',
    alt: 'Pendant',
    gridClass: 'lg:[grid-column:10/13] lg:[grid-row:3/4]',
  },
]

function GalleryTile({ img, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`group relative overflow-hidden ${img.gridClass}`}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Hover gold frame */}
      <div className="absolute inset-[10px] border border-gold/0 group-hover:border-gold/50 transition-all duration-700 pointer-events-none" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gold text-[0.6rem] tracking-[0.25em] uppercase font-display">
            0{index + 1}
          </span>
          <div className="h-px w-6 bg-gold/60" />
        </div>
        <h3 className="text-ivory font-display text-lg sm:text-xl tracking-wide">
          {img.alt}
        </h3>
      </div>
    </motion.div>
  )
}

export default function GalleryGrid() {
  return (
    <section className="py-28 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Our Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-espresso text-4xl sm:text-5xl mt-4 mb-5"
          >
            Gallery Preview
          </motion.h2>
          <div className="gold-divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(3,180px)] gap-3 lg:gap-4">
          {galleryImages.map((img, i) => (
            <GalleryTile key={i} img={img} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/gallery" className="btn-gold group  items-center gap-2">
          <div>
            View Full Gallery
            </div>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
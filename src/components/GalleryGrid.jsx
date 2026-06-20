import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=85', alt: 'Diamond ring', tall: true },
  { src: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=85', alt: 'Gold necklace' },
  { src: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=85', alt: 'Bracelet' },
  { src: 'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=600&q=85', alt: 'Earrings', tall: true },
  { src: 'https://images.unsplash.com/photo-1601121141418-36b7e19e2b1a?w=600&q=85', alt: 'Luxury ring' },
  { src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85', alt: 'Pearl necklace' },
]

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

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden ${img.tall ? 'row-span-2' : ''}`}
              style={{ aspectRatio: img.tall ? '3/4' : '4/3' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-espresso/50 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <div className="border border-gold/60 px-6 py-3 text-ivory text-xs tracking-[0.2em] uppercase font-display">
                  {img.alt}
                </div>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/0 group-hover:border-gold/80 transition-all duration-500" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/0 group-hover:border-gold/80 transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <Link to="/gallery" className="btn-gold">
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

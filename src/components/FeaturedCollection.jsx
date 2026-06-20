import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const collections = [
  {
    title: 'Diamond Rings',
    subtitle: 'Eternal Promise',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=85',
    count: '48 pieces',
  },
  {
    title: 'Gold Necklaces',
    subtitle: 'Radiant Grace',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=85',
    count: '36 pieces',
  },
  {
    title: 'Luxury Bracelets',
    subtitle: 'Wrist Artistry',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=85',
    count: '29 pieces',
  },
  {
    title: 'Wedding Collection',
    subtitle: 'Once in a Lifetime',
    image: 'https://images.unsplash.com/photo-1498671546682-94a232c26d17?w=800&q=85',
    count: '54 pieces',
  },
]

function CollectionCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative card-gold-border cursor-pointer"
    >
      <Link to="/gallery">
        {/* Image */}
        <div className="img-overlay aspect-[3/4] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent z-10" />
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <p className="section-label text-gold/80 mb-2">{item.subtitle}</p>
          <h3 className="font-display text-ivory text-xl tracking-wide mb-1">{item.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-ivory/40 text-xs tracking-widest">{item.count}</span>
            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-xs tracking-widest uppercase">
              View <ArrowRight size={12} />
            </span>
          </div>
        </div>

        {/* Gold border animation */}
        <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-all duration-500 pointer-events-none" />
      </Link>
    </motion.div>
  )
}

export default function FeaturedCollection() {
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
            Curated for You
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-espresso text-4xl sm:text-5xl mt-4 mb-5"
          >
            Featured Collections
          </motion.h2>
          <div className="gold-divider" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {collections.map((item, i) => (
            <CollectionCard key={i} item={item} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-14"
        >
          <Link to="/gallery" className="btn-outline-gold">
            View All Collections
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

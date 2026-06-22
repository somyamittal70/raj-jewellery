import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'

/* ── Collection Data ───────────────────────────────── */
const collections = [
  {
    slug: 'lightweight',
    label: 'Lightweight Collection',
    tagline: 'Effortless All-Day Elegance',
    description:
      'Crafted for the modern woman who refuses to choose between comfort and beauty. Our Lightweight Collection features airy filigree designs, delicate chains, and gossamer-thin bands — luxury that feels like nothing at all.',
    image: 'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=1200&q=90',
    accent: 'Ideal for daily wear · Under 3 grams',
    grid: [
      { title: 'Feather Chain', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600&q=85' },
      { title: 'Petal Studs', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=85' },
      { title: 'Slender Band', image: 'https://images.unsplash.com/photo-1601121141418-36b7e19e2b1a?w=600&q=85' },
      { title: 'Dew Drop Pendant', image: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&q=85' },
    ],
    bg: 'bg-cream',
    reverse: false,
  },
  {
    slug: 'daily-wear',
    label: 'Daily Wear Collection',
    tagline: 'Crafted for Every Chapter',
    description:
      'From the boardroom to the bazaar — our Daily Wear Collection is built for the rhythm of real life. Sturdy settings, enduring finishes, and understated elegance that elevates every ordinary moment into something worth remembering.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=90',
    accent: 'Durable · Tarnish-resistant · All-day comfort',
    grid: [
      { title: 'Classic Chain', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=85' },
      { title: 'Everyday Ring', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=85' },
      { title: 'Simple Bangle', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=85' },
      { title: 'Subtle Stud', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=85' },
    ],
    bg: 'bg-ivory',
    reverse: true,
  },
  {
    slug: 'party-wear',
    label: 'Party Wear Collection',
    tagline: 'Make Every Entrance',
    description:
      'Statement pieces for statement moments. The Party Wear Collection is unapologetically bold — oversized jhumkis, layered necklaces, and chandelier earrings designed to be seen across every room you walk into.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=90',
    accent: 'Bold · Showstopping · Unforgettable',
    grid: [
      { title: 'Chandelier Drop', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=85' },
      { title: 'Layered Necklace', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=85' },
      { title: 'Statement Cuff', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=85' },
      { title: 'Cocktail Ring', image: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=600&q=85' },
    ],
    bg: 'bg-cream',
    reverse: false,
  },
  {
    slug: 'bridal',
    label: 'Bridal Collection',
    tagline: 'Your Once-in-a-Lifetime Look',
    description:
      'Every bride deserves jewellery as singular as her love story. Our Bridal Collection encompasses the full spectrum — from delicate mehendi pieces to grand nuptial sets — each crafted to become the heirloom her daughters will one day wear.',
    image: 'https://images.unsplash.com/photo-1498671546682-94a232c26d17?w=1200&q=90',
    accent: 'Complete sets · Custom sizing · Bespoke service',
    grid: [
      { title: 'Bridal Necklace Set', image: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=600&q=85' },
      { title: 'Maang Tikka', image: 'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=600&q=85' },
      { title: 'Bridal Bangles', image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&q=85' },
      { title: 'Mangalsutra', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=85' },
    ],
    bg: 'bg-espresso',
    dark: true,
    reverse: true,
  },
  {
    slug: 'traditional',
    label: 'Traditional Collection',
    tagline: 'Heritage Reimagined',
    description:
      'Rooted in centuries of Indian goldsmithing tradition, our Traditional Collection honours the motifs, techniques, and silhouettes that have adorned women across generations — reimagined with contemporary precision for the discerning modern wearer.',
    image: 'https://images.unsplash.com/photo-1583937443604-f42c0f2c6bef?w=1200&q=90',
    accent: 'Temple motifs · Kundan · Meenakari · Filigree',
    grid: [
      { title: 'Temple Necklace', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=85' },
      { title: 'Jhumki Drops', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&q=85' },
      { title: 'Kundan Set', image: 'https://images.unsplash.com/photo-1498671546682-94a232c26d17?w=600&q=85' },
      { title: 'Payal Set', image: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&q=85' },
    ],
    bg: 'bg-ivory',
    reverse: false,
  },
]

/* ── Mini product card ─────────────────────────────── */
function ProductThumb({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative overflow-hidden"
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-400 flex items-center justify-center">
          <span className="text-ivory font-display text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-3">
            {item.title}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Collection Block ──────────────────────────────── */
function CollectionBlock({ col, index }) {
  const isEven = index % 2 === 0
  const isDark = col.dark

  return (
    <section id={col.slug} className={`py-24 px-6 ${col.bg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto">

        {/* Top split layout */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14 ${!isEven ? 'lg:gap-16' : ''}`}>

          {/* Image — conditionally reversed */}
          <motion.div
            initial={{ opacity: 0, x: col.reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative ${col.reverse ? 'lg:order-2' : ''}`}
          >
            <div className="relative overflow-hidden">
              <img
                src={col.image}
                alt={col.label}
                className="w-full h-[420px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-charcoal/15" />
            </div>
            {/* Decorative corner */}
            <div className={`absolute -top-4 w-20 h-20 border pointer-events-none ${col.reverse ? '-right-4 border-gold/35' : '-left-4 border-gold/35'}`} />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: col.reverse ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={col.reverse ? 'lg:order-1' : ''}
          >
            <span className="section-label text-gold mb-4 block">{col.tagline}</span>
            <h2 className={`font-display text-4xl sm:text-5xl mb-5 leading-tight ${isDark ? 'text-ivory' : 'text-espresso'}`}>
              {col.label.split(' ').slice(0, -1).join(' ')}
              <br />
              <span className="text-gold">{col.label.split(' ').slice(-1)[0]}</span>
            </h2>
            <div className="gold-divider-left mb-7" />
            <p className={`text-sm leading-relaxed mb-5 ${isDark ? 'text-ivory/60' : 'text-espresso/65'}`}>
              {col.description}
            </p>
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-gold/50" />
              <span className={`text-[0.65rem] tracking-[0.18em] uppercase ${isDark ? 'text-ivory/40' : 'text-espresso/40'}`}>
                {col.accent}
              </span>
            </div>
            <Link to={`/shop?collection=${col.slug}`} className="btn-gold inline-flex items-center gap-2">
              Shop Collection <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>

        {/* 4-piece grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {col.grid.map((item, i) => (
            <ProductThumb key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}

/* ── Collections Page ──────────────────────────────── */
export default function Collections() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner
        title="Collections"
        subtitle="Curated for You"
        image="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1800&q=90"
      />

      {/* Collection index strip */}
      <section className="bg-espresso py-6 px-6 sticky top-[64px] z-30">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-x-8 gap-y-2 justify-center">
          {collections.map(col => (
            <a
              key={col.slug}
              href={`#${col.slug}`}
              className="nav-link text-ivory/60 hover:text-gold text-[0.7rem]"
            >
              {col.label}
            </a>
          ))}
        </div>
      </section>

      {/* Render each collection */}
      {collections.map((col, i) => (
        <CollectionBlock key={col.slug} col={col} index={i} />
      ))}

      {/* Bottom CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1800&q=85"
            alt="Bespoke"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-7"
          >
            <div className="h-px w-10 bg-gold/60" />
            <span className="section-label text-gold/80">Bespoke Service</span>
            <div className="h-px w-10 bg-gold/60" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-ivory text-4xl sm:text-5xl mb-5 leading-tight"
          >
            Can't Find What
            <br /><span className="text-gold">You're Looking For?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ivory/50 text-sm leading-relaxed mb-8"
          >
            Our master artisans can create any piece you dream of. Book a bespoke consultation and let us craft something that exists nowhere else on earth.
          </motion.p>
          <Link to="/contact" className="btn-gold">Begin Your Journey</Link>
        </div>
      </section>
    </motion.div>
  )
}
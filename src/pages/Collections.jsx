import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import ProductCard from '../components/ProductCard'
import { getProductsByCollection } from '../data/Product'

/* ── Collection definitions ──────────────────────── */
const collections = [
  {
    slug: 'lightweight',
    label: 'Lightweight Collection',
    tagline: 'Effortless All-Day Elegance',
    description: 'Crafted for the modern woman who refuses to choose between comfort and beauty. Airy filigree designs, delicate chains, and gossamer-thin bands — luxury that feels like nothing at all.',
    image: 'https://i.pinimg.com/736x/5f/98/19/5f9819bd05a7b3725e3786a026656fcf.jpg',
    accent: 'Ideal for daily wear · Under 3 grams',
    bg: 'bg-cream',
    reverse: false,
  },
  {
    slug: 'daily-wear',
    label: 'Daily Wear Collection',
    tagline: 'Crafted for Every Chapter',
    description: 'From the boardroom to the bazaar — built for the rhythm of real life. Sturdy settings, enduring finishes, and understated elegance that elevates every ordinary moment.',
    image: 'https://i.pinimg.com/736x/8c/b9/9c/8cb99ce46c534ce990bbc5bd28d8f98f.jpg',
    accent: 'Durable · Tarnish-resistant · All-day comfort',
    bg: 'bg-ivory',
    reverse: true,
  },
  {
    slug: 'party-wear',
    label: 'Party Wear Collection',
    tagline: 'Make Every Entrance',
    description: 'Statement pieces for statement moments. Unapologetically bold — oversized jhumkis, layered necklaces, and chandelier earrings designed to be seen across every room you walk into.',
    image: 'https://i.pinimg.com/736x/0b/ee/dc/0beedc11d7bde29c131403c016f7350a.jpg',
    accent: 'Bold · Showstopping · Unforgettable',
    bg: 'bg-cream',
    reverse: false,
  },
  {
    slug: 'bridal',
    label: 'Bridal Collection',
    tagline: 'Your Once-in-a-Lifetime Look',
    description: 'Every bride deserves jewellery as singular as her love story. From delicate mehendi pieces to grand nuptial sets — each crafted to become the heirloom her daughters will one day wear.',
    image: 'https://i.pinimg.com/736x/e1/59/01/e1590119e2260e6eef44f87808850f24.jpg',
    accent: 'Complete sets · Custom sizing · Bespoke service',
    bg: 'bg-espresso',
    dark: true,
    reverse: true,
  },
  {
    slug: 'traditional',
    label: 'Traditional Collection',
    tagline: 'Heritage Reimagined',
    description: 'Rooted in centuries of Indian goldsmithing tradition, honouring the motifs, techniques, and silhouettes that have adorned women across generations — reimagined with contemporary precision.',
    image: 'https://i.pinimg.com/736x/56/95/48/569548eb99f48d2947dfbd1e5df3cc20.jpg',
    accent: 'Temple motifs · Kundan · Meenakari · Filigree',
    bg: 'bg-ivory',
    reverse: false,
  },
]

/* ── Collection block ─────────────────────────────── */
function CollectionBlock({ col, index }) {
  const featuredProducts = getProductsByCollection(col.slug).slice(0, 4)
  const isDark = col.dark
  const num = String(index + 1).padStart(2, '0')

  return (
    <section id={col.slug} className={`py-14 sm:py-20 md:py-28 px-4 sm:px-6 ${col.bg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto ">

        {/* Split hero */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center mb-12 sm:mb-20">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: col.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`relative ${col.reverse ? 'lg:order-2' : ''}`}
          >
            <div className="relative overflow-hidden">
              <img
                src={col.image}
                alt={col.label}
                className="w-full h-[280px] sm:h-[380px] md:h-[440px] lg:h-[520px] object-cover"
                loading="lazy"
              />
            </div>
            {/* Large faint index numeral — signature device, doubles as the "which collection" counter */}
            <span
              className={`absolute -top-6 sm:-top-9 ${col.reverse ? 'right-0 sm:-right-4' : 'left-0 sm:-left-4'} font-display text-[3.5rem] sm:text-[5rem] leading-none select-none pointer-events-none ${isDark ? 'text-espresso/0' : ''} text-gold/25`}
            >
              {num}
            </span>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: col.reverse ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={col.reverse ? 'lg:order-1' : ''}
          >
            <span className="text-gold text-[0.65rem] sm:text-xs tracking-[0.2em] uppercase mb-3 sm:mb-4 block">
              {col.tagline}
            </span>
            <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl mb-5 leading-[1.1] ${isDark ? 'text-ivory' : 'text-espresso'}`}>
              {col.label.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-gold">{col.label.split(' ').slice(-1)[0]}</span>
            </h2>
            <p className={`text-sm leading-relaxed mb-6 max-w-md ${isDark ? 'text-ivory/60' : 'text-espresso/60'}`}>
              {col.description}
            </p>
            <p className={`text-[0.65rem] sm:text-[0.7rem] tracking-[0.16em] uppercase mb-8 pb-8 border-b ${isDark ? 'text-ivory/40 border-white/10' : 'text-espresso/40 border-espresso/10'}`}>
              {col.accent}
            </p>
            <Link
              to={`/shop?collection=${col.slug}`}
              className="inline-flex items-center gap-2.5 text-sm tracking-[0.12em] uppercase text-gold group"
            >
              Shop Collection
              <span className="w-7 h-px bg-gold transition-all duration-300 group-hover:w-10" />
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        {/* Product cards */}
        {featuredProducts.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <span className={`text-[0.65rem] sm:text-xs tracking-[0.18em] uppercase ${isDark ? 'text-ivory/50' : 'text-espresso/45'}`}>
                Featured Pieces
              </span>
              <Link
                to={`/shop?collection=${col.slug}`}
                className={`text-[0.65rem] sm:text-xs tracking-[0.15em] uppercase flex items-center gap-1 transition-colors duration-300 ${
                  isDark ? 'text-ivory/40 hover:text-gold' : 'text-espresso/40 hover:text-gold'
                }`}
              >
                View All <ArrowRight size={11} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
              {featuredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          </div>
        ) : (
          <div className={`text-center py-10 px-4 border border-dashed ${isDark ? 'border-white/10 text-ivory/30' : 'border-espresso/15 text-espresso/30'} text-sm tracking-wide`}>
            More pieces arriving soon — <Link to="/contact" className="text-gold hover:underline">enquire now</Link>
          </div>
        )}
      </div>
    </section>
  )
}

/* ── Collections Page ─────────────────────────────── */
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

      {/* Sticky nav strip — pill tabs instead of plain text links */}
      {/* <nav className="bg-espresso/95 backdrop-blur-sm py-3 px-3 sm:px-6 sticky top-[56px] sm:top-[64px] z-30 border-b border-white/8">
        <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center  px-1">
          {collections.map(col => (
            <a
              key={col.slug}
              href={`#${col.slug}`}
              className="flex-shrink-0 whitespace-nowrap px-3.5 py-1.5 text-[0.62rem] sm:text-[0.68rem] tracking-[0.14em] uppercase text-ivory/55 border border-white/10 hover:border-gold hover:text-gold transition-all duration-300"
            >
              {col.label.replace(' Collection', '')}
            </a>
          ))}
        </div>
      </nav> */}

      {/* Collection blocks */}
      {collections.map((col, i) => (
        <CollectionBlock key={col.slug} col={col} index={i} />
      ))}

      {/* Bottom CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1800&q=85" alt="Bespoke" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-xl mx-auto text-center px-4 sm:px-6">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gold/80 text-[0.65rem] sm:text-xs tracking-[0.22em] uppercase block mb-5"
          >
            Bespoke Service
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="font-display text-ivory text-3xl sm:text-4xl md:text-5xl mb-5 leading-[1.1]"
          >
            Can&apos;t Find What<br /><span className="text-gold">You&apos;re Looking For?</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="text-ivory/55 text-sm leading-relaxed mb-9"
          >
            Our master artisans can create any piece you dream of. Book a bespoke consultation and let us craft something that exists nowhere else on earth.
          </motion.p>
          <Link to="/contact" className="btn-gold inline-block w-full sm:w-auto">Begin Your Journey</Link>
        </div>
      </section>
    </motion.div>
  )
}
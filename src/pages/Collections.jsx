import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getCollectionBySlug, getCollectionProducts, getWhatsAppUrl, COLLECTIONS } from '../data/Product'

/* ── WhatsApp icon ────────────────────────────────── */
function WAIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ── Collection-specific content ─────────────────── */
const COLLECTION_CONTENT = {
  'mens/lightweight': {
    tagline: 'Crafted to Move With You',
    desc: 'Engineered for the man who demands excellence without effort. Our Men\'s Lightweight Collection pairs the authority of gold and silver with featherweight designs — pieces you can wear from dawn to midnight without a second thought.',
    accent: 'Under 5 grams · All-day comfort',
    heroBg: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1800&q=90',
  },
  'mens/daily-wear': {
    tagline: 'For the Man Who Moves the World',
    desc: 'Refined pieces built for the relentless pace of modern life. Durable settings, enduring finishes, and understated elegance that holds its polish through every meeting, every mile.',
    accent: 'Durable · Scratch-resistant · Boardroom-ready',
    heroBg: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=1800&q=90',
  },
  'mens/party-wear': {
    tagline: 'Make Your Presence Known',
    desc: 'Statement pieces for men who understand that the right jewellery changes every room. Bold chains, commanding signet rings, and layered pieces designed to be noticed.',
    accent: 'Bold · Statement · Commanding',
    heroBg: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=1800&q=90',
  },
  'mens/traditional': {
    tagline: 'Heritage, Worn With Pride',
    desc: 'Rooted in generations of Indian goldsmithing tradition. Om lockets, kanthi necklaces, and kada that carry the weight of culture and the beauty of mastercraft.',
    accent: 'Traditional · Sacred · Heritage',
    heroBg: 'https://images.unsplash.com/photo-1583937443604-f42c0f2c6bef?w=1800&q=90',
  },
  'womens/lightweight': {
    tagline: 'Luxury That Feels Like Nothing',
    desc: 'Gossamer-thin designs, delicate chains, and airy filigree — jewellery so light you forget you\'re wearing it. Until someone stops to ask.',
    accent: 'Under 3 grams · Effortless',
    heroBg: 'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=1800&q=90',
  },
  'womens/daily-wear': {
    tagline: 'From Morning Coffee to Midnight',
    desc: 'Crafted for the woman who does everything. These pieces move from desk to dinner without missing a beat — enduring, thoughtful, and quietly magnificent.',
    accent: 'All-day · Tarnish-resistant',
    heroBg: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1800&q=90',
  },
  'womens/party-wear': {
    tagline: 'Every Room Is Your Stage',
    desc: 'Chandelier earrings, layered necklaces, and bold statement pieces. This collection was designed to be seen — and to make you unforgettable.',
    accent: 'Bold · Showstopping · Festive',
    heroBg: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1800&q=90',
  },
  'womens/traditional': {
    tagline: 'India\'s Finest Traditions, Reimagined',
    desc: 'Jhumkis, temple jewellery, rani haar, and meenakari pieces — the living heritage of India\'s goldsmithing guilds, shaped for the contemporary woman.',
    accent: 'Meenakari · Kundan · Temple',
    heroBg: 'https://images.unsplash.com/photo-1583937443604-f42c0f2c6bef?w=1800&q=90',
  },
  'bridal': {
    tagline: 'For Your Most Precious Chapter',
    desc: 'Every bride deserves jewellery as singular as her love story. Our Bridal Collection spans the full spectrum of India\'s bridal tradition — from intimate mehndi pieces to grand nuptial sets.',
    accent: 'Complete sets · Bespoke service · Customisable',
    heroBg: 'https://images.unsplash.com/photo-1498671546682-94a232c26d17?w=1800&q=90',
  },
  'kids': {
    tagline: 'Tiny Pieces, Lifelong Memories',
    desc: 'Delicate, safe, and beautifully crafted — our Kids Collection creates the first jewellery memories that last a lifetime. Each piece is designed with child safety as the first priority.',
    accent: 'Safe · Hypoallergenic · BIS Certified',
    heroBg: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1800&q=90',
  },
}

/* ── Product card for collection (unchanged) ─────── */
function CollectionProductCard({ product, index }) {
  const waUrl = getWhatsAppUrl(product)
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative card-gold-border bg-ivory flex flex-col"
    >
      <Link to={product.detailPath} className="block relative overflow-hidden">
        <div className="aspect-[3/4] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>
        <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none" />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <p className="section-label text-[0.6rem] mb-1.5">{product.category}</p>
        <Link to={product.detailPath}>
          <h3 className="font-display text-espresso text-base tracking-wide leading-snug mb-2 hover:text-gold transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-espresso/50 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center gap-2 pt-3 border-t border-espresso/8">
          <Link to={product.detailPath} className="flex-1 flex items-center justify-center gap-1.5 border border-espresso/20 py-2.5 text-[0.65rem] tracking-widest uppercase text-espresso hover:border-gold hover:text-gold transition-all">
            View <ArrowRight size={10} />
          </Link>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-3 py-2.5 text-[0.65rem] uppercase transition-colors">
            <WAIcon size={12} />
            <span className="hidden sm:inline">Enquire</span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

/* ── Main page ────────────────────────────────────── */
export default function CollectionPage() {
  const params = useParams()
  const colSlug = [params.gender, params.colSlug].filter(Boolean).join('/')

  const collection = getCollectionBySlug(colSlug)
  if (!collection) return <Navigate to="/collections" replace />

  const content = COLLECTION_CONTENT[colSlug] || {
    tagline: 'Curated With Care',
    desc: 'A carefully curated collection of our finest jewellery pieces.',
    accent: '',
    heroBg: collection.image,
  }

  const products = getCollectionProducts(colSlug, 12)

  const siblings = COLLECTIONS.filter(c => c.slug !== colSlug && (
    collection.gender === 'kids' || collection.gender === 'women' || collection.gender === 'men'
      ? c.gender === collection.gender
      : true
  )).slice(0, 4)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero banner */}
      <section className="relative h-[58vh] sm:h-[62vh] min-h-[420px] sm:min-h-[500px] flex items-end pb-14 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={content.heroBg}
            alt={collection.label}
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-charcoal/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-3 sm:mb-4"
          >
            <div className="h-px w-8 sm:w-10 bg-gold" />
            <span className="section-label text-gold/80">{content.tagline}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display text-ivory text-4xl sm:text-6xl lg:text-7xl leading-[1.05]"
          >
            {collection.label}
          </motion.h1>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-ivory border-b border-espresso/8 px-5 sm:px-6 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[0.62rem] sm:text-[0.65rem] tracking-widest uppercase text-espresso/40 overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link>
            <span className="text-espresso/20">/</span>
            <Link to="/collections" className="hover:text-gold transition-colors duration-300">Collections</Link>
            <span className="text-espresso/20">/</span>
            <span className="text-espresso/70">{collection.label}</span>
          </nav>
        </div>
      </div>

      {/* Description */}
      <section className="py-14 sm:py-16 px-5 sm:px-6 bg-ivory">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-espresso/65 text-sm sm:text-base leading-relaxed sm:leading-[1.8] mb-5 sm:mb-6"
          >
            {content.desc}
          </motion.p>
          {content.accent && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="h-px w-10 sm:w-12 bg-gold/40" />
              <span className="text-espresso/40 text-[0.62rem] sm:text-[0.65rem] tracking-[0.2em] uppercase">{content.accent}</span>
              <div className="h-px w-10 sm:w-12 bg-gold/40" />
            </motion.div>
          )}
        </div>
      </section>

      {/* Products grid */}
      <section className="py-14 sm:py-16 px-5 sm:px-6 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-9 sm:mb-12">
            <div>
              <span className="section-label block mb-2.5 sm:mb-3">Featured Pieces</span>
              <h2 className="font-display text-espresso text-2xl sm:text-3xl md:text-4xl leading-tight">{collection.label}</h2>
              <div className="gold-divider-left mt-3 sm:mt-4" />
            </div>
            <span className="text-espresso/35 text-[0.65rem] sm:text-xs tracking-widest uppercase">{products.length} pieces</span>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-16 sm:py-20 border border-dashed border-espresso/12">
              <p className="font-display text-espresso/40 text-lg sm:text-xl mb-5">Pieces arriving soon</p>
              <Link to="/contact" className="btn-gold">Enquire Now</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-5">
              {products.map((p, i) => (
                <CollectionProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-12 sm:py-16 px-5 sm:px-6 bg-espresso">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div>
            <h3 className="font-display text-ivory text-xl sm:text-2xl mb-1.5">Love what you see?</h3>
            <p className="text-ivory/50 text-sm">Our team is ready to help you find the perfect piece.</p>
          </div>
          <div className='btn-gold flex items-center  w-full sm:w-auto justify-center'>
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello, I am interested in the ${collection.label}. Please share your available designs.`)}`}
            target="_blank"
            rel="noopener noreferrer"
   className="flex items-center gap-2"
          >
            <WAIcon size={16}    />  Chat on WhatsApp
          
          </a>
          </div>
        </div>
      </section>

  
      {siblings.length > 0 && (
        <section className="py-16 sm:py-20 px-5 sm:px-6 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <span className="section-label">Explore More</span>
              <h3 className="font-display text-espresso text-2xl sm:text-3xl mt-2.5 sm:mt-3">Related Collections</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
              {siblings.map((col, i) => (
                <motion.div
                  key={col.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Link to={col.path} className="group block relative overflow-hidden">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={col.image}
                        alt={col.label}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/60 transition-all duration-400" />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                      <p className="font-display text-ivory text-sm sm:text-base tracking-wide group-hover:text-gold transition-colors">{col.label}</p>
                      <div className="flex items-center gap-1 mt-2 text-gold/0 group-hover:text-gold transition-all duration-300 text-xs tracking-widest uppercase">
                        View <ArrowRight size={10} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}

export function CollectionsLanding() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="relative h-[46vh] sm:h-[50vh] min-h-[360px] sm:min-h-[420px] flex items-end pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/banner2.png"
            alt="Collections"
            className="w-full h-full object-cover scale-105"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-espresso/80 text-4xl sm:text-6xl lg:text-7xl leading-[1.05]"
          >
            Our Collections
          </motion.h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-5 sm:px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {COLLECTIONS.map((col, i) => (
              <motion.div
                key={col.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link to={col.path} className="group block relative overflow-hidden">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={col.image}
                      alt={col.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/50 group-hover:bg-charcoal/60 transition-all duration-400" />
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                    <p className="font-display text-ivory text-sm sm:text-base tracking-wide group-hover:text-gold transition-colors">{col.label}</p>
                    <div className="flex items-center gap-1 mt-2 text-gold/0 group-hover:text-gold transition-all duration-300 text-xs tracking-widest uppercase">
                      Explore <ArrowRight size={10} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
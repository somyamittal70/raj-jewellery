import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useSearchParams, useParams, Navigate } from 'react-router-dom'
import { Search, X, ChevronDown, ArrowRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import ProductCard from '../components/ProductCard'
import {
  CATEGORIES,
  getCategoryBySlug,
  getProductsByCategory,
  getWhatsAppUrl,
} from '../data/Product'

/* ── Filter config ──────────────────────────────── */
const filterOptions = [
  { id: 'all',         label: 'All' },
  { id: 'gold',        label: 'Gold' },
  { id: 'silver',      label: 'Silver' },
  { id: 'lightweight', label: 'Lightweight' },
  { id: 'daily-wear',  label: 'Daily Wear' },
  { id: 'party-wear',  label: 'Party Wear' },
  { id: 'bridal',      label: 'Bridal' },
  { id: 'traditional', label: 'Traditional' },
]

const sortOptions = [
  { id: 'default',    label: 'Featured' },
  { id: 'alpha-asc',  label: 'A → Z' },
  { id: 'alpha-desc', label: 'Z → A' },
]

/* ── Metal hero card ─────────────────────────────── */
function MetalHeroCard({ metal, image, count, label, tagline, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: metal === 'gold' ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onSelect}
      className="group relative overflow-hidden cursor-pointer h-[56vw] min-h-[200px] sm:h-80 lg:h-96"
    >
      <img src={image} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-transparent" />
      <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-7">
        <span className="section-label text-gold/80 mb-1 sm:mb-2 block text-[0.6rem] sm:text-xs">{tagline}</span>
        <h3 className="font-display text-ivory text-xl sm:text-3xl mb-1 sm:mb-1.5">{label}</h3>
        <p className="text-ivory/45 text-[0.6rem] sm:text-xs tracking-widest mb-3 sm:mb-5">{count} pieces available</p>
        <button className="btn-gold py-2 sm:py-2.5 text-[0.65rem] sm:text-xs">Explore {label.split(' ')[0]}</button>
      </div>
    </motion.div>
  )
}

/* ── WhatsApp icon ────────────────────────────────── */
function WAIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ── Gender badge ─────────────────────────────────── */
function GenderBadge({ gender, metal }) {
  if (!gender || gender === 'unisex') return null
  const map = { men: "Men's", women: "Women's", kids: "Kids'" }
  return (
    <span className={`text-[0.58rem] tracking-[0.2em] uppercase px-2.5 py-1 ${
      metal === 'gold' ? 'bg-gold text-ivory' : 'bg-espresso/80 text-ivory border border-white/15'
    }`}>
      {map[gender] || gender}
    </span>
  )
}

/* ── Category product card ────────────────────────── */
function CategoryProductCard({ product, index }) {
  const waUrl = getWhatsAppUrl(product)
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      layout
      className="group relative card-gold-border bg-ivory flex flex-col"
    >
      <Link to={product.detailPath} className="relative overflow-hidden block">
        <div className="overflow-hidden aspect-[3/4]">
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>
        <div className="absolute top-3 left-3 z-10">
          <GenderBadge gender={product.gender} metal={product.metal} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="bg-ivory/90 px-4 py-2 font-display text-espresso text-xs tracking-widest">View Details</span>
        </div>
        <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none z-10" />
        <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none z-10" />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <p className="section-label text-[0.6rem] mb-1.5">{product.category}</p>
        <Link to={product.detailPath}>
          <h3 className="font-display text-espresso text-base sm:text-lg tracking-wide leading-snug mb-2 hover:text-gold transition-colors duration-300">{product.name}</h3>
        </Link>
        <p className="text-espresso/55 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">{product.shortDescription}</p>
        <div className="flex items-center gap-2 mt-auto pt-3 border-t border-espresso/8">
          <Link to={product.detailPath} className="flex-1 flex items-center justify-center gap-1.5 border border-espresso/20 py-2.5 text-espresso text-[0.65rem] tracking-[0.12em] uppercase hover:border-gold hover:text-gold transition-all duration-300">
            Details <ArrowRight size={11} />
          </Link>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-3 py-2.5 text-[0.65rem] tracking-[0.1em] uppercase transition-colors duration-300">
            <WAIcon size={13} />
            <span className="hidden sm:inline">Enquire</span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

/* ── Related categories strip ─────────────────────── */
function RelatedCategories({ currentSlug, metal, gender }) {
  const related = CATEGORIES
    .filter(c => c.slug !== currentSlug && c.metal === metal && (gender === 'unisex' || c.gender === gender))
    .slice(0, 6)
  if (related.length === 0) return null
  return (
    <div className="mt-20 pt-14 border-t border-espresso/10">
      <div className="flex items-center gap-3 mb-7">
        <div className="h-px w-8 bg-gold" />
        <span className="section-label">Also Explore</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
        {related.map(cat => (
          <Link key={cat.slug} to={cat.path} className="group block p-4 border border-espresso/10 hover:border-gold/50 text-center transition-all duration-300">
            <div className={`w-2 h-2 rounded-full mx-auto mb-2 ${cat.metal === 'gold' ? 'bg-gold' : 'bg-espresso/40'}`} />
            <div className="text-espresso/65 group-hover:text-gold text-[0.65rem] tracking-wide transition-colors leading-snug">{cat.label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ── Shop Landing ─────────────────────────────────── */
export function ShopLanding() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageBanner title="Shop" subtitle="Fine Jewellery" image="/banner5.png" />

      {/* Metal hero cards */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-14">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="section-label">
              Shop by Metal
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-espresso text-2xl sm:text-4xl lg:text-5xl mt-3 sm:mt-4 mb-4 sm:mb-5">
              Gold & Silver Jewellery
            </motion.h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <MetalHeroCard metal="gold" label="Gold Jewellery" tagline="22K & 18K Gold"
              image="https://i.pinimg.com/1200x/9c/6c/7f/9c6c7f4beb0ae1710647d3c44134f6ea.jpg"
              count={CATEGORIES.filter(c => c.metal === 'gold').length * 8}
              onSelect={() => document.getElementById('shop-grid')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <MetalHeroCard metal="silver" label="Silver Jewellery" tagline="92.5 Sterling Silver"
              image="https://i.pinimg.com/1200x/8b/83/8d/8b838d0b3c4081781add824b317711c4.jpg"
              count={CATEGORIES.filter(c => c.metal === 'silver').length * 6}
              onSelect={() => document.getElementById('shop-grid')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section id="shop-grid" className="py-12 sm:py-20 px-4 sm:px-6 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="section-label">Browse by Category</span>
            <h3 className="font-display text-espresso text-3xl mt-3">All Categories</h3>
            <div className="gold-divider mt-4" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {CATEGORIES.map((cat, i) => (
              <motion.div key={cat.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.03 }}>
                <Link to={cat.path} className="group block card-gold-border bg-ivory p-5 text-center hover:border-gold transition-all duration-300">
                  <div className={`w-2 h-2 rounded-full mx-auto mb-3 ${cat.metal === 'gold' ? 'bg-gold' : 'bg-espresso/40'}`} />
                  <p className="section-label text-[0.6rem] mb-1">{cat.metal} · {cat.gender}</p>
                  <h3 className="font-display text-espresso text-sm tracking-wide group-hover:text-gold transition-colors">{cat.label}</h3>
                  <div className="flex items-center justify-center gap-1 mt-3 text-gold/0 group-hover:text-gold transition-all duration-300 text-[0.65rem] tracking-widest uppercase">
                    View <ArrowRight size={10} />
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

/* ── Banner images per metal ──────────────────────── */
const BANNER_IMAGES = {
  gold: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1800&q=90',
  silver: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1800&q=90',
}

/* ── Category Listing Page (default export) ───────── */
export default function CategoryListingPage() {
  const params = useParams()
  const slugParts = [params.metal, params.gender, params.catSlug].filter(Boolean)
  const categorySlug = slugParts.join('/')

  const category = getCategoryBySlug(categorySlug)
  const categoryProducts = useMemo(() => getProductsByCategory(categorySlug), [categorySlug])

  if (!category) return <Navigate to="/shop" replace />

  const genderLabel = { men: "Men's", women: "Women's", kids: "Kids'", unisex: '' }[category.gender] || ''
  const pageTitle = `${genderLabel} ${category.label}`.trim()
  const bannerImg = BANNER_IMAGES[category.metal] || BANNER_IMAGES.gold

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <PageBanner title={pageTitle} subtitle={`${category.metal.charAt(0).toUpperCase() + category.metal.slice(1)} Jewellery`} image={bannerImg} />

      <div className="bg-ivory border-b border-espresso/8 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[0.65rem] tracking-widest uppercase text-espresso/40">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <span>/</span>
            <span className="capitalize">{category.metal}</span>
            {category.gender && category.gender !== 'unisex' && (<><span>/</span><span className="capitalize">{category.gender}</span></>)}
            <span>/</span>
            <span className="text-espresso/70">{category.label}</span>
          </nav>
        </div>
      </div>

      <section className="py-20 px-6 bg-cream min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="section-label block mb-3">{genderLabel || 'All'}</span>
              <h2 className="font-display text-espresso text-4xl sm:text-5xl leading-tight">{category.label}</h2>
              <div className="gold-divider-left mt-4" />
            </div>
            <span className="text-espresso/35 text-xs tracking-widest hidden sm:block">{categoryProducts.length} piece{categoryProducts.length !== 1 ? 's' : ''}</span>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-display text-espresso/40 text-2xl mb-5">New pieces arriving soon</p>
              <Link to="/contact" className="btn-gold">Enquire Now</Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              <AnimatePresence mode="popLayout">
                {categoryProducts.map((product, i) => (
                  <CategoryProductCard key={product.id} product={product} index={i} />
                ))}
              </AnimatePresence>
            </div>
          )}

          <RelatedCategories currentSlug={categorySlug} metal={category.metal} gender={category.gender} />
        </div>
      </section>

      <section className="py-14 px-6 bg-espresso">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-ivory text-2xl mb-1">Looking for something specific?</h3>
            <p className="text-ivory/50 text-sm tracking-wide">Chat with our jewellery experts for custom requests & availability.</p>
          </div>
          <div className='btn-gold flex items-center w-full sm:w-auto justify-center'>
          <a href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hello, I am interested in ${pageTitle}. Please share your available designs and details.`)}`}
            target="_blank" rel="noopener noreferrer" className="flex items-center gap-2"
          >
            <WAIcon size={16} />
            Chat on WhatsApp
          </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
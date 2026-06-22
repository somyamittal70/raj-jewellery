import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal, ArrowRight, X, ChevronDown } from 'lucide-react'
import PageBanner from '../components/PageBanner'

/* ── Data ─────────────────────────────────────────── */
const goldItems = [
  { slug: 'gold-rings', title: 'Rings', sub: 'Men & Women', count: 48, metal: 'gold', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=700&q=85', tags: ['gold'] },
  { slug: 'gold-necklaces', title: 'Necklaces', sub: 'Luxury Pieces', count: 36, metal: 'gold', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=700&q=85', tags: ['gold', 'party-wear'] },
  { slug: 'gold-bracelets', title: 'Bracelets', sub: 'Men & Women', count: 29, metal: 'gold', image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=700&q=85', tags: ['gold', 'daily-wear'] },
  { slug: 'gold-earrings', title: 'Earrings', sub: 'Men & Women', count: 52, metal: 'gold', image: 'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=700&q=85', tags: ['gold', 'lightweight'] },
  { slug: 'gold-mangalsutra', title: 'Mangalsutra', sub: 'Bridal Wear', count: 18, metal: 'gold', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=700&q=85', tags: ['gold', 'bridal', 'traditional'] },
  { slug: 'gold-bridal', title: 'Bridal Jewellery', sub: 'Complete Sets', count: 24, metal: 'gold', image: 'https://images.unsplash.com/photo-1498671546682-94a232c26d17?w=700&q=85', tags: ['gold', 'bridal'] },
  { slug: 'gold-chains', title: 'Neck Chains', sub: 'Men & Women', count: 41, metal: 'gold', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=700&q=85', tags: ['gold', 'daily-wear', 'lightweight'] },
  { slug: 'gold-jhumki', title: 'Jhumki', sub: 'Traditional Style', count: 33, metal: 'gold', image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=700&q=85', tags: ['gold', 'traditional', 'party-wear'] },
  { slug: 'gold-kade', title: 'Kade', sub: 'Men & Women', count: 22, metal: 'gold', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=700&q=85', tags: ['gold', 'traditional'] },
  { slug: 'gold-temple', title: 'Temple Jewellery', sub: 'Sacred Art', count: 15, metal: 'gold', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=700&q=85', tags: ['gold', 'traditional'] },
  { slug: 'gold-chokers', title: 'Chokers', sub: 'Statement Pieces', count: 19, metal: 'gold', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=700&q=85', tags: ['gold', 'party-wear'] },
  { slug: 'gold-lockets', title: 'Lockets', sub: 'Om, Maa, Gurjar', count: 27, metal: 'gold', image: 'https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=700&q=85', tags: ['gold', 'daily-wear', 'traditional'] },
]

const silverItems = [
  { slug: 'silver-payal', title: 'Payal', sub: 'Ankle Bracelets', count: 31, metal: 'silver', image: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=700&q=85', tags: ['silver', 'traditional'] },
  { slug: 'silver-rings', title: 'Rings', sub: 'Men & Women', count: 44, metal: 'silver', image: 'https://images.unsplash.com/photo-1601121141418-36b7e19e2b1a?w=700&q=85', tags: ['silver', 'daily-wear', 'lightweight'] },
  { slug: 'silver-kade', title: 'Kade', sub: 'Bold Cuffs', count: 17, metal: 'silver', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=700&q=85', tags: ['silver', 'traditional'] },
  { slug: 'silver-earrings', title: 'Earrings', sub: 'All Styles', count: 38, metal: 'silver', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=700&q=85', tags: ['silver', 'lightweight', 'daily-wear'] },
  { slug: 'silver-chains', title: 'Neck Chains', sub: 'Men & Women', count: 26, metal: 'silver', image: 'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=700&q=85', tags: ['silver', 'daily-wear'] },
  { slug: 'silver-bracelets', title: 'Bracelets', sub: 'Daily Wear', count: 21, metal: 'silver', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=85', tags: ['silver', 'daily-wear', 'lightweight'] },
  { slug: 'silver-pendants', title: 'Pendants', sub: 'Elegant Drops', count: 35, metal: 'silver', image: 'https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=700&q=85', tags: ['silver', 'lightweight'] },
  { slug: 'silver-jhumke', title: 'Jhumke', sub: 'Traditional Drops', count: 29, metal: 'silver', image: 'https://images.unsplash.com/photo-1583937443604-f42c0f2c6bef?w=700&q=85', tags: ['silver', 'traditional', 'party-wear'] },
]

const allItems = [...goldItems, ...silverItems]

const filterOptions = [
  { id: 'all', label: 'All' },
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
  { id: 'lightweight', label: 'Lightweight' },
  { id: 'daily-wear', label: 'Daily Wear' },
  { id: 'party-wear', label: 'Party Wear' },
  { id: 'bridal', label: 'Bridal' },
  { id: 'traditional', label: 'Traditional' },
]

const sortOptions = [
  { id: 'default', label: 'Featured' },
  { id: 'alpha-asc', label: 'A → Z' },
  { id: 'alpha-desc', label: 'Z → A' },
  { id: 'count-desc', label: 'Most Pieces' },
]

/* ── Category Card ────────────────────────────────── */
function CategoryCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      layout
      className="group relative card-gold-border cursor-pointer"
    >
      <Link to={`/shop?cat=${item.slug}`}>
        {/* Image */}
        <div className="img-overlay aspect-[3/4] overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/20 to-transparent z-10" />
        </div>

        {/* Metal badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className={`text-[0.6rem] tracking-[0.2em] uppercase px-2.5 py-1 ${
            item.metal === 'gold' ? 'bg-gold text-ivory' : 'bg-espresso/80 text-ivory border border-white/20'
          }`}>
            {item.metal}
          </span>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
          <p className="section-label text-gold/80 mb-1.5">{item.sub}</p>
          <h3 className="font-display text-ivory text-lg tracking-wide mb-1">{item.title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-ivory/40 text-xs tracking-widest">{item.count} pieces</span>
            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1 text-xs tracking-widest uppercase">
              View <ArrowRight size={11} />
            </span>
          </div>
        </div>

        {/* Gold border */}
        <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-all duration-500 pointer-events-none" />
        {/* Corner accents */}
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold/0 group-hover:border-gold/60 transition-all duration-500 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold/0 group-hover:border-gold/60 transition-all duration-500 pointer-events-none" />
      </Link>
    </motion.div>
  )
}

/* ── Shop Page ────────────────────────────────────── */
export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialMetal = searchParams.get('metal')
  const initialCat = searchParams.get('cat')

  const [activeFilter, setActiveFilter] = useState(
    initialMetal === 'gold' ? 'gold' : initialMetal === 'silver' ? 'silver' : 'all'
  )
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('default')
  const [sortOpen, setSortOpen] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let list = allItems
    if (activeFilter !== 'all') {
      list = list.filter(item => item.tags.includes(activeFilter))
    }
    if (search.trim()) {
      list = list.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.sub.toLowerCase().includes(search.toLowerCase())
      )
    }
    if (sort === 'alpha-asc') list = [...list].sort((a, b) => a.title.localeCompare(b.title))
    if (sort === 'alpha-desc') list = [...list].sort((a, b) => b.title.localeCompare(a.title))
    if (sort === 'count-desc') list = [...list].sort((a, b) => b.count - a.count)
    return list
  }, [activeFilter, search, sort])

  const goldCount = allItems.filter(i => i.metal === 'gold').length
  const silverCount = allItems.filter(i => i.metal === 'silver').length

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner
        title="Discover Timeless Elegance"
        subtitle="Fine Jewellery"
        image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1800&q=90"
      />

      {/* ── Metal category hero cards ──────────────────── */}
      <section className="py-20 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="section-label"
            >
              Shop by Metal
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-espresso text-4xl sm:text-5xl mt-4 mb-5"
            >
              Gold & Silver Jewellery
            </motion.h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Gold */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden cursor-pointer h-80 sm:h-96"
              onClick={() => setActiveFilter('gold')}
            >
              <img
                src="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1000&q=90"
                alt="Gold Jewellery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="section-label text-gold/80 mb-2 block">Fine Gold</span>
                <h3 className="font-display text-ivory text-3xl mb-2">Gold Jewellery</h3>
                <p className="text-ivory/50 text-sm mb-4">{goldCount} categories · 400+ pieces</p>
                <button className="btn-gold py-2.5 text-xs">Explore Gold</button>
              </div>
            </motion.div>

            {/* Silver */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group relative overflow-hidden cursor-pointer h-80 sm:h-96"
              onClick={() => setActiveFilter('silver')}
            >
              <img
                src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=1000&q=90"
                alt="Silver Jewellery"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
              <div className="absolute inset-0 border border-transparent group-hover:border-gold/40 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="section-label text-gold/80 mb-2 block">Sterling Silver</span>
                <h3 className="font-display text-ivory text-3xl mb-2">Silver Jewellery</h3>
                <p className="text-ivory/50 text-sm mb-4">{silverCount} categories · 250+ pieces</p>
                <button className="btn-gold py-2.5 text-xs">Explore Silver</button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Browse All Section ─────────────────────────── */}
      <section className="py-20 px-6 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* Toolbar */}
          <div className="flex flex-col md:flex-row gap-4 mb-10 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-72">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-espresso/40" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search categories..."
                className="w-full bg-ivory border border-espresso/15 pl-9 pr-4 py-3 text-sm text-espresso placeholder-espresso/35 outline-none focus:border-gold transition-colors tracking-wide font-body"
              />
              {search && (
                <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-espresso/40 hover:text-gold">
                  <X size={13} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {/* Filter toggle (mobile) */}
              <button
                onClick={() => setFiltersOpen(v => !v)}
                className="md:hidden flex items-center gap-2 border border-espresso/20 px-4 py-3 text-xs tracking-widest uppercase text-espresso hover:border-gold hover:text-gold transition-all"
              >
                <SlidersHorizontal size={13} /> Filters
              </button>

              {/* Result count */}
              <span className="text-espresso/40 text-xs tracking-widest">{filtered.length} categories</span>

              {/* Sort */}
              <div className="relative">
                <button
                  onClick={() => setSortOpen(v => !v)}
                  className="flex items-center gap-2 border border-espresso/20 px-4 py-3 text-xs tracking-widest uppercase text-espresso hover:border-gold hover:text-gold transition-all"
                >
                  {sortOptions.find(s => s.id === sort)?.label}
                  <ChevronDown size={12} className={`transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {sortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 top-full mt-1 bg-ivory border border-espresso/10 shadow-lg w-40 z-30"
                    >
                      {sortOptions.map(opt => (
                        <button
                          key={opt.id}
                          onClick={() => { setSort(opt.id); setSortOpen(false) }}
                          className={`w-full text-left px-4 py-3 text-xs tracking-wide transition-colors ${
                            sort === opt.id ? 'text-gold bg-espresso/5' : 'text-espresso/70 hover:text-gold hover:bg-espresso/3'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Filter pills */}
          <AnimatePresence>
            {(true) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="flex flex-wrap gap-2 mb-10"
              >
                {filterOptions.map(f => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-5 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                      activeFilter === f.id
                        ? 'bg-espresso text-ivory'
                        : 'bg-transparent text-espresso border border-espresso/25 hover:border-gold hover:text-gold'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Grid */}
          {filtered.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="font-display text-espresso/40 text-2xl mb-3">No categories found</p>
              <button onClick={() => { setSearch(''); setActiveFilter('all') }} className="btn-outline-gold">
                Clear Filters
              </button>
            </motion.div>
          ) : (
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              <AnimatePresence mode="popLayout">
                {filtered.map((item, i) => (
                  <CategoryCard key={item.slug} item={item} index={i} />
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  )
}
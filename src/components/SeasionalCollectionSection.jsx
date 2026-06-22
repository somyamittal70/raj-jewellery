import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const seasons = [
  {
    id: 'spring',
    label: 'Spring Collection',
    subtitle: 'Bloom & Blossom',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1000&q=90',
    accent: 'Rose Quartz & Tourmaline',
    description:
      'Inspired by the first bloom after winter’s quiet, our Spring Collection celebrates renewal through delicate floral motifs, pastel-hued gemstones, and gossamer-light gold settings.',
    pieces: '32 pieces',
    palette: ['#E8C4C4', '#D4A0A0', '#B08D57'],
  },
  {
    id: 'summer',
    label: 'Summer Collection',
    subtitle: 'Sun & Sea',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1000&q=90',
    accent: 'Aquamarine & Citrine',
    description:
      'Bold, luminous, and unapologetically radiant. Our Summer Collection channels the energy of long golden afternoons — vivid stones, sun-kissed textures, and statement silhouettes.',
    pieces: '41 pieces',
    palette: ['#F5D089', '#E8B84B', '#B08D57'],
  },
  {
    id: 'autumn',
    label: 'Autumn Collection',
    subtitle: 'Amber & Earth',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=1000&q=90',
    accent: 'Amber, Garnet & Smoky Topaz',
    description:
      'A rich tapestry of warmth and depth. Earthy gemstones meet burnished gold in pieces that carry the spirit of fallen leaves, harvest warmth, and quiet, elegant transformation.',
    pieces: '28 pieces',
    palette: ['#C4813A', '#A0612A', '#B08D57'],
  },
  {
    id: 'winter',
    label: 'Winter Collection',
    subtitle: 'Frost & Silence',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1000&q=90',
    accent: 'Diamonds & White Sapphire',
    description:
      'Ice-bright diamonds and platinum settings capture winter’s crystalline stillness. Each piece is a quiet declaration — restrained, precise, and breathtakingly luminous.',
    pieces: '37 pieces',
    palette: ['#E8E4F0', '#C8D4E0', '#B08D57'],
  },
]

function SeasonCard({ season, index, isActive, onClick }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      className="group relative cursor-pointer"
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <img
          src={season.image}
          alt={season.label}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-108"
          loading="lazy"
        />

        {/* Always-visible dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/10" />

        {/* Active gold frame */}
        <div
          className={`absolute inset-0 border transition-all duration-500 pointer-events-none ${
            isActive ? 'border-gold/60' : 'border-transparent group-hover:border-gold/30'
          }`}
        />

        {/* Corner accents */}
        {/* <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/0 group-hover:border-gold/70 transition-all duration-500 pointer-events-none" /> */}

        {/* Year badge */}
        <div className="absolute top-4 right-4 bg-espresso/80 backdrop-blur-sm px-3 py-1">
          <span className="section-label text-gold/90 text-[0.6rem] tracking-[0.25em]">{season.year}</span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="section-label text-gold/80 mb-2">{season.subtitle}</p>
          <h3 className="font-display text-ivory text-xl tracking-wide mb-3 leading-tight">
            {season.label}
          </h3>

          {/* Gem accent */}
          <div className="flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gold/50" />
            <span className="text-ivory/50 text-[0.65rem] tracking-[0.15em] uppercase">{season.accent}</span>
          </div>

          {/* Expandable description */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <p className="text-ivory/60 text-xs leading-relaxed mb-4">
                  {season.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer row */}
          <div className="flex items-center justify-between">
            <span className="text-ivory/35 text-xs tracking-widest">{season.pieces}</span>
            <Link
              to="/gallery"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 text-gold text-xs tracking-[0.15em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-gold-light"
            >
              Explore <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function SeasonalCollectionsSection() {
  const [activeId, setActiveId] = useState('winter')

  const handleCardClick = (id) => {
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <section className="py-28 px-6 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-18">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-label"
          >
            Season Collection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-display text-espresso text-4xl sm:text-5xl lg:text-6xl mt-4 mb-5 leading-tight"
          >
            Timeless Elegance
            <br />
            <span className="text-gold">For Every Season</span>
          </motion.h2>

          <div className="gold-divider mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-espresso/60 text-sm max-w-xl mx-auto leading-relaxed tracking-wide"
          >
            Showcase our carefully curated jewellery collections designed to complement
            every occasion and season.
          </motion.p>
        </div>

        {/* ── Season Selector Tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {seasons.map((s) => (
            <button
              key={s.id}
              onClick={() => handleCardClick(s.id)}
              className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                activeId === s.id
                  ? 'bg-espresso text-ivory'
                  : 'bg-transparent text-espresso border border-espresso/25 hover:border-gold hover:text-gold'
              }`}
            >
              {s.subtitle}
            </button>
          ))}
        </motion.div>

        {/* ── Cards Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {seasons.map((season, i) => (
            <SeasonCard
              key={season.id}
              season={season}
              index={i}
              isActive={activeId === season.id}
              onClick={() => handleCardClick(season.id)}
            />
          ))}
        </div>

        {/* ── Featured Active Panel ── */}
        <AnimatePresence mode="wait">
          {activeId && (() => {
            const active = seasons.find(s => s.id === activeId)
            return (
              <motion.div
                key={activeId}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden"
              >
                {/* Image panel */}
                <div className="relative h-100  overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.label}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/40" />
                  {/* Palette swatches */}
                  <div className="absolute bottom-6 left-6 flex gap-2">
                    {active.palette.map((color, i) => (
                      <div
                        key={i}
                        className="w-6 h-6 rounded-full border border-white/30"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>

                {/* Text panel */}
                <div className="bg-espresso p-10 sm:p-14 flex flex-col justify-center">
                  <span className="section-label text-gold/80 mb-4">{active.subtitle}</span>
                  <h3 className="font-display text-ivory text-3xl sm:text-4xl mb-2 leading-tight">
                    {active.label}
                  </h3>
                  <div className="h-px w-12 bg-gold/50 mb-6" />
                  <p className="text-ivory/55 text-sm leading-relaxed mb-4">
                    {active.description}
                  </p>
                  <div className="flex items-center gap-2 mb-8">
                    <div className="h-px w-8 bg-gold/40" />
                    <span className="text-ivory/40 text-[0.65rem] tracking-[0.2em] uppercase">
                      {active.accent}
                    </span>
                  </div>
                  <div className="flex items-center gap-5">
                    <Link to="/gallery" className="btn-gold">
                      View Collection
                    </Link>
                    <span className="text-ivory/30 text-xs tracking-widest">{active.pieces}</span>
                  </div>
                </div>
              </motion.div>
            )
          })()}
        </AnimatePresence>

        {/* ── Footer CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
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
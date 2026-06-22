import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getWhatsAppUrl } from '../utils/whatsapp'

/* WhatsApp SVG icon (inline, no external dep) */
function WhatsAppIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/**
 * ProductCard — used across Shop, Collections, and related grids.
 * index prop drives the stagger delay.
 */
export default function ProductCard({ product, index = 0, layout = 'portrait' }) {
  const waUrl = getWhatsAppUrl(product)

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      layout
      className="group relative card-gold-border bg-ivory flex flex-col w-full"
    >
      {/* ── Image ───────────────────────────────── */}
      <Link to={`/shop/${product.slug}`} className="relative overflow-hidden block">
        <div className={`overflow-hidden ${layout === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>

        {/* Metal badge */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
          <span className={`text-[0.52rem] sm:text-[0.58rem] tracking-[0.15em] sm:tracking-[0.2em] uppercase px-2 sm:px-2.5 py-0.5 sm:py-1 font-body ${
            product.metal === 'gold'
              ? 'bg-gold text-ivory'
              : 'bg-espresso/85 text-ivory border border-white/15'
          }`}>
            {product.metal}
          </span>
        </div>

        {/* Quick view hint (hidden on touch/small screens since hover doesn't apply) */}
        <div className="absolute inset-0 hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="bg-ivory/90 px-4 py-2 font-display text-espresso text-xs tracking-widest">
            View Details
          </span>
        </div>


      </Link>

      {/* ── Info ────────────────────────────────── */}
      <div className="p-3 sm:p-4 md:p-5 flex flex-col flex-1">
        <p className="section-label text-[0.55rem] sm:text-[0.6rem] mb-1 sm:mb-1.5">{product.category}</p>
        <Link to={`/shop/${product.slug}`}>
          <h3 className="font-display text-espresso text-sm sm:text-base md:text-lg tracking-wide leading-snug mb-1.5 sm:mb-2 hover:text-gold transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-espresso/55 text-[0.7rem] sm:text-xs leading-relaxed mb-3 sm:mb-4 flex-1 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch gap-1.5 sm:gap-2 mt-auto pt-3 border-t border-espresso/8">
          <Link
            to={`/shop/${product.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 border border-espresso/20 py-2 sm:py-2.5 text-espresso text-[0.6rem] sm:text-[0.65rem] tracking-[0.1em] sm:tracking-[0.12em] uppercase hover:border-gold hover:text-gold transition-all duration-300"
          >
            Details <ArrowRight size={11} />
          </Link>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-3 py-2 sm:py-2.5 text-[0.6rem] sm:text-[0.65rem] tracking-[0.08em] sm:tracking-[0.1em] uppercase transition-colors duration-300"
            title="Enquire on WhatsApp"
          >
            <WhatsAppIcon size={13} />
            <span className="inline">Enquire</span>
          </a>
        </div>
      </div>
    </motion.article>
  )
}

/* WhatsApp icon re-export for use in detail page */
export { WhatsAppIcon }
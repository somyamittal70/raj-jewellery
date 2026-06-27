import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Shield, Award, Check, Star } from 'lucide-react'
import { getProductByPath, getRelatedProducts, getWhatsAppUrl, getCategoryBySlug } from '../data/Product'

/* ── WhatsApp icon ────────────────────────────────── */
function WAIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ── Image Gallery ────────────────────────────────── */
function ImageGallery({ images, name }) {
  const [active, setActive] = useState(0)
  const [dir, setDir] = useState(1)

  const go = (i) => { setDir(i > active ? 1 : -1); setActive(i) }
  const prev = () => go(active === 0 ? images.length - 1 : active - 1)
  const next = () => go(active === images.length - 1 ? 0 : active + 1)

  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-hidden aspect-square bg-ivory">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.img
            key={active}
            src={images[active]}
            alt={name}
            custom={dir}
            initial={{ opacity: 0, x: dir * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -60 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-ivory/80 backdrop-blur-sm border border-espresso/15 hover:border-gold flex items-center justify-center text-espresso hover:text-gold transition-all">
              <ChevronLeft size={16} />
            </button>
            <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-ivory/80 backdrop-blur-sm border border-espresso/15 hover:border-gold flex items-center justify-center text-espresso hover:text-gold transition-all">
              <ChevronRight size={16} />
            </button>
          </>
        )}
        <div className="absolute bottom-3 right-3 bg-espresso/70 px-2.5 py-1">
          <span className="text-ivory text-[0.6rem] tracking-widest">{active + 1} / {images.length}</span>
        </div>
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-2">
          {images.map((src, i) => (
            <button key={i} onClick={() => go(i)} className={`aspect-square overflow-hidden border-2 transition-all duration-300 ${active === i ? 'border-gold' : 'border-transparent hover:border-gold/40'}`}>
              <img src={src} alt={`${name} ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Trust badge ──────────────────────────────────── */
function TrustBadge({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 p-5 border border-espresso/8 hover:border-gold/30 transition-colors duration-300">
      <div className="w-10 h-10 border border-gold/40 flex items-center justify-center flex-shrink-0 text-gold">
        <Icon size={18} strokeWidth={1.5} />
      </div>
      <div>
        <div className="font-display text-espresso text-sm tracking-wide">{title}</div>
        <div className="text-espresso/50 text-xs mt-0.5 leading-relaxed">{desc}</div>
      </div>
    </div>
  )
}

/* ── Related product mini card ────────────────────── */
function MiniCard({ product }) {
  const waUrl = getWhatsAppUrl(product)
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group card-gold-border bg-ivory"
    >
      <Link to={product.detailPath} className="block">
        <div className="aspect-square overflow-hidden">
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
        </div>
        <div className="p-4">
          <p className="section-label text-[0.58rem] mb-1">{product.category}</p>
          <h4 className="font-display text-espresso text-sm tracking-wide mb-2 group-hover:text-gold transition-colors line-clamp-1">{product.name}</h4>
          <div className="flex gap-2">
            <Link to={product.detailPath} className="flex-1 text-center border border-espresso/20 py-2 text-[0.6rem] tracking-widest uppercase hover:border-gold hover:text-gold transition-all">
              View
            </Link>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 bg-[#25D366] hover:bg-[#1ebe5b] text-white transition-colors">
              <WAIcon size={12} />
            </a>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

/* ── Main Detail Page ─────────────────────────────── */
export default function ProductDetail() {
  const { p1, p2, p3, p4 } = useParams()

  // Determine categorySlug and productSlug based on how many segments we have
  let categorySlug, productSlug

  if (p4) {
    // 4 segments: /shop/gold/mens/rings/classic-gold-band
    categorySlug = [p1, p2, p3].join('/')
    productSlug = p4
  } else {
    // 3 segments: could be:
    //   /shop/gold/bridal/royal-bridal-set  (special 2-part category + product)
    //   /shop/gold/mens/rings               (3-part category — redirect to category page)
    const twoPartCat = getCategoryBySlug([p1, p2].join('/'))
    if (twoPartCat) {
      // p1/p2 is a valid category (e.g. gold/bridal), so p3 is the product
      categorySlug = [p1, p2].join('/')
      productSlug = p3
    } else {
      // p1/p2/p3 might be a category — redirect there
      categorySlug = [p1, p2, p3].filter(Boolean).join('/')
      productSlug = null
    }
  }

  const product = productSlug ? getProductByPath(categorySlug, productSlug) : null

  // If no product found, try redirecting to matching category
  if (!product) {
    const asCategory = getCategoryBySlug([p1, p2, p3].filter(Boolean).join('/'))
    if (asCategory) return <Navigate to={asCategory.path} replace />
    return <Navigate to="/shop" replace />
  }

  const category = getCategoryBySlug(categorySlug)
  const related = getRelatedProducts(categorySlug, productSlug, 4)
  const waUrl = getWhatsAppUrl(product)

  const genderLabel = { men: "Men's", women: "Women's", kids: "Kids'", unisex: '' }[product.gender] || ''
  const categoryPath = category?.path || '/shop'

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>

      {/* Breadcrumb */}
      <div className="pt-28 pb-4 px-6 bg-ivory border-b border-espresso/8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[0.65rem] tracking-widest uppercase text-espresso/40 flex-wrap">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <span>/</span>
            <Link to={categoryPath} className="hover:text-gold transition-colors capitalize">{product.category}</Link>
            <span>/</span>
            <span className="text-espresso/70">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product detail */}
      <section className="py-14 px-6 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}>
              <ImageGallery images={product.images} name={product.name} />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }} className="flex flex-col">

              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="section-label">{product.category}</span>
                <div className="h-px w-4 bg-gold/40" />
                <span className={`text-[0.6rem] tracking-[0.2em] uppercase px-2.5 py-1 ${product.metal === 'gold' ? 'bg-gold text-ivory' : 'bg-espresso text-ivory'}`}>
                  {product.metal}
                </span>
                {genderLabel && (
                  <span className="text-[0.6rem] tracking-[0.2em] uppercase px-2.5 py-1 border border-espresso/20 text-espresso/60">{genderLabel}</span>
                )}
              </div>

              <h1 className="font-display text-espresso text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">{product.name}</h1>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="text-gold fill-gold" />)}
                </div>
                <span className="text-espresso/40 text-xs tracking-wide">Mastercraft Certified</span>
              </div>

              <div className="gold-divider-left mb-6" />

              <p className="text-espresso/65 text-sm leading-relaxed mb-5">{product.shortDescription}</p>
              <p className="text-espresso/55 text-sm leading-relaxed mb-8 border-l-2 border-gold/30 pl-4">{product.fullDescription}</p>

              {product.features?.length > 0 && (
                <div className="mb-8">
                  <p className="section-label text-[0.65rem] mb-4">Features</p>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check size={12} className="text-gold flex-shrink-0" strokeWidth={2.5} />
                        <span className="text-espresso/65 text-xs tracking-wide">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <div className="btn-gold flex items-center w-full sm:w-auto justify-center">
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <WAIcon size={16} />
                  Enquire on WhatsApp
                </a>
                </div>
                <Link to="/contact" className="btn-outline-gold flex items-center justify-center py-4 text-sm">
                  Book Consultation
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <TrustBadge icon={Award} title="Handcrafted Jewellery" desc="Each piece shaped by master artisans with decades of experience." />
                <TrustBadge icon={Shield} title="BIS Hallmarked & Certified" desc="All gold and silver pieces meet BIS certification standards." />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-14 px-6 bg-espresso">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-ivory text-2xl mb-1">Interested in {product.name}?</h3>
            <p className="text-ivory/50 text-sm">Chat with our experts for details, availability & custom orders.</p>
          </div>
          <div className="btn-gold flex items-center w-full sm:w-auto justify-center">
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <WAIcon size={16} />
            Enquire on WhatsApp
          </a>
          </div>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="py-24 px-6 bg-ivory">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="section-label">You May Also Love</span>
              <h2 className="font-display text-espresso text-4xl mt-4 mb-5">Related Pieces</h2>
              <div className="gold-divider" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {related.map((p) => <MiniCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </motion.div>
  )
}
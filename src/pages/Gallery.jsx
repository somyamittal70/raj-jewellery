import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import PageBanner from '../components/PageBanner'

const categories = ['All', 'Rings', 'Necklaces', 'Bracelets', 'Earrings', 'Wedding']

const images = [
  { src: 'https://i.pinimg.com/736x/2f/57/7e/2f577e44dc51080ff1c9bbbeca505bea.jpg', cat: 'Rings', title: 'Solitaire Gold Ring', tall: true },
  { src: 'https://i.pinimg.com/webp/1200x/f7/ed/c7/f7edc72c9f34c0e5d6df6751a165b3a0.webp', cat: 'Necklaces', title: 'Gold Pendant Necklace' },
  { src: 'https://i.pinimg.com/736x/b1/87/10/b1871024948c5b1b0acef0cf67f8b38e.jpg', cat: 'Bracelets', title: 'Gold Tennis Bracelet' },
  { src: 'https://i.pinimg.com/1200x/a1/2a/89/a12a89b422fc5394b6f66b410e1adf05.jpg', cat: 'Earrings', title: 'Drop Pearl Earrings', tall: true },
  { src: 'https://i.pinimg.com/1200x/02/96/3d/02963da1184b28bb5363f1a7784bee5b.jpg', cat: 'Rings', title: 'Rose Gold Halo Ring' },
  { src: 'https://i.pinimg.com/736x/e5/ae/f2/e5aef21554f7736aaf2fcb225dfd36dd.jpg', cat: 'Necklaces', title: 'Layered Gold Chain' },
  { src: 'https://i.pinimg.com/736x/55/5c/da/555cdad485e8529f1354c6877d55987b.jpg', cat: 'Wedding', title: 'Bridal Jewellery Set', tall: true },
  { src: 'https://i.pinimg.com/736x/4e/d3/bb/4ed3bb7e4aa56266e8a1dcb3266b2f01.jpg', cat: 'Bracelets', title: 'Bangle Stack' },
  { src: 'https://i.pinimg.com/webp/736x/50/31/6c/50316c15951de897d28cadfdebe51983.webp', cat: 'Rings', title: 'Emerald Cut Ring' },
  { src: 'https://i.pinimg.com/webp/1200x/a5/f8/c2/a5f8c2e5551143f9f5dd88b872a0838b.webp', cat: 'Necklaces', title: 'Pearl Strand Necklace' },
  { src: 'https://i.pinimg.com/1200x/02/32/b8/0232b8d6a3652dc6785b0113651e1afe.jpg', cat: 'Earrings', title: 'Gold Stud Earrings' },
  { src: 'https://i.pinimg.com/736x/f3/ec/a5/f3eca562b04654e8599bd12f5af416ae.jpg', cat: 'Wedding', title: 'Wedding Band Set', tall: true },
  { src: 'https://i.pinimg.com/736x/49/39/d4/4939d4aa44609c75a64f49be6dd98646.jpg', cat: 'Bracelets', title: 'Gold Cuff Bracelet' },
  { src: 'https://i.pinimg.com/736x/4f/5c/fe/4f5cfe1ef3ef296dec16b39c396b3428.jpg', cat: 'Rings', title: 'Vintage Band Ring' },
  { src: 'https://i.pinimg.com/1200x/c9/c6/8f/c9c68ffa3eef079e70f3779a598d66eb.jpg', cat: 'Necklaces', title: 'Diamond Choker' },
  { src: 'https://i.pinimg.com/736x/d7/c6/4c/d7c64c9511067c9065b56405e1ff7634.jpg', cat: 'Earrings', title: 'Chandelier Earrings', tall: true },
  { src: 'https://i.pinimg.com/736x/8b/0d/ec/8b0dec17ebfde9caba281f239ca3d325.jpg', cat: 'Wedding', title: 'Engagement Ring' },
  { src: 'https://i.pinimg.com/736x/63/7f/28/637f286b3947afa7fa851a744ce0ad8e.jpg', cat: 'Bracelets', title: 'Charm Bracelet' },
  { src: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z29sZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D', cat: 'Rings', title: 'Sapphire Ring' },
  { src: 'https://i.pinimg.com/736x/5c/8b/e3/5c8be3402eef0b826f98d6f129c2dda9.jpg', cat: 'Necklaces', title: 'Emerald Necklace', tall: true },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? images : images.filter(img => img.cat === active)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner
        title="Our Gallery"
        subtitle="The Collection"
        image="/banner3.png"
      />

      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-cream min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-2 justify-center mb-10 sm:mb-14"
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 text-xs tracking-[0.15em] uppercase font-body transition-all duration-300 ${
                  active === cat
                    ? 'bg-espresso text-ivory'
                    : 'bg-transparent text-espresso border border-espresso/30 hover:border-gold hover:text-gold'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry gallery */}
          <motion.div layout className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="masonry-item group relative cursor-pointer overflow-hidden"
                  onClick={() => setLightbox(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-3">
                    <ZoomIn className="text-ivory" size={28} strokeWidth={1.5} />
                    <span className="font-display text-ivory text-sm tracking-wider">{img.title}</span>
                    <span className="section-label text-gold/80 text-[0.6rem]">{img.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-ivory hover:text-gold transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X size={28} strokeWidth={1.5} className="sm:hidden" />
              <X size={32} strokeWidth={1.5} className="hidden sm:block" />
            </button>
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-3xl w-full"
            >
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="w-full max-h-[80vh] sm:max-h-[85vh] object-contain"
              />
              <div className="mt-3 sm:mt-4 text-center">
                <div className="font-display text-ivory text-lg sm:text-xl tracking-wide">{lightbox.title}</div>
                <div className="section-label text-gold/70 mt-1">{lightbox.cat}</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
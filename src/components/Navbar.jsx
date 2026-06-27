import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'

/* ── Data ───────────────────────────────────────────── */
const goldMensCategories = [
  { label: 'Rings',           sub: 'Classic & Signet',    path: '/shop/gold/mens/rings' },
  { label: 'Neck Chains',     sub: 'Curb, Rope & Figaro', path: '/shop/gold/mens/chains' },
  { label: 'Earrings',        sub: 'Studs & Hoops',       path: '/shop/gold/mens/earrings' },
  { label: 'Bali',            sub: 'Traditional Hoops',   path: '/shop/gold/mens/bali' },
  { label: 'Bracelets',       sub: 'Curb & ID',           path: '/shop/gold/mens/bracelets' },
  { label: 'Kada',            sub: 'Bold Cuffs',          path: '/shop/gold/mens/kada' },
  { label: 'Kanthi',          sub: 'Devotional',          path: '/shop/gold/mens/kanthi' },
  { label: 'Om Lockets',      sub: 'Sacred Designs',      path: '/shop/gold/mens/om-lockets' },
  { label: 'Maa Lockets',     sub: 'Divine Tribute',      path: '/shop/gold/mens/maa-lockets' },
  { label: 'Gurjar Lockets',  sub: 'Cultural Heritage',   path: '/shop/gold/mens/gurjar-lockets' },
  { label: 'Om Collection',   sub: 'Sacred Jewellery',    path: '/shop/gold/mens/om-collection' },
]

const goldWomensCategories = [
  { label: 'Rings',            sub: 'Solitaire & Cocktail', path: '/shop/gold/womens/rings' },
  { label: 'Neck Chains',      sub: 'Box, Herringbone',     path: '/shop/gold/womens/chains' },
  { label: 'Earrings',         sub: 'Drops & Studs',        path: '/shop/gold/womens/earrings' },
  { label: 'Necklaces',        sub: 'Pearl & Layered',      path: '/shop/gold/womens/necklaces' },
  { label: 'Chokers',          sub: 'Statement Pieces',     path: '/shop/gold/womens/chokers' },
  { label: 'Rani Haar',        sub: 'Bridal Style',         path: '/shop/gold/womens/rani-haar' },
  { label: 'Bali',             sub: 'Floral & Diamond',     path: '/shop/gold/womens/bali' },
  { label: 'Bracelets',        sub: 'Tennis & Charm',       path: '/shop/gold/womens/bracelets' },
  { label: 'Chudi',            sub: 'Traditional Sets',     path: '/shop/gold/womens/chudi' },
  { label: 'Kada',             sub: 'Floral & Diamond',     path: '/shop/gold/womens/kada' },
  { label: 'Mangalsutra',      sub: 'Bridal Wear',          path: '/shop/gold/womens/mangalsutra' },
  { label: 'Nath',             sub: 'Bridal Nose Ring',     path: '/shop/gold/womens/nath' },
  { label: 'Nose Rings',       sub: 'Classic Designs',      path: '/shop/gold/womens/nose-rings' },
  { label: 'Nose Pins',        sub: 'Elegant Styles',       path: '/shop/gold/womens/nose-pins' },
  { label: 'Kundal',           sub: 'Traditional',          path: '/shop/gold/womens/kundal' },
  { label: 'Jhumki',           sub: 'Traditional Drops',    path: '/shop/gold/womens/jhumki' },
  { label: 'Tops',             sub: 'Modern Studs',         path: '/shop/gold/womens/tops' },
  { label: 'Temple Jewellery', sub: 'Sacred Art',           path: '/shop/gold/womens/temple' },
]

const goldSpecialCategories = [
  { label: 'Bridal Jewellery', sub: 'Complete Sets',   path: '/shop/gold/bridal' },
  { label: 'Kids Jewellery',   sub: 'Delicate Pieces', path: '/shop/gold/kids' },
  { label: 'Gold Coins',       sub: 'Investment',      path: '/shop/gold/coins' },
]

const silverMensCategories = [
  { label: 'Rings',     sub: 'Oxidised & Plain', path: '/shop/silver/mens/rings' },
  { label: 'Chains',    sub: 'Curb & Rope',      path: '/shop/silver/mens/chains' },
  { label: 'Kada',      sub: 'Bold Cuffs',       path: '/shop/silver/mens/kada' },
  { label: 'Bracelets', sub: 'Curb & ID',        path: '/shop/silver/mens/bracelets' },
]

const silverWomensCategories = [
  { label: 'Rings',     sub: 'Filigree & Stone',  path: '/shop/silver/womens/rings' },
  { label: 'Chains',    sub: 'Box & Ball',         path: '/shop/silver/womens/chains' },
  { label: 'Earrings',  sub: 'Drops & Studs',      path: '/shop/silver/womens/earrings' },
  { label: 'Jhumke',    sub: 'Traditional Drops',  path: '/shop/silver/womens/jhumke' },
  { label: 'Payal',     sub: 'Ankle Bracelets',    path: '/shop/silver/womens/payal' },
  { label: 'Toe Rings', sub: 'Classic Styles',     path: '/shop/silver/womens/toe-rings' },
  { label: 'Bracelets', sub: 'Filigree & Charm',   path: '/shop/silver/womens/bracelets' },
  { label: 'Kada',      sub: 'Floral & Filigree',  path: '/shop/silver/womens/kada' },
  { label: 'Pendants',  sub: 'Om & Hamsa',         path: '/shop/silver/womens/pendants' },
]

const silverSpecialCategories = [
  { label: 'Kids Silver',  sub: 'Safe & Delicate', path: '/shop/silver/kids' },
  { label: 'Silver Coins', sub: 'Pure Silver',     path: '/shop/silver/coins' },
  { label: 'Gift Items',   sub: 'Premium Gifting', path: '/shop/silver/gifts' },
]

const collectionLinks = [
  { label: "Men's Lightweight",   path: '/collections/mens/lightweight' },
  { label: "Men's Daily Wear",    path: '/collections/mens/daily-wear' },
  { label: "Men's Party Wear",    path: '/collections/mens/party-wear' },
  { label: "Men's Traditional",   path: '/collections/mens/traditional' },
  { label: "Women's Lightweight", path: '/collections/womens/lightweight' },
  { label: "Women's Daily Wear",  path: '/collections/womens/daily-wear' },
  { label: "Women's Party Wear",  path: '/collections/womens/party-wear' },
  { label: "Women's Traditional", path: '/collections/womens/traditional' },
  { label: 'Bridal Collection',   path: '/collections/bridal' },
  { label: 'Kids Collection',     path: '/collections/kids' },
]

const navLinks = [
  { to: '/',           label: 'Home' },
  { to: '/about',      label: 'About' },
  { to: '/gallery',    label: 'Gallery' },
  { to: '/collections',label: 'Collections' },
  { to: '/contact',    label: 'Contact' },
  { to: '/shop',       label: 'Shop', hasMega: true },
]

/* ── Mobile accordion section ───────────────────────── */
function MobileSection({ title, items, onClose }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-ivory/70 text-xs tracking-[0.15em] uppercase"
      >
        {title}
        <ChevronDown size={14} className={`text-gold transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="pb-4 grid grid-cols-2 gap-x-4 gap-y-0.5">
              {items.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={onClose}
                  className="text-ivory/45 hover:text-gold text-[0.7rem] py-2 tracking-wide transition-colors border-b border-white/5 leading-snug"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Category column ─────────────────────────────────── */
function CategoryColumn({ title, items, onClose }) {
  return (
    <div>
      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-espresso/40 mb-3 pb-2 border-b border-espresso/8">{title}</p>
      <div className="flex flex-col gap-0.5">
        {items.map(cat => (
          <Link
            key={cat.path}
            to={cat.path}
            onClick={onClose}
            className="group flex items-start gap-2 py-1.5 hover:text-gold transition-colors duration-200"
          >
            <ChevronRight size={10} className="text-gold/40 mt-0.5 flex-shrink-0 group-hover:text-gold transition-colors" />
            <div>
              <div className="text-espresso text-xs font-body tracking-wide group-hover:text-gold transition-colors leading-snug">{cat.label}</div>
              <div className="text-espresso/40 text-[0.58rem] tracking-wide leading-snug">{cat.sub}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ── Desktop Mega Menu ───────────────────────────────── */
function MegaMenu({ onClose, onMouseEnter, onMouseLeave }) {
  const [activeTab, setActiveTab] = useState('gold')

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed left-0 right-0 bg-ivory border-t border-espresso/10 shadow-2xl z-50"
      style={{ top: '64px' }}
    >
      {/* Tabs */}
      <div className="flex border-b border-espresso/10">
        {[
          { id: 'gold',   label: 'Gold Jewellery' },
          { id: 'silver', label: 'Silver Jewellery' },
        ].map(tab => (
          <button
            key={tab.id}
            onMouseEnter={() => setActiveTab(tab.id)}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-xs tracking-[0.15em] uppercase font-body transition-all duration-200 ${
              activeTab === tab.id ? 'bg-espresso text-ivory' : 'text-espresso/60 hover:text-gold'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 max-h-[75vh] overflow-y-auto">
        {activeTab === 'gold' && (
          <div>
            <div className="grid grid-cols-3 gap-8">
              <CategoryColumn title="Men's Gold" items={goldMensCategories} onClose={onClose} />
              <div className="col-span-2">
                <p className="text-[0.6rem] tracking-[0.2em] uppercase text-espresso/40 mb-3 pb-2 border-b border-espresso/8">Women's Gold</p>
                <div className="grid grid-cols-2 gap-x-6 gap-y-0.5">
                  {goldWomensCategories.map(cat => (
                    <Link
                      key={cat.path}
                      to={cat.path}
                      onClick={onClose}
                      className="group flex items-start gap-2 py-1.5 hover:text-gold transition-colors duration-200"
                    >
                      <ChevronRight size={10} className="text-gold/40 mt-0.5 flex-shrink-0 group-hover:text-gold transition-colors" />
                      <div>
                        <div className="text-espresso text-xs font-body tracking-wide group-hover:text-gold transition-colors leading-snug">{cat.label}</div>
                        <div className="text-espresso/40 text-[0.58rem] tracking-wide leading-snug">{cat.sub}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-espresso/8">
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-espresso/40 mb-3">Special Collections</p>
              <div className="flex flex-wrap gap-2">
                {goldSpecialCategories.map(cat => (
                  <Link key={cat.path} to={cat.path} onClick={onClose}
                    className="px-4 py-2 border border-espresso/15 hover:border-gold text-xs tracking-wide text-espresso hover:text-gold transition-all duration-300">
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'silver' && (
          <div>
            <div className="grid grid-cols-2 gap-8">
              <CategoryColumn title="Men's Silver" items={silverMensCategories} onClose={onClose} />
              <CategoryColumn title="Women's Silver" items={silverWomensCategories} onClose={onClose} />
            </div>

            <div className="mt-5 pt-4 border-t border-espresso/8">
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-espresso/40 mb-3">Special Collections</p>
              <div className="flex flex-wrap gap-2">
                {silverSpecialCategories.map(cat => (
                  <Link key={cat.path} to={cat.path} onClick={onClose}
                    className="px-4 py-2 border border-espresso/15 hover:border-gold text-xs tracking-wide text-espresso hover:text-gold transition-all duration-300">
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

/* ── Main Navbar ─────────────────────────────────────── */
export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [megaOpen, setMegaOpen]   = useState(false)
  const headerRef                 = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // ── Escape key to close mega menu ──
  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') setMegaOpen(false) }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-5 flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="/logo3.png"
              alt="Raj Jewellers logo"
              className="w-auto object-contain transition-all duration-500"
              style={{ height: scrolled ? '70px' : '75px' }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8 mx-6 xl:mx-10 space-x-2">
            {navLinks.map(({ to, label, hasMega }) =>
              hasMega ? (
                // ── onMouseEnter/Leave on the wrapper div ──
                <div
                  key={to}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <button
                    onClick={() => setMegaOpen(v => !v)}
                    className={`nav-link flex items-center gap-1 text-xs tracking-[0.12em] uppercase font-body whitespace-nowrap ${
                      megaOpen ? 'text-gold' : 'text-espresso'
                    }`}
                  >
                    {label}
                    <ChevronDown size={12} className={`transition-transform duration-300 ${megaOpen ? 'rotate-180 text-gold' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {megaOpen && (
                      <MegaMenu
                        onClose={() => setMegaOpen(false)}
                        onMouseEnter={() => setMegaOpen(true)}
                        onMouseLeave={() => setMegaOpen(false)}
                      />
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `nav-link text-xs tracking-[0.12em] uppercase font-body whitespace-nowrap ${
                      isActive ? 'active text-gold' : 'text-espresso'
                    }`
                  }
                >
                  {label}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <Link to="/contact" className="btn-gold text-xs whitespace-nowrap px-4 xl:px-5">
              Book Consultation
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-colors text-espresso hover:text-gold"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="drawer"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[min(320px,85vw)] bg-espresso flex flex-col lg:hidden overflow-hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 flex-shrink-0">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img src="/logo.png" alt="Raj Jewellers" className="h-10 w-auto object-contain brightness-0 invert" />
                </Link>
                <button onClick={() => setMenuOpen(false)} className="text-ivory/60 hover:text-gold transition-colors p-1" aria-label="Close menu">
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <nav className="flex flex-col mb-2">
                  {navLinks.filter(link => !link.hasMega).map(({ to, label }) => (
                    <NavLink
                      key={to} to={to} end={to === '/'}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `py-3.5 text-sm tracking-[0.12em] uppercase font-body border-b border-white/8 transition-colors duration-200 ${
                          isActive ? 'text-gold' : 'text-ivory/80 hover:text-gold'
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  ))}
                </nav>

                <div className="mt-2">
                  <p className="text-gold/60 text-[0.6rem] tracking-[0.2em] uppercase mb-3 mt-2">Gold</p>
                  <MobileSection title="Men's Gold"   items={goldMensCategories}     onClose={() => setMenuOpen(false)} />
                  <MobileSection title="Women's Gold" items={goldWomensCategories}   onClose={() => setMenuOpen(false)} />
                  <MobileSection title="Gold Special" items={goldSpecialCategories}  onClose={() => setMenuOpen(false)} />

                  <p className="text-gold/60 text-[0.6rem] tracking-[0.2em] uppercase mb-3 mt-4">Silver</p>
                  <MobileSection title="Men's Silver"   items={silverMensCategories}    onClose={() => setMenuOpen(false)} />
                  <MobileSection title="Women's Silver" items={silverWomensCategories}  onClose={() => setMenuOpen(false)} />
                  <MobileSection title="Silver Special" items={silverSpecialCategories} onClose={() => setMenuOpen(false)} />

                  <p className="text-gold/60 text-[0.6rem] tracking-[0.2em] uppercase mb-3 mt-4">Collections</p>
                  <MobileSection title="All Collections" items={collectionLinks} onClose={() => setMenuOpen(false)} />
                </div>
              </div>

              {/* Drawer footer */}
              <div className="flex-shrink-0 px-6 py-5 border-t border-white/10">
                <Link to="/contact" onClick={() => setMenuOpen(false)} className="btn-gold w-full text-center block text-xs tracking-[0.15em]">
                  Book Consultation
                </Link>
                <p className="text-ivory/25 text-[0.6rem] text-center mt-3 tracking-wide">Raj Jewellers · Est. 1999</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
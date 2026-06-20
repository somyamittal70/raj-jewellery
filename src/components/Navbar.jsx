import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to:'/collection',label:'Collections'},
  { to: '/contact', label: 'Contact' },
  { to:'/shop',label:'Shop'}
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-nav py-3 shadow-sm' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-12">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start group">
          
             <img
            src="/logo.png"
            alt="Raj Jewellwer logo"
            className={`w-auto object-contain transition-all duration-500 ${
              scrolled ? 'h-20 md:h-20' : 'h-20 md:h-20'
            }`}
            style={{ maxHeight: scrolled ? '80px' : '89px' }}
          />
        
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map(({ to, label }) => (
            <NavLink
  key={to}
  to={to}
  end={to === '/'}
  className={({ isActive }) =>
    `nav-link ${
      isActive
        ? 'active text-[#2B2118]':
   
        'text-espresso'
    }`
  }
>
  {label}
</NavLink>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link to="/contact" className="btn-gold text-xs">
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-espresso hover:text-gold transition-colors"
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-espresso flex flex-col items-center justify-center gap-10"
          >
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-display text-3xl tracking-widest transition-colors duration-300 ${
                    isActive ? 'text-gold' : 'text-ivory hover:text-gold'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-gold mt-4"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

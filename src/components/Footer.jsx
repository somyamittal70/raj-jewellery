import { Link } from 'react-router-dom'
import { Instagram, Facebook, Send } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className="bg-charcoal text-ivory/70">
      {/* Top strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12">

          {/* Brand — FIX: col-span-2 on sm so it gets full row, then normal on md */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo2.png"
                alt="Raj Jewellers logo"
                className="w-auto object-contain h-20"
              />
            </Link>
            <p className="text-sm leading-relaxed text-ivory/50 max-w-xs">
              Handcrafted luxury jewellery where timeless artistry meets modern elegance.
              Each piece tells a story of devotion.
            </p>
            

            <div className="flex gap-3 mt-6">
  {/* Instagram */}
  <a
    href="https://www.instagram.com/rajjewellers__1999?igsh=MWUzMGJkcDR2ZXk2OQ%3D%3D&utm_source=qr"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
    aria-label="Instagram"
  >
    <Instagram size={16} />
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/1EaAAhGR42/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition-all duration-300"
    aria-label="Facebook"
  >
    <Facebook size={16} />
  </a>

  {/* Pinterest (optional) */}
 
</div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-ivory text-base tracking-wider mb-5 sm:mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Gallery', 'Contact'].map(page => (
                <li key={page}>
                  <Link
                    to={page === 'Home' ? '/' : `/${page.toLowerCase()}`}
                    className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300 tracking-wide"
                  >
                    {page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-ivory text-base tracking-wider mb-5 sm:mb-6">Collections</h4>
            <ul className="space-y-3">
              {['Diamond Rings', 'Gold Necklaces', 'Luxury Bracelets', 'Wedding Collection', 'Earrings'].map(item => (
                <li key={item}>
                  <Link to="/collections" className="text-sm text-ivory/50 hover:text-gold transition-colors duration-300 tracking-wide">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter — FIX: col-span-2 on sm so input doesn't get squished */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-display text-ivory text-base tracking-wider mb-5 sm:mb-6">Newsletter</h4>
            <p className="text-sm text-ivory/50 mb-5 leading-relaxed">
              Receive exclusive previews and invitations to private events.
            </p>
            {subscribed ? (
              <p className="text-gold text-sm tracking-wide">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-0 max-w-sm">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 min-w-0 bg-white/5 border border-white/10 px-3 sm:px-4 py-3 text-sm text-ivory placeholder-ivory/30 outline-none focus:border-gold transition-colors font-body"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-light px-4 py-3 text-white transition-colors flex items-center flex-shrink-0"
                >
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar — FIX: text-center on mobile */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2 sm:gap-3 text-center md:text-left">
        <p className="text-xs text-ivory/30 tracking-widest">
          © 2026 RAJ JEWELLERS & SONS . ALL RIGHTS RESERVED.
        </p>
        <p className="text-xs text-ivory/20 tracking-wider">
          CRAFTED WITH DEVOTION
        </p>
      </div>
    </footer>
  )
}
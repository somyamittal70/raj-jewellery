import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import { ShopLanding } from './pages/Shop'
import CategoryListingPage from './pages/Shop'
import CollectionPage, { CollectionsLanding } from './pages/Collections'
import ProductDetail from './pages/ProductDetail'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
<Route path="/shop" element={<ShopLanding />} />
<Route path="/shop/:p1/:p2/:p3/:p4" element={<ProductDetail />} />
<Route path="/shop/:p1/:p2/:p3" element={<CategoryListingPage />} />
<Route path="/shop/:p1/:p2" element={<CategoryListingPage />} />
<Route path="/collections/:gender/:colSlug" element={<CollectionPage />} />
<Route path="/collections/:colSlug" element={<CollectionPage />} />  {/* bridal, kids */}
<Route path="/collections" element={<CollectionsLanding />} />     
 </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
<BrowserRouter
  future={{
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  }}
>      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Bride, Delhi',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80',
    text: 'My bridal set from Aurum is beyond words. The craftsmanship is unparalleled — every detail, every stone was placed with such precision and love. I receive compliments every single day.',
    rating: 5,
  },
  {
    name: 'Meera Kapoor',
    role: 'Art Director, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80',
    text: "I've purchased three pieces from Aurum over the years. Each one is a work of art. The gold necklace I commissioned for my anniversary has become an heirloom our family will treasure forever.",
    rating: 5,
  },
  {
    name: 'Anjali Verma',
    role: 'CEO, Bangalore',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80',
    text: 'Aurum understands luxury in the truest sense. Not just beautiful jewellery, but an experience — from consultation to delivery. The attention to detail is extraordinary.',
    rating: 5,
  },
  {
    name: 'Ritika Jain',
    role: 'Architect, Jaipur',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80',
    text: 'The diamond ring I designed with the Aurum team was exactly what I envisioned — and somehow even more beautiful. A truly bespoke experience that I would recommend to everyone.',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-gold text-base">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="py-28 bg-espresso overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="section-label text-gold/80"
          >
            Client Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-ivory text-4xl sm:text-5xl mt-4 mb-5"
          >
            Voices of Trust
          </motion.h2>
          <div className="gold-divider" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            style={{ paddingBottom: '50px' }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white/5 border border-white/10 p-8 h-full relative">
                  {/* Gold quotation mark */}
                  <div className="font-display text-gold/20 text-8xl leading-none absolute -top-3 -left-1 select-none">
                    "
                  </div>
                  <Stars count={t.rating} />
                  <p className="text-ivory/60 text-sm leading-relaxed mb-8 relative z-10">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-ivory text-sm font-display tracking-wide">{t.name}</div>
                      <div className="text-ivory/40 text-xs tracking-wide mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}

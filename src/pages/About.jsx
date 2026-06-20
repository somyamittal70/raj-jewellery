import { motion } from 'framer-motion'
import PageBanner from '../components/PageBanner'
import CTASection from '../components/CTASection'

const timelineEvents = [
  { year: '2010', title: 'Brand Founded', desc: 'Aurum was born from a passion to blend traditional goldsmithing with contemporary design sensibilities.' },
  { year: '2015', title: 'International Expansion', desc: 'We opened our first international studio in Dubai, bringing our handcrafted legacy to a global clientele.' },
  { year: '2020', title: 'Luxury Collection Launch', desc: 'Our most ambitious collection yet — 50 one-of-a-kind pieces that redefined what bespoke jewellery could be.' },
  { year: '2025', title: 'Modern Design Evolution', desc: 'A new era of Aurum begins, merging heritage craftsmanship with bold, contemporary aesthetics.' },
]

const craftsmanshipImages = [
  'https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=85',
  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&q=85',
  'https://images.unsplash.com/photo-1607703703520-bb638e84caf2?w=500&q=85',
  'https://images.unsplash.com/photo-1573408301185-9519f94e1083?w=500&q=85',
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
  }
}

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageBanner
        title="Our Story"
        subtitle="Heritage & Craft"
        image="https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1800&q=90"
      />

      {/* Story Section */}
      <section className="py-28 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp()}>
              <span className="section-label">Who We Are</span>
              <h2 className="font-display text-espresso text-4xl sm:text-5xl mt-4 mb-6 leading-tight">
                Artisans of
                <br /><span className="text-gold">Extraordinary Beauty</span>
              </h2>
              <div className="gold-divider-left mb-7" />
              <p className="text-espresso/65 text-sm leading-relaxed mb-5">
                Aurum Fine Jewellery was founded on a single principle: that true luxury lies not in excess,
                but in restraint, intention, and mastery. Each piece we create is the result of hundreds of
                hours of design, selection, and hand-finishing.
              </p>
              <p className="text-espresso/65 text-sm leading-relaxed">
                Our artisans are the fourth generation of jewellers whose families have practiced this craft
                for over a century. They bring irreplaceable skill to every commission, whether a simple
                gold band or an elaborate diamond parure.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.2)}>
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=90"
                alt="Jewellery artisan"
                className="w-full h-[480px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-ivory">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-1">
          {[
            {
              label: 'Our Mission',
              title: 'Jewellery That Endures',
              text: 'To craft pieces of extraordinary beauty that outlast generations — heirlooms imbued with meaning, memory, and mastery. We believe every person deserves to own something genuinely timeless.',
              bg: 'bg-espresso',
              textColor: 'text-ivory/60',
              titleColor: 'text-ivory',
              labelColor: 'text-gold/80',
            },
            {
              label: 'Our Vision',
              title: 'Redefining Luxury',
              text: 'To lead the world in ethical luxury jewellery — where beauty and responsibility coexist. We envision a future where every gemstone can be traced to its source, and every artisan is celebrated.',
              bg: 'bg-gold',
              textColor: 'text-espresso/70',
              titleColor: 'text-espresso',
              labelColor: 'text-espresso/60',
            },
          ].map(({ label, title, text, bg, textColor, titleColor, labelColor }) => (
            <motion.div
              key={label}
              {...fadeUp(0.1)}
              className={`${bg} p-14`}
            >
              <span className={`section-label ${labelColor}`}>{label}</span>
              <h3 className={`font-display text-3xl mt-4 mb-5 ${titleColor}`}>{title}</h3>
              <div className={`h-px w-12 mb-6 ${bg === 'bg-espresso' ? 'bg-gold/50' : 'bg-espresso/30'}`} />
              <p className={`text-sm leading-relaxed ${textColor}`}>{text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 px-6 bg-cream overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="font-display text-espresso text-4xl sm:text-5xl mt-4 mb-5">
              A Legacy in the Making
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gold/20 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {timelineEvents.map((event, i) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="font-display text-gold text-4xl mb-2">{event.year}</div>
                    <h4 className="font-display text-espresso text-xl mb-2">{event.title}</h4>
                    <p className="text-espresso/60 text-sm leading-relaxed">{event.desc}</p>
                  </div>
                  {/* Center dot */}
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-gold border-4 border-cream flex-shrink-0 relative z-10" />
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship collage */}
      <section className="py-28 bg-espresso px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="section-label text-gold/80">Behind Each Piece</span>
            <h2 className="font-display text-ivory text-4xl sm:text-5xl mt-4 mb-5">
              The Art of Craftsmanship
            </h2>
            <div className="gold-divider" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {craftsmanshipImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`overflow-hidden ${i === 0 || i === 3 ? 'aspect-[3/4]' : 'aspect-square'}`}
              >
                <img
                  src={src}
                  alt={`Craftsmanship ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </motion.div>
  )
}

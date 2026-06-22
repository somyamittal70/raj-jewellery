import { motion } from 'framer-motion'

const stats = [
  { value: '27+', label: 'Years of Mastery' },
  { value: '5000+', label: 'Happy Clients' },
  { value: '250+', label: 'Exclusive Designs' },
]

export default function BrandStory() {
  return (
    <section className="py-28 bg-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            
            <div className="relative">
              
              {/* Inner inset border */}
<div className="absolute inset-[14px] border border-espresso/20 pointer-events-none" />
              <img
                src="https://i.pinimg.com/736x/09/f4/50/09f4507d8b02c1dc09f5df68c92602ee.jpg"
                alt="Jewellery craftsmanship"
                className="w-full h-[500px] object-cover"
              />
                          <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-espresso text-[9px] tracking-[0.2em] uppercase whitespace-nowrap">
  Est. 1999 · Raj Jewellers
</div>
         
       {/* Floating accent card */}
              {/* <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="absolute -bottom-8 -right-8 bg-gold p-8 w-35"
              >Inner inset border */}

                {/* <div className="font-display text-4xl text-espresso">27+</div>
                <div className="text-ivory/60 text-xs tracking-widest mt-1 uppercase">Years of</div>
                <div className="text-ivory text-xs tracking-widest uppercase">Mastery</div>
              </motion.div> */}
            </div>
            {/* Gold frame accent */}
            {/* <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold/40 pointer-events-none" /> */}
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="section-label">Our Heritage</span>
            <h2 className="font-display text-espresso text-4xl sm:text-5xl mt-4 mb-6 leading-tight">
              Where Every Gem
              <br />
              <span className="text-gold">Tells a Story</span>
            </h2>
            <div className="gold-divider-left mb-8" />
            <p className="text-espresso/70 leading-relaxed mb-5 text-sm">
              Founded in 1999, Raj Jeweller & sons was born from a singular vision: 
              to create heirloom pieces that transcend fashion. Every creation is shaped 
              by artisans who have trained for decades, ensuring that each ring, necklace, 
              and bracelet is not merely worn, but experienced.
            </p>
            <p className="text-espresso/70 leading-relaxed mb-10 text-sm">
              We source only the finest ethically-certified gemstones and precious metals, 
              because luxury without responsibility is a hollow promise. When you wear our, 
              you carry a legacy crafted with conscience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 border-t border-espresso/10 pt-8">
              {stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-display text-3xl text-gold">{value}</div>
                  <div className="text-espresso/50 text-xs tracking-wide mt-1">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

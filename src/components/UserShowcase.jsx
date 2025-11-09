import { motion } from 'framer-motion';

const demoItems = [
  { id: 1, artist: 'The Weeknd', venue: 'SoFi Stadium', date: 'Aug 2024', src: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1600&auto=format&fit=crop' },
  { id: 2, artist: 'Billie Eilish', venue: 'O2 Arena', date: 'Jun 2024', src: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=1600&auto=format&fit=crop' },
  { id: 3, artist: 'Coldplay', venue: 'Wembley', date: 'Jul 2023', src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1600&auto=format&fit=crop' },
  { id: 4, artist: 'Beyoncé', venue: 'MetLife Stadium', date: 'Sep 2023', src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1600&auto=format&fit=crop' },
  { id: 5, artist: 'Travis Scott', venue: 'Toyota Center', date: 'Nov 2024', src: 'https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI2MDI3MTd8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 6, artist: 'Arctic Monkeys', venue: 'Palau Sant Jordi', date: 'May 2024', src: 'https://images.unsplash.com/photo-1515191107209-c28698631303?q=80&w=1600&auto=format&fit=crop' },
];

export default function UserShowcase() {
  return (
    <section id="showcase" className="relative w-full bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center text-3xl font-semibold sm:text-4xl"
        >
          Your moments, beautifully organized
        </motion.h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-white/70">
          A living grid of fan-shot videos and photos from around the world.
        </p>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
          {demoItems.map((item, i) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img src={item.src} alt={`${item.artist} at ${item.venue}`} className="h-40 w-full object-cover sm:h-48 md:h-56" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 via-black/20 to-transparent px-3 py-2 text-xs sm:text-sm">
                <div className="truncate">
                  <span className="font-semibold">{item.artist}</span>
                  <span className="mx-2 text-white/60">•</span>
                  <span className="text-white/80">{item.venue}</span>
                </div>
                <span className="text-white/60">{item.date}</span>
              </figcaption>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-10 bg-gradient-to-r from-[#00C2FF] via-[#7A5CFF] to-[#B517FF]" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

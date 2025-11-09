import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const neonGradient = 'bg-gradient-to-r from-[#00C2FF] via-[#7A5CFF] to-[#B517FF]';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0A0A] text-white">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Overlay gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center sm:py-28 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-widest text-white/80 backdrop-blur">
            Futuristic Social Cloud for Concert Lovers
          </span>

          <h1 className="text-balance font-semibold leading-tight tracking-tight">
            <span className="block text-3xl sm:text-5xl md:text-6xl">Every concert memory</span>
            <span className="block text-4xl sm:text-6xl md:text-7xl">preserved forever.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-pretty text-sm text-white/70 sm:text-base md:text-lg">
            Upload, organize, and share your videos and photos. Auto-tagged by artist, venue, and date — a digital shrine to live music.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#join"
              className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3 text-sm font-semibold ${neonGradient}`}
            >
              <span className="relative z-10">Join the Beta</span>
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-white" />
            </motion.a>
            <a
              href="#showcase"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
            >
              Explore Moments
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

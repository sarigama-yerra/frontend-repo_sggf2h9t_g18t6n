import { motion } from 'framer-motion';
import { Upload, Tag, Share2 } from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload your moments',
    desc: 'Drop videos and photos from any concert. We support all common formats in high quality.'
  },
  {
    icon: Tag,
    title: 'Auto-tagged by magic',
    desc: 'Artist, venue, city, and date are recognized and organized for you — like time travel for your media.'
  },
  {
    icon: Share2,
    title: 'Relive & share',
    desc: 'Build your concert timeline, create yearly recaps, and share public or private profiles.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative w-full bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-semibold sm:text-4xl"
        >
          How it works
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                </div>
                <p className="text-sm text-white/70">{s.desc}</p>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-r from-[#00C2FF] via-[#7A5CFF] to-[#B517FF]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

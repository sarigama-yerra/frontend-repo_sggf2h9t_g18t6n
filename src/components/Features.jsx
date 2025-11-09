import { motion } from 'framer-motion';
import { Calendar, Sparkles, Shield, Camera } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Auto‑tagging Intelligence',
    desc: 'We detect artist, venue, city, and date so your archive is instantly navigable.'
  },
  {
    icon: Calendar,
    title: 'Concert Calendar & Recaps',
    desc: 'See your year in shows, get Wrapped‑style summaries, and never miss an anniversary.'
  },
  {
    icon: Camera,
    title: 'High‑Fidelity Media',
    desc: 'Upload in crisp quality with adaptive playback and micro‑interactions tuned for music.'
  },
  {
    icon: Shield,
    title: 'Public & Private Profiles',
    desc: 'Choose who sees your memories. Share your highlights or keep them just for you.'
  }
];

export default function Features() {
  return (
    <section className="relative w-full bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center text-3xl font-semibold sm:text-4xl"
        >
          Built for live music
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-xl bg-white/10 p-3"><Icon className="h-6 w-6 text-white" /></div>
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
                <p className="text-sm text-white/70">{f.desc}</p>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-10 bg-gradient-to-r from-[#00C2FF] via-[#7A5CFF] to-[#B517FF]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

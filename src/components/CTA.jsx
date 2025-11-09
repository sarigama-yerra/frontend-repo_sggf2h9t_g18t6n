import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="join" className="relative w-full bg-[#0A0A0A] py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-2xl font-semibold sm:text-3xl"
          >
            Preserve your concert memories. Forever.
          </motion.h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-white/70">
            Request early access and get your first year of premium for free.
          </p>

          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 flex max-w-md flex-col items-center gap-3 sm:flex-row"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-11 w-full flex-1 rounded-full border border-white/10 bg-black/40 px-5 text-sm text-white placeholder-white/40 outline-none transition focus:border-white/20"
            />
            <button
              type="submit"
              className="relative inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#00C2FF] via-[#7A5CFF] to-[#B517FF] px-6 text-sm font-semibold text-white"
            >
              Get Access
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

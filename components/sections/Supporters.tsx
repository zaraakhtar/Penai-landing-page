"use client";

import { motion } from "framer-motion";

export default function Supporters() {
  const logos = [
    "Supporter-logo",
    "Supporter-logo",
    "Supporter-logo",
    "Supporter-logo",
    "Supporter-logo",
  ];

  return (
    <section className="relative z-10 flex flex-col items-center py-30 px-6">
      {/* The Light Shelf Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-brand-purple-light/50 to-transparent shadow-[0_0_20px_rgba(68,33,85,0.5)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] h-[120px] bg-brand-purple-light/10 blur-[60px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <h2 className="text-[17px] font-semibold text-white mb-12 tracking-wide uppercase">
          Our Supporters
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {logos.map((logo, index) => (
            <span
              key={index}
              className="text-[16px] font-medium text-white/30 transition-colors hover:text-white/60 cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

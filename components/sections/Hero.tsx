"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center pt-24 pb-16 text-center px-6 md:pt-32 md:pb-24 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[800px]"
      >
        <h1
          className="text-transparent bg-clip-text text-[40px] md:text-[60px] font-bold leading-[1.0] tracking-[0.005em]"
          style={{
            fontFamily: 'var(--font-dm-sans)',
            backgroundImage: 'linear-gradient(135deg, var(--color-heading-grey) 0%, #ffffff 50%)'
          }}
        >
          Lorem ipsum dolor sit amet <br /> consectetur
        </h1>

        <p className="mt-8 text-[16px] md:text-[18px] font-medium text-subheading max-w-[700px] mx-auto leading-[1.6]">
          Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est vivamus mauris fames et. Sed lacus purus in tellus.
        </p>

        <div className="mt-10 flex justify-center">
          <button className="rounded-full bg-white px-10 py-3.5 text-[17px] font-semibold text-black transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-white/10 hover:shadow-white/20">
            Book a demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}

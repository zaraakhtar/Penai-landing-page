"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DashboardCornerGlow from "@/components/DashboardCornerGlow";

export default function DashboardShowcase() {
  // Gradient controls (adjust these without affecting content layout)
  const GRADIENT = {
    // Controls where the section starts blending from previous section
    overlapMarginTopPx: 100, // matches `-mt-24`
    contentPaddingTopPx: -1400, // matches `pt-48` to keep content stable

    // Controls where the black fade "starts" (bigger = starts lower)
    topFadeHeightPx: 320,

    // Controls vignette center (higher number = lower on the page)
    vignetteCenterYPercent: 78,
  } as const;

  return (
    <section
      className="relative z-10 flex flex-col items-center pb-32 px-6 overflow-hidden"
      style={{
        marginTop: GRADIENT.overlapMarginTopPx,
        paddingTop: GRADIENT.contentPaddingTopPx,
      }}
    >
      {/* smooth blend: avoid harsh line above */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* top blend (smooth handoff from previous section) */}
        <div
          className="absolute inset-x-0 top-0 bg-gradient-to-b from-transparent via-black/-190 to-black/-1250"
          style={{ height: GRADIENT.topFadeHeightPx }}
        />

        {/* keep vignette lower so it starts behind the image */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(80% 70% at 50% ${GRADIENT.vignetteCenterYPercent}%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 58%)`,
          }}
        />

        {/* bottom fade that covers lower part and continues down */}
        <div className="absolute inset-x-0 bottom-0 h-[520px] bg-gradient-to-b from-transparent via-black/55 to-black" />
        <div className="absolute inset-x-0 -bottom-[420px] h-[520px] bg-black" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex w-full max-w-[1100px] flex-col items-center"
      >
        <div className="flex max-w-[760px] flex-col items-center gap-4 text-center">
          <h2
            className="w-full text-center font-bold leading-[1.05] tracking-[0.005em] text-transparent bg-clip-text text-[42px] md:text-[48px]"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              backgroundImage:
                "linear-gradient(92.48deg, #7E7E7E -14.98%, #FFFFFF 49.56%)",
            }}
          >
            Lorem ipsum dolor sit amet consectetur.
          </h2>
          <p
            className="text-[18px] leading-[28px] tracking-[0.005em] text-[#ECEDEE]/80 md:text-[20px]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla
          </p>
        </div>

        <div className="mt-12 w-full">
          <div className="relative mx-auto w-full max-w-[1040px] overflow-hidden rounded-[18px] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            <DashboardCornerGlow className="z-0 bottom-[4px] right-[124px]" />
            <Image
              src="/images/Dashboard.png"
              alt="Dashboard preview"
              width={1440}
              height={1023}
              priority={false}
              className="relative z-10 h-auto w-full select-none"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}


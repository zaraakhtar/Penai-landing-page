"use client";

import SectionHeading from "@/components/SectionHeading";
import StatCard from "@/components/StatCard";

export default function StatsSection() {
  return (
    <section className="relative isolate flex flex-col items-center px-6 py-[80px] overflow-hidden">
      {/* solid backdrop to hide page grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black" />

      <div className="relative z-10 flex w-full max-w-[1024px] flex-col items-center justify-center gap-[64px]">
        <SectionHeading
          title="Lorem ipsum dolor sit amet consectetur."
          subtitle="Lorem ipsum dolor sit amet consectetur. Lacus aliquet vitae nulla"
          className="max-w-[768px] gap-[12px]"
          titleClassName="max-w-[640px] font-semibold"
          subtitleClassName="max-w-[640px] text-[#ECEDEE]"
        />

        <div className="flex w-full flex-col items-center justify-center gap-[36px] md:flex-row">
          <StatCard
            value="23%"
            description={
              <>
                Consequat netus <span className="font-bold">consequat</span>{" "}
                tortor vitae cursus nullam tincidunt urna.{" "}
                <span className="font-bold">Tristique</span> leo
              </>
            }
          />
          <StatCard
            value="23%"
            description={
              <>
                Consequat netus <span className="font-bold">consequat</span>{" "}
                tortor vitae cursus nullam tincidunt urna.{" "}
                <span className="font-bold">Tristique</span> leo
              </>
            }
          />
          <StatCard
            value="23%"
            description={
              <>
                Consequat netus <span className="font-bold">consequat</span>{" "}
                tortor vitae cursus nullam tincidunt urna.{" "}
                <span className="font-bold">Tristique</span> leo
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}


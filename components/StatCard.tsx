import type React from "react";

type StatCardProps = {
  value: string;
  description: React.ReactNode;
};

export default function StatCard({ value, description }: StatCardProps) {
  return (
    <div className="flex w-full max-w-[317.33px] flex-col items-center gap-[10px]">
      <div className="relative isolate flex h-[200px] w-full items-center justify-center overflow-hidden rounded-[24px] border border-[#343434] bg-[linear-gradient(180deg,rgba(28,28,28,1)_0%,rgba(20,20,20,1)_100%)] p-[30px] shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
        {/* top soft highlight */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-x-0 top-0 h-[120px] bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0)_70%)]" />

          {/* rings group (more prominent, sits low like the design) */}
          <div className="absolute inset-0 opacity-70">
            <div className="absolute left-1/2 top-[92px] h-[260px] w-[520px] -translate-x-1/2 rounded-full border border-[#343434]" />
            <div className="absolute left-1/2 top-[124px] h-[220px] w-[440px] -translate-x-1/2 rounded-full border border-[#343434]" />
            <div className="absolute left-1/2 top-[152px] h-[180px] w-[360px] -translate-x-1/2 rounded-full border border-[#343434]" />
            <div className="absolute left-1/2 top-[176px] h-[140px] w-[280px] -translate-x-1/2 rounded-full border border-[#343434]" />
            <div className="absolute left-1/2 top-[196px] h-[104px] w-[208px] -translate-x-1/2 rounded-full border border-[#343434]" />
            <div className="absolute left-1/2 top-[214px] h-[70px] w-[140px] -translate-x-1/2 rounded-full border border-[#343434]" />
          </div>

          {/* inner glow at bottom */}
          <div className="absolute left-1/2 top-[158px] h-[150px] w-[260px] -translate-x-1/2 bg-[#505050]/60 blur-[74px]" />

          {/* subtle bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-[130px] bg-gradient-to-b from-transparent to-black/55" />
        </div>

        <div
          className="relative z-10 text-center font-bold leading-none tracking-[0.005em] text-transparent bg-clip-text"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "96px",
            backgroundImage:
              "linear-gradient(166.07deg, rgba(200,200,200,0.55) 16.41%, rgba(255,255,255,0.92) 97.61%)",
          }}
        >
          {value}
        </div>
      </div>

      <p
        className="w-full text-center text-[16px] leading-[24px] tracking-[0.005em] text-[#ECEDEE]"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {description}
      </p>
    </div>
  );
}


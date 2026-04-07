import type React from "react";

type StatCardProps = {
  value: string;
  description: React.ReactNode;
};

export default function StatCard({ value, description }: StatCardProps) {
  // Oval control: 1 = perfect circle, >1 = wider than tall
  const RING_ASPECT_X = 1.2;

  return (
    <div className="flex w-full max-w-[317.33px] flex-col items-center gap-[10px]">
      <div className="relative isolate flex h-[240px] w-full items-center justify-center overflow-hidden rounded-[24px] border border-[#2F2F2F] bg-[linear-gradient(180deg,rgba(27,27,27,1)_0%,rgba(18,18,18,1)_100%)] p-[30px] shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* bottom soft highlight */}
          <div className="absolute inset-x-0 bottom-0 h-[160px] bg-[radial-gradient(70%_90%_at_50%_100%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%)]" />

          {/* rings group (ovals, concentric at lower center) */}
          <div className="absolute inset-0 opacity-90 bottom-[-240px]">
            {([320, 260, 200, 140, 80] as const).map((size) => (
              <div
                key={size}
                className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                style={{
                  height: size,
                  width: Math.round(size * RING_ASPECT_X),
                }}
              />
            ))}
          </div>
          {/* inner glow at bottom */}
          <div className="absolute left-1/2 bottom-[-70px] h-[220px] w-[360px] -translate-x-1/2 bg-white/10 blur-[80px]" />

          {/* subtle bottom vignette */}
          <div className="absolute inset-x-0 bottom-0 h-[150px] bg-gradient-to-b from-transparent to-black/70" />
        </div>

        <div
          className="relative z-10 text-center font-bold leading-none tracking-[0.005em] text-transparent bg-clip-text"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "100px",
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


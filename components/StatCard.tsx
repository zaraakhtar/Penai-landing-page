import type React from "react";

type StatCardProps = {
  value: string;
  description: React.ReactNode;
};

export default function StatCard({ value, description }: StatCardProps) {
  // Per-ring oval control: 1 = circle, >1 = wider than tall
  const RINGS = [
    { size: 320, aspectX: 1.25 },
    { size: 260, aspectX: 1.22 },
    { size: 200, aspectX: 1.20 },
    { size: 140, aspectX: 1.18 },
    { size: 80, aspectX: 1.14 },
  ] as const;

  return (
    <div className="flex w-full max-w-[317.33px] flex-col items-center gap-[10px]">
      <div className="relative isolate w-full overflow-hidden rounded-[24px] shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
        {/* gradient border (Figma-style) */}
        <div className="absolute inset-0 rounded-[24px] bg-gradient-to-b from-[#505050]/55 via-[#505050]/25 to-[#505050]/10" />

        {/* card body */}
        <div className="relative flex h-[200px] w-full items-center justify-center rounded-[24px] bg-[#1C1C1C]/70 p-[30px] backdrop-blur-[86.5px]">
        <div className="pointer-events-none absolute inset-0 -z-10">
          {/* bottom soft highlight */}
          <div className="absolute inset-x-0 bottom-0 h-[160px] bg-[radial-gradient(70%_90%_at_50%_100%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%)]" />

          {/* rings group (ovals, concentric at lower center) */}
          <div className="absolute inset-0 opacity-90 bottom-[-240px]">
            {/* center radial glow (same origin as rings) */}
            <div
              className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2"
              style={{
                width: 420,
                height: 420,
                background:
                  "radial-gradient(circle, rgba(80,80,80,0.55) 0%, rgba(80,80,80,0) 65%)",
                filter: "blur(148.65px)",
              }}
            />

            {RINGS.map(({ size, aspectX }) => (
              <div
                key={size}
                className="absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                style={{
                  height: size,
                  width: Math.round(size * aspectX),
                }}
              />
            ))}
          </div>
          {/* inner glow at bottom */}
          <div className="absolute left-1/2 bottom-[-70px] h-[220px] w-[360px] -translate-x-1/2 bg-white/10 blur-[80px]" />

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


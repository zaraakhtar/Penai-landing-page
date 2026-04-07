"use client";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center pt-[200px] pb-[30px] px-6 overflow-hidden">
      <div className="flex flex-col items-center gap-[40px] w-full max-w-[768px]">
        <div className="flex flex-col items-center gap-[12px] w-full">
          <h1
            className="w-full text-center font-bold tracking-[0.005em] text-transparent bg-clip-text"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "60px",
              lineHeight: "100%",
              backgroundImage: "linear-gradient(92.48deg, #7E7E7E -14.98%, #FFFFFF 49.56%)"
            }}
          >
            {/* //this is a comment */}
            Lorem ipsum dolor sit amet consectetur
          </h1>

          <p className="w-full text-center text-[24px] font-normal leading-[32px] tracking-[0.005em] text-[color:var(--color-text-primary)]/80">
            Arcu phasellus enim leo nulla tortor faucibus. Sed odio ultrices est vivamus mauris fames et. Sed lacus purus in tellus.
          </p>
        </div>

        <button
          className="flex flex-row justify-center items-center px-[24px] gap-[8px] h-[44px] bg-white/90 rounded-full tracking-[0.005em] transition-transform hover:scale-105 active:scale-95"
          style={{
            minWidth: "143px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 600,
            fontSize: "15px",
            lineHeight: "20px",
            color: "#2e2e2eff",
          }}
        >
          Book a demo
        </button>
      </div>
    </section>
  );
}

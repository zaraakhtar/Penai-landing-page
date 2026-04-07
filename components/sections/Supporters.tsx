"use client";

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

      <div className="flex flex-col items-center">
        <h2 className="text-[19px] font-bold text-[#ECEDEE] mb-12 tracking-wide uppercase">
          Our Supporters
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {logos.map((logo, index) => (
            <span
              key={index}
              className="text-[16px] font-light text-[#FFFFFF] transition-colors hover:text-[#FFFFFF] cursor-default"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

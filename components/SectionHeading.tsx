type SectionHeadingProps = {
  title: string;
  subtitle: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function SectionHeading({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "flex max-w-[760px] flex-col items-center gap-4 text-center",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <h2
        className={[
          "w-full text-center font-bold leading-[1.05] tracking-[0.005em] text-transparent bg-clip-text text-[42px] md:text-[48px]",
          titleClassName,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{
          fontFamily: "'DM Sans', sans-serif",
          backgroundImage:
            "linear-gradient(92.48deg, #7E7E7E -14.98%, #FFFFFF 49.56%)",
        }}
      >
        {title}
      </h2>
      <p
        className={[
          "text-[18px] leading-[28px] tracking-[0.005em] text-[#ECEDEE]/80 md:text-[20px]",
          subtitleClassName,
        ]
          .filter(Boolean)
          .join(" ")}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {subtitle}
      </p>
    </div>
  );
}


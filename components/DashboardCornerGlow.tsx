type DashboardCornerGlowProps = {
  className?: string;
};

export default function DashboardCornerGlow({ className }: DashboardCornerGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        width: 752,
        height: 239,
        background: "#7F7F7F",
        opacity: 0.5,
        filter: "blur(150px)",
        pointerEvents: "none",
      }}
    />
  );
}


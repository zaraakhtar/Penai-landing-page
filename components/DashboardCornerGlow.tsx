import type React from "react";

type DashboardCornerGlowProps = {
  className?: string;
  style?: React.CSSProperties;
};

export default function DashboardCornerGlow({
  className,
  style,
}: DashboardCornerGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        width: 752,
        height: 239,
        borderRadius: 9999,
        background: "#7F7F7F",
        opacity: 0.5,
        filter: "blur(150px)",
        transform: "rotate(-14deg)",
        transformOrigin: "center",
        pointerEvents: "none",
        ...style,
      }}
    />
  );
}


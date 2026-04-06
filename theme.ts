export const colors = {
  background: "#1C1C1C",
  brandPurpleDark: "#301A3A",
  brandPurpleMid: "#442155",
  brandPurpleAccent: "#7938B2",
  brandPurpleLavender: "#B77DDD",
  brandPurplePetal: "#F7ECFC",
  textPrimary: "#ECEDEE",
  textMuted: "#4C5155",
  white: "#FFFFFF",
  grid: "#505050",
  gridSoft: "#7E7E7E",
  strokeCard: "#3D3D3D",
  overlayNavy: "#000212",
  glowDeep: "#231628",
  glowMid: "#432155",
  glowDark: "#1B141D",
  navbarBg: "rgba(10, 10, 10, 0.18)",
  navbarBorder: "rgba(255, 255, 255, 0.07)",
} as const;

export const gradients = {
  primary: `linear-gradient(to bottom right, ${colors.brandPurpleDark}, ${colors.brandPurpleMid})`,
  logoA: `linear-gradient(to bottom, ${colors.brandPurpleAccent}, ${colors.brandPurpleDark})`,
  illustration: `linear-gradient(to bottom, ${colors.brandPurpleAccent} 9.7%, ${colors.brandPurpleLavender} 48.6%, ${colors.brandPurplePetal} 89%)`,
  gridFade: `linear-gradient(to bottom, ${colors.grid}, transparent)`,
  headingText: `linear-gradient(to bottom, ${colors.white}, ${colors.textMuted})`,
  navFade: `linear-gradient(to bottom, rgba(28,28,28,0.2), #1C1C1C)`,
} as const;

export const spacing = {
  navbarTopPadding: "28px",
  navbarSideMargin: "76px",
  navbarMaxWidth: "1288px",
  navbarHeight: "72px",
  logoWidth: "106px",
  logoHeight: "44px",
  cTAButtonWidth: "128px",
  cTAButtonHeight: "48px",
  cTAButtonRadius: "24px",
} as const;

export type ColorKey = keyof typeof colors;
export type GradientKey = keyof typeof gradients;

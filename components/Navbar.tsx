"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── Design token extraction from Figma SVG ──────────────────────────────────
// Canvas: 1440px wide, background #1C1C1C
// Navbar pill:  foreignObject x=76, y=28, width=1288, height=72
//   → so the pill occupies 1288 of 1440px, with 76px margins on each side
//   → proportionally: lr padding = 76/1440 ≈ 5.28% → use px-[76px] on a full-width nav
// Nav links start at x≈290 (after logo ends ~x200) → gap between logo & links
//   "Home"     x≈290  fill="#ECEDEE"   (active)
//   "SecrtChat"x≈423  fill="#4C5155"   (inactive)
//   "GenPen"   x≈603  fill="#4C5155"
//   "Contact"  x≈760  fill="#4C5155"
// Dashboard pill: x=1232..1360, y=40..88 → 128px × 48px, border-radius=24px
//   gradient: #301A3A (0%) → #442155 (62%)  text fill="#ECEDEE"
// The links are NOT centered – they flow left-to-right after the logo
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { name: "Home",      href: "/",           active: true  },
  { name: "SecrtChat", href: "/secretchat", active: false },
  { name: "GenPen",    href: "/genpen",     active: false },
  { name: "Contact",   href: "/contact",    active: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*
        Full-width fixed nav bar.
        Pill: positioned x=76 on a 1440 canvas → 76/1440 = ~5.28%
        We approximate with px-[76px] on a centered pill capped at 1288px.
        Height: 72px  |  backdrop-filter: blur(2px)
      */}
      <nav
        id="main-navbar"
        className="fixed top-0 left-0 z-50 w-full"
        style={{ paddingTop: "28px", paddingLeft: "76px", paddingRight: "76px" }}
      >
        <div
          className="flex items-center w-full"
          style={{
            height: "72px",
            maxWidth: "1288px",
            margin: "0 auto",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            /* No explicit background — just the blur over the page */
          }}
        >
          {/* ── Logo ─────────────────────────────────────────────────────── */}
          <Link href="/" id="navbar-logo" className="flex-shrink-0 mr-12">
            <Image
              src="/images/Logo.png"
              alt="PentAI Logo"
              width={140}
              height={40}
              priority
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* ── Desktop nav links (left-aligned, after logo) ──────────────
              Positions from SVG:
                Home      x≈290  → first link after logo
                SecrtChat x≈423
                GenPen    x≈603
                Contact   x≈760
              Gap between links: varies but ~110–160px
              Using a gap of ~56px (gap-14) to approximate proportionally
          ──────────────────────────────────────────────────────────────── */}
          <div className="hidden md:flex items-center gap-14">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200"
                style={{ color: link.active ? "#ECEDEE" : "#4C5155" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#ECEDEE")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    link.active ? "#ECEDEE" : "#4C5155")
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* ── Spacer ───────────────────────────────────────────────────── */}
          <div className="flex-1" />

          {/* ── Dashboard button + mobile toggle ─────────────────────────
              Button specs:
                x=1232..1360 on 1440px canvas → 128px wide
                y=40..88 → 48px tall
                border-radius: 24px (full pill)
                gradient: #301A3A → #442155
                text: #ECEDEE, font ~14px
          ──────────────────────────────────────────────────────────────── */}
          <div className="flex items-center gap-3">
            <button
              id="navbar-dashboard-btn"
              className="hidden md:flex items-center justify-center font-semibold text-[14px] tracking-wide transition-all duration-200 hover:brightness-110 hover:-translate-y-px active:scale-95"
              style={{
                background: "linear-gradient(to bottom right, #301A3A, #442155)",
                color: "#ECEDEE",
                borderRadius: "24px",
                width: "128px",
                height: "48px",
                letterSpacing: "0.01em",
              }}
            >
              Dashboard
            </button>

            {/* Mobile hamburger */}
            <button
              id="navbar-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="flex md:hidden h-9 w-9 items-center justify-center rounded-full transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.06)", color: "#ECEDEE" }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile menu ─────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed z-40 md:hidden"
            style={{ top: "116px", left: "16px", right: "16px" }}
          >
            <div
              className="flex flex-col gap-5 rounded-2xl p-6"
              style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                background: "rgba(28, 28, 28, 0.92)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium transition-colors duration-200"
                  style={{ color: link.active ? "#ECEDEE" : "#4C5155" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "#ECEDEE")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      link.active ? "#ECEDEE" : "#4C5155")
                  }
                >
                  {link.name}
                </Link>
              ))}

              <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

              <button
                className="w-full py-3 text-[15px] font-semibold rounded-2xl transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  background: "linear-gradient(to bottom right, #301A3A, #442155)",
                  color: "#ECEDEE",
                }}
              >
                Dashboard
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

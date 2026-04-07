"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { name: "Home", href: "/", active: true },
  { name: "SecrtChat", href: "/secretchat", active: false },
  { name: "GenPen", href: "/genpen", active: false },
  { name: "Contact", href: "/contact", active: false },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        id="main-navbar"
        className="fixed top-0 left-0 z-50 w-full"
        style={{ paddingTop: "28px",paddingLeft: "56px",paddingRight: "56px" }}
      >
        <div
          className="flex items-center w-full"
          style={{
            height: "72px",
            maxWidth: "auto",
            margin: "0 auto",
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
          }}
        >
          <Link href="/" id="navbar-logo" className="flex-shrink-0 mr-20">
            <Image
              src="/images/Logo.png"
              alt="PentAI Logo"
              width={106}
              height={44}
              priority
              className="h-11 w-auto object-contain"
              style={{ width: "auto" }}
            />
          </Link>

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

          <div className="flex-1" />

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

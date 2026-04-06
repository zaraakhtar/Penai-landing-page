"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "SecrtChat", href: "/secretchat" },
    { name: "GenPen", href: "/genpen" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-6 py-6 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              alt="PentAI Logo"
              width={140}
              height={40}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden flex-1 items-center justify-center gap-10 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[16px] font-medium transition-colors hover:text-white ${
                link.name === "Home" ? "text-white" : "text-white/40"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Dashboard Button (Desktop) & Menu Toggle */}
        <div className="flex items-center gap-4">
          <button className="btn-primary-gradient hidden rounded-full px-7 py-2.5 text-[15px] font-semibold text-white md:block">
            Dashboard
          </button>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10 md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-0 w-full px-6 md:hidden"
          >
            <div className="glass rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-2 h-px w-full bg-white/10" />
                <button className="btn-primary-gradient w-full rounded-full py-4 text-[16px] font-semibold text-white">
                  Dashboard
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

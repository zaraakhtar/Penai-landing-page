import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Decorative Grid Layer */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Center Star Highlight (Glow behind content) */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <Navbar />
      <Hero />

      <footer className="mt-auto border-t border-white/5 bg-zinc-950 px-8 py-12 text-center text-sm text-muted-foreground">
         &copy; 2026 PentAI. All rights reserved.
      </footer>
    </main>
  );
}

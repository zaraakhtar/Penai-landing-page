import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Supporters from "@/components/sections/Supporters";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Decorative Grid Layer */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      {/* Figma-inspired Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Symmetric Angular (Conic) Gradients */}
        <div 
          className="absolute top-[-25%] left-[-15%] w-[130%] h-[130%] opacity-60 mix-blend-screen"
          style={{
            background: `conic-gradient(from 90deg at 50% 50%, 
              rgba(35, 22, 40, 0) 0deg, 
              rgba(67, 33, 85, 0.5) 15deg, 
              rgba(34, 21, 39, 0) 130deg, 
              rgba(27, 20, 29, 0.4) 220deg, 
              rgba(35, 22, 40, 0) 360deg)`
          }}
        />
        
        {/* Soft Central Glow (Matching the Ellipse/Filter in SVG) */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[800px] bg-[#505050]/20 blur-[180px] rounded-full pointer-events-none" />
        
        {/* Deep Bottom Shadow */}
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-[#000212]/50 to-transparent blur-[120px] pointer-events-none" />
      </div>

      <Navbar />
      <Hero />
      <Supporters />

      <footer className="mt-auto border-t border-white/5 bg-zinc-950 px-8 py-12 text-center text-sm text-muted-foreground">
         &copy; 2026 PentAI. All rights reserved.
      </footer>
    </main>
  );
}

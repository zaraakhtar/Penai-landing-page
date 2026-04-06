import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Decorative Grid Layer */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Center Star Highlight (Glow behind content) */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <Navbar />
      <div className="flex h-screen items-center justify-center pt-24 text-center">
        <h1 className="text-4xl font-bold text-white/10 italic">
          Hero content coming next...
        </h1>
      </div>
    </main>
  );
}

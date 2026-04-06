import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <div className="flex h-screen items-center justify-center pt-24 text-center">
        <h1 className="text-4xl font-bold text-white/10 italic">
          Hero content coming next...
        </h1>
      </div>
    </main>
  );
}

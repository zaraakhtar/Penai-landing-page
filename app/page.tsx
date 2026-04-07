import Navbar from "@/components/Navbar";
import AngularGradient from "@/components/AngularGradient";
import Supporters from "@/components/sections/Supporters";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#1C1C1C] overflow-hidden">
      <div className="absolute inset-0 z-0 bg-grid-pattern pointer-events-none" />
      <AngularGradient />
      <Navbar />
      <Hero />
      <Supporters />

    </main>
  );
}

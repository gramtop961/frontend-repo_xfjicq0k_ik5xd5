import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DataPanels from "./components/DataPanels";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <DataPanels />
      <footer id="kontak" className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-blue-200/70">
          <p>SiMATA — Sekretariat DPRD Batang</p>
          <p className="text-xs mt-1">Versi awal untuk input data master. Dapat dikembangkan menjadi manajemen aset lengkap (QR Code, penjadwalan pemeliharaan, mutasi, dan pelaporan).</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

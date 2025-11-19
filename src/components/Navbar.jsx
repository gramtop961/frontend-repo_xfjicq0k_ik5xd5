import { Menu, Package, LayoutGrid, Building2 } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
            <Building2 className="h-5 w-5 text-blue-300" />
          </div>
          <div>
            <p className="text-white font-semibold leading-tight">SiMATA</p>
            <p className="text-xs text-blue-300/70 -mt-0.5">Sekretariat DPRD Batang</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#fitur" className="text-blue-200/80 hover:text-white transition">Fitur</a>
          <a href="#data" className="text-blue-200/80 hover:text-white transition">Data</a>
          <a href="#kontak" className="text-blue-200/80 hover:text-white transition">Kontak</a>
        </nav>

        <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-blue-200/80 hover:text-white">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

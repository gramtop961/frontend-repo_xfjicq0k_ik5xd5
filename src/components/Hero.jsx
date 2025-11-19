export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.25),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs text-blue-200">
              Sistem Informasi Manajemen Aset & Tata Kelola
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">
              SiMATA Sekretariat DPRD Batang
            </h1>
            <p className="mt-4 text-blue-200/90">
              Kelola data aset, kategori, lokasi, dan bagian dengan mudah. Pantau kondisi, nilai perolehan, dan status aset dalam satu dashboard terpadu.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#data" className="inline-flex items-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2">
                Lihat Data
              </a>
              <a href="#fitur" className="inline-flex items-center rounded-lg border border-white/10 text-white hover:bg-white/5 px-4 py-2">
                Fitur Utama
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-6">
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-lg bg-slate-800/80 border border-white/10 p-3">
                  <p className="text-blue-200/80">Total Aset</p>
                  <p className="text-2xl font-semibold text-white">1.254</p>
                </div>
                <div className="rounded-lg bg-slate-800/80 border border-white/10 p-3">
                  <p className="text-blue-200/80">Aset Aktif</p>
                  <p className="text-2xl font-semibold text-white">1.180</p>
                </div>
                <div className="rounded-lg bg-slate-800/80 border border-white/10 p-3">
                  <p className="text-blue-200/80">Dalam Perbaikan</p>
                  <p className="text-2xl font-semibold text-white">42</p>
                </div>
                <div className="rounded-lg bg-slate-800/80 border border-white/10 p-3">
                  <p className="text-blue-200/80">Nilai Buku (Rp)</p>
                  <p className="text-2xl font-semibold text-white">21,4 M</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

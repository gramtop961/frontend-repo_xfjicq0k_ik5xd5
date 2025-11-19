import { Boxes, MapPin, Building, CheckCircle2 } from "lucide-react";

export default function Features() {
  const items = [
    { icon: Boxes, title: "Manajemen Aset", desc: "Data aset lengkap: kode, kategori, lokasi, kondisi, status dan nilai." },
    { icon: MapPin, title: "Lokasi & Ruangan", desc: "Pemetaan lokasi dan ruangan untuk memudahkan pelacakan aset." },
    { icon: Building, title: "Bagian/Bidang", desc: "Relasi aset ke bagian/bidang untuk akuntabilitas dan penanggung jawab." },
    { icon: CheckCircle2, title: "Audit & Histori", desc: "Jejak perubahan aset untuk kebutuhan audit internal." },
  ];

  return (
    <section id="fitur" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">Fitur Utama</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
              <div className="h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center mb-3">
                <Icon className="h-5 w-5 text-blue-300" />
              </div>
              <p className="text-white font-medium">{title}</p>
              <p className="text-sm text-blue-200/80 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

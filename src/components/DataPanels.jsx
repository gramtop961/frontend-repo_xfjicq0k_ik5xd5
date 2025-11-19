import { useEffect, useState } from "react";
import { Database, Layers3, MapPin, Building2 } from "lucide-react";

const API_BASE = import.meta.env.VITE_BACKEND_URL || "";

function Panel({ title, icon: Icon, collection, fields }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({});

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/list/${collection}`);
      const data = await res.json();
      setItems(data.items || []);
    } catch (e) {
      setError("Gagal memuat data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (name, value) => setForm((f) => ({ ...f, [name]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_BASE}/api/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ collection, data: form }),
      });
      if (!res.ok) throw new Error("Gagal menyimpan");
      setForm({});
      fetchData();
    } catch (e) {
      setError("Gagal menyimpan data");
    }
  };

  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/60 p-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
            <Icon className="h-5 w-5 text-blue-300" />
          </div>
          <p className="text-white font-medium">{title}</p>
        </div>
        <button
          onClick={fetchData}
          className="text-xs rounded-md border border-white/10 px-2 py-1 text-blue-200/80 hover:text-white"
        >
          Muat Ulang
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-3">
        {fields.map((f) => (
          <div key={f.name} className="text-sm">
            <label className="block text-blue-200/80 mb-1">{f.label}</label>
            <input
              type={f.type || "text"}
              value={form[f.name] ?? ""}
              onChange={(e) => handleChange(f.name, e.target.value)}
              placeholder={f.placeholder}
              className="w-full rounded-md border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder:text-blue-200/50"
            />
          </div>
        ))}
        <div className="md:col-span-3">
          <button className="mt-1 inline-flex items-center rounded-lg bg-blue-600 hover:bg-blue-500 text-white px-4 py-2">
            Simpan
          </button>
        </div>
      </form>

      <div className="mt-4 rounded-lg border border-white/10 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-slate-900/60 text-blue-200/70">
            <tr>
              {fields.map((f) => (
                <th key={f.name} className="text-left font-medium px-3 py-2">{f.label}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {loading ? (
              <tr><td className="px-3 py-2 text-blue-200/70" colSpan={fields.length}>Memuat...</td></tr>
            ) : items.length === 0 ? (
              <tr><td className="px-3 py-2 text-blue-200/70" colSpan={fields.length}>Belum ada data</td></tr>
            ) : (
              items.map((it, idx) => (
                <tr key={idx} className="text-blue-100">
                  {fields.map((f) => (
                    <td key={f.name} className="px-3 py-2">{String(it[f.name] ?? "-")}</td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {error && <p className="mt-2 text-xs text-red-300">{error}</p>}
    </div>
  );
}

export default function DataPanels() {
  return (
    <section id="data" className="py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Data Master</h2>
        <div className="grid lg:grid-cols-2 gap-4">
          <Panel
            title="Kategori Aset"
            icon={Layers3}
            collection="assetcategory"
            fields={[
              { name: "name", label: "Nama Kategori" },
              { name: "description", label: "Deskripsi" },
            ]}
          />
          <Panel
            title="Lokasi"
            icon={MapPin}
            collection="location"
            fields={[
              { name: "name", label: "Nama Lokasi" },
              { name: "address", label: "Alamat" },
              { name: "floor", label: "Lantai/Ruang" },
            ]}
          />
          <Panel
            title="Bagian/Bidang"
            icon={Building2}
            collection="department"
            fields={[
              { name: "name", label: "Nama Bagian" },
              { name: "contact_person", label: "Kontak" },
            ]}
          />
          <Panel
            title="Aset"
            icon={Database}
            collection="asset"
            fields={[
              { name: "code", label: "Kode / No. Register" },
              { name: "name", label: "Nama Aset" },
              { name: "category_id", label: "ID Kategori" },
              { name: "location_id", label: "ID Lokasi" },
              { name: "department_id", label: "ID Bagian" },
              { name: "status", label: "Status" },
              { name: "condition", label: "Kondisi" },
              { name: "purchase_date", label: "Tanggal Perolehan", type: "date" },
              { name: "value", label: "Nilai (Rp)", type: "number" },
            ]}
          />
        </div>
        <p className="text-xs text-blue-200/60 mt-3">Catatan: contoh formulir sederhana untuk input cepat. Integrasi validasi dan lookup relasi dapat ditambahkan sesuai kebutuhan.</p>
      </div>
    </section>
  );
}

import { getHealth } from "@/lib/api";

export default async function Dashboard() {
  const health = await getHealth();

  return (
    <div className="grid grid-cols-3 gap-4">
      {Object.entries(health).map(([k, v]) => (
        <div
          key={k}
          className="bg-slate-900 p-4 rounded border border-slate-800"
        >
          <div className="text-sm text-slate-400">{k}</div>
          <div className="text-xl font-semibold">{v}</div>
        </div>
      ))}
    </div>
  );
}
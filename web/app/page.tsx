import { getHealth } from "@/lib/api";

export default async function Dashboard() {
  const health = await getHealth();

  return (
    <div className="grid grid-cols-3 gap-4">
      {Object.entries(health).map(([key, value]) => (
        <div
          key={key}
          className="rounded border border-slate-800 bg-slate-900 p-4"
        >
          <div className="text-sm text-slate-400">{key}</div>
          <div className="text-xl font-semibold">{value}</div>
        </div>
      ))}
    </div>
  );
}
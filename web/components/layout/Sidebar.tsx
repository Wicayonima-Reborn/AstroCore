import Link from "next/link";

const items = [
  { href: "/", label: "Dashboard" },
  { href: "/playground", label: "AI Playground" },
  { href: "/system", label: "System" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="w-60 bg-slate-900 p-4 border-r border-slate-800">
      <h1 className="text-lg font-semibold mb-6">AstraCore</h1>
      <nav className="space-y-2">
        {items.map(i => (
          <Link
            key={i.href}
            href={i.href}
            className="block px-3 py-2 rounded hover:bg-slate-800"
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
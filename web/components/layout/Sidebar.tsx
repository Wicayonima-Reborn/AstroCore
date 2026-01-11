import Link from "next/link";

const nav = [
  { href: "/", label: "Dashboard" },
  { href: "/playground", label: "AI Playground" },
  { href: "/system", label: "System" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="w-60 border-r border-slate-800 bg-slate-900 p-4">
      <h1 className="mb-6 text-lg font-semibold">AstraCore</h1>
      <nav className="space-y-2">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded px-3 py-2 hover:bg-slate-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
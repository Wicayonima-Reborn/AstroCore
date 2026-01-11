import "@/app/globals.css";
import { Sidebar } from "@/components/layout/Sidebar";

export const metadata = {
  title: "AstraCore",
  description: "Local-first AI system dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-slate-950 text-slate-100">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
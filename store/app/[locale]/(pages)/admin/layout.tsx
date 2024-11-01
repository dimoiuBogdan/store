import { type Metadata } from "next";
import type { JSX } from "react";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin - My Store",
  description: "Admin page",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto pl-0 pr-6">
        <AdminNavbar />
        <main className="mb-6 min-h-[calc(100vh-6.4rem)] rounded-xl bg-zinc-700/50 p-6 shadow-md">
          {children}
        </main>
      </div>
    </div>
  );
}

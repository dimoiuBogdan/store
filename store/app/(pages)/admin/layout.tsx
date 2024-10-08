import { Metadata } from "next";
import AdminNavbar from "./(components)/AdminNavbar/AdminNavbar";
import AdminSidebar from "./(components)/AdminSidebar";

export const metadata: Metadata = {
  title: "Admin - My Store",
  description: "Admin page",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-1 overflow-y-auto pl-4 pr-6">
        <AdminNavbar />
        <main className="mb-6 min-h-[calc(100vh-6.4rem)] rounded-xl bg-zinc-200/30 p-6 shadow-md">
          {children}
        </main>
      </div>
    </div>
  );
}

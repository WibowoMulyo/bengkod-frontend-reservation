import AdminHeader from "@/components/layouts/header/AdminHeader";
import Admin_navbar from "@/components/layouts/navbar/admin-navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <AdminHeader />
      <div className="flex m-4 gap-x-4">
        <Admin_navbar />
        {children}
      </div>
    </section>
  )
}
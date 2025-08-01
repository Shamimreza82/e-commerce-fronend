// app/dashboard/layout.tsx



export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <main className="flex-1 p-6">{children}</main>
    </div>

  );
}

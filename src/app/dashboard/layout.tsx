// app/dashboard/layout.tsx


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}

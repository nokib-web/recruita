export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-6 hidden md:block">
        <h2 className="text-xl font-bold text-accent dark:text-accent-dark mb-8">Dashboard Menu</h2>
        <nav className="space-y-4 text-gray-600 dark:text-gray-300">
          <div>Overview</div>
          <div>Analytics</div>
          <div>Settings</div>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <header className="mb-8 flex justify-between items-center pb-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl font-semibold">Dashboard Controls</h1>
        </header>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
          {children}
        </div>
      </main>
    </div>
  );
}

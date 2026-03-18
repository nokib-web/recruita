export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen pt-20 px-8 max-w-7xl mx-auto transition-colors duration-300">
      <div className="p-8 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-sm">
        <h1 className="text-3xl font-extrabold mb-6 text-secondary dark:text-secondary-dark border-b pb-4 border-gray-300 dark:border-gray-700">Main Platform</h1>
        <div className="text-lg">
          {children}
        </div>
      </div>
    </main>
  );
}

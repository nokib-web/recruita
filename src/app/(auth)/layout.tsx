export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-md p-8 space-y-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-colors duration-300">
        <h2 className="text-2xl font-bold text-center text-primary dark:text-primary-dark">Auth Portal</h2>
        {children}
      </div>
    </main>
  );
}

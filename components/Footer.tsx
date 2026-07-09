export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-void">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Avery Andrews.</p>
        <p>Finance, investing, entrepreneurship, and urban development.</p>
      </div>
    </footer>
  );
}

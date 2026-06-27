export default function Navbar() {
  return (
    <header className="bg-[#F7F8FC]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        <a href="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071A44] text-2xl font-bold text-white">
            J
          </div>

          <span className="text-4xl font-bold tracking-tight">
            Jobhunter
          </span>
        </a>

        <nav className="flex items-center gap-10 text-lg font-semibold">

          <a
            href="/why-jobhunter"
            className="text-gray-800 hover:text-indigo-600 transition"
          >
            Why Jobhunter
          </a>

          <a
            href="#"
            className="rounded-xl bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700 transition"
          >
            Get Started
          </a>

        </nav>

      </div>
    </header>
  );
}
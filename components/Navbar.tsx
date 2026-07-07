import Logo from "@/components/Logo";
export default function Navbar() {
  return (
    <header className="bg-[#F7F8FC]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <a href="/" className="flex items-center gap-3">
<Logo />

          <span className="text-4xl font-bold tracking-tight">
            Jobhunter
          </span>
        </a>

<nav className="flex items-center">
<a
  href="/why-jobhunter"
  className="rounded-full border-2 border-indigo-300 bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-3 text-base font-semibold text-indigo-700 shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-500 hover:shadow-lg"
>
  💡 Why Jobhunter?
</a>
</nav>
      </div>
    </header>
  );
}
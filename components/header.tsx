"use client";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-black/80 backdrop-blur-lg border-b border-white/10 flex items-center justify-between fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">EverythingNow</div>

      {/* Search */}
      <div className="flex-1 mx-6 max-w-xl">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-xl bg-white/10 text-white outline-none"
        />
      </div>

      {/* Menu */}
      <nav className="flex gap-6 text-white text-lg">
        <a href="#" className="hover:text-blue-400">Home</a>
        <a href="#" className="hover:text-blue-400">Explore</a>
        <a href="#" className="hover:text-blue-400">Trending</a>
        <a href="#" className="hover:text-blue-400">Live</a>
      </nav>
    </header>
  );
}

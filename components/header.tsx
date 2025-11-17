// components/header.tsx
export default function Header() {
  return (
    <header className="w-full p-6 bg-black text-white">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Everything Now</h1>
        <nav>
          <a href="#" className="px-4">Home</a>
          <a href="#" className="px-4">Explore</a>
          <a href="#" className="px-4">Trending</a>
          <a href="#" className="px-4">Live</a>
        </nav>
      </div>
    </header>
  );
}

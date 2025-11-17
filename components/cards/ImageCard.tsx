"use client";

export default function ImageCard({ title, src }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:scale-[1.02] transition-all cursor-pointer">
      <img src={src} className="w-full h-64 object-cover" />
      <div className="p-3 text-center text-white text-lg font-medium">
        {title}
      </div>
    </div>
  );
}

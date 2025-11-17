"use client";

export default function VideoCard({ title, thumbnail, views }) {
  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-all cursor-pointer border border-white/10">
      <img src={thumbnail} className="w-full h-48 object-cover" />

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{views} views</p>
      </div>
    </div>
  );
}

export default function VideoCard() {
  return (
    <div className="rounded-xl border border-gray-300 p-4 shadow">
      <h2 className="text-lg font-bold">Video Title</h2>
      <img
        src="https://placehold.co/600x400"
        alt="video thumbnail"
        className="rounded-lg mt-3"
      />
      <p className="mt-2 text-sm text-gray-600">Views: 1,234,567</p>
    </div>
  );
}

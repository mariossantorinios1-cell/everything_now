export default function ImagesCard() {
  return (
    <div className="rounded-xl border border-gray-300 p-4 shadow">
      <h2 className="text-lg font-bold">Image Gallery</h2>
      <img
        src="https://placehold.co/600x400"
        alt="gallery"
        className="rounded-lg mt-3"
      />
    </div>
  );
}

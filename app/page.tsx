import VideoCard from "../components/cards/videocard";
import ImagesCard from "../components/cards/imagescard";


export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-3xl font-bold mb-6">Everything Now</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <VideoCard />
        <ImagesCard />
      </div>
    </main>
  );
}

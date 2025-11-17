import Header from "@/components/header";
import VideoCard from "@/components/cards/videocard";
import ImageCard from "@/components/cards/imagescard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <div className="p-10">
        <h1 className="text-4xl font-bold mb-8">🌍 EverythingNow</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <VideoCard
            title="Epic Mountain Timelapse"
            videoUrl="https://www.w3schools.com/html/mov_bbb.mp4"
          />

          <VideoCard
            title="Ocean Drone Footage"
            videoUrl="https://www.w3schools.com/html/movie.mp4"
          />

          <ImageCard
            title="Beautiful City Lights"
            imageUrl="https://images.pexels.com/photos/356830/pexels-photo-356830.jpeg"
          />

          <ImageCard
            title="Tropical Paradise Beach"
            imageUrl="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg"
          />
        </section>
      </div>
    </main>
  );
}

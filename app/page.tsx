import VideoCard from "../components/cards/VideoCard";
import ImageCard from "../components/cards/ImageCard";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold mb-10 text-center">
        🔥 Trending Content
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        <VideoCard
          title="Epic Mountain Drone Shot"
          thumbnail="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
          views="540K"
        />

        <VideoCard
          title="City Lights Timelapse"
          thumbnail="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66"
          views="1.2M"
        />

        <ImageCard
          title="Beautiful Beach Paradise"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        />

        <ImageCard
          title="Wildlife in the Jungle"
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
        />

        <VideoCard
          title="Surfing the Biggest Waves"
          thumbnail="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          views="3.8M"
        />

      </div>
    </main>
  );
}

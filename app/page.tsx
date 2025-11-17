import Header from "../components/Header";
import ImagesCard from "../components/cards/ImagesCard";
import VideoCard from "../components/cards/VideoCard";

export default function Page() {
  return (
    <main className="p-6">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <VideoCard />
        <ImagesCard />
      </div>
    </main>
  );
}

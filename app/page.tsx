import Header from "../components/Header";
import ImagesCard from "../components/cards/imagescard";

export default function Home() {
  return (
    <main className="p-6">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <ImagesCard />
      </div>
    </main>
  );
}

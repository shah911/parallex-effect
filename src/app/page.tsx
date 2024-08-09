import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Gallery />
      <Hero />
      <div className="min-h-[600px] h-screen flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl 2xl:text-[4vw]">
          thanks for viewing
        </h1>
      </div>
    </main>
  );
}

import Hero from "./_components/hero";
import Navbar from "./_components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-[calc(100vh-100px)]">
        <Hero />
      </section>
    </main>
  );
}

import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import MainSection from "./_components/main";
export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-[calc(100vh-100px)]">
        <Hero />
        <MainSection />
      </section>
    </main>
  );
}

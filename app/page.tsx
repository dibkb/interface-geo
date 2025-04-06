import Hero from "./_components/hero";
import Navbar from "./_components/navbar";
import MainSection from "./_components/main";
import Footer from "./_components/footer";
export default function Home() {
  return (
    <main className="home-page">
      <Navbar />
      <section className="h-[calc(100vh-100px)] flex flex-col">
        <Hero />
        <MainSection />
        <Footer className="h-[150px]" />
      </section>
    </main>
  );
}

import Footer from "../_components/footer";
import Navbar from "../_components/navbar";

export default function CarosoulLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="home-page">
      <Navbar />
      <section className="h-[calc(100vh-100px)] flex flex-col">
        {children}
        <Footer className="h-[150px]" />
      </section>
    </main>
  );
}

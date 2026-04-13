import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <div id="projects" />
      <div id="experience" />
      <Footer />
    </main>
  );
}

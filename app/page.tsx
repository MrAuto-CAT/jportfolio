import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsCarousel from "../components/ProjectsCarousel";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="snap-y">
        <section id="home" className="section full-width">
          <div className="container">
            <Hero />
          </div>
        </section>

        <section id="projects" className="section full-width">
          <div className="container">
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <ProjectsCarousel />
          </div>
        </section>

        <section id="testimonials" className="section full-width">
          <div className="container">
            <Testimonials />
          </div>
        </section>

        <section id="contact" className="section full-width">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

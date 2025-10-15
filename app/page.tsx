import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectsCarousel from "../components/ProjectsCarousel";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        <section id="home" className="section full-width">
          <div className="container-custom">
            <Hero />
          </div>
        </section>

        <section id="projects" className="section full-width">
          <div className="container-custom">
            <ProjectsCarousel />
          </div>
        </section>

        <section id="testimonials" className="section full-width">
          <div className="container-custom">
            <Testimonials />
          </div>
        </section>

        <section id="contact" className="section full-width">
          <div className="container-custom">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

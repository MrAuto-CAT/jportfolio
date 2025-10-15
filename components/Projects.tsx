import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with modern web technologies, featuring user authentication, payment processing, and inventory management.",
    image: "/images/project-1.svg",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    id: "2",
    title: "Data Analytics Dashboard",
    description: "Interactive dashboard for visualizing complex datasets with real-time updates, custom charts, and automated reporting capabilities.",
    image: "/images/project-2.svg",
    technologies: ["Python", "D3.js", "PostgreSQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-6xl section-spacing">
      <div className="text-center mb-12">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Showcasing my technical expertise through real-world applications</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="professional-card group">
            <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg">
              <Image 
                src={p.image} 
                alt={p.title} 
                width={400} 
                height={225}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="text-secondary leading-relaxed">{p.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {p.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="pt-2">
                <a href="#" className="btn-primary inline-block">
                  View Project
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

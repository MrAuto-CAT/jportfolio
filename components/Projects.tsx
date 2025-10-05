import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "Project One",
    description: "A short description of project one.",
    image: "/images/project-1.svg",
  },
  {
    id: "2",
    title: "Project Two",
    description: "A short description of project two.",
    image: "/images/project-2.svg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-4xl mt-12">
      <h2 className="text-2xl font-semibold mb-6">Selected projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.id} className="border rounded p-4">
            <Image src={p.image} alt={p.title} width={320} height={180} />
            <h3 className="mt-3 font-medium">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{p.description}</p>
            <div className="mt-3">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                View project
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

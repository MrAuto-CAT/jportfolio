import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rob Bagley",
    title: "Project Manager",
    text: "Joseph demonstrated exceptional project management skills and delivered high-quality solutions on time. His communication throughout the project was clear and professional.",
    image: "/images/Rob Profile.jpeg",
    contact: "Rob@example.com",
  },
  {
    id: 2,
    name: "Mike Ray",
    title: "Senior Developer",
    text: "Working with Joseph was a pleasure. His attention to detail and technical expertise helped us achieve our automation goals efficiently.",
    image: "/images/mike Ray.jpeg",
    contact: "Mike@example.com",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-6xl section-spacing">
      <div className="text-center mb-12">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">What colleagues and clients say about working with me</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t) => (
          <article key={t.id} className="professional-card">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Image 
                  src={t.image} 
                  alt={t.name} 
                  width={64} 
                  height={64}
                  className="rounded-full object-cover w-16 h-16 ring-2 ring-primary/20" 
                />
              </div>
              <div className="flex-1">
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground">{t.name}</h4>
                  <p className="text-sm text-primary font-medium">{t.title}</p>
                </div>
                <blockquote className="text-secondary italic leading-relaxed mb-4">
                  "{t.text}"
                </blockquote>
                <a 
                  className="btn-secondary text-sm inline-block" 
                  href={`mailto:${t.contact}`}
                >
                  Contact Reference
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

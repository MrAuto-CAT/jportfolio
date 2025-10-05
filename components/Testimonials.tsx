import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Rob Bagley",
    text: "They did a great job delivering on time and communicated clearly.",
    image: "/images/Rob Profile.jpeg",
    contact: "Rob@example.com",
  },
  {
    id: 2,
    name: "Mike Ray",
    text: "Exceptional quality and attention to detail.",
    image: "/images/mike Ray.jpeg",
    contact: "Mike@example.com",
  },
];

export default function Testimonials() {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-semibold mb-6">Testimonials</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {testimonials.map((t) => (
          <article key={t.id} className="border rounded p-4 flex gap-4 items-start">
            <Image src={t.image} alt={t.name} width={64} height={64} />
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-gray-600">{t.text}</p>
              <a className="text-xs text-blue-600 mt-2 block" href={`mailto:${t.contact}`}>Contact</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

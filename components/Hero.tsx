import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full max-w-4xl">
      <div className="flex items-center gap-6">
        <div>
          <h1 className="text-3xl font-bold">Hi, I'm Joseph A</h1>
          <p className="mt-2 text-gray-600">Software engineering student with experience in project management, automation, and data-driven solutions. I’ve led 130+ projects, improved workflows with AI tools, and managed marketing campaigns that boosted effectiveness by 90%.</p>
          <div className="mt-4 flex gap-3">
            <a href="#projects" className="px-4 py-2 bg-foreground text-background rounded">
              View projects
            </a>
            <a href="#contact" className="px-4 py-2 border rounded">
              Contact me
            </a>
          </div>
        </div>
        <div className="hidden sm:block">
          <Image src="/images/Joseph profile.jpeg" alt="hero" width={220} height={140} />
        </div>
      </div>
    </section>
  );
}

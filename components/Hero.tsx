import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full max-w-6xl">
      <div className="professional-card">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Joseph A
            </h1>
            <h2 className="text-xl lg:text-2xl text-primary font-semibold mb-4">
              Software Engineering Student
            </h2>
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              Experienced in project management, automation, and data-driven solutions. 
              I've successfully led <strong>130+ projects</strong>, improved workflows with AI tools, 
              and managed marketing campaigns that <strong>boosted effectiveness by 90%</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-primary text-center">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary text-center">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative">
              <Image 
                src="/images/Joseph profile.jpeg" 
                alt="Joseph A - Software Engineering Student" 
                width={280} 
                height={280}
                className="rounded-2xl object-cover w-64 h-64 lg:w-72 lg:h-72 shadow-lg" 
              />
              <div className="absolute inset-0 rounded-2xl ring-4 ring-primary/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
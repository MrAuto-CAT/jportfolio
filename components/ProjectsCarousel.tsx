"use client";
import { useState } from "react";
import Image from "next/image";

const items = [
  { 
    id: 1, 
    title: "Virtual Wallet Application", 
    description: "Secure digital wallet interface with modern authentication",
    image: "/images/Virtual Cash.png" 
  },
  { 
    id: 2, 
    title: "E-commerce Analytics Platform", 
    description: "Comprehensive statistics dashboard for online retail",
    image: "/images/Milo Front end.png" 
  },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="w-full max-w-5xl section-spacing">
      <div className="text-center mb-8">
        <h2 className="section-title">Project Showcase</h2>
        <p className="section-subtitle">Interactive preview of my latest work</p>
      </div>
      
      <div className="professional-card">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={prev} 
            className="btn-secondary flex items-center gap-2 px-4 py-2"
            disabled={items.length <= 1}
          >
            ← Previous
          </button>
          <div className="text-center">
            <span className="text-sm text-secondary">
              {index + 1} of {items.length}
            </span>
          </div>
          <button 
            onClick={next} 
            className="btn-secondary flex items-center gap-2 px-4 py-2"
            disabled={items.length <= 1}
          >
            Next →
          </button>
        </div>

        <div className="text-center">
          <div className="aspect-video w-full max-w-3xl mx-auto overflow-hidden rounded-lg mb-6 shadow-lg">
            <Image 
              src={items[index].image} 
              alt={items[index].title} 
              width={800} 
              height={450}
              className="w-full h-full object-cover transition-all duration-500" 
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold text-foreground">{items[index].title}</h3>
            <p className="text-secondary">{items[index].description}</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-3 mt-6">
        {items.map((item, i) => (
          <button 
            key={i} 
            onClick={() => setIndex(i)} 
            className={`relative overflow-hidden rounded-lg border-2 transition-all duration-300 ${
              i === index 
                ? "border-primary scale-110 shadow-lg" 
                : "border-transparent hover:border-border hover:scale-105"
            }`}
          >
            <Image 
              src={item.image} 
              alt={item.title}
              width={80}
              height={45}
              className="object-cover opacity-75 hover:opacity-100 transition-opacity"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

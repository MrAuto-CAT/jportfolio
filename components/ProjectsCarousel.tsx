"use client";
import { useState } from "react";
import Image from "next/image";

const items = [
  { id: 1, title: "Virtual Wallet Login Page", image: "/images/Virtual Cash.png" },
  { id: 2, title: "Statistics Page of Shopify", image: "/images/Milo Front end.png" },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-full max-w-3xl flex items-center justify-center border rounded p-4">
        <button onClick={prev} className="px-3 py-2 mr-4">
          ◀
        </button>
        <div className="flex-1 text-center">
          <Image src={items[index].image} alt={items[index].title} width={560} height={320} />
          <h3 className="mt-3 font-medium">{items[index].title}</h3>
        </div>
        <button onClick={next} className="px-3 py-2 ml-4">
          ▶
        </button>
      </div>
      <div className="flex gap-2">
        {items.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i === index ? "bg-foreground" : "bg-gray-300"}`} />
        ))}
      </div>
    </div>
  );
}

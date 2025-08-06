"use client";
import { useState, useEffect } from "react";

const images = [
  "/1.jpeg",
  "/2.jpeg",
  "/3.jpeg",
  "/4.jpeg",
  "/5.jpeg",
  "/6.jpeg",
  "/7.jpeg",
  "/8.jpeg",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // 4000 ms = 4 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-gray-100 to-blue-100 px-4 py-8">
      <div className="relative mb-6 flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-white/80 rounded-full px-2 py-1 shadow hover:bg-gray-200"
          aria-label="Previous"
          style={{ left: "-2.5rem" }}
        >
          ◀
        </button>
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="shadow-md"
          style={{
            maxWidth: "90vw",
            maxHeight: "60vh",
            width: "auto",
            height: "auto",
            borderRadius: "1rem",
          }}
        />
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-white/80 rounded-full px-2 py-1 shadow hover:bg-gray-200"
          aria-label="Next"
          style={{ right: "-2.5rem" }}
        >
          ▶
        </button>
      </div>
      <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
        Interior design graduate passionate about creating functional and elegant spaces.<br />
        <span className="text-blue-700 font-medium">
          Seeking paid internships to bring fresh ideas to life.
        </span>
      </p>
    </section>
  );
}

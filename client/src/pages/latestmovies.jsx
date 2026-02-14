import { useEffect, useState } from "react";
import CarouselCard from "../components/CarouselCard";

const LatestMovie = () => {
  const [cards, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const API_BASE = import.meta.env.VITE_APP_API_URL;

  const url = `${API_BASE}/latesthigh`;

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (e) {
        console.error("Error fetching movies:", e);
      }
    };
    fetchData();
  }, []);

  // Automatic Slide Logic
  useEffect(() => {
    if (cards.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, [cards]);

  return (
    <div className="relative w-full overflow-hidden bg-[#1C163B] py-8">
      {/* The "Track" that moves */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className="min-w-full flex justify-center px-4"
          >
            <CarouselCard
              id={card.id}
              image={card.image}
              title={card.title}
              rating={card.rating}
              description={card.description}
            />
          </div>
        ))}
      </div>

      {/* Optional: Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {cards.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === idx ? "bg-yellow-400 w-4" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestMovie;
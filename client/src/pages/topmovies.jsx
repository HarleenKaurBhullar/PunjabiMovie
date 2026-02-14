import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
const TopMovies = () => {
  const [topdata, setdata] = useState([]);
  const API_BASE = import.meta.env.VITE_APP_API_URL;

  const mvurl = `${API_BASE}/top40movies`;

  // Use useEffect to handle the side effect (data fetching)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(mvurl);
        const data = await response.json();
        setdata(data);
      } catch (e) {
        console.error("Failed to fetch movies:", e);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <ul className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {topdata.map((movie) => (
          <li key={movie.id || movie.title}>
            <div className="px-12 py-6">
              <MovieCard
                id={movie.id}
                image={movie.image || "https://picsum.photos/400/600"}
                title={movie.title}
                meta={movie.rating}
                description={movie.description}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopMovies;
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // 1. Import useParams
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
const GenreMoviePage = () => {
  // 2. Extract genre_name from the URL hook instead of props
  const { genre_name } = useParams(); 
  const [genremovie, setdata] = useState([]);

  // Use the backend URL
  

useEffect(() => {
  if (!genre_name) return;

  console.log("Starting fetch for genre:", genre_name);
  const API_BASE = import.meta.env.VITE_APP_API_URL;

  const fetchData = async () => {
    console.log('hi');
    try {
console.log('hi2');
      const url = `${API_BASE}/genre_name/${genre_name}`;
      const response = await fetch(url);
      console.log(response);
      const data = await response.json();

      console.log("Fetched data length:", data.length);
      console.log("First movie:", data[0]);

      setdata(data);
    } catch (e) {
      console.error("Fetch error:", e);
    }
  };

  fetchData();
}, [genre_name]);

 // 3. Effect runs whenever the URL parameter changes
console.log("Current genremovie state:", genremovie);
  return (
    <div>
      <NavBar></NavBar>
      <h2 className="text-2xl font-bold mt-4  p-6 pl-14 text-[#ffe533]">{genre_name}</h2>
      <ul className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {genremovie.map((movie) => (
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

export default GenreMoviePage;
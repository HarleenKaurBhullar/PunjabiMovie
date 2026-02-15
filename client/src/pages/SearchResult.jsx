import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE = import.meta.env.VITE_APP_API_URL;


  useEffect(() => {
    if (!query) return;

    fetch(`${API_BASE}/search?query=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
      });
  }, [query]);

  if (loading) return <p className="text-yellow-400 p-5">Loading...</p>;

  return (
    <div>
    <NavBar></NavBar>
    <div className="p-5">
      <h2 className="text-yellow-400 text-xl mb-4">
        Results for "{query}"
      </h2>

      {movies.length === 0 ? (
        <p className="text-gray-400">No movies found</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {movies.map((movie) => (
           <MovieCard
        id={movie.id}
        image={movie.image}
        title={movie.title}
        meta={movie.rating}
        description={movie.description}
      />
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Search;

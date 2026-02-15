import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MovieDescPage = () => {
  const { id } = useParams();
  const [movie, setMovieData] = useState({});
  const [recmovie, setRecMovie] = useState([]);
  const API_BASE = import.meta.env.VITE_APP_API_URL;


  // Fetch movie details
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE}/movie/${id}`);
        const data = await response.json();
        setMovieData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [id]);

  // Fetch recommended movies
  useEffect(() => {
    const fetchRec = async () => {
      try {
        const response = await fetch(`${API_BASE}/recmovie/${id}`);
        const data = await response.json();
        setRecMovie(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchRec();
  }, [id]);
  console.log(typeof(movie.cast));

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-[#1c163b] text-white px-4 sm:px-6 md:px-10 py-8 md:py-12">

        {/* 🔹 TOP SECTION */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">

          {/* Poster */}
          <img
            src={movie.image}
            alt={movie.title}
            className="
              w-44 h-64
              sm:w-52 sm:h-80
              md:w-64 md:h-96
              object-cover
              rounded-md
              border border-yellow-400
              mx-auto md:mx-0
            "
          />

          {/* Details (below poster on mobile) */}
          <div className="flex-1 text-center md:text-left">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
              {movie.title}
            </h1>

            <p className="mt-2 text-yellow-300 text-base sm:text-lg">
              ⭐ {movie.rating}
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base line-clamp-4 sm:line-clamp-none">
              {movie.description}
            </p>

            <p className="mt-6 text-sm sm:text-base">
              <span className="text-yellow-400 font-semibold">Cast: </span>
              <p className="text-gray-300">{movie.cast?.join(", ")}</p>
            </p>

            {/* Released on — mobile */}
            <div className="mt-6 md:hidden">
              <span className="text-yellow-400 font-semibold">Released on</span>
              <p className="text-gray-300">{movie.year}</p>
            </div>
          </div>

          {/* Released on — desktop */}
          <div className="hidden md:block text-yellow-400 font-semibold">
            Released on
            <p className="text-white mt-1">{movie.year}</p>
          </div>
        </div>

        {/* 🔹 RECOMMENDED SECTION */}
        <h2 className="text-yellow-400 text-xl sm:text-2xl font-bold mt-12">
          Recommended watches
        </h2>

        <ul className="flex gap-4 sm:gap-6 overflow-x-auto mt-6 pb-4 scrollbar-hide">
          {recmovie.map((movie) => (
            <li key={movie.id || movie.title} className="shrink-0">
              <MovieCard
                id={movie.id}
                image={movie.image || "https://picsum.photos/400/600"}
                title={movie.title}
                meta={movie.rating}
                description={movie.description}
              />
            </li>
          ))}
        </ul>

      </div>

      <Footer />
    </>
  );
};

export default MovieDescPage;

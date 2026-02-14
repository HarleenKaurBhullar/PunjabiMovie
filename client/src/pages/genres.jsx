import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
const genres = [
  'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 
  'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 
  'Mystery', 'Romance', 'Science Fiction', 'Thriller', 'War'
];

const GenreListPage = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen pb-16">
      <NavBar />

      <h1 className="text-center text-3xl font-bold mt-12 mb-10 " style={{ color: '#eeba2b' }}>
        Genres
      </h1>

      {/* Container with side padding */}
      <div className="px-16 md:px-32 lg:px-64">
        
        {/* Flex container for the "Justify Between" effect */}
        <div className="flex flex-wrap justify-between gap-y-8">
          {genres.map((genre, idx) => (
            <div 
              key={idx} 
              onClick={() => navigate(`/genre/${genre}`)}
              // w-[45%] ensures two items per row with space in the middle
              className="w-[45%] bg-[#ffe533] font-[#1c163b] border-2 border-black rounded-lg text-center py-10 font-extrabold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#fbe762] hover:-translate-x-1 hover:-translate-y-1  hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]" 
              
            >
              {genre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenreListPage;
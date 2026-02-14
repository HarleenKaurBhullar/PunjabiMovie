import LatestMovie from "./latestmovies";
import TopMovies from "./topmovies";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Homepage = () => {
  

  return (
    <div className="flex flex-col">
      <NavBar></NavBar>
      <LatestMovie></LatestMovie>
      {/* Header section */}
      <div className="flex items-center justify-between w-full bg-[#1C163B] px-12 py-4">
        <h2 className="text-[18px] font-medium text-[#FFE533]">
          Top Rated
        </h2>

        <span className="text-[18px] font-medium text-[#FFE533]">
          Year
        </span>
      </div>

      <TopMovies></TopMovies>
      <Footer></Footer>
    </div>
  );
};

export default Homepage;

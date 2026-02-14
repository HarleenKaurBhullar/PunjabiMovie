import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#1C163B] text-[#FFE533] items-center text-center flex flex-col justify-center">
      <NavBar />

      <div className="px-12 py-12 grow">
        <h1 className="text-3xl font-semibold mb-6 ">About Us</h1>

        <p className="text-[#e6d96f] max-w-3xl mb-6 leading-relaxed " >
          Punjabi Movie Hub is a <span className="font-medium">learning project</span>{" "}
          focused on listing and recommending Punjabi movies. The platform is
          designed to help users explore movies, discover top-rated films,
          and get detailed information such as ratings, cast, and release details.
        </p>

        <p className="text-[#e6d96f] max-w-3xl mb-6 leading-relaxed">
          This project was built to apply and showcase modern web development
          concepts while working with real-world movie data. It emphasizes
          clean UI design, API integration, and data-driven recommendations
          tailored specifically for Punjabi cinema.
        </p>

        <h2 className="text-xl font-medium mt-8 mb-3">Data & Credits</h2>

        <ul className="list-disc list-inside text-[#e6d96f] space-y-2">
          <li>
            Movie metadata and images are provided by <strong>TMDB</strong>
          </li>
          <li>
            Ratings and additional movie details are fetched using the{" "}
            <strong>OMDb API</strong>
          </li>
        </ul>

        <p className="text-xs text-[#cfc56a] mt-4">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default About;

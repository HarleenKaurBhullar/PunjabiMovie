const Footer = () => {
  return (
    <footer className="bg-[#1C163B] text-[#FFE533] px-12 py-8 mt-12">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        
        {/* Left */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Punjabi Movie Hub</h3>
          <p className="text-sm text-[#e6d96f] max-w-sm">
            Discover, explore, and track Punjabi movies with ratings, cast,
            and detailed insights — all in one place.
          </p>
        </div>

        {/* Right */}
        <div>
          <h4 className="font-semibold mb-2">Credits</h4>
          <p className="text-sm text-[#e6d96f]">
            Movie data powered by{" "}
            <span className="font-medium">TMDB</span> &{" "}
            <span className="font-medium">OMDb</span>
          </p>
          <p className="text-xs mt-2 text-[#cfc56a] max-w-xs">
            This product uses the TMDB API but is not endorsed or certified by TMDB.
          </p>
        </div>
      </div>

      <div className="border-t border-[#FFE533]/30 mt-6 pt-4 text-center text-xs text-[#e6d96f]">
        © {new Date().getFullYear()} Punjabi Movie Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

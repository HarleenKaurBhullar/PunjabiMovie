import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setMenuOpen(false); // Close menu on search
  };

  return (
    <nav className="bg-[#1c163b] w-full relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-5">
        
        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="lg:hidden text-[#bc9c22] text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Left links - Hidden on mobile, visible on Large (lg) screens */}
        <div className="hidden lg:flex gap-10 text-[#bc9c22] text-[21px] font-medium">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to='/genre' className="hover:text-yellow-300 transition">Genres</Link>
          <Link to='/about' className="hover:text-yellow-300 transition">About us</Link>
        </div>

        {/* Center search */}
        <div className="flex-1 flex justify-center px-4">
          <form onSubmit={handleSearch} className="relative w-full max-w-[280px]">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-[38px] rounded-full bg-transparent border border-yellow-400 px-4 text-yellow-400 focus:outline-none"
            />
            <button 
              type="submit" 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400"
            >
              🔍
            </button>
          </form>
        </div>

        {/* Right title */}
        <div className="text-[#bc9c22] text-[22px] md:text-[27px] font-semibold tracking-wide">
          Raunaq
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1c163b] border-t border-yellow-400 flex flex-col items-center gap-5 py-5 text-[#bc9c22] text-[18px]">
          <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Home</Link>
          <Link to='/genre' onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">Genres</Link>
          <Link to='/about' onClick={() => setMenuOpen(false)} className="hover:text-yellow-300">About us</Link>
        </div>
      )}

      <div className="w-[95%] h-[2px] bg-yellow-400 mx-auto"></div>
    </nav>
  );
};

export default NavBar;
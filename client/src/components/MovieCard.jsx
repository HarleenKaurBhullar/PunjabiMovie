import { Navigate, useNavigate } from "react-router-dom";

const MovieCard = ({ id,image, title, meta, description }) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>{navigate(`/movie/${id}`)}} className="w-64 h-100 bg-[#07012b] border border-[#f5c542] rounded-md overflow-hidden flex flex-col">
      
      {/* Image section (75%) */}
      <div className="h-[75%] w-full">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content section (25%) */}
      <div className="h-[25%] p-3 flex flex-col justify-start">
        
        {/* Title + Meta */}
        <div className="flex justify-between items-center">
          <span className="text-[18px] text-[#bc9c22] font-semibold ">
            {title}
          </span>
          <span className="text-[14px] text-[#ffe533] text-right leading-tight">
            {meta}
          </span>
        </div>

        {/* Description */}
        <p className="text-[12px] text-white leading-snug mt-2 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

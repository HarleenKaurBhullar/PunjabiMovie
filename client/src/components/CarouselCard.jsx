import { useNavigate } from "react-router-dom";

const CarouselCard = ({ id, image, title, rating, description }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${id}`)}
      className="
        flex flex-col md:flex-row
        items-center md:items-start
        w-[95vw] md:w-[85vw] lg:w-[75vw]
        mx-auto
        rounded-lg overflow-hidden
        shadow-2xl
        p-4 md:p-8
        cursor-pointer
      "
      style={{ backgroundColor: "#040117" }}
    >
      {/* Left Side: Content */}
      <div className="flex flex-col flex-1 md:pr-8 text-center md:text-left">
        <h3
          className="font-bold leading-tight text-2xl sm:text-3xl md:text-4xl"
          style={{ color: "#FFD700" }}
        >
          {title}
        </h3>

        <div
          className="mt-2 font-medium text-lg sm:text-xl"
          style={{ color: "#FFD700" }}
        >
          {rating} ⭐
        </div>

        {description && (
          <p className="text-gray-200 mt-4 text-sm sm:text-base leading-relaxed line-clamp-3">
            {description}
          </p>
        )}
      </div>

      {/* Right Side: Poster */}
      <div className="
        mt-6 md:mt-0
        w-40 h-60
        sm:w-48 sm:h-72
        md:w-56 md:h-80
        lg:w-64 lg:h-96
        shrink-0
        shadow-lg
      ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default CarouselCard;

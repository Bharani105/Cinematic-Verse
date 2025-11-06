import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.jpeg";
import { Heart } from "lucide-react";

const SeriesCards = ({ series }) => {
  const { id, name, overview, poster_path } = series;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;

  const [isFavourite, setIsFavourite] = useState(false);

  // Check if series is already in favourites
  useEffect(() => {
    const favSeries = JSON.parse(localStorage.getItem("favouriteSeries")) || [];
    setIsFavourite(favSeries.some((fav) => fav.id === id));
  }, [id]);

  // Handle toggle favourite
  const toggleFavourite = () => {
    const favSeries = JSON.parse(localStorage.getItem("favouriteSeries")) || [];

    if (isFavourite) {
      // Remove from favourites
      const updated = favSeries.filter((fav) => fav.id !== id);
      localStorage.setItem("favouriteSeries", JSON.stringify(updated));
      setIsFavourite(false);
    } else {
      // Add to favourites
      favSeries.push(series);
      localStorage.setItem("favouriteSeries", JSON.stringify(favSeries));
      setIsFavourite(true);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-72 sm:w-80 md:w-96 bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 relative transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg overflow-hidden">
        
        {/* Image Wrapper */}
        <div className="relative w-full h-105 overflow-hidden">
          <Link to={`/series/${id}`}>
            <img
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={image}
              alt={name}
            />
          </Link>

          {/* Favourite Button */}
          <button
            onClick={toggleFavourite}
            className={`absolute top-3 right-3 p-2 rounded-full transition ${
              isFavourite
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
            title={isFavourite ? "Remove from My List" : "Add to My List"}
          >
            <Heart
              className={`w-5 h-5 ${isFavourite ? "fill-white" : "fill-none"}`}
            />
          </button>
        </div>

        {/* Series Info */}
        <div className="p-4">
          <Link to={`/series/${id}`}>
            <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {name}
            </h5>
          </Link>
          <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3 text-center">
            {overview || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeriesCards;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Backup from "../assets/images/backup.jpeg";
import { Heart } from "lucide-react";

const MovieCards = ({ movie }) => {
  const { id, title, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;

  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    const favMovies = JSON.parse(localStorage.getItem("favourites")) || [];
    setIsFavourite(favMovies.some((fav) => fav.id === id));
  }, [id]);

  const toggleFavourite = () => {
    const favMovies = JSON.parse(localStorage.getItem("favourites")) || [];

    if (isFavourite) {
      const updated = favMovies.filter((fav) => fav.id !== id);
      localStorage.setItem("favourites", JSON.stringify(updated));
      setIsFavourite(false);
    } else {
      favMovies.push(movie);
      localStorage.setItem("favourites", JSON.stringify(favMovies));
      setIsFavourite(true);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-72 sm:w-80 md:w-96 bg-white border border-gray-200 rounded-2xl shadow-md dark:bg-gray-800 dark:border-gray-700 m-4 relative transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg overflow-hidden">
        <div className="relative w-full h-105 overflow-hidden rounded-t-2xl">
          <Link to={`/movie/${id}`}>
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={title}
            />
          </Link>
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

        <div className="p-4">
          <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-lg sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              {title}
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

export default MovieCards;

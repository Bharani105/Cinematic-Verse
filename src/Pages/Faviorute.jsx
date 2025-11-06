import React, { useEffect, useState } from "react";

const Favourite = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [favouriteSeries, setFavouriteSeries] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("favourites")) || [];
    const savedSeries = JSON.parse(localStorage.getItem("favouriteSeries")) || [];
    setFavouriteMovies(savedMovies);
    setFavouriteSeries(savedSeries);
  }, []);

  const removeMovie = (id) => {
    const updatedMovies = favouriteMovies.filter((movie) => movie.id !== id);
    setFavouriteMovies(updatedMovies);
    localStorage.setItem("favourites", JSON.stringify(updatedMovies));
  };

  const removeSeries = (id) => {
    const updatedSeries = favouriteSeries.filter((series) => series.id !== id);
    setFavouriteSeries(updatedSeries);
    localStorage.setItem("favouriteSeries", JSON.stringify(updatedSeries));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-neutral-950 text-white px-6 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-14 tracking-wide">
        ❤️ My Favourites
      </h1>

      {/* 🎥 Favourite Movies */}
      <section className="mb-20">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">
          🎬 Favourite Movies
        </h2>

        {favouriteMovies.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">
            No favourite movies yet. Add some!
          </p>
        ) : (
          <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide">
            {favouriteMovies.map((movie) => (
              <div
                key={movie.id}
                className="relative flex-shrink-0 w-64 md:w-72 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-pink-500/40"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
                  <p className="text-yellow-400 text-sm mb-3">
                    ⭐ {movie.vote_average}
                  </p>
                  <button
                    onClick={() => removeMovie(movie.id)}
                    className="text-sm bg-gradient-to-r from-pink-600 to-red-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-1.5 rounded-md font-medium transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 📺 Favourite Series */}
      <section>
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500">
          📺 Favourite Series
        </h2>

        {favouriteSeries.length === 0 ? (
          <p className="text-gray-400 text-center text-lg">
            No favourite series yet. Add some!
          </p>
        ) : (
          <div className="flex overflow-x-auto space-x-8 pb-4 scrollbar-hide">
            {favouriteSeries.map((series) => (
              <div
                key={series.id}
                className="relative flex-shrink-0 w-64 md:w-72 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110 hover:shadow-pink-500/40"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
                  alt={series.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-semibold mb-1">{series.name}</h3>
                  <p className="text-yellow-400 text-sm mb-3">
                    ⭐ {series.vote_average}
                  </p>
                  <button
                    onClick={() => removeSeries(series.id)}
                    className="text-sm bg-gradient-to-r from-pink-600 to-red-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-1.5 rounded-md font-medium transition-colors duration-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Favourite;

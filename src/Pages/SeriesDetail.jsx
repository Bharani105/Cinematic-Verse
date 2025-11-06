import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/images/backup.jpeg";
import UseDocTitle from "../hooks/UseDocTitle";

const SeriesDetail = () => {
  const params = useParams();
  const [series, setSeries] = useState({});
  const [imdbId, setImdbId] = useState("");
  UseDocTitle(series.name);

  const image = series.poster_path
    ? `https://image.tmdb.org/t/p/w500/${series.poster_path}`
    : Backup;

  useEffect(() => {
    async function fetchSeries() {
      // fetch main series data
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${params.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      const json = await response.json();
      setSeries(json);

      // fetch external IDs (for IMDB)
      const extRes = await fetch(
        `https://api.themoviedb.org/3/tv/${params.id}/external_ids?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
      );
      const extJson = await extRes.json();
      setImdbId(extJson.imdb_id);
    }
    fetchSeries();
  }, [params.id]);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img className="rounded" src={image} alt={series.name} />
        </div>
        <div className="max-w-2xl text-gray-700 text-xl dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {series.name}
          </h1>
          <p className="my-4">{series.overview}</p>

          <p className="my-4">
            <span className="mr-2 font-bold">First Air Date:</span>
            <span>{series.first_air_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Number of Seasons:</span>
            <span>{series.number_of_seasons}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Episodes:</span>
            <span>{series.number_of_episodes}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            {imdbId ? (
              <a
                href={`https://www.imdb.com/title/${imdbId}`}
                target="_blank"
                rel="noreferrer"
              >
                {imdbId}
              </a>
            ) : (
              <span>N/A</span>
            )}
          </p>
        </div>
      </section>
    </main>
  );
};

export default SeriesDetail;

import React from "react";
import { fetcher } from "../config/Config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";

const MoviePages = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=e08d2ec789bf35e25fb949041d8d545e`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <div className="page-container">
      <div className="flex items-center px-5 bg-clr-page-bg rounded-xl">
        <input
          className="w-full p-5 bg-transparent outline-none"
          placeholder="Search your movie here"
        ></input>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <div className="py-10">
        <div className="grid grid-cols-4 gap-6">
          {movies.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MoviePages;

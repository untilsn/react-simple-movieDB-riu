import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { title, poster_path, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-4 rounded-lg movie-card bg-clr-page-bg">
      <img
        src={`http://image.tmdb.org/t/p/w500/${poster_path}`}
        alt=""
        className="w-full h-[260px] rounded-lg object-cover"
      />
      <div className="flex flex-col flex-1">
        <h3 className="h-[80px] pt-5 pb-3 text-base ">{title}</h3>
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm opacity-50">
            {new Date(release_date).getFullYear()}
          </span>
          <div className="flex items-center gap-2 ">
            <span className="text-sm opacity-50">{vote_average}</span>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                />
              </svg>
            </span>
          </div>
        </div>
        <button
          onClick={() => navigate(`/movie/${id}`)}
          // use navigate
          className="w-full p-3 text-base font-bold rounded-lg bg-primary "
        >
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

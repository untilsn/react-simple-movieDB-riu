import React from "react";

const MovieCard = () => {
  return (
    <div className="movie-card rounded-lg p-4 bg-clr-page-bg">
      <img
        src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg"
        alt=""
        className="w-full h-[260px] rounded-lg object-cover"
      />
      <h3 className="text-base pt-5 pb-3">Spider-Man: No Way Home</h3>
      <div className="flex items-center justify-between ">
        <span className="opacity-50 text-sm">2021</span>
        <div className="flex items-center gap-2">
          <span className="opacity-50 text-sm">7.9</span>
          <span className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-yellow-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </span>
        </div>
      </div>
      <button className="w-full rounded-lg   bg-primary p-3 mt-5 text-base font-bold ">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;

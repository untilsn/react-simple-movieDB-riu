import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonMovie from "../button/ButtonMovie";
import { tmdbAPI } from "../../config/Config";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import LoadingSkeleton from "../loading/LoadingSkeleton";

const MovieCard = ({ item }) => {
  const { title, poster_path, release_date, vote_average, id } = item;
  const navigate = useNavigate();
  // Làm tròn giá trị vote_average đến 1 số thập phân
  const roundedVoteAverage = !isNaN(vote_average) ? vote_average.toFixed(1) : 0;
  // Kiểm tra nếu poster_path không null hoặc undefined thì mới tải hình ảnh
  const imageUrl = poster_path
    ? tmdbAPI.image500(poster_path)
    : "https://preview.redd.it/ds1luav7dl851.jpg?auto=webp&s=5b7146b28b52d3a1fc22cc9297e55a7db3f066b8";

  return (
    <div className="flex flex-col p-4 rounded-lg movie-card bg-clr-page-bg">
      <img
        src={imageUrl}
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
            <span className="text-sm opacity-50">{roundedVoteAverage}</span>
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
        <ButtonMovie
          onClick={() => navigate(`/movie/${id}`)}
          bgColor="secondary"
        >
          Watch now
        </ButtonMovie>
        {/* <button
          onClick={() => navigate(`/movie/${id}`)}
          // use navigate
          className="w-full p-3 text-base font-bold rounded-lg bg-primary "
        >
          Watch Now
        </button> */}
      </div>
    </div>
  );
};
MovieCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    id: PropTypes.number,
  }),
};

function FallbackComponent() {
  return (
    <p className="text-red-500 bg-white ">
      Something Went Wrong With This Component
    </p>
  );
}

export default withErrorBoundary(MovieCard, {
  FallbackComponent,
});

export function MovieCardSkeleton() {
  return (
    <div className="flex flex-col p-4 rounded-lg movie-card bg-clr-page-bg">
      <div className="flex flex-col flex-1">
        <LoadingSkeleton
          width="100%"
          height="260px"
          radius="8px"
          className="mb-5"
        ></LoadingSkeleton>
        <h3 className="h-[80px] pt-5 pb-3 text-base ">
          <LoadingSkeleton
            width="100%"
            height="20px"
            radius="8px"
          ></LoadingSkeleton>
        </h3>

        <div className="flex items-center justify-between mb-5">
          <span className="text-sm opacity-50">
            <LoadingSkeleton
              width="50px"
              height="20px"
              radius="8px"
            ></LoadingSkeleton>
          </span>
          <div className="flex items-center gap-2 ">
            <LoadingSkeleton
              width="50px"
              height="20px"
              radius="8px"
            ></LoadingSkeleton>
            <span className="text-sm opacity-50"></span>
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
        <LoadingSkeleton
          width="100%"
          height="40px"
          radius="8px"
        ></LoadingSkeleton>
      </div>
    </div>
  );
}

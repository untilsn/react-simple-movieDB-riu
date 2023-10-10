import React, { useEffect, useState } from "react";
import { apiKey, fetcher } from "../config/Config";
import useSWR from "swr";
import MovieCard from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";

const MoviePages = () => {
  const [filter, setFilter] = useState("");
  const searchDebounce = useDebounce(filter, 1000);
  const [nextPage, setNextPage] = useState(1);
  const [url, setUrl] = useState(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
  );
  useEffect(() => {
    if (searchDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?query=${searchDebounce}&api_key=${apiKey}&page=${nextPage}`
      );
    } else {
      setUrl(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`
      );
    }
  }, [searchDebounce, nextPage]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  const loading = !data && !error;

  // if (!data) return null;
  const movies = data?.results || [];
  // const { page, total_pages } = data;

  // pagination
  // const [itemOffset, setItemOffset] = useState(0);
  // const MoviePerPage = 20;
  // // Simulate fetching items from another resources.
  // // (This could be items from props; or items loaded in a local state
  // // from an API endpoint with useEffect and useState)
  // const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const pageCount = Math.ceil(items.length / itemsPerPage);

  // // Invoke when user click to request another page.
  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % items.length;
  //   console.log(
  //     `User requested page number ${event.selected}, which is offset ${newOffset}`
  //   );
  //   setItemOffset(newOffset);
  // };

  return (
    <div className="page-container">
      {/* input */}
      <div className="flex items-center px-5 bg-clr-page-bg rounded-xl">
        <input
          type="text"
          className="w-full p-5 bg-transparent outline-none"
          placeholder="Search your movie here"
          onChange={handleFilter}
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
        {/* loading */}
        {loading && (
          <div className="w-[100%] mx-auto lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        {/* movie */}
        <div className="grid grid-cols-4 gap-6">
          {!loading &&
            movies.length > 0 &&
            movies.map((item) => (
              <MovieCard key={item.id} item={item}></MovieCard>
            ))}
        </div>
        {/* navigation */}
        <div className="flex items-center justify-center gap-10 py-12 ">
          <span
            className="cursor-pointer"
            onClick={() => setNextPage(nextPage - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span className="px-4 py-3 font-medium leading-none text-black bg-white rounded-lg cursor-pointer">
            1
          </span>
          <span
            className="cursor-pointer"
            onClick={() => setNextPage(nextPage + 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoviePages;

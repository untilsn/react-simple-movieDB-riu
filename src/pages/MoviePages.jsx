import React, { useEffect, useState } from "react";
import { apiKey, fetcher, tmdbAPI } from "../config/Config";
import useSWR from "swr";
import MovieCard, { MovieCardSkeleton } from "../components/movie/MovieCard";
import useDebounce from "../hooks/useDebounce";
import ReactPaginate from "react-paginate";
import { v4 } from "uuid";

const MoviePages = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const itemsPerPage = 20;

  const [filter, setFilter] = useState("");
  const searchDebounce = useDebounce(filter, 1000);
  const [url, setUrl] = useState(tmdbAPI.getMovieList("popular", nextPage));
  useEffect(() => {
    if (searchDebounce) {
      setUrl(tmdbAPI.getMovieSearch(searchDebounce, nextPage));
    } else {
      setUrl(tmdbAPI.getMovieList("popular", nextPage));
    }
  }, [searchDebounce, nextPage]);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const { data, error } = useSWR(url, fetcher);
  if (!data) return null;
  const loading = !data && !error;
  const movies = data?.results || [];
  // pagination

  const pageCount = Math.ceil(data.results / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.results;
    setItemOffset(newOffset);
    setNextPage(event.selected + 1);
  };
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
      {/* loading */}
      <div className="py-10">
        {/* {loading && (
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
        )} */}
        {loading && (
          <div className="grid grid-cols-4 gap-6">
            {new Array(itemsPerPage).fill(0).map(() => (
              <MovieCardSkeleton key={v4()}></MovieCardSkeleton>
            ))}
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
        <div className="mt-10">
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={data.total_pages}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </div>
      </div>
    </div>
  );
};
export default MoviePages;

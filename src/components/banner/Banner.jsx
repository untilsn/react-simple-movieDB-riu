import React from "react";
import useSWR from "swr";
import "swiper/scss";

import { fetcher } from "../../config/Config";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=e08d2ec789bf35e25fb949041d8d545e`,
    fetcher
  );
  const movies = data?.results || [];
  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor="true">
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, poster_path } = item;

  return (
    <div className="relative w-full h-full bg-white rounded-xl">
      <div className="overlay absolute inset-0 rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.1)] "></div>
      <img
        src={`http://image.tmdb.org/t/p/original/${poster_path}`}
        alt=""
        className="object-cover w-full h-full rounded-xl"
      />
      <div className="absolute ml-5 content bottom-5">
        <h2 className="text-5xl font-bold text-white">{title}</h2>
        <div className="flex items-center mt-5 mb-7 gap-x-5">
          <span className="px-4 py-2 text-xs text-white border border-gray-400 rounded-lg">
            Avengers
          </span>
          <span className="px-4 py-2 text-xs text-white border border-gray-400 rounded-lg">
            Action
          </span>
          <span className="px-4 py-2 text-xs text-white border border-gray-400 rounded-lg">
            Marvel
          </span>
        </div>
        <button className="flex items-center gap-4 px-6 py-2 bg-primary rounded-xl bg-[rgba(0,0,0,0.4)] ">
          <span className="text-lg font-semibold text-white select-none ">
            Watch
          </span>
          <div className="flex items-center justify-center bg-white rounded-full w-7 h-7 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-4 h-4 ml-[3px] text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Banner;

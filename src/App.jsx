import { Fragment } from "react";
import "swiper/scss";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10">
        <span className="">Home</span>
        <span className="">About</span>
      </header>
      <section className="banner h-[400px] page-container mb-20 ">
        <div className="w-full h-full rounded-xl bg-white relative">
          <div className="overlay absolute inset-0 rounded-xl bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.1)] "></div>
          <img
            src="https://nld.mediacdn.vn/2019/4/25/3515432-endgamedek-15561710302491765206118.jpg"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="content absolute bottom-5 ml-5">
            <h2 className="text-4xl font-bold text-white">Avengers: Endgame</h2>
            <div className="flex items-center gap-x-5 my-5">
              <span className="border border-gray-400 text-white px-4 py-2 text-xs rounded-lg">
                Avengers
              </span>
              <span className="border border-gray-400 text-white px-4 py-2 text-xs rounded-lg">
                Action
              </span>
              <span className="border border-gray-400 text-white px-4 py-2 text-xs rounded-lg">
                Marvel
              </span>
            </div>
            <button className="flex items-center gap-2 px-5 py-2 bg-primary rounded-xl bg-[rgba(0,0,0,0.4)] ">
              <span className="text-white text-sm select-none font-semibold ">
                Watch
              </span>
              <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2.5"
                  stroke="currentColor"
                  class="w-4 h-4 ml-[3px] text-primary"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>
      {/* now playing */}
      <section className="now-playing page-container mb-20">
        <h2 className="text-3xl font-semibold mb-10">Now Playing</h2>
        <MovieList></MovieList>
      </section>
      {/* trending */}
      <section className="now-playing page-container mb-20">
        <h2 className="text-3xl font-semibold mb-10">Trending</h2>
        <MovieList></MovieList>
      </section>
      {/* top rate */}
      <section className="now-playing page-container mb-20">
        <h2 className="text-3xl font-semibold mb-10">Top Rate</h2>
        <MovieList></MovieList>
      </section>
    </Fragment>
  );
}

export default App;

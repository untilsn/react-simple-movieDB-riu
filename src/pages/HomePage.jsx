import React, { Fragment } from "react";
import MovieList from "../components/movie/MovieList";

const HomePage = () => {
  return (
    <Fragment>
      {/* now playing */}
      <section className="mb-20 now-playing page-container">
        <h2 className="mb-10 text-3xl font-semibold">Now Playing</h2>
        <MovieList type="now_playing"></MovieList>
      </section>
      {/* top rate */}
      <section className="mb-20 now-playing page-container">
        <h2 className="mb-10 text-3xl font-semibold">Top Rated</h2>
        <MovieList type="top_rated"></MovieList>
      </section>
      {/* popular */}
      <section className="mb-20 now-playing page-container">
        <h2 className="mb-10 text-3xl font-semibold">Popular</h2>
        <MovieList type="popular"></MovieList>
      </section>
    </Fragment>
  );
};

export default HomePage;

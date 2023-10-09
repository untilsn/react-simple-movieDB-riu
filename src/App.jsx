import { Fragment } from "react";
import { Route, Routes } from "react-router-dom"; // Thêm Router từ react-router-dom
import MainPage from "./components/layout/MainPage";
import "swiper/scss";
import HomePage from "./pages/HomePage";
import Banner from "./components/banner/banner";
import MoviePages from "./pages/MoviePages";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<MainPage />}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage />
              </>
            }
          />
          <Route path="/movies" element={<MoviePages></MoviePages>}></Route>
          <Route
            path="/movie/:movieId"
            element={<MovieDetailPage></MovieDetailPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;

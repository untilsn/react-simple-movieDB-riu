import { Fragment } from "react";
import { Route, Routes } from "react-router-dom"; // Thêm Router từ react-router-dom
import MainPage from "./components/layout/MainPage";
import "swiper/scss";
import HomePage from "./pages/HomePage";
import BannerMovie from "./components/banner/BannerMovie";
import MoviePages from "./pages/MoviePages";
import MovieDetailPage from "./pages/MovieDetailPage";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<MainPage></MainPage>}>
          <Route
            path="/"
            element={
              <>
                <BannerMovie></BannerMovie>
                <HomePage></HomePage>
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

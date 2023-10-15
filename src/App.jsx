import { Fragment, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom"; // Thêm Router từ react-router-dom
import MainPage from "./components/layout/MainPage";
import "swiper/scss";
import BannerMovie from "./components/banner/BannerMovie";
// import HomePage from "./pages/HomePage";
// import MoviePages from "./pages/MoviePages";
// import MovieDetailPage from "./pages/MovieDetailPage";

//  Code splitting Routes (dynamic import)
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePages = lazy(() => import("./pages/MoviePages"));
const MovieDetailPage = lazy(() => import("./pages/MovieDetailPage"));
// b1 import b2 boc suspense (fallback) b3 npm run build
function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
      </Suspense>
    </Fragment>
  );
}

export default App;

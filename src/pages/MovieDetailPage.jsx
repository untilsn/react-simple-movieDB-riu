import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { apiKey, fetcher } from "../config/Config";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../components/movie/MovieCard";
import { v4 as uuidv4 } from "uuid";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`,
    fetcher
  );
  if (!data || !data.backdrop_path || !data.poster_path) return null;
  // Nếu không có data hoặc không có backdrop_path, trả về null hoặc thông báo lỗi tùy bạn muốn
  // hoặc return <div>Lỗi: Không có dữ liệu backdrop_path</div>;

  const { backdrop_path, poster_path, title, genres, overview } = data;
  return (
    <>
      <div className="relative w-full h-[700px]">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original/${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full max-w-[800px] h-[400px] mx-auto -mt-[300px] relative z-10">
        <img
          src={`http://image.tmdb.org/t/p/original/${poster_path}`}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="mx-auto max-w-[1000px] h-[1px] w-full bg-clr-blue my-20"></div>
      <h1 className="mt-10 text-4xl font-medium text-center"> {title}</h1>
      {genres.length > 0 && (
        <div className="flex items-center justify-center gap-6 mt-10">
          {genres.map((item) => (
            <div
              className="px-5 py-2 border rounded-xl text-primary border-primary"
              key={item.id}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
      <div className="text-center w-full max-w-[700px] mx-auto mt-16 leading-8">
        {overview}
      </div>
      {/* video movie */}
      <MovieVideo></MovieVideo>
      {/* similar */}
      <SimilarMovie></SimilarMovie>
      {/* credits */}
      <div className="relative">
        <MovieCredits></MovieCredits>
        <div className="max-w-[1px] h-[390px] w-full bg-clr-green absolute bottom-0 left-[50%]"></div>
      </div>
    </>
  );
};

// movie video
function MovieVideo() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`,
    fetcher
  );
  if (!data || data?.results.length <= 0) return null;
  const { results } = data;

  return (
    <>
      <div className="py-10">
        {results.slice(0, 1).map((item) => (
          <div key={item.id} className="aspect-video max-w-[1000px] mx-auto">
            <iframe
              width="1904"
              height="781"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="Lazy load image trong NEXT, React"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="object-cover w-full h-full"
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}

// similar movie
function SimilarMovie() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  const { results } = data;
  console.log(data);
  return (
    <div className="px-20">
      <h1 className="py-10 text-4xl ">Similar Movies</h1>
      <div className="similar-movie">
        <Swiper slidesPerView={"4"} spaceBetween={40} grabCursor="true">
          {results.length > 0 &&
            results.map((item) => (
              <SwiperSlide key={item.id}>
                <MovieCard item={item}></MovieCard>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

// credit movie
function MovieCredits() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
    fetcher
  );
  if (!data) return null;
  return (
    <>
      <h1 className="mt-20 text-4xl text-center">Credits</h1>
      <div className="flex justify-between px-20 mt-20">
        <MovieCreditsCast cast={data.cast}></MovieCreditsCast>
        <MovieCreditsCrew crew={data.crew}></MovieCreditsCrew>
      </div>
    </>
  );
}

// CAST        CAST        CAST        CAST        CAST
function MovieCreditsCast(props) {
  const { cast } = props;
  return (
    <div className="w-full max-w-[500px]">
      <h1 className="mx-2 mb-4 text-xl text-clr-green">Cast</h1>
      <div>
        <div className="flex flex-col ">
          {cast.length > 0 &&
            cast.slice(0, 5).map((item) => (
              <div
                key={`cast-${item.id}`}
                className="flex items-center px-2 py-2 border-b border-gray-900"
              >
                <div className="flex items-center  max-w-[300px] w-full">
                  <img
                    src={`http://image.tmdb.org/t/p/original/${item.profile_path}`}
                    alt=""
                    className="max-w-[30px] h-[50px] object-cover w-full h-full rounded-sm"
                  />
                  <h1 className="ml-4 font-bold">{item.name}</h1>
                </div>
                <span className="items-start">
                  <h1 className="">{item.character}</h1>
                </span>
              </div>
            ))}
        </div>
        <div>
          <img src="" alt="" />
          <h2 className=""></h2>
        </div>
      </div>
    </div>
  );
}

// CREW          CREW       CREW       CREW       CREW       CREW

function generateUniqueKey() {
  return `item-${uuidv4()}`;
}

function renderCrewList(crew, departmentName) {
  const filteredCrew = crew
    .filter((item) => item.known_for_department === departmentName)
    .slice(0, 4);

  return (
    <div className="flex gap-6 py-2 border-b border-gray-800">
      <div className="font-bold w-full max-w-[90px] ">{departmentName}</div>
      <div className="flex items-center gap-2 ">
        {filteredCrew.map((item) => (
          <div
            key={generateUniqueKey()}
            className="text-sm after:content-[',']"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

function MovieCreditsCrew(props) {
  const { crew } = props;

  return (
    <div className="w-full max-w-[500px]">
      <h1 className="mb-4 text-xl text-clr-green">Crew</h1>
      <div className="flex flex-col gap-5 mt-4">
        {renderCrewList(crew, "Directing")}
        {renderCrewList(crew, "Production")}
        {/* Các phần còn lại tương tự */}
      </div>
    </div>
  );
}

export default MovieDetailPage;

export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "e08d2ec789bf35e25fb949041d8d545e";
export const tmdbEndpoint = "https://api.themoviedb.org/3/movie";
export const tmdbEndpointSearch = "https://api.themoviedb.org/3/search/movie";
export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieId: (movieId) => `${tmdbEndpoint}/${movieId}?api_key=${apiKey}`,
  getMoviedata: (movieId, type) =>
    `${tmdbEndpoint}/${movieId}/${type}?api_key=${apiKey}`,
  imageOriginal: (url) => `http://image.tmdb.org/t/p/original/${url}`,
  image500: (url) => `http://image.tmdb.org/t/p/w500/${url}`,
  getMovieList: (type, page = 1) =>
    `${tmdbEndpoint}/${type}?api_key=${apiKey}&page=${page}`,
  getMovieSearch: (query, page) =>
    `${tmdbEndpointSearch}?query=${query}&api_key=${apiKey}&page=${page}`,
};

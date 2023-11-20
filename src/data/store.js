import { reactive } from "vue";

export const store = reactive({
  apiGenre: "https://api.themoviedb.org/3/",
  apiUrl: "https://api.themoviedb.org/3/search/",
  apiTrend: "https://api.themoviedb.org/3/trending/",
  endPoint: {
    movie: "movie",
    series: "tv",
  },
  params: {
    api_key: "7aa4f4882a7216c3bc091728b7de1e49",
    language: "it-IT",
    query: "",
  },
  x: "https://api.themoviedb.org/3/tv/84958/credits?api_key=7aa4f4882a7216c3bc091728b7de1e49",
  error: "",
  loading: true,
  movieList: [],
  seriesList: [],
  popularList: [],
  popularTvList: [],
  genreMovies: [],
  cast: [],
  imgPath: "https://image.tmdb.org/t/p/w342",
});

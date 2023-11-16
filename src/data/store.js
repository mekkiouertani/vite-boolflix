import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: {
    movie: "search/movie",
    series: "search/tv",
  },
  params: {
    api_key: "7aa4f4882a7216c3bc091728b7de1e49",
    query: "star",
  },

  error: "",
  loading: true,
  movieList: [],
  seriesList: [],
  imgPath: "https://image.tmdb.org/t/p/w342/",
  urlImg: "'https://image.tmdb.org/t/p/'",
});

<template>
  <!-- <TitleComponent id="title" @searchBar="getTv(), getMovies()" /> -->
  <MainComponent id="mainn" />
</template>

<script>
import { store } from "./data/store.js";
import axios from "axios";
import TitleComponent from "./components/TitleComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  name: "App",
  components: { TitleComponent, MainComponent },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovies() {
      const url = this.store.apiUrl + this.store.endPoint.movie;
      axios.get(url, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.movieList = res.data.results;
      }),
        (this.store.params.query = "");
      store.popularList = "";
    },
    getTv() {
      const url = this.store.apiUrl + this.store.endPoint.series;
      axios.get(url, { params: this.store.params }).then((res) => {
        console.log(`tv`, res.data.results);
        this.store.seriesList = res.data.results;
      });
    },
    getPopular() {
      const url = store.apiTrend + store.endPoint.movie + "/week";
      axios.get(url, { params: store.params }).then((res) => {
        store.popularList = res.data.results;
        console.log(`trend`, res.data.results);
      });
    },
  },
  mounted() {
    Promise.all([this.getMovies(), this.getTv(), this.getPopular()])
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.log("catch error", error);
        this.store.error = error.message;
      })
      .finally(() => {
        store.loading = false;
      });
  },
  created() {
    axios
      .get(store.apiGenre + "genre/" + store.endPoint.movie + "/list", {
        params: store.params,
      })
      .then((res) => {
        store.genreMovies = res.data.genres;
        console.log(`genere`, res.data.genres);
      });
  },
};
</script>

<style lang="scss" scoped>
#mainn {
  padding-top: 100px;
}
</style>

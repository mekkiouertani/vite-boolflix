<template>
  <!-- <IntroComponent id="intro" /> -->
  <BackGround id="back" />
  <TitleComponent id="title" @searchBar="getTv(), getMovies(), getCredits()" />
  <MainComponent id="mainn" />
</template>

<script>
import { store } from "./data/store.js";
import axios from "axios";
import TitleComponent from "./components/TitleComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import BackGround from "./components/BackGround.vue";
import IntroComponent from "./components/IntroComponent.vue";

export default {
  name: "App",
  components: { TitleComponent, MainComponent, BackGround, IntroComponent },
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
      const urlTv = store.apiTrend + store.endPoint.series + "/week";
      axios.get(urlTv, { params: store.params }).then((res) => {
        store.popularTvList = res.data.results;
        console.log(`trendTv`, res.data.results);
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
#intro {
  position: absolute;
  z-index: 9999;
  height: 110vh;
  width: 100%;
}
#mainn {
  padding-top: 100px;
}
#back {
  margin-top: -20px;
}
</style>

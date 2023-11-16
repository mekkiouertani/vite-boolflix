<template>
  <TitleComponent @searchBar="getMovies(), getTv()" />
  <MainComponent />
</template>

<script>
import { store } from "./data/store.js";
import axios from "axios";
import TitleComponent from './components/TitleComponent.vue';
import MainComponent from './components/MainComponent.vue';

export default {
  name: 'App',
  components: { TitleComponent, MainComponent },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {
      const url = this.store.apiUrl + this.store.endPoint.movie;
      axios.get(url, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.movieList = res.data.results
      })
    },
    getTv() {
      const url = this.store.apiUrl + this.store.endPoint.series;
      axios.get(url, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.seriesList = res.data.results
      })
    }
  },
  mounted() {
    this.getMovies();
    this.getTv();
  },
  created() {

  },

}
</script>

<style lang="scss" scoped></style>
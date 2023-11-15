<template>
  <TitleComponent />
</template>

<script>
import { store } from "./data/store.js";
import axios from "axios";
import TitleComponent from './components/TitleComponent.vue';

export default {
  name: 'App',
  components: { TitleComponent },
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
      })

    }
  },
  mounted() {

  },
  created() {
    this.getMovies();
  },

}
</script>

<style lang="scss" scoped></style>
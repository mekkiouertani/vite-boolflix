<template>
  <HeroComponent />
  <div class="container">
    <!-- TREND MOVIE -->
    <!-- <JumboComponent
      v-for="el in store.popularList"
      :title="el.title"
      :overview="el.overview"
      :img="store.imgPath + el.poster_path"
      :language="el.original_language"
      :rate="el.vote_average"
      :vote="el.vote_count"
      :originalTitle="el.original_title"
    /> -->
    <section>
      <MultiSlider />
    </section>
    <section id="trend-movie" v-show="store.movieList.length <= 0" class="mt-5">
      <h2>popular movies of the week</h2>
      <LoaderComponent v-show="store.popularList.length <= 0" />
      <div
        class="d-flex flex-wrap justify-content-center align-content-center align-items-center"
      >
        <CardComponent
          v-for="el in store.popularList"
          :title="el.title"
          :overview="el.overview"
          :img="store.imgPath + el.poster_path"
          :language="el.original_language"
          :rate="el.vote_average"
          :vote="el.vote_count"
          :originalTitle="el.original_title"
        />
      </div>
    </section>
    <!-- MOVIE -->
    <section id="movie" class="mt-5">
      <h2>MOVIE</h2>
      <div
        class="d-flex flex-wrap justify-content-center align-content-center align-items-center"
      >
        <CardComponent
          v-for="el in store.movieList"
          :title="el.title"
          :overview="el.overview"
          :img="store.imgPath + el.poster_path"
          :language="el.original_language"
          :rate="el.vote_average"
          :vote="el.vote_count"
          :originalTitle="el.original_title"
        />
      </div>
    </section>
    <!-- SERIES -->
    <section id="series" class="mt-5">
      <h2>SERIES</h2>
      <div
        class="d-flex flex-wrap align-content-center align-items-center justify-content-center"
      >
        <CardComponent
          class="col-12"
          v-for="el in store.seriesList"
          :title="el.name"
          :overview="el.overview"
          :img="store.imgPath + el.poster_path"
          :language="el.original_language"
          :rate="el.vote_average"
          :vote="el.vote_count"
          :originalTitle="el.original_title"
        />
      </div>
    </section>
  </div>
</template>

<script>
import { store } from "../data/store.js";
import CardComponent from "./CardComponent.vue";
import HeroComponent from "./HeroComponent.vue";
import JumboComponent from "./JumboComponent.vue";
import LoaderComponent from "./LoaderComponent.vue";
import MultiSlider from "./MultiSlider.vue";
export default {
  name: "MainComponent",
  data() {
    return {
      store,
    };
  },
  computed: {},
  components: {
    CardComponent,
    LoaderComponent,
    JumboComponent,
    HeroComponent,
    MultiSlider,
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 5em;
  margin-bottom: 50px;
}
</style>

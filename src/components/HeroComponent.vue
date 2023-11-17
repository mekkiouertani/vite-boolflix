<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="https://www.punto-informatico.it/app/uploads/2023/05/netflix-2120x848.jpg"
          class="d-block w-100"
          alt="logo"
        />
      </div>
      <div class="carousel-item" v-for="el in store.popularList">
        <img
          :src="'https://image.tmdb.org/t/p/original/' + el.poster_path"
          class="d-block w-100"
          :alt="title"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { store } from "../data/store.js";
export default {
  name: "HeroComponent",
  props: {
    img: String,
    title: String,
    originalTitle: String,
    overview: String,
    rate: Number,
    language: String,
    vote: Number,
  },
  data() {
    return {
      imgHero: store.imgPath + "",
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
#myCarousel {
  margin-top: 100px;
}

.carousel-inner {
  height: 700px;
  width: 100%;
  .carousel-item {
    height: 100%;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: top;
    }
  }
}
</style>

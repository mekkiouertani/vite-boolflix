<template>
  <div
    id="carouselExampleAutoplaying"
    class="carousel slide position-relative"
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
        <h2 class="position-absolute">{{ el.title }}</h2>
        <img
          :src="'https://image.tmdb.org/t/p/original/' + el.poster_path"
          class="d-block w-100"
          :alt="title"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev position-absolute"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next position-absolute"
      type="button"
      data-bs-target="#carouselExampleAutoplaying"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
    <!-- CANVA -->
    <div id="canva" class="position-absolute"></div>
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
h2 {
  max-width: 45%;
  transition: 2s ease-in;
  left: 30px;
  position: relative;
  color: white;
  z-index: 3000;
  top: 0;
  margin-top: 100px;
  font-size: 100px;
  width: 100%;
  height: 100px;
}
#myCarousel {
  margin-top: 100px;
}

.carousel-inner {
  height: 800px;
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
button {
  z-index: 7777;
  height: 70px;
  width: 70px;
  margin: 100px;
  top: 75%;
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.9360119047619048) 34%,
    rgba(255, 255, 255, 0) 66%
  );
}
#canva {
  z-index: 90;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    93deg,
    rgba(0, 0, 0, 0.9023984593837535) 63%,
    rgba(255, 255, 255, 0) 97%
  );
  height: 100%;
  width: 40%;
  top: 0;
  padding: 100px 20px;
}
@media screen and (max-width: 1240px) {
  h2 {
    font-size: 50px !important;
  }
}
</style>

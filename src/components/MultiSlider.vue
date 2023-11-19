<template>
  <div class="position-relative">
    <h3 class="position-absolute fs-1 mt-5">POPOLAR TV SERIES</h3>
    <Carousel
      :autoplay="4000"
      :itemsToShow="3.95"
      :wrapAround="true"
      :transition="500"
    >
      <Slide v-for="el in store.popularTvList" :key="el.id">
        <div class="carousel__item position-relative">
          <div class="box">
            <img
              :src="'https://image.tmdb.org/t/p/original/' + el.poster_path"
              alt=""
            />
          </div>
          <h2 class="position-absolute text-secondary">{{ el.name }}</h2>
          <!--  -->
          <!-- <div class="dropdown position-absolute">
              <button
                class="btn btn-secondary dropdown-toggle bg-black"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div> -->
        </div>
        <!--  -->
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import { store } from "../data/store.js";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
export default {
  name: "MultiSlider",
  components: {
    Carousel,
    Slide,
    Pagination,
  },

  data() {
    return {
      store,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
button {
  background-color: transparent !important;
  border: 0px;
  color: red;
  padding: 0 !important;
  font-size: 2em;
}
.dropdown {
  top: 0px;
  right: 10px;
  z-index: 9999;
}
h2 {
  width: 100%;
  bottom: 20px;
  background: rgb(0, 0, 0);
  background: radial-gradient(
    circle,
    rgba(0, 0, 0, 0.9023984593837535) 55%,
    rgba(255, 255, 255, 0) 97%
  );
}
.carousel__item {
  height: 450px;
  width: 300px;
  background-color: red;
  margin-top: 100px;
}
.box {
  height: 100%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  border-bottom: 1px solid white;
}
</style>

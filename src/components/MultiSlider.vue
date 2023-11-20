<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header mt-5">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Cast</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        X
      </button>
    </div>
    <div class="offcanvas-body">
      <ul>
        <li v-for="(actor, index) in store.cast" :key="index">
          {{ actor }}
        </li>
      </ul>
    </div>
  </div>

  <div class="position-relative">
    <h3 class="position-absolute fs-1 mt-5">POPULAR TV SERIES</h3>
    <Carousel
      :autoplay="4000"
      :itemsToShow="3.95"
      :wrapAround="true"
      :transition="500"
    >
      <Slide v-for="el in store.popularTvList" :key="el.id">
        <div class="carousel__item position-relative">
          <!--   <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#staticBackdrop"
            aria-controls="staticBackdrop"
          > -->
          <div
            class="box"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            @click="getCredits(el.id)"
          >
            <img
              :src="'https://image.tmdb.org/t/p/original/' + el.poster_path"
              alt=""
            />
          </div>
          <h2 class="position-absolute text-secondary">{{ el.name }}</h2>

          <div class="dropdown position-absolute start-0">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="getCredits(el.id)"
            >
              Credit
            </button>
            <ul class="dropdown-menu">
              <li v-for="(actor, index) in store.cast" :key="index">
                {{ actor }}
              </li>
            </ul>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import axios from "axios";
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
  methods: {
    getCredits(tvShowId) {
      const urlStart = store.apiGenre + "tv/" + tvShowId + "/credits";
      let cast = [];
      axios.get(urlStart, { params: this.store.params }).then((res) => {
        console.log(`crediti`, res.data.cast);
        for (let i = 0; i < 5; i++) {
          if (res.data.cast[i]) {
            cast.push(res.data.cast[i].name);
          }
        }
        this.store.cast = cast;
      });
    },
  },
  mounted() {
    this.getCredits();
    console.log(`store cast`, store.cast);
  },
};
</script>
<style lang="scss" scoped>
.offcanvas {
  z-index: 9999 !important;
  background-color: black;
  color: white;
}
button {
  position: absolute;
  left: 10px;
  top: 10px;
  background-color: black;
  color: red;
  padding: 5px 10px !important;
  font-size: 0.8em;
}
.position-relative {
  min-width: 150px;
}

.dropdown {
  top: 0px;
  right: 10px;
  z-index: 9999;
}
.dropdown-menu {
  background-color: black;
  color: white;
  padding: 10px;
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
  /*   height: 450px;
  width: 300px; */
  background-color: red;
  margin-top: 100px;
  z-index: 8000 !important;
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

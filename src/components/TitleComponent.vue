<template>
  <div class="container-fluid p-3">
    <h1 class="postition-relative d-flex">
      <span id="boo">B</span>
      <span>o</span>
      <span>o</span>
      <span>l</span>
      <span>f</span>
      <span>l</span>
      <span>i</span>
      <span>x</span>
    </h1>
    <div>
      <span class="position-relative">
        <input
          type="text"
          class="fs-4 mt-3"
          placeholder="Cerca.."
          v-model="this.store.params.query"
          @keyup.enter="$emit('search-bar')"
        />
        <i
          @click="$emit('search-bar')"
          class="fa-solid fa-magnifying-glass p-1 rounded position-absolute"
        ></i>
        <select
          name="genre"
          id="genre"
          class="text-secondary d-block position-absolute w-100 mt-4 bg-black"
          v-model="movieId"
          @change="filterGenreMovie"
        >
          <option value="">work in progress</option>
          <option
            value="{{ el.id }}"
            v-for="el in store.genreMovies"
            :key="el.id"
          >
            {{ el.name }}
          </option>
        </select>
      </span>
    </div>
  </div>
</template>

<script>
import { store } from "../data/store.js";
export default {
  name: "TitleComponent",
  data() {
    return {
      store,
      movieId: "",
    };
  },
  methods: {
    filterGenreMovie() {
      store.movieList.filter((el) => {});
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
h1 {
  span:nth-child(2) {
    /* position: relative;
    bottom: 5px; */
    font-size: 0.9em;
  }
}
select {
  background-color: transparent;
}
.container-fluid {
  height: 100vh;
  width: 350px;
  position: fixed;
  z-index: 6000;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 47%,
    rgba(255, 255, 255, 0) 58%
  );
}
h1 {
  color: red;
  font-size: 3em;
}
input {
  width: 150px;
}
input[type="text"] {
  padding: 13px 0px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  background-color: transparent;
  color: white;
  height: 20px;
}

i {
  bottom: 1px;
  right: 1px;
  background-color: red;
  color: white;
}
</style>

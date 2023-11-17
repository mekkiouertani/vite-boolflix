<template>
  <div class="container-fluid p-3 d-flex justify-content-between flex-wrap">
    <h1>Boolflix</h1>
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
          class="text-secondary d-block position-absolute end-0 d-none"
          v-model="movieId"
          @change="filterGenreMovie"
        >
          <option value="">Select A Genre</option>
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
select {
  background-color: transparent;
}
.container-fluid {
  min-width: 350px;
  position: fixed;
  z-index: 9000;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 66%,
    rgba(255, 255, 255, 0) 89%
  );
}
h1 {
  color: red;
  font-size: 3em;
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

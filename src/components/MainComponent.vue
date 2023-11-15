<template>
    <div class="container">
        <section id="movie" class="mt-5">
            <h2>Movie</h2>
            <div class="row">
                <div v-for="movie in store.movieList" class="col-12 col-md-4 col-lg-3">
                    {{ movie.title }}
                </div>
            </div>
        </section>
        <section id="series" class="mt-5">
            <h2>Series</h2>
            <div class="row">
                <div v-for="series in store.seriesList" class="col-12 col-md-4 col-lg-3">
                    {{ series.name }}
                </div>
            </div>
        </section>

    </div>
</template>

<script>
import { store } from "../data/store.js";
export default {
    name: 'MainComponent',
    data() {
        return {
            store,
        }
    },
}
</script>

<style lang="scss" scoped></style>
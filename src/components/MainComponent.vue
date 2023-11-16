<template>
    <div class="container">

        <section id="movie" class="mt-5">
            <h2>Movie</h2>
            <div class="row gy-2 border-bottom pb-3 ">
                <div v-for="movie in store.movieList" :key="movie.id" class="mt-5 col-12 col-md-4 col-lg-3">
                    <h3>{{ movie.title }} </h3>
                    <p>
                        <span class="bg-black text-white">{{ movie.original_language }}</span>
                        <span>{{ movie.vote_average }}</span>
                    </p>
                    <p class="text-white">
                        {{ movie.overview }}
                    </p>
                    <div class="poster">
                        <img :src="store.imgPath + movie.poster_path" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section id="series" class="mt-5">
            <h2>Series</h2>
            <div class="row">
                <div v-for="series in   store.seriesList    " class="col-12 col-md-4 col-lg-3">
                    <h3>{{ series.name }} <span class="bg-black text-white">{{ series.original_language }}</span></h3>
                    <p class="text-white">{{ series.overview }}</p>
                    <img :src="store.imgPath + series.poster_path" alt="">
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

<style lang="scss" scoped>
h2 {
    font-size: 5em;
    margin-bottom: 50px;
}

h3 {
    height: 80px;
}

p {
    height: 100px;
    width: 100%;
    overflow-y: scroll;
    text-align: right;
    padding-right: 5px;
}

.poster {

    width: 100%;
    height: 50%;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}
</style>
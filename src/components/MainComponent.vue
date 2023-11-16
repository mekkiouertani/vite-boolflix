<template>
    <div class="container">

        <section id="movie" class="mt-5">
            <h2>MOVIE</h2>
            <div class="row gy-2 border-bottom pb-3 ">
                <CardComponent v-for="el in store.movieList" :title="el.title" :overview="el.overview"
                    :img="store.imgPath + el.poster_path" :language="el.original_language" />

            </div>
        </section>

        <section id="series" class="mt-5">
            <h2>SERIES</h2>
            <div class="row">
                <!-- <div v-for="el in   store.seriesList    " class="col-12 col-md-4 col-lg-3">
                    <h3>{{ el.name }} <span class="bg-black text-white">{{ el.original_language }}</span></h3>
                    <p class="text-white">{{ el.overview }}</p>
                    <img :src="store.imgPath + el.poster_path" alt="">
                </div> -->
            </div>
        </section>

    </div>
</template>

<script>
import { store } from "../data/store.js";
import CardComponent from "./CardComponent.vue";
export default {
    name: 'MainComponent',
    data() {
        return {
            store,

        };
    },
    computed: {


    },
    components: { CardComponent }
}
</script>

<style lang="scss" scoped></style>
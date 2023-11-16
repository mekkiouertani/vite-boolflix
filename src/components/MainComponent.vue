<template>
    <div class="container">

        <section id="movie" class="mt-5">
            <h2>MOVIE</h2>
            <div class="row gy-2 border-bottom pb-3 ">
                <div v-for="el in store.movieList" :key="el.id" class="mt-5 col-12 col-md-4 col-lg-3">
                    <h3>{{ el.title }} </h3>
                    <p>
                        <img :src="getFlag" :alt="el.original_language">
                        <span class="bg-black text-white">{{ el.original_language }}</span>
                        <span>{{ el.vote_average }}</span>
                    </p>
                    <p class="text-white">
                        {{ el.overview }}
                    </p>
                    <div class="poster">
                        <img :src="store.imgPath + el.poster_path" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section id="series" class="mt-5">
            <h2>SERIES</h2>
            <div class="row">
                <div v-for="el in   store.seriesList    " class="col-12 col-md-4 col-lg-3">
                    <h3>{{ el.name }} <span class="bg-black text-white">{{ el.original_language }}</span></h3>
                    <p class="text-white">{{ el.overview }}</p>
                    <img :src="store.imgPath + el.poster_path" alt="">
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
            flags: [
                'us',
                'fr',
                'it',
            ]
        }
    },
    computed: {
        getFlag() {
            let flag = `../images/flags/`
            return flag;
        }
    }
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
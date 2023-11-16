<template>
    <div class="mt-5 col-12 col-md-4 col-lg-3">

        <h3>{{ title }} </h3>
        <div id="flag">
            <img :src="getFlag" :alt="title">
        </div>

        <p>
            <span class="bg-black text-white">{{ originalLan }}</span>
            <i v-for="n in 5" :key="n" class="fa-star" :class="(n <= getRate) ? 'fa solid' : 'fa-regular'"></i>
        </p>

        <p class="text-white">
            {{ overview }}
        </p>

        <div class="poster">
            <img :src="img" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props: {
        img: String,
        title: String,
        originalTitile: String,
        overview: String,
        originalLan: String,
        rate: Number,
        language: String,
    },
    data() {
        return {
            flags: [
                'us',
                'fr',
                'it',
                'en',
                'kr',
            ]
        }
    },
    methods: {

    },
    computed: {
        getFlag() {
            let flag = `/images/flags/${this.language}.svg`;
            if (!this.flags.includes(this.language)) {
                flag = `/images/flags/fake.png`
            }
            return flag;
        },
        getRate() {
            return Math.ceil(this.rate / 2);
        }
    }
}
</script>

<style lang="scss" scoped>
#flag {
    height: 50px;
    widows: 100px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

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
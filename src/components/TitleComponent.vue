<template>
    <div class="container-fluid bg-black p-3 d-flex justify-content-between ">
        <h1>Boolflix</h1>
        <div>
            <span class="position-relative ">
                <input type="text" class="fs-4 mt-3" placeholder="Cerca.." v-model="this.store.params.query"
                    @keyup.enter="$emit('search-bar')">
                <i @click="$emit('search-bar')" class="fa-solid fa-magnifying-glass p-1 rounded position-absolute"></i>
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
        }
    },
}
</script>

<style lang="scss" scoped>
h1 {
    color: red;
    font-size: 3em;
}

input[type=text] {
    padding: 13px 20px;
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
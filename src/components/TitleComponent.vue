<template>
    <div class="container-fluid bg-black p-3 d-flex justify-content-between ">
        <h1>Boolflix</h1>
        <div>
            <input type="text" class="fs-4 mt-3" placeholder="Cerca..">
        </div>
    </div>
</template>

<script>
export default {
    name: "TitleComponent",
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
</style>
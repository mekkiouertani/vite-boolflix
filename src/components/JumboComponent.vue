<template>
  <div>
    <!-- {{ title }} -->
  </div>
</template>

<script>
export default {
  name: "JumboTron",
  props: {
    img: String,
    title: String,
    originalTitle: String,
    overview: String,
    rate: Number,
    language: String,
    vote: Number,
  },
};
</script>

<style lang="scss" scoped></style>

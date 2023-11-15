<template>
  <TitleComponent />
</template>

<script>
import TitleComponent from './components/TitleComponent.vue';
import { store } from "./data/store.js";
export default {
  name: 'App',
  components: { TitleComponent },
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped></style>
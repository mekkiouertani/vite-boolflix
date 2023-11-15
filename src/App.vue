<template>
  <TitleComponent />
</template>

<script>
import { store } from "./data/store.js";
import axios from "axios";
import TitleComponent from './components/TitleComponent.vue';

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
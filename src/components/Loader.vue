<template>
  <div class="loader-wrapper" v-show="isLoading">
    <pulse-loader :loading="isLoading"></pulse-loader>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters([
      'isLoading',
    ])
  },
}
</script>

<style scoped>
.loader-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  z-index: 100;
}
</style>
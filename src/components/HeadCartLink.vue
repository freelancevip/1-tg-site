<template>
  <div class="search-head__cart">
    <router-link to="/cart" class="search-head__cart-link"><span>{{ cartQuantity }}</span></router-link>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  name: "HeadCartLink",
  computed: {
    ...mapGetters([
      'cartQuantity',
    ])
  },
}
</script>

<style scoped>

</style>
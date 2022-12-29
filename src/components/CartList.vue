<template>
  <div class="search-results__items">
    <div class="search-results__item" v-for="productItem in cartItems" :key="productItem.sku">
      <CartListItem :productItem="productItem"/>
    </div>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  components: {CartListItem},
  props: ["cartItems"],
}
</script>

<style scoped>

</style>
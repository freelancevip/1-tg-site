<template>
  <div class="search-results__items">
    <div class="search-results__item" v-for="productItem in productItems" :key="productItem.id">
      <ProductListItem :productItem="productItem"/>
    </div>
  </div>
</template>

<script>
import ProductListItem from "./ProductListItem.vue";

export default {
  name: "ProductsList",
  components: {ProductListItem},
  props: ["productItems"],
}
</script>

<style scoped>

</style>
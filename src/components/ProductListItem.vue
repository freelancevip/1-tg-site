<template>
  <div class="container search-results__item-container">
    <div class="search-results__item-info">
      <div class="search-results__item-name">{{ productItem.Товар }}</div>
      <div class="search-results__item-code">Артикул: {{ productItem.Артикул }}</div>
    </div>
    <div class="search-results__item-price">{{ productItem.Цена.toFixed(2) }}</div>
    <div class="search-results__item-button">
      <a href="#" :class="btnClass(productItem)" @click.prevent="addCartItem(productItem)"></a>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ProductListItem",
  props: ["productItem"],
  computed: {
    ...mapGetters(["cartItems"]),
  },
  methods: {
    ...mapActions(["addCartItem"]),
    btnClass(item) {
      let classNames = ["add-to-cart-btn"]
      for (const cartItem of this.cartItems) {
        if (cartItem.id === item.id) {
          classNames.push('add-to-cart-btn--incart')
        }
      }
      return classNames
    }
  },
}
</script>

<style scoped>

</style>
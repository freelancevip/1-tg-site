<template>
  <div class="container search-results__item-container">
    <div class="search-results__item-info">
      <div class="search-results__item-name">{{ productItem['product'] }}</div>
      <div class="search-results__item-code">Артикул: {{ productItem.sku }}</div>
      <div class="cart-item-tools">
        <div>{{ productItem.quantity }}</div>
        <div class="plus" @click="addCartItem(productItem)">➕</div>
        <div class="minus" @click="removeCartItem(productItem)">➖</div>
      </div>
    </div>
    <div class="search-results__item-price">{{ productItem.price.toFixed(2) }}</div>
    <div class="search-results__item-button">
      <a href="#" class="add-to-cart-btn add-to-cart-btn--incart" @click.prevent="addCartItem(productItem)"></a>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "CartListItem",
  props: ["productItem"],
  methods: {
    ...mapActions([
      "addCartItem",
      "removeCartItem",
    ]),
  },
}
</script>

<style scoped>
.cart-item-tools {
  display: flex;
}

.plus, .minus {
  cursor: pointer;
  margin-left: 3px;
  opacity: .8;
  user-select: none;
}

.plus:hover, .minus:hover {
  opacity: 1;
}
</style>
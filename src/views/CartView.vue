<template>
  <div class="product-search">
    <div class="product-search__head">
      <div class="search-head cart-header">
        <div class="container search-head__container">
          <BackButton/>
          <div class="search-head__search cart-header__title">
            Корзина
          </div>
          <CallButton/>
        </div>
      </div>
    </div>

    <div class="search-results__title container cart-block__title" v-if="!cartIsEmpty">Итог: {{ cartTotal }} руб</div>

    <CartList :cartItems="cartItems"/>

    <div class="product-search__body search-results cart-block" v-if="cartIsEmpty">
      <div class="cart-empty">
        <div class="cart-empty__title">Корзина пустая</div>
        <div class="cart-empty__icon"></div>
      </div>
    </div>

    <div class="product-search__footer cart-block__footer" v-if="cartItems.length">
      <router-link to="/register" class="btn btn-primary" v-if="!loggedIn">Оплатить</router-link>
      <router-link to="/checkout1" class="btn btn-primary" v-if="loggedIn" @click.prevent="checkout()">Оплатить</router-link>
      <a href="#" class="btn btn-primary" @click.prevent="removeAllCartItems">Очистить корзину</a>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CartView",
  computed: {
    ...mapGetters([
      'cartItems',
      'cartTotal',
      'loggedIn',
      'user',
      'cartIsEmpty'
    ])
  },
  methods: {
    ...mapActions([
      "removeAllCartItems"
    ]),
    checkout() {
      this.$store.dispatch("checkout")
    }
  }
}
</script>

<template>
  <div class="product-search__body search-results" v-if="orderItems.length">
    <div class="search-results__title container text-center">Все заказы</div>
    <div class="search-results__items orders-block">
      <OrderItem v-for="orderItem in orderItems" :key="orderItem.id" :orderItem="orderItem"/>
    </div>
  </div>
  <div class="product-search__body search-results" v-if="!orderItems.length">
    <div class="search-results__title container text-center">Все заказы</div>
    <div class="search-results__items">
      <div class="empty-message">
        Ничего не найдено
      </div>
    </div>
  </div>
</template>

<script>
import OrderItem from "./OrderItem.vue";

export default {
  name: "OrdersItems",
  components: {OrderItem},
  props: ["orderItems"],
  created() {
    this.$store.dispatch('getOrders');
  }
}
</script>

<style scoped>

</style>
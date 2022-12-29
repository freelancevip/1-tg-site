<template>
  <div class="orders-block__item">
    <div class="container">
      <div class="orders-block__item-name">{{ orderItem.number }}</div>
      <div class="orders-block__item-status">
        Статус:
        <span>{{ orderItem.status }}</span>
      </div>
      <div class="orders-block__item-buttons">
        <RouterLink to="call-manager" class="btn btn-primary">Связь с менеджером</RouterLink>&nbsp;
        <a href="#" class="btn btn-outline-black">{{ orderItem.status }}</a>&nbsp;
        <a href="#" class="btn btn-danger" v-if="orderItem.editable" @click.prevent="cancelOrder({order_id:orderItem.id})">Отменить</a>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "OrderItem",
  props: ["orderItem"],
  methods: {
    ...mapActions([
      'cancelOrder'
    ])
  }
}
</script>

<style scoped>

</style>
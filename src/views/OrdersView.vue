<template>
  <div class="product-search">
    <div class="product-search__head">
      <div class="search-head">
        <div class="container search-head__container">
          <BackButton/>
          <div class="search-head__search">
            <input type="text" class="js-search-filed" placeholder="Поиск...">
            <div class="icon js-clear-search"></div>
          </div>
          <HeadCartLink/>
        </div>

      </div>
    </div>

    <OrdersItems :order-items="orders"/>

    <div class="product-search__footer">
      <RouterLink to="menu" class="btn btn-primary">Вернуться в основное меню</RouterLink>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import BackButton from "../components/BackButton.vue";
import HeadCartLink from "../components/HeadCartLink.vue";
import OrdersItems from "../components/OrdersItems.vue";

export default {
  name: "OrdersView",
  components: {OrdersItems, BackButton, HeadCartLink},
  computed: {
    ...mapGetters([
      "orders"
    ])
  }
}
</script>

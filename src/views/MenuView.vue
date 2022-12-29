<template>
  <div class="menu-block">
    <div class="container menu-block__container">
      Основное меню магазина
    </div>
    <div class="menu-block__inner">
      <router-link to="/search" class="btn btn-primary">Поиск товара</router-link>
      <router-link to="/orders" class="btn btn-primary" v-if="loggedIn">Заказы</router-link>
      <router-link to="/call-manager" class="btn btn-primary">Связаться с менеджером</router-link>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters([
      'user',
      'loggedIn'
    ]),
    ...mapActions([
      'logout'
    ])
  },
  mounted() {
    const notLoggedIn = this.$route.query?.register
    if (notLoggedIn === '1') {
      this.$store.dispatch('logout')
    }
  }
}
</script>
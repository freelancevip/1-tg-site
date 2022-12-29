<template>
  <div class="checkout">
    <div class="checkout__header">
      <div class="search-head">
        <div class="container search-head__container">

          <BackButton/>

          <div class="search-head__search">

          </div>

          <CallButton/>

        </div>
      </div>
    </div>
    <div class="checkout__body">
      <div class="checkout__form">
        <div class="container">
          <div class="checkout__form-info">
            Номер заявки {{ checkoutNumber }},
            счет на оплату будет сформирован в ближайшее время
            <div class="checkout__form-info-date">Срок на оплату до {{ checkoutDate }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="checkout__footer">
      <RouterLink to="/menu" class="btn btn-primary">Вернуться на главное меню</RouterLink>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";

export default {
  name: "Checkout1",
  computed: {
    ...mapGetters([
      'checkoutNumber',
      'checkoutDate',
    ])
  },
  methods: {
    ...mapActions([
      'checkout'
    ])
  },
}
</script>

<style scoped>

</style>
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
        <div class="checkout__form-title">
          Для выставления счета и оформления заказа пройдите регистрацию
        </div>
        <form class="checkout__form-inner">
          <div class="checkout__form-inner-row">
            <input type="text" placeholder="Укажите ИНН организации" v-model="inn">
          </div>
          <div class="checkout__form-inner-row">
            <input type="text" placeholder="Укажите адрес эл. почты" v-model="email">
          </div>
          <div class="checkout__form-inner-row checkout__form-inner-row--message" v-if="errorMessage">{{ errorMessage }}</div>
          <div class="checkout__form-inner-row">
            <button class="btn btn-primary" @click.prevent="register()">Продолжить</button>
          </div>
        </form>
      </div>
    </div>
    <div class="checkout__footer">

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Register",
  data() {
    return {
      inn: '',
      email: '',
      errorMessage: ''
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'loggedIn'
    ]),
  },
  methods: {
    register() {
      this.validateEmail()
      this.$store.dispatch('registerUser', {inn: this.inn, email: this.email});
    },
    validateEmail() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.errorMessage = '';
      } else {
        this.errorMessage = '*Проверьте введенные данные';
      }
    }
  }
}
</script>
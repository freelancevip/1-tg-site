<template>
  <div class="login">
    <div class="container login__container">
      <div class="login__nav">
        <a href="#" class="prev-btn"></a>
      </div>
      <div class="login__title">
        Вход
      </div>
      <form class="login__form" @submit.prevent="submit()">
        <div class="login__form-title">
          Укажите ваш E-mail (Либо ИНН) для авторизации
        </div>
        <div class="login__form-input">
          <input type="text" placeholder="Ввести" v-model="inn">
          <div class="login__form-message" v-if="errorMessage">{{ errorMessage }}</div>
        </div>

        <div class="login__form-button">
          <button class="btn btn-primary">Продолжить</button>
          <br>
          <RouterLink to="/menu" class="btn btn-primary">Продолжить как гость</RouterLink>
        </div>
      </form>
    </div>
    <loader/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  data() {
    return {
      inn: ''
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'errorMessage',
    ])
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      this.$store.dispatch('login', {inn: this.inn});
    }
  },
  created() {
    this.$store.dispatch('logout')
  }
}
</script>
<template>
  <div class="menu-block">
    <div class="menu-block__nav">
      <div class="container">
        <a href="#" class="prev-btn" @click.prevent="back()"></a>
      </div>
    </div>
    <div class="menu-block__inner">
      <div class="menu-block__text">{{ phone }}</div>
      <a :href="phoneCall" class="btn btn-primary">Связаться с менеджером</a>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      phone: '+7 (777) 123-45-67',
      phoneCall: 'https://t.me/+77771234567'
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>
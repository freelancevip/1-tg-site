<template>
  <div class="search-head__btn">
    <a href="#" class="prev-btn" @click.prevent="back()"></a>
  </div>
</template>

<script>

export default {
  name: "BackButton",
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
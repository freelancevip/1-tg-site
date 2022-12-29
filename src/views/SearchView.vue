<template>
  <div>
    <div class="product-search">
      <div class="product-search__head">
        <div class="search-head">
          <div class="container search-head__container">
            <BackButton/>
            <div class="search-head__search">
              <input type="text" class="js-search-filed" placeholder="Поиск..." v-model="query" @input="search">
              <div class="icon js-clear-search"></div>
            </div>

            <HeadCartLink/>

          </div>

        </div>
      </div>

      <div class="product-search__body search-results" v-if="productItems.length && !isLoading">
        <div class="search-results__title container" v-if="query.length">Результаты поиска: <span>«{{ query }}»</span></div>

        <ProductsList :productItems="productItems"/>

      </div>

      <div class="product-search__footer" v-if="productItems.length">
        <RouterLink to="cart" class="btn btn-outline-primary">Перейти в корзину</RouterLink>
      </div>
      <div class="product-search__body search-results" v-if="query && !productItems.length && !isLoading">
        <div class="search-results__title container">Результаты поиска: <span>«{{ query }}»</span></div>
        <div class="search-results__items">
          <div class="empty-message">
            Ничего не найдено
          </div>
        </div>
      </div>
    </div>

    <loader/>

  </div>
</template>

<script>
import HeadCartLink from "../components/HeadCartLink.vue";
import ProductsList from "../components/ProductsList.vue";
import BackButton from "../components/BackButton.vue";
import debounce from "debounce";
import {mapGetters} from "vuex";

export default {
  name: "SearchView",
  components: {
    HeadCartLink,
    ProductsList,
    BackButton,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['productItems', 'isLoading', 'query'])
  },
  methods: {
    search: debounce(function (e) {
      this.$store.dispatch('getProductItems', e.target.value)
    }, 600)
  },
}
</script>

<style scoped>

</style>
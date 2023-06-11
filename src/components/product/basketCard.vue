<template>
  <div>
    <p class="goods-card__num">{{ areaNumber }}</p>
    <div class="goods-card__box">
      <img :src="$store.state.cdn + productCard.main_image" alt="" />
      <div class="text">
        <p class="px14-800">{{ productCard.title }}</p>
        <p class="px16">
          Артикул:
          <span style="font-family: Roboto" class="px14-800">{{
            productCard.artikul
          }}</span>
        </p>
        <div v-if="typeComponent !== 'favourite'" class="counter">
          <button :disabled="disableMinus" @click="minusValue(productCard)">
            -
          </button>
          <button style="color: #000" class="num px20 fw500">
            {{ productCard.count ? productCard.count : count }}
          </button>
          <button :disabled="disablePlus" @click="plusValue(productCard)">
            +
          </button>
        </div>
        <div
          v-if="typeComponent !== 'favourite'"
          class="delete px14-800 gray"
          style="cursor: pointer"
          @click.prevent="removeValue(productCard)"
        >
          Удалить
        </div>
        <div
          v-if="typeComponent == 'favourite'"
          class="delete px14-800 gray"
          style="cursor: pointer"
          @click.prevent="removeFav(productCard)"
        >
          Удалить
        </div>
      </div>
    </div>
    <p class="price" style="font-weight: 600">
      {{ formatPrice(productCard.current_price) }}
    </p>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  props: ["productCard", "areaNumber", "typeComponent"],
  data: () => ({
    count: 1,
  }),
  created() {
    if (!localStorage.getItem("cart_products")) {
      localStorage.setItem("cart_products", "[]");
    }
  },
  mounted() {
    this.activeFavorite;
    let localStorageProducts = JSON.parse(
      localStorage.getItem("cart_products")
    );
  },
  computed: {
    ...mapGetters({
      cartList: "GET_CART_LIST",
      cdn: "GET_CDN",
      basket: "GET_BASKET_OPENED",
    }),
    basketData() {
      let newCards = {
        ids: [],
        counts: [],
        test: "",
      };
      this.cartList.map((item) => {
        newCards.ids.push(item.id);
        newCards.counts.push(item.count);
      });
      return newCards;
    },
  },
  methods: {
    ...mapActions(["DELETE_PRODUCT", "FETCH_PRODUCT_BY_ID"]),
    formatPrice: (price) => `${(+price).toLocaleString()} ₸`,
    minusValue(value) {
      if (this.count > 1) {
        this.count--;
        this.$store.commit("SET_CART_COUNT", {
          id: value.id,
          count: this.count,
        });
      } else if (this.count === 1) {
        this.activeCart = !this.activeCart;
        this.$store.commit("DELETE_PRODUCT", { id: value.id });
        this.count = 1;
        this.$emit("DELETE_FROM_BASKET");
      }
    },
    plusValue(value) {
      this.count++;
      this.$store.commit("SET_CART_COUNT", { id: value.id, count: this.count });
    },
    removeValue(value) {
      this.$store.commit("DELETE_PRODUCT", { id: value.id });
      this.count = 1;
      this.$emit("DELETE_FROM_BASKET");
      this.FETCH_PRODUCT_BY_ID({ id: this.basketData.ids });
    },
  },
  watch: {
    productCard() {},
    cartList() {},
  },
};
</script>

<style scoped>
/* @import "@/assets/styles/header.scss"; */
</style>

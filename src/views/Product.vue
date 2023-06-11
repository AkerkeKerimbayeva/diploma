<template>
  <div class="container">
    <div class="product-wrap">
      <div class="product">
        <div class="product-left">
          <swiper :navigation="navigation" :modules="modules" class="mySwiper">
            <swiper-slide
              v-for="(item, index) in product.productId"
              :key="index"
              ><img :src="cdn + item.image" alt=""
            /></swiper-slide>
          </swiper>
          <div class="nav">
            <div class="swiper-button-prev">
              <img src="@/assets/images/icons/left.jpg" alt="" />
            </div>
            <div class="swiper-button-next">
              <img src="@/assets/images/icons/right.png" alt="" />
            </div>
          </div>
          <!-- <img src="@/assets/images/blog1.png" alt="" /> -->
        </div>
        <div class="product-right">
          <p
            class="product-right__title px32 fw700 green"
            style="text-align: left"
          >
            {{ product.name }}
          </p>
          <p
            class="product-right__desc px18 fw500"
            v-html="product.mini_desc"
          ></p>
          <hr />
          <p class="price">{{ product.price }}</p>
          <div class="product-right__box">
            <button
              v-if="activeCart"
              class="button"
              @click="minusValue(product)"
            >
              Себеттен өшіру
            </button>
            <button v-else class="button" @click="addToCart(product)">
              Себетке қосу
            </button>
          </div>
          <div class="share">
            <p>Бөлісу:</p>
            <div class="share-images">
              <img src="../assets/images/icons/inst.png" alt="" />
              <img src="../assets/images/icons/inst.png" alt="" />
              <img src="../assets/images/icons/inst.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="product-btm">
        <p class="product-btm__title px24 fw500">Сипаттама</p>
        <p class="product-btm__text px18 fw400" v-html="product.long_desc"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      product: [],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      activeCart: false,
    };
  },
  created() {
    this.getProduct();
  },
  mounted() {
    this.inTheCart();
  },
  methods: {
    ...mapActions(["LOCALSTORAGE_PRODUCT", "DELETE_PRODUCT"]),
    getProduct() {
      axios.get(`products/slug?slug=${this.$route.params.slug}`).then((res) => {
        this.product = res.data.products;
      });
    },
    inTheCart() {
      if (this.cartList && this.product?.product) {
        let findCart = this.cartList.find(
          (i) => i.id === this.product?.product.id
        );
        if (findCart) {
          this.activeCart = true;
          this.count = findCart.count;
        } else {
          this.activeCart = false;
        }
      }
    },
    addProductToBasket() {
      this.ADD_PRODUCT_TO_BASKET(this.productInfo);
    },
    addToCart(product) {
      this.activeCart = !this.activeCart;
      this.$store.commit("ADD_TO_CART", { product, count: this.count });
    },
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
    },
  },
  computed: {
    ...mapState(["cdn"]),
    ...mapGetters({
      basket: "GET_BASKET_OPENED",
      cartList: "GET_CART_LIST",
    }),
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  watch: {
    $route() {
      this.getProduct();
    },
    cartList() {
      this.inTheCart();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/product";
</style>

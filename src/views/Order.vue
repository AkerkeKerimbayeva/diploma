<template>
  <div class="order">
    <div class="order-top">
      <div class="container">
        <div class="order-top__title white px48 fw500">Онлайн тапсырыс</div>
      </div>
    </div>
    <div class="container">
      <div class="order-btm">
        <div class="order-btm__left">
          <div class="order-btm__left-item">
            <p>Аты</p>
            <input
              placeholder="Есіміңізді еңгізіңіз"
              class="input"
              type="text"
            />
          </div>
          <div class="order-btm__left-item">
            <p>Тегі</p>
            <input
              placeholder="Тегіңізді еңгізіңіз"
              class="input"
              type="text"
            />
          </div>
          <div class="order-btm__left-item">
            <p>Email</p>
            <input
              placeholder="Почтаңызды еңгізіңіз"
              class="input"
              type="text"
            />
          </div>
          <div class="order-btm__left-item">
            <p>Телефон нөмірі</p>
            <input
              placeholder="Нөміріңізді еңгізіңіз"
              class="input"
              type="text"
            />
          </div>
          <div class="order-btm__left-item">
            <p>Тағам бойынша пікір немесе қалау</p>
            <input class="input" type="text" />
          </div>
          <div class="order-btm__left-item">
            <p>Көше</p>
            <input class="input" type="text" />
          </div>
          <div class="order-btm__left-item">
            <p>Подъезд(офис)</p>
            <input class="input" type="text" />
          </div>
          <div class="order-btm__left-item">
            <p>Пәтер нөмірі</p>
            <input class="input" type="text" />
          </div>
        </div>
        <div class="order-btm__right" v-if="activeClick">
          <!-- {{ order }} -->
          <div class="box" v-for="(item, idx) in product" :key="'a' + idx">
            <!-- <basket-card :productCard="item" :areaNumber="idx + 1" /> -->
          </div>
          <div class="card">
            <img src="@/assets/images/meal3.png" alt="" />
            <div class="text">
              <p class="px18 fw500">Chicken Tikka Kabab</p>
              <p>150 gm net</p>
              <p>50$</p>
            </div>
          </div>
          <div class="total">
            <div class="total-sum">
              <p>Бағасы</p>
              <p>10 000</p>
            </div>
            <div class="total-sum">
              <p>Жеткізу</p>
              <p>10 000</p>
            </div>
            <div class="total-sum">
              <p>Жеңілдік</p>
              <p>10 000</p>
            </div>
            <hr />
            <div class="total-sum">
              <p>Толық сумма</p>
              <p class="px24 fw500">10 000</p>
            </div>
            <button @click="getOrder" class="button">Төлем жасау</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import basketCard from "../components/product/basketCard.vue";
export default {
  //   components: { basketCard },
  data() {
    return {
      order: [],
      product: [],
      activeClick: true,
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    clickedOrder() {
      alert("Сіздің тапсырысыңыз сәтті орындалды!");
      this.activeClick = false;
    },
    getOrder() {
      axios
        .post("order", {
          headers: {
            Authorization: localStorage.getItem("access_token")
              ? `Bearer ${localStorage.getItem("access_token")}`
              : null,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Сіз сәтті түрде тапсырыс бердіңіз!");
            localStorage.setItem("access_token", res.data.accessToken);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProduct() {
      axios.get(`products/slug?slug=margarita`).then((res) => {
        this.product = res.data.products;
        // console.log(this.$route.params.slug);
      });
    },
  },
  watch: {
    $route() {
      this.getProduct();
    },
  },
};
</script>

<style lang="scss" scoped>
.order {
  &-top {
    background-image: url("@/assets/images/online.png");
    background-repeat: no-repeat;
    height: 350px;
    &__title {
      padding-top: 150px;
    }
  }
  &-btm {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    &__left {
      width: 60%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      &-item {
        width: 46%;
        margin-bottom: 30px;
        input {
          width: 100%;
          border-radius: 5px;
        }
        p {
          text-align: left;
          padding-bottom: 10px;
        }
      }
    }
    &__right {
      width: 30%;
      border: 1px solid #e0e0e0;
      padding: 20px;
      .card {
        display: flex;
        margin: 10px 0;
        img {
          margin-right: 15px;
        }
        .text {
          p {
            text-align: left;
            padding-bottom: 5px;
          }
        }
      }
      .total {
        &-sum {
          display: flex;
          justify-content: space-between;
          padding: 5px 0;
        }
      }
    }
  }
}
@media (max-width: 1120px) {
  .order {
    &-top {
      background-position: bottom;
      height: 200px;
      &__title {
        padding-top: 80px;
      }
    }
    &-btm {
      flex-direction: column;
      &__left {
        width: 100%;
        &-item {
          width: 100%;
          input {
            width: 83%;
          }
        }
      }
      &__right {
        width: 100%;
      }
    }
  }
}
</style>

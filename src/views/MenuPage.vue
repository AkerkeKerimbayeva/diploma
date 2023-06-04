<template>
  <div class="menu container">
    <div class="menu-top">
      <p class="green px48 fw700">Біздің мәзір</p>
    </div>
    <div class="menu-box">
      <div class="menu-cards">
        <Card
          v-for="(item, index) in product.products"
          :key="index"
          :products="item"
          class="menu-card"
        />
      </div>
      <div class="menu-navbar">
        <div class="category">
          <div class="category-title fw700 px24">Категориялар</div>
          <div class="category-links">
            <div
              class="category-links__item"
              v-for="(it, index) in product.products"
              :key="index"
            >
              <input
                v-model="category_id"
                :value="it.id"
                type="checkbox"
                name=""
              />
              <label>{{ it.name }}</label>
            </div>
          </div>
        </div>
        <div class="sort">
          <div class="sort-title">Баға бойынша сұрыптау</div>
          <input type="range" name="" id="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/product/Card.vue";
import Category from "../components/product/Category.vue";
import axios from "axios";
export default {
  components: { Card, Category },
  data() {
    return {
      product: [],
      category_id: [],
    };
  },
  created() {
    this.getProduct();
  },
  methods: {
    getProduct() {
      axios
        .get(`products?category_id=${this.category_id}&price=[2000, 6000]`)
        .then((res) => {
          if (res.status === 200) {
            this.product = res.data;
          }
        });
    },
  },
  watch: {
    category_id() {
      this.getProduct(this.category_id);
    },
  },
};
</script>

<style lang="scss" scoped>
.category {
  &-title {
    margin-bottom: 15px;
  }
  &-links {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    &__item {
      display: flex;
      padding: 5px 0;
      label {
        font-size: 18px;
        margin-left: 10px;
      }
      input {
        width: 20px;
      }
    }
  }
}
.menu {
  padding: 80px 0;
  &-cards {
    display: flex;
    flex-wrap: wrap;
    width: 78%;
  }
  &-card {
    margin-right: 1%;
    margin-bottom: 4%;
    width: 25%;
  }
  &-box {
    padding: 30px 0 80px 0;
    display: flex;
    justify-content: space-between;
  }
}
.sort {
  margin-top: 25px;
}
@media (max-width: 1120px) {
  .menu {
    padding: 30px 0;
    &-box {
      flex-direction: column-reverse;
    }
    &-cards {
      width: 100%;
    }
    &-card {
      width: 49%;
    }
  }
  .sort {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
}
</style>

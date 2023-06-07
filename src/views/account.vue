<template>
  <div class="container">
    <div class="acc">
      <p class="acc-title px32 fw500 green">Жеке кабинет</p>
      <div class="acc-items">
        <account-tab
          :tabItems="tabItems"
          @setTab="selectNewsTab"
          :selected="selectedNewsTab"
        >
        </account-tab>
        <tab-block
          class="data"
          :isSelected="selectedNewsTab === 'Менің жеке мәліметтерім'"
        >
          <input class="input" type="text" placeholder="Есімі" />
          <input class="input" type="text" placeholder="Нөмірі" />
          <input class="input" type="text" placeholder="Электронды поштасы" />
        </tab-block>
        <tab-block
          class="order"
          :isSelected="selectedNewsTab === 'Менің тапсырыстарым'"
        >
          <div class="order-title fw500 px24 green">Тапсырыстар:</div>
          <div class="order-wrap">
            <div class="order-card" v-for="(item, index) in ord" :key="index">
              <div class="text">
                <p>Статус: <span v-html="item.status"></span></p>
                <p>Төлем түрі: <span v-html="item.payment"></span></p>
                <p>Жеткізілу уақыты: <span v-html="item.createdAt"></span></p>
              </div>
              <div class="product" v-for="it in item.orderId" :key="it">
                <!-- <router-link :to="{ path: `${'meal/' + it.product_id}` }"> -->
                  <!-- <img src="@/assets/images/burger.png" alt="" /> -->
                  <a href="">
                  <p>
                    Бағасы: <span>{{ it.price }}</span>
                  </p>
                  <p>
                    Дана: <span>{{ it.quantity }}</span>
                  </p>
                  <p>
                    Тапсырыс уақыты: <span>{{ it.created_at }}</span>
                  </p>
                  <p>
                    Тағам атауы: <span>{{ it.productId.name }}</span>
                  </p>
                </a>
                <!-- </router-link> -->
              </div>
            </div>
          </div>
        </tab-block>
      </div>
    </div>
  </div>
</template>

<script>
import accountTab from "@/components/tab/accountTab.vue";
import tabBlock from "@/components/tab/tabBlock.vue";
import axios from "axios";
export default {
  components: { accountTab, tabBlock },
  data() {
    return {
      ord: [],
      selectedNewsTab: "Менің жеке мәліметтерім",
      tabItems: ["Менің жеке мәліметтерім", "Менің тапсырыстарым"],
    };
  },
  created() {
    this.getOrder();
  },
  methods: {
    selectNewsTab(tab) {
      this.selectedNewsTab = tab;
    },
    getOrder() {
      axios
        .get("order", {
          headers: {
            Authorization: localStorage.getItem("access_token")
              ? `Bearer ${localStorage.getItem("access_token")}`
              : null,
          },
        })
        .then((res) => {
          this.ord = res.data;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.acc {
  margin: 50px 0;
}
.data {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  input {
    margin: 10px 0;
  }
}
.order {
  &-wrap {
    // display: flex;
    // flex-wrap: wrap;
    // align-items: baseline;
  }
  &-title {
    text-align: left;
    margin-bottom: 20px;
  }
  &-card {
    border: 1px solid #000;
    padding: 5px;
    width: 300px;
    margin: 15px 0;
    img {
      width: 80px;
    }
    .text {
      p {
        text-align: left;
      }
    }
    .product {
      margin: 15px 0;
      p {
        text-align: left;
      }
    }
  }
}
</style>

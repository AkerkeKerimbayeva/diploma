<template>
  <div class="home">
    <div class="container">
      <section class="main">
        <div class="main-left">
          <p
            class="px60 fw700 black"
            data-aos-duration="1000"
            data-aos="fade-right"
          >
            Жылдам және <br />
            Сапалы тағам <br />
            дайындау өнері
          </p>
          <p
            class="px16 fw400 gray main-left__desc"
            data-aos-duration="1000"
            data-aos="fade-up-right"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Varius sed pharetra dictum neque massa congue
          </p>
          <button class="button">Менюді көру</button>
        </div>
        <div class="main-right">
          <img
            data-aos="zoom-in-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
            src="@/assets/images/main.png"
            alt=""
          />
        </div>
      </section>
      <section class="best">
        <div class="best-left">
          <p class="px48 fw700">
            <span class="green">Сіздер үшін </span>ең үздік және пайдалы
            тағамдар
          </p>
          <p class="px16 fw400 best-left__mid">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div class="best-left__line">
            <p class="px18 fw500">
              Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <p class="px18 fw500">
              Quisque diam pellentesque bibendum non dui volutpat fringilla
            </p>
            <p class="px18 fw500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <button class="button">Толығырақ</button>
        </div>
        <div class="best-right">
          <img
            class="best-right__img"
            src="@/assets/images/foody1.png"
            alt=""
          />
          <div class="best-right__btm">
            <img src="@/assets/images/foody2.png" alt="" />
            <img src="@/assets/images/foody3.png" alt="" />
          </div>
        </div>
      </section>
      <section class="choice">
        <div class="choice-wrap">
          <p class="choice-title px48 fw700">Өзіңіздің талғауыңызға сай</p>
          <div class="choice-cards">
            <img src="@/assets/images/choose1.png" alt="" />
            <img src="@/assets/images/choose2.png" alt="" />
            <img src="@/assets/images/choose3.png" alt="" />
            <img src="@/assets/images/choose4.png" alt="" />
          </div>
        </div>
      </section>
      <section class="taste">
        <div class="taste-left">
          <div class="taste-left__top">
            <img src="@/assets/images/taste1.png" alt="" />
            <img src="@/assets/images/taste2.png" alt="" />
          </div>
          <div class="taste-left__top">
            <img src="@/assets/images/taste3.png" alt="" />
            <img src="@/assets/images/taste4.png" alt="" />
            <div class="card">
              <img src="@/assets/images/taste5.png" alt="" />
              <img src="@/assets/images/taste6.png" alt="" />
            </div>
          </div>
        </div>
        <div class="taste-right">
          <p class="px48 fw700">
            <span class="green">Ерекше </span>дәм және
            <span class="green">тәжірибелі</span> аспаздар
          </p>
          <p class="px16 fw400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>
          <div class="taste-right__items">
            <div class="item">
              <div class="item-card">
                <img src="@/assets/images/icons/Hamburger.svg" alt="" />
              </div>
              <p class="px18 fw400">Fast Food</p>
            </div>
            <div class="item">
              <div class="item-card">
                <img src="@/assets/images/icons/Cookie.svg" alt="" />
              </div>
              <p class="px18 fw400">Түскі ас</p>
            </div>
            <div class="item">
              <div class="item-card">
                <img src="@/assets/images/icons/Wine.svg" alt="" />
              </div>
              <p class="px18 fw400">Кешкі ас</p>
            </div>
          </div>
          <div class="exp">
            <p class="px48 fw700 green">30+</p>
            <div class="exp-text">
              <p class="px18 fw400">жылдық үздік</p>
              <p class="px24 fw600">Тәжірибе</p>
            </div>
          </div>
        </div>
      </section>
      <section class="numbers">
        <div class="numbers-item">
          <img src="@/assets/images/num1.png" alt="" />
          <p class="numbers-item-text px24 fw700">Үздік аспаздар</p>
          <p class="px48 fw700">420</p>
        </div>
        <div class="numbers-item">
          <img src="@/assets/images/num2.svg" alt="" />
          <p class="numbers-item-text px24 fw700">Сапалы азық-түлік</p>
          <p class="px48 fw700">320</p>
        </div>
        <div class="numbers-item">
          <img src="@/assets/images/num3.svg" alt="" />
          <p class="numbers-item-text px24 fw700">Тәжірибе</p>
          <p class="px48 fw700">30+</p>
        </div>
        <div class="numbers-item">
          <img src="@/assets/images/num4.png" alt="" />
          <p class="numbers-item-text px24 fw700">Тұрақты клиенттер</p>
          <p class="px48 fw700">1000</p>
        </div>
      </section>
      <section class="menu">
        <p class="menu-title green px48 fw700">Біздің мәзірден</p>
        <div class="menu-cards">
          <personal-tab
            :tabItems="tabItems"
            @setTab="selectNewsTab"
            :selected="selectedNewsTab"
          >
          </personal-tab>
          <tab-block :isSelected="selectedNewsTab === 'Таңғы ас'">
            <div class="meal">
              <img class="meal-left" src="@/assets/images/meal.png" alt="" />
              <div class="meal-cards">
                <div class="meal-cards__item">
                  <img src="@/assets/images/meal1.png" alt="" />
                  <div class="text">
                    <p class="px18 fw700">Lettuce Leaf</p>
                    <p class="par px14 fw400">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p class="px18 green fw700">12.5$</p>
                  </div>
                </div>
                <div class="meal-cards__item">
                  <img src="@/assets/images/meal1.png" alt="" />
                  <div class="text">
                    <p class="px18 fw700">Lettuce Leaf</p>
                    <p class="par px14 fw400">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p class="px18 green fw700">12.5$</p>
                  </div>
                </div>
                <div class="meal-cards__item">
                  <img src="@/assets/images/meal1.png" alt="" />
                  <div class="text">
                    <p class="px18 fw700">Lettuce Leaf</p>
                    <p class="par px14 fw400">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p class="px18 green fw700">12.5$</p>
                  </div>
                </div>
                <div class="meal-cards__item">
                  <img src="@/assets/images/meal1.png" alt="" />
                  <div class="text">
                    <p class="px18 fw700">Lettuce Leaf</p>
                    <p class="par px14 fw400">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p class="px18 green fw700">12.5$</p>
                  </div>
                </div>
                <div class="meal-cards__item">
                  <img src="@/assets/images/meal1.png" alt="" />
                  <div class="text">
                    <p class="px18 fw700">Lettuce Leaf</p>
                    <p class="par px14 fw400">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p class="px18 green fw700">12.5$</p>
                  </div>
                </div>
                <div class="meal-cards__item">
                  <img src="@/assets/images/meal1.png" alt="" />
                  <div class="text">
                    <p class="px18 fw700">Lettuce Leaf</p>
                    <p class="par px14 fw400">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p class="px18 green fw700">12.5$</p>
                  </div>
                </div>
                <div class="meal-cards__item">
                  <img src="@/assets/images/meal1.png" alt="" />
                  <div class="text">
                    <p class="px18 fw700">Lettuce Leaf</p>
                    <p class="par px14 fw400">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p class="px18 green fw700">12.5$</p>
                  </div>
                </div>
                <div class="meal-cards__item">
                  <img src="@/assets/images/meal1.png" alt="" />
                  <div class="text">
                    <p class="px18 fw700">Lettuce Leaf</p>
                    <p class="par px14 fw400">
                      Lacus nisi, et ac dapibus velit in consequat.
                    </p>
                    <p class="px18 green fw700">12.5$</p>
                  </div>
                </div>
              </div>
            </div>
          </tab-block>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import personalTab from "@/components/tab/personalTab.vue";
import tabBlock from "@/components/tab/tabBlock.vue";
export default {
  name: "HomeView",
  components: { personalTab, tabBlock },
  data() {
    return {
      selectedNewsTab: "Таңғы ас",
      tabItems: [
        "Таңғы ас",
        "Түскі ас",
        "Кешкі ас",
        "Десерттер",
        "Сусындар",
        "Снэктер",
        "Сорпалар",
      ],
    };
  },
  methods: {
    selectNewsTab(tab) {
      this.selectedNewsTab = tab;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/home.scss";
</style>

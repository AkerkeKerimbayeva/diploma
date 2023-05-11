<template>
  <div class="home">
    <div class="container">
      <section class="main">
        <div class="main-left">
          <p class="px60 fw700 black">Жылдам және <br> Сапалы тағам <br> дайындау өнері</p>
          <p class="px16 fw400 gray main-left__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br> Varius sed pharetra dictum neque massa congue</p>
          <button class="button">Менюді көру</button>
        </div>
        <div class="main-right">
          <img src="@/assets/images/main.png" alt="">
        </div>
      </section>
      <section class="best">
        <div class="best-left">
          <p class="px48 fw700"><span class="green">Сіздер үшін </span>ең үздік және пайдалы тағамдар</p>
          <p class="px16 fw400 best-left__mid">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <div class="best-left__line">
            <p class="px18 fw500"> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <p class="px18 fw500"> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
            <p class="px18 fw500">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <button class="button">Толығырақ</button>
        </div>
        <div class="best-right">
          <img class="best-right__img" src="@/assets/images/foody1.png" alt="">
          <div class="best-right__btm">
            <img src="@/assets/images/foody2.png" alt="">
            <img src="@/assets/images/foody3.png" alt="">
          </div>
        </div>
      </section>
      <section class="choice">
        <div class="choice-wrap">
          <p class="choice-title px48 fw700">Өзіңіздің талғауыңызға сай</p>
          <div class="choice-cards">
            <img src="@/assets/images/choose1.png" alt="">
            <img src="@/assets/images/choose2.png" alt="">
            <img src="@/assets/images/choose3.png" alt="">
            <img src="@/assets/images/choose4.png" alt="">
          </div>
        </div>
      </section>
      <section class="taste">
        <div class="taste-left">
          <div class="taste-left__top">
            <img src="@/assets/images/taste1.png" alt="">
            <img src="@/assets/images/taste2.png" alt="">
          </div>
          <div class="taste-left__top">
            <img src="@/assets/images/taste3.png" alt="">
            <img src="@/assets/images/taste4.png" alt="">
            <div class="card">
              <img src="@/assets/images/taste5.png" alt="">
              <img src="@/assets/images/taste6.png" alt="">
            </div>
          </div>
        </div>
        <div class="taste-right">
          <p class="px48 fw700"><span class="green">Ерекше </span>дәм және <span class="green">тәжірибелі</span> аспаздар</p>
          <p class="px16 fw400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
          <div class="taste-right__items">
            <div class="item">
              <!-- <img src="@/assets/images/" alt=""> -->
              <p></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/style/home.scss';
</style>
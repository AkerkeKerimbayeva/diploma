<template>
  <div class="head">
    <div class="container">
      <div class="head-bottom">
        <div class="head-bottom__nav">
          <div class="head-logo">
            <img src="../assets/images/icons/Foodtuck.png" alt="" />
          </div>
          <ul>
            <li class="px16-400">
              <router-link to="/">Басты бет</router-link>
            </li>
            <li class="px16-400">
              <router-link to="/menu">Мәзір</router-link>
            </li>
            <li class="px16-400">
              <router-link to="/hits">Жеңілдіктер</router-link>
            </li>
            <li class="px16-400">
              <router-link to="/">Бронь жасау</router-link>
            </li>
            <li class="px16-400">
              <router-link to="/order">Онлайн тапсырыс</router-link>
            </li>
            <li class="px16-400"><router-link to="/">Байланыс</router-link></li>
            <li class="px16-400">
              <router-link to="/">Біз туралы</router-link>
            </li>
          </ul>
        </div>
        <div class="head-bottom__right">
          <div class="search">
            <input class="input" placeholder="Іздеу..." type="text" />
          </div>
          <div class="basket">
            <img src="../assets/images/icons/basket.png" alt="" />
          </div>
          <router-link to="/sign-in">
            <img class="sign" src="@/assets/images/icons/sign.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style/home.scss";
</style>

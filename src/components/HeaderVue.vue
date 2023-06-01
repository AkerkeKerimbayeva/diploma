<template>
  <div class="head">
    <div class="container">
      <div class="head-bottom">
        <div class="head-bottom__nav">
          <img @click="isMobile = true" class="head-burger d-none" src="@/assets/images/icons/burger.png" alt="">
          <div class="head-mobile d-none" v-if="isMobile">
            <img @click="isMobile = false" class="close" src="@/assets/images/icons/close.png" alt="">
            <ul>
              <li class="px16-400" @click="isMobile = false">
                <router-link to="/">Басты бет</router-link>
              </li>
              <li class="px16-400" @click="isMobile = false">
                <router-link to="/menu">Мәзір</router-link>
              </li>
              <li class="px16-400" @click="isMobile = false">
                <router-link to="/hits">Жеңілдіктер</router-link>
              </li>
              <li class="px16-400" @click="isMobile = false">
                <router-link to="/">Бронь жасау</router-link>
              </li>
              <li class="px16-400">
                <router-link to="" @click="isOpen = true">Кері қоңырау</router-link>
              </li>
              <li class="px16-400" @click="isMobile = false"><router-link to="/contacts">Байланыс</router-link></li>
              <li class="px16-400" @click="isMobile = false">
                <router-link to="/about-us">Біз туралы</router-link>
              </li>
            </ul>
          </div>
          <div class="head-logo">
            <router-link to="/"><img src="../assets/images/icons/Foodtuck.png" alt="" /></router-link>
          </div>
          <ul class="head-nav">
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
              <router-link to="" @click="isOpen = true">Кері қоңырау</router-link>
            </li>
            <li class="px16-400"><router-link to="/contacts">Байланыс</router-link></li>
            <li class="px16-400">
              <router-link to="/about-us">Біз туралы</router-link>
            </li>
          </ul>
        </div>
        <div class="head-bottom__right">
          <div class="search m-none">
            <input class="input" placeholder="Іздеу..." type="text" />
          </div>
          <div class="basket">
            <router-link to="/order"><img src="../assets/images/icons/basket.png" alt="" /></router-link>
          </div>
          <router-link to="/sign-in">
            <img class="sign" src="@/assets/images/icons/sign.png" alt="">
          </router-link>
        </div>
      </div>
    </div>
    <Modal :open="isOpen" @close="isOpen = !isOpen">
      <div class="modal">
        <p class="modal-title px24 fw500 green">
          Кері қоңырауға тапсырыс беру
        </p>
        <p>Сізге жақын арада қайта қоңырау шаламыз!</p>
        <input placeholder="Есіміңіз" type="text" class="input">
        <input placeholder="Телефон нөміріңіз" type="text" class="input">
        <button class="button">Жіберу</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from './modal/Modal.vue';
import {ref} from 'vue'
export default {
components: {Modal},
data() {
  return {
    isMobile: false,
  }
},
setup() {
        const isOpen = ref(false);
        return {
        isOpen,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/home.scss";
</style>

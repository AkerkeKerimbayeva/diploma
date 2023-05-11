<template>
  <HeaderVue />
  <transition name="fade" mode="in-out">
    <router-view />
  </transition>
  <footer-vue/>
</template>

<script>
import FooterVue from './components/FooterVue.vue';
import HeaderVue from "./components/HeaderVue.vue";
export default {
  components: { HeaderVue, FooterVue },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

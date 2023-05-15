<template>
  <div class="menu container">
    <div class="menu-top">
      <p class="green px48 fw700">Біздің мәзір</p>
    </div>
    <div class="menu-box">
      <div class="menu-cards">
        <Card class="menu-card" />
        <Card class="menu-card" />
        <Card class="menu-card" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/product/Card.vue";
export default {
  components: { Card },
};
</script>

<style lang="scss" scoped>
.menu {
  padding: 80px 0;
  &-cards {
    display: flex;
  }
  &-card {
    margin-right: 1%;
  }
  &-box {
    padding: 30px 0 80px 0;
  }
}
</style>

<template>
  <div class="card">
    <router-link to="">
      <img src="@/assets/images/burger.png" alt="" />
    </router-link>
    <div class="card-btm">
      <div class="card-btm__left">
        <p class="px18 fw700">Бургер</p>
        <p class="price green fw700">2 000</p>
      </div>
      <img src="@/assets/images/icons/basket.png" class="basket" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  width: 310px;
  height: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.4s;
  &-btm {
    display: flex;
    justify-content: space-between;
    img {
      object-fit: contain;
      cursor: pointer;
    }
    &__left {
      p {
        text-align: left;
      }
    }
  }
  &:hover {
    a {
      img {
        filter: blur(3px);
        transition: 0.4s;
      }
    }
  }
}
</style>

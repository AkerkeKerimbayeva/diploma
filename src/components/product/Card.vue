<template>
  <div class="card">
    <router-link to="/meal">
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
  border: 1px solid #195a00;
  a {
    img {
      transition: 0.4s;
      width: 100%;
    }
  }
  &-btm {
    display: flex;
    justify-content: space-between;
    padding: 0 10px 10px 10px;
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
@media (max-width: 1120px) {
  .card {
    height: 240px;
  }
}
</style>

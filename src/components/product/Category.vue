<template>
  <div class="category">
    <div class="category-title fw700 px24">Категориялар</div>
    <div class="category-links">
      <div class="category-links__item">
        <input type="checkbox" name="" id="1" />
        <label for="1">Сэндвичтер</label>
      </div>
      <div class="category-links__item">
        <input type="checkbox" name="" id="2" />
        <label for="2">Бургерлер</label>
      </div>
      <div class="category-links__item">
        <input type="checkbox" name="" id="3" />
        <label for="3">Тауық аяқтары</label>
      </div>
      <div class="category-links__item">
        <input type="checkbox" name="" id="4" />
        <label for="4">Сусындар</label>
      </div>
      <div class="category-links__item">
        <input type="checkbox" name="" id="5" />
        <label for="5">Пицца</label>
      </div>
      <div class="category-links__item">
        <input type="checkbox" name="" id="6" />
        <label for="6">Вегетариандық</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>

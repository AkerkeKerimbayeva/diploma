<template>
  <div class="container">
    <div class="product-wrap">
    <div class="product">
      <div class="product-left">
        <swiper :navigation="navigation" :modules="modules" class="mySwiper">
          <swiper-slide><img src="@/assets/images/blog1.png" alt="" /></swiper-slide>
          <swiper-slide><img src="@/assets/images/blog2.png" alt="" /></swiper-slide>
          <swiper-slide><img src="@/assets/images/blog3.png" alt="" /></swiper-slide>
        </swiper>
        <div class="nav">
            <div class="swiper-button-prev">
              <img src="@/assets/images/icons/left.jpg" alt="" />
            </div>
            <div class="swiper-button-next">
              <img src="@/assets/images/icons/right.png" alt="" />
            </div>
          </div>
        <!-- <img src="@/assets/images/blog1.png" alt="" /> -->
      </div>
      <div class="product-right">
        <p
          class="product-right__title px32 fw700 green"
          style="text-align: left"
        >
          Бургер из телятины
        </p>
        <p class="product-right__desc px18 fw500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          praesentium neque vel libero perferendis. Facere iure perferendis,
          voluptatum in maiores culpa iste voluptates, placeat ratione, quos
          quo! Ea, exercitationem laborum?
        </p>
        <hr />
        <p class="price">2.000 tg</p>
        <div class="product-right__box">
          <div class="product-right__piece">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <button class="button">Себетке қосу</button>
        </div>
        <div class="share">
          <p>Бөлісу:</p>
          <div class="share-images">
            <img src="../assets/images/icons/inst.png" alt="" />
            <img src="../assets/images/icons/inst.png" alt="" />
            <img src="../assets/images/icons/inst.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="product-btm">
      <p class="product-btm__title px24 fw500">Сипаттама</p>
      <p class="product-btm__text px18 fw400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum
        natus, sed facere laboriosam non! Animi dolore nostrum soluta itaque
        totam, reprehenderit assumenda quidem earum quam odit quaerat optio cum.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, labore
        autem! Similique dolorem libero error! Repudiandae expedita veniam
        magnam explicabo. Tenetur animi dolor excepturi cupiditate enim?
        Repellendus iste cupiditate eligendi.
      </p>
    </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      }
    },
    setup() {
      return {
        modules: [Navigation],
      };
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/product";
</style>

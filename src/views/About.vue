<template>
  <div class="container">
    <div class="about">
      <p class="about-title green px32 fw500">Біз туралы</p>
      <div class="about-card">
        <div class="about-card__left">
          <img src="@/assets/images/blog1.png" alt="" />
          <img src="@/assets/images/blog2.png" alt="" />
          <img src="@/assets/images/blog3.png" alt="" />
        </div>
        <div class="about-card__right">
          <p class="desc px24 fw500">
            Дәмді әрі пайдалы тағам күнделікті қолжетімді!
          </p>
          <p>
            Алматының қақ ортасында он бес жылдан астам уақыт бойы "Foodtuck"
            мейрамханасы есігін айқара ашты. "Foodtuck" мейрамханасы Өзін Алматы
            қаласындағы Классикалық FINE DINING RESTAURANT (Premium класты
            жоғары асханалық мейрамхана) форматындағы сүйікті орын ретінде
            танытты. Мейрамхананың басты ерекшелігі-оның Horeca сегментінде он
            бес жылдан астам тарихы бар, мейрамханада жеті дәстүрлі
            гастрономиялық тағамдар бар: американдық, кавказдық, жапондық, орыс,
            итальян, Шығыс және вегетариандық.
          </p>
          <div class="watch">
            <img
              @click="isVideo = true"
              src="@/assets/images/icons/Play.png"
              alt=""
            />
            <p>Видеоны қосу</p>
            <div v-if="isVideo" class="watch-video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qe6x0T0kJbo"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="choose">
      <p class="choose-title green px32 fw500">
        Неге бізді таңдауға кеңес береміз?
      </p>
      <p class="choose-desc">
        Үнемі жаңа дәмді тағамдарды ұнататындар үшін біздің мейрамхана 100-ге
        дейін тағамнан тұратын мәзірде әртүрлі аспаздық тағамдарды ұсынады.
        Мінсіз қызмет көрсету сапасы мен қол жетімді бағалар біздің
        мейрамханаларды іскерлік кездесулер үшін де, романтикалық кештер үшін де
        күндізгі түскі ас үшін де, кешкі ас үшін де тартымды етеді. Foodtuck
        мейрамханалары-Шығыс құпиясының, азиялық қонақжайлылықтың, жайлы
        атмосфераның және тамаша тағамдардың сәтті үйлесімі.
      </p>
      <img src="@/assets/images/about-page.png" alt="" />
    </div>
    <div class="review">
      <p class="review-title px32 fw500 green">Біздің қызметкерлер</p>
      <div class="review-slide">
        <swiper
          :slidesPerView="3"
          :spaceBetween="30"
          :navigation="true"
          :modules="modules"
          :breakpoints="breakpoints"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :loop="true"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="review-card">
              <img src="@/assets/images/coocker1.png" alt="" />
              <div class="review-card__text">
                <p class="px18 fw500">Mark Henry</p>
                <p>Аспаз</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              <img src="@/assets/images/coocker2.png" alt="" />
              <div class="review-card__text">
                <p class="px18 fw500">Mark Henry</p>
                <p>Аспаз</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              <img src="@/assets/images/coocker3.png" alt="" />
              <div class="review-card__text">
                <p class="px18 fw500">Mark Henry</p>
                <p>Аспаз</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              <img src="@/assets/images/coocker4.png" alt="" />
              <div class="review-card__text">
                <p class="px18 fw500">Mark Henry</p>
                <p>Аспаз</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              <img src="@/assets/images/coocker1.png" alt="" />
              <div class="review-card__text">
                <p class="px18 fw500">Mark Henry</p>
                <p>Аспаз</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              <img src="@/assets/images/coocker2.png" alt="" />
              <div class="review-card__text">
                <p class="px18 fw500">Mark Henry</p>
                <p>Аспаз</p>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="review-card">
              <img src="@/assets/images/coocker3.png" alt="" />
              <div class="review-card__text">
                <p class="px18 fw500">Mark Henry</p>
                <p>Аспаз</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="visible" v-if="isVideo" @click="isVideo = false"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { Navigation, Autoplay } from "swiper";
import "swiper/css/navigation";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isVideo: false,
      breakpoints: {
        970: {
          spaceBetween: 10,
          slidesPerView: 3,
        },
        0: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
      },
    };
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
// .swiper {
//     &-button {
//         &-prev, &-next {
//             &::after {
//                 opacity: 0;
//             }
//         }
//     }
// }
.visible {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 110;
  height: 100%;
  opacity: 0.8;
}
.review {
  margin: 50px 0 100px 0;
  &-title {
    margin-bottom: 30px;
  }
  &-card {
    img {
      width: 300px;
    }
    &__text {
      box-shadow: 0px 0px 80px rgba(205, 205, 205, 0.25);
      width: 300px;
      margin: 0 auto;
      border: 1px solid #000;
      p {
        text-align: center;
        padding: 5px 0;
      }
    }
  }
}
.about {
  margin: 50px 0;
  &-title {
    margin: 20px 0 30px 0;
  }
  &-card {
    &__right {
      width: 80%;
      margin: 0 auto;
      .desc {
        margin-top: 30px;
      }
      p {
        margin: 10px 0;
      }
      .watch {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 25px 0;
        position: relative;
        &-video {
          position: absolute;
        }
        img {
          margin-right: 5px;
        }
      }
    }
    &__left {
      img {
        width: 33%;
      }
    }
  }
}
.choose {
  width: 80%;
  margin: 0 auto;
  padding: 100px 0;
  &-desc {
    margin: 25px 0;
  }
  img {
    width: 100%;
  }
}
@media (max-width: 1120px) {
  .about {
    &-card {
      &__right {
        width: 100%;
      }
    }
  }
  .choose {
    width: 100%;
    padding: 40px 0;
  }
}
</style>

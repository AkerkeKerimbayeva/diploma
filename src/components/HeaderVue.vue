<template>
  <div class="head">
    <div class="container">
      <div class="head-bottom">
        <div class="head-bottom__nav">
          <img
            @click="isMobile = true"
            class="head-burger d-none"
            src="@/assets/images/icons/burger.png"
            alt=""
          />
          <div class="head-mobile d-none" v-if="isMobile">
            <img
              @click="isMobile = false"
              class="close"
              src="@/assets/images/icons/close.png"
              alt=""
            />
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
                <router-link to="/reservation">Бронь жасау</router-link>
              </li>
              <li class="px16-400">
                <router-link to="" @click="isOpen = true"
                  >Кері қоңырау</router-link
                >
              </li>
              <li class="px16-400" @click="isMobile = false">
                <router-link to="/contacts">Байланыс</router-link>
              </li>
              <li class="px16-400" @click="isMobile = false">
                <router-link to="/about-us">Біз туралы</router-link>
              </li>
            </ul>
          </div>
          <div class="head-logo">
            <router-link to="/"
              ><img src="../assets/images/icons/Foodtuck.png" alt=""
            /></router-link>
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
              <router-link to="/reservation">Бронь жасау</router-link>
            </li>
            <li class="px16-400">
              <router-link to="" @click="isOpen = true"
                >Кері қоңырау</router-link
              >
            </li>
            <li class="px16-400">
              <router-link to="/contacts">Байланыс</router-link>
            </li>
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
            <router-link to="/order"
              ><img src="../assets/images/icons/basket.png" alt=""
            /></router-link>
          </div>
          <router-link v-if="!isAuth" to="/sign-in">
            <img class="sign" src="@/assets/images/icons/sign.png" alt="" />
          </router-link>
          <router-link v-if="isAuth" to="/account">
            <img class="sign" src="@/assets/images/icons/sign.png" alt="" />
          </router-link>
          <img
            @click="logOut"
            style="width: 25px; margin-left: 10px"
            v-if="isAuth"
            src="@/assets/images/icons/logout.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <Modal :open="isOpen" @close="isOpen = !isOpen">
      <div class="modal">
        <p class="modal-title px24 fw500 green">Кері қоңырауға тапсырыс беру</p>
        <p>Сізге жақын арада қайта қоңырау шаламыз!</p>
        <input
          v-model="name"
          placeholder="Есіміңіз"
          type="text"
          class="input"
        />
        <input
          v-model="phone"
          placeholder="Телефон нөміріңіз"
          type="text"
          class="input"
        />
        <button @click="sendCall" class="button">Жіберу</button>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "./modal/Modal.vue";
import { ref } from "vue";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  components: { Modal },
  data() {
    return {
      isMobile: false,
    };
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen,
    };
  },
  methods: {
    ...mapActions(["checkAuth", "logout"]),
    logOut() {
      this.$store.dispatch("logout");
      this.$store.dispatch("checkAuth");
      this.$router.push("/");
    },
    sendCall() {
      this.form = {
        phone: this.phone,
        name: this.name,
      };
      axios
        .post("callform", this.form, {
          name: this.name,
          phone: this.phone,
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Сәтті жіберілді!");
            this.isOpen = false;
          } else {
            console.log("err");
          }
        });
    },
  },
  computed: {
    ...mapGetters({
      isAuth: "getIsAuth",
      isUnAuth: "getUnAuth",
      getUser: "getUser",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/home.scss";
</style>

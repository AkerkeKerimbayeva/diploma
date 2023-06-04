<template>
  <div class="container">
    <div class="sign">
      <p class="sign-title px32 fw500 green">Тіркелу</p>
      <input
        v-model="name"
        class="input"
        placeholder="Есіміңізді еңгізіңіз"
        type="text"
      />
      <input
        v-model="phone"
        class="input"
        placeholder="Нөміріңізді еңгізіңіз"
        type="text"
      />
      <input
        v-model="email"
        class="input"
        placeholder="Почтаңызды еңгізіңіз"
        type="text"
      />
      <input
        v-model="password"
        class="input"
        placeholder="Құпиясөзді еңгізіңіз"
        type="password"
      />
      <input
        v-model="password"
        class="input"
        placeholder="Құпиясөзді қайта еңгізіңіз"
        type="password"
      />
      <button class="button" @click="getRegister">Тіркелу</button>
      <p class="sign-btm">
        Егер тіркелген болсаңыз,
        <router-link to="/login-page">аккаунтыңызға кіріңіз</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  created() {
    this.checkAuth();
  },
  methods: {
    ...mapActions(["checkAuth"]),
    getRegister() {
      axios
        .post("client/auth/register", {
          phone: this.phone,
          name: this.name,
          email: this.email,
          password: this.password,
          headers: {
            Authorization: localStorage.getItem("access_token")
              ? `Bearer ${localStorage.getItem("access_token")}`
              : null,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            alert("Сіз сәтті тіркелдіңіз!");
            // console.log(this.isAuth);
            this.isOpen1 = false;
            this.password = "";
            this.phone = "";
            this.$router.push("/account");
            localStorage.setItem("access_token", res.data.accessToken);
            this.checkAuth();
          }
        })
        .catch((error) => {
          alert("Қолданушы тіркелген!");
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.sign {
  min-height: 100vh;
  width: 400px;
  margin: 0 auto;
  &-title {
    padding: 20px 0;
  }
  &-btm {
    margin-top: 20px;
    a {
      color: green;
    }
  }
  input {
    width: 100%;
    margin: 12px 0;
    padding: 15px !important;
  }
  button {
    margin-top: 20px;
  }
}
@media (max-width: 1120px) {
  .sign {
    width: 100%;
    .input {
      width: 90%;
    }
  }
}
</style>

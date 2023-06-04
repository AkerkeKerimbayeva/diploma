<template>
  <div class="container">
    <div class="sign">
      <p class="sign-title px32 fw500 green">Кіру</p>
      <input
        class="input"
        placeholder="Электронды поштаңызды еңгізіңіз"
        type="text"
        v-model="email"
      />
      <input
        v-model="password"
        class="input"
        placeholder="Құпиясөзді еңгізіңіз"
        type="password"
      />
      <button class="button" @click="onSubmit">Кіру</button>
      <p class="sign-btm">
        Егер аккаунтыңыз болмаса,
        <router-link to="/sign-in">тіркеліңіз</router-link>
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
    onSubmit() {
      axios
        .post("client/auth/login", {
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
            alert("Сіз сәтті түрде өз аккаутыңызға кірдіңіз!");
            this.password = "";
            this.email = "";
            this.$router.push("/account");
            localStorage.setItem("access_token", res.data.accessToken);
            this.checkAuth();
          }
        })
        .catch((error) => {
          alert("Қате логин немесе құпиясөз!");
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
    padding: 15px 10px !important;
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

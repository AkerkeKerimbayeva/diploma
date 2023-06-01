<template>
    <div class="container">
        <div class="sign">
            <p class="sign-title px32 fw500 green">Тіркелу</p>
            <input class="input" placeholder="Есіміңізді еңгізіңіз" type="text">
            <input class="input" placeholder="Нөміріңізді еңгізіңіз" type="text">
            <input class="input" placeholder="Почтаңызды еңгізіңіз" type="text">
            <input class="input" placeholder="Құпиясөзді еңгізіңіз" type="password">
            <button class="button">Тіркелу</button>
            <p class="sign-btm">Егер тіркелген болсаңыз, <router-link to="/login-page">аккаунтыңызға кіріңіз</router-link></p>
        </div>
    </div>
</template>

<script>
export default {

}
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
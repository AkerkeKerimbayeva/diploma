<template>
  <div class="container">
    <div class="hits" v-if="disc[0]">
        <p class="hits-title px32 fw500 green">{{ disc[0].name }}</p>
        <div class="hits-card" v-for="(item, index) in disc[0].disCategory" :key="index">
            <img src="@/assets/images/taste1.png" alt="">
            <div class="hits-card__text">
                <p class="px24 fw500 title" v-html="item.name"></p>
                <p>{{ item.mini_desc }}</p>
            </div>
        </div>
    </div>
    <div class="rebate" v-if="disc[1]">
        <p class="rebate-title px32 fw500 green">{{ disc[1].name }}</p>
        <div class="rebate-card">
            <div class="rebate-card__text" v-for="(item, index) in disc[1].disCategory" :key="index">
                <p class="px24 fw500 title">{{ item.name }}</p>
                <p>{{ item.mini_desc }}</p>
            </div>
            <img src="@/assets/images/hit.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
data() {
    return {
        disc: [],
    }
},
created() {
    this.getDiscount();
},
methods: {
    getDiscount() {
        axios.get("get/discounts")
        .then((res) => {
            this.disc = res.data
        })
        .catch((error) => {
            console.log(error);
        })
    }
}
}
</script>

<style lang="scss" scoped>
.hits, .rebate {
    &-card {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 50px 0;
        img {
            width: 20%;
        }
        &__text {
            width: 76%;
            .title {
                margin-bottom: 25px;
            }
            p {
                text-align: justify;
            }
        }
    }
}
.rebate {
    margin-top: 80px;
}
@media (max-width: 1120px) {
    .hits, .rebate {
        &-card {
            flex-direction: column;
            img {
                width: 100%;
                height: 250px;
                object-fit: cover;
            }
            &__text {
                width: 100%;
            }
        }
    }
}
</style>
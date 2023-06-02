<template>
    <div class="container">
        <div class="acc">
            <p class="acc-title px32 fw500 green">Жеке кабинет</p>
            <div class="acc-items">
                <account-tab
                    :tabItems="tabItems"
                    @setTab="selectNewsTab"
                    :selected="selectedNewsTab"
                >
                </account-tab>
                <tab-block class="data" :isSelected="selectedNewsTab === 'Менің жеке мәліметтерім'">
                    <input class="input" type="text" placeholder="Есімі">
                    <input class="input" type="text" placeholder="Нөмірі">
                    <input class="input" type="text" placeholder="Электронды поштасы">
                </tab-block>
                <tab-block class="order" :isSelected="selectedNewsTab === 'Менің тапсырыстарым'">
                    <div class="order-title fw500 px24 green">
                        Тапсырыстар:
                    </div>
                    <div class="order-card">
                        <img src="@/assets/images/burger.png" alt="">
                        <div class="text">
                            <p>Бургер</p>
                            <p>Бағасы: 2500</p>
                            <p>Статус: Жеткізілді</p>
                            <p>Жеткізілу уақыты: 22.06.2023</p>
                        </div>
                    </div>
                    <div class="order-card">
                        <img src="@/assets/images/burger.png" alt="">
                        <div class="text">
                            <p>Бургер</p>
                            <p>Бағасы: 2500</p>
                            <p>Статус: Жеткізілді</p>
                            <p>Жеткізілу уақыты: 22.06.2023</p>
                        </div>
                    </div>
                </tab-block>
            </div>
        </div>
    </div>
</template>

<script>
import accountTab from "@/components/tab/accountTab.vue";
import tabBlock from "@/components/tab/tabBlock.vue";
export default {
    components: { accountTab, tabBlock },
    data() {
        return {
        selectedNewsTab: "Менің жеке мәліметтерім",
        tabItems: [
            "Менің жеке мәліметтерім",
            "Менің тапсырыстарым",
        ],
        };
    },
    methods: {
        selectNewsTab(tab) {
            this.selectedNewsTab = tab;
        },
    },
}
</script>

<style lang="scss" scoped>
.acc {
    margin: 50px 0;
}
.data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    input {
        margin: 10px 0;
    }
}
.order {
    &-title {
        text-align: left;
        margin-bottom: 20px;
    }
    &-card {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #000;
        padding: 5px;
        width: 300px;
        margin: 15px 0;
        img {
            width: 80px;
        }
        .text {
            p {
                text-align: right;
            }
        }
    }
}
</style>
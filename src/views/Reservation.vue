<template>
    <div class="res">
        <div class="container">
            <p class="res-title px32 fw500 green">
                Үстелді алдын ала брондау
            </p>
            <div class="res-cards">
                <div class="res-cards__item" @click="isOpen = true">
                    <p class="status-active px18">Бос үстел</p>
                    <!-- <p class="status-active px18" style="color: red;">Бос емес</p> -->
                    <img class="res-cards__item-img" src="@/assets/images/table2.webp" alt="">
                    <div class="text">
                        <p class="px24 fw600">№1</p>
                        <p class="text-second px18 fw500"><img src="@/assets/images/icons/people.png" alt=""> 2</p>
                    </div>
                </div>
                <div class="res-cards__item">
                    <!-- <p class="status-active px18">Бос үстел</p> -->
                    <p class="status-active px18" style="color: red;">Бос емес</p>
                    <img class="res-cards__item-img" src="@/assets/images/table4.webp" alt="">
                    <div class="text">
                        <p class="px24 fw600">№2</p>
                        <p class="text-second px18 fw500"><img src="@/assets/images/icons/people.png" alt=""> 4</p>
                    </div>
                </div>
                <div class="res-cards__item">
                    <p class="status-active px18">Бос үстел</p>
                    <!-- <p class="status-active px18" style="color: red;">Бос емес</p> -->
                    <img class="res-cards__item-img" src="@/assets/images/table2.webp" alt="">
                    <div class="text">
                        <p class="px24 fw600">№3</p>
                        <p class="text-second px18 fw500"><img src="@/assets/images/icons/people.png" alt=""> 2</p>
                    </div>
                </div>
                <div class="res-cards__item">
                    <p class="status-active px18">Бос үстел</p>
                    <!-- <p class="status-active px18" style="color: red;">Бос емес</p> -->
                    <img class="res-cards__item-img" src="@/assets/images/table6.jpg" alt="">
                    <div class="text">
                        <p class="px24 fw600">№4</p>
                        <p class="text-second px18 fw500"><img src="@/assets/images/icons/people.png" alt=""> 6</p>
                    </div>
                </div>
                <div class="res-cards__item">
                    <p class="status-active px18">Бос үстел</p>
                    <!-- <p class="status-active px18" style="color: red;">Бос емес</p> -->
                    <img class="res-cards__item-img" src="@/assets/images/table2.webp" alt="">
                    <div class="text">
                        <p class="px24 fw600">№5</p>
                        <p class="text-second px18 fw500"><img src="@/assets/images/icons/people.png" alt=""> 2</p>
                    </div>
                </div>
                <div class="res-cards__item">
                    <!-- <p class="status-active px18">Бос үстел</p> -->
                    <p class="status-active px18" style="color: red;">Бос емес</p>
                    <img class="res-cards__item-img" src="@/assets/images/table6.jpg" alt="">
                    <div class="text">
                        <p class="px24 fw600">№6</p>
                        <p class="text-second px18 fw500"><img src="@/assets/images/icons/people.png" alt=""> 6</p>
                    </div>
                </div>
                <div class="res-cards__item">
                    <!-- <p class="status-active px18">Бос үстел</p> -->
                    <p class="status-active px18" style="color: red;">Бос емес</p>
                    <img class="res-cards__item-img" src="@/assets/images/table2.webp" alt="">
                    <div class="text">
                        <p class="px24 fw600">№7</p>
                        <p class="text-second px18 fw500"><img src="@/assets/images/icons/people.png" alt=""> 2</p>
                    </div>
                </div>
            </div>
        </div>
        <Modal :open="isOpen" @close="isOpen = !isOpen">
            <div class="modal">
                <p class="modal-title px24 fw500 green">
                    №1 үстелді брондау
                </p>
                <p class="modal-desc"> Алдын ала төлем: <span class="fw500 px18">10 000 тг</span></p>
                <img class="modal-img" src="@/assets/images/table2.webp" alt="">
                <input type="text" placeholder="Карта нөмірін еңгізіңіз" class="input">
                <input type="text" placeholder="CVV код еңгізіңіз" class="input">
                <input type="text" placeholder="Аты жөніңізді еңгізіңіз" class="input">
                <button class="button">Төлем жасау</button>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from '@/components/modal/Modal.vue';
import {ref} from "vue";
export default {
components: {Modal},
setup() {
    const isOpen = ref(false);
    return {
        isOpen,
    }
}
}
</script>

<style lang="scss" scoped>
.modal {
    &-img {
        width: 90%;
        height: 300px;
        object-fit: cover;
    }
    &-desc {
        margin: 15px 0;
    }
    button {
        margin: 10px 0;
        color: #fff;
        background-color: green;
        border: none;
        transition: 0.4s;
        &:hover {
            background-color: #29a90c;
            border: none;
            transition: 0.4s;
        }
    }
    input {
        width: 90%;
        margin: 10px 0;
    }
}
.res {
    margin: 50px 0;
    &-title {
        margin-bottom: 25px;
    }
    &-cards {
        width: 100%;
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        &__item {
            width: 24%;
            border: 1px solid #000;
            padding: 10px;
            margin-right: 1%;
            margin-bottom: 2%;
            transition: 0.4s;
            &-img {
                height: 300px;
                width: 100%;
                object-fit: cover;
            }
            .status-active {
                color: rgb(2, 171, 2);
                font-weight: 600;
                text-align: left;
                padding: 10px 0;
            }
            .text {
                display: flex;
                justify-content: space-between;
                img {
                    width: 30px;
                    margin-right: 5px;
                }
                &-second {
                    display: flex;
                    align-items: center;
                }
            }
            &:hover {
                transition: 0.4s;
                transform: scale(1.08);
            }
        }
    }
}
@media (max-width: 1120px) {
    .res {
        &-cards {
            &__item {
                width: 49%;
                &-img {
                    height: 150px;
                }
            }
        }
    }
}
</style>
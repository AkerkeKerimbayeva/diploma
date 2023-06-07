<template>
    <div class="res">
        <div class="container">
            <p class="res-title px32 fw500 green">
                Үстелді алдын ала брондау
            </p>
            <div class="res-cards">
                <div class="res-cards__item" v-for="(item, index) in table" :key="index" @click="(isOpen = true),(selected = item)">
                    <p class="status-active px18" v-if="item.reserv" style="color: red;">Бос емес</p>
                    <p class="status-active px18" v-else>Бос үстел</p>
                    <p class="px18" style="padding: 5px 0 10px 0;">{{ item.name }}</p>
                    <img class="res-cards__item-img" :src="cdn + item.image" alt="">
                    <div class="text">
                        <p class="px24 fw600">№{{ item.id }}</p>
                        <p class="text-second px18 fw500"><img src="@/assets/images/icons/people.png" alt=""> {{ item.number_seats }}</p>
                    </div>
                </div>
            </div>
        </div>
        <Modal :open="isOpen" @close="isOpen = !isOpen">
            <div class="modal" v-if="selected">
                <p class="modal-title px24 fw500 green">
                    №{{ selected.id }} үстелді брондау
                </p>
                <p class="modal-desc"> Алдын ала төлем: <span class="fw500 px18">{{ selected.prepayment }} тг</span></p>
                <p class="modal-desc"> Орын саны: <span class="fw500 px18">{{ selected.number_seats }}</span></p>
                <img class="modal-img" :src="cdn + selected.image" alt="">
                <div class="date">
                    <p style="padding: 15px 0;">Күні: <span class="px18 fw500 green" style="text-decoration: underline;">{{currentDate()}}</span></p>
                    <div class="time">
                        <label for="">Басталу уақыты:</label>
                        <input v-model="startTime" type="time" name="" id="">
                    </div>
                    <div class="time">
                        <label for="">Аяқталу уақыты:</label>
                        <input v-model="endTime" type="time" name="" id="">
                    </div>
                </div>
                <div class="pay">
                    <p>Төлем түрін таңдаңыз</p>
                    <select class="input" v-model="payment" name="" id="">
                        <option value="Қолма-қол ақшамен">Қолма-қол ақшамен</option>
                        <option value="Kaspi QR">Kaspi QR</option>
                        <option value="Карточкамен">Карточкамен</option>
                    </select>
                </div>
                <p style="display: none;">{{ table_id = selected.id }}</p>
                <!-- <input type="text" placeholder="Карта нөмірін еңгізіңіз" class="input">
                <input type="text" placeholder="CVV код еңгізіңіз" class="input">
                <input type="text" placeholder="Аты жөніңізді еңгізіңіз" class="input"> -->
                <button @click="orderTable" class="button">Төлем жасау</button>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from '@/components/modal/Modal.vue';
import {ref} from "vue";
import axios from "axios";
import { mapState } from 'vuex';
export default {
components: {Modal},
data() {
    return {
        table: [],
        sum: 10000,
        table_id: null,
        startTime: null,
        endTime: null,
        payment: null,
    }
},
created() {
    this.getTable()
},
methods: {
    getTable() {
        axios.get("get/tables?startTime=2023-06-06 12:00&endTime=2023-06-06 15:00")
        .then((res) => {
            this.table = res.data
        })
        .catch((error) => {
            console.log(error);
        })
    },
    async orderTable() {
        await axios.post('table',
            {
                table_id: this.table_id,
                sum: this.sum,
                startTime: this.startTime,
                endTime: this.endTime,
                payment: this.payment,
            },
            {
                headers: {
                Authorization: localStorage.getItem("access_token")
                ? `Bearer ${localStorage.getItem("access_token")}`
                : null,
                },
            }
        )
        .then((res) => {
          if (res.status === 200) {
            alert("Сәтті жіберілді!");
            this.isOpen = false;
            localStorage.setItem("access_token", res.data.accessToken);
          }
        })
        .catch((error) => {
          alert("Қате еңгізілген деректер!");
          console.error("There was an error!", error);
        });
    },
    currentDate() {
      const current = new Date();
      const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
      return date;
    }
},
setup() {
    const isOpen = ref(false);
    return {
        isOpen,
    }
},
computed: {
    ...mapState(["cdn"])
}
}
</script>

<style lang="scss" scoped>
.modal {
    &-img {
        width: 90%;
        height: 240px;
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
    .time {
        input {
            width: 100%;
            padding: 10px 0;
            border: 1px solid #195A00;
        }
    }
    .pay {
        .input {
            width: 100%;
        }
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
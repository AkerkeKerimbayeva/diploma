<template>
  <div class="container">
    <div class="hits">
        <p class="hits-title px32 fw500 green">Жеңілдіктер</p>
        <div class="hits-card">
            <img src="@/assets/images/taste1.png" alt="">
            <div class="hits-card__text">
                <p class="px24 fw500 title">Комбо на двоих</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia cupiditate cum. Aliquid, sit tenetur ipsum laboriosam sapiente unde iusto dicta placeat corrupti deleniti eum omnis incidunt asperiores fugiat ipsa!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia cupiditate cum. Aliquid, sit tenetur ipsum laboriosam sapiente unde iusto dicta placeat corrupti deleniti eum omnis incidunt asperiores fugiat ipsa!</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt mollitia cupiditate cum. Aliquid, sit tenetur ipsum laboriosam sapiente unde iusto dicta placeat corrupti deleniti eum omnis incidunt asperiores fugiat ipsa!</p>
            </div>
        </div>
        <div class="hits-card">
            <img src="@/assets/images/taste2.png" alt="">
            <div class="hits-card__text">
                <p class="px24 fw500 title">Бизнес ланч между 13:00 - 16:00</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates quod necessitatibus ratione accusantium voluptate, ea nesciunt at aperiam eveniet iusto rem nihil, excepturi nobis molestias recusandae quae id voluptas?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates quod necessitatibus ratione accusantium voluptate, ea nesciunt at aperiam eveniet iusto rem nihil, excepturi nobis molestias recusandae quae id voluptas?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptates quod necessitatibus ratione accusantium voluptate, ea nesciunt at aperiam eveniet iusto rem nihil, excepturi nobis molestias recusandae quae id voluptas?</p>
            </div>
        </div>
    </div>
    <div class="rebate">
        <p class="rebate-title px32 fw500 green">
            Хит блюда
        </p>
        <div class="rebate-card">
            <div class="rebate-card__text">
                <p class="px24 fw500 title">Сэндвич с курицей</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad deleniti, eius ipsum nemo iusto voluptatum nam! Pariatur, minus facilis, quo, ullam nihil eaque consequuntur incidunt rem distinctio impedit iure.''</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad deleniti, eius ipsum nemo iusto voluptatum nam! Pariatur, minus facilis, quo, ullam nihil eaque consequuntur incidunt rem distinctio impedit iure.''</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad deleniti, eius ipsum nemo iusto voluptatum nam! Pariatur, minus facilis, quo, ullam nihil eaque consequuntur incidunt rem distinctio impedit iure.''</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ad deleniti, eius ipsum nemo iusto voluptatum nam! Pariatur, minus facilis, quo, ullam nihil eaque consequuntur incidunt rem distinctio impedit iure.''</p>
            </div>
            <img src="@/assets/images/meal2.png" alt="">
        </div>
    </div>
  </div>
</template>

<script>
export default {

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
            width: 30%;
        }
        &__text {
            width: 66%;
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
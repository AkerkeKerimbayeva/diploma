<template>
    <div class="container">
        <div class="about">
            <p class="about-title green px32 fw500">
                Біз туралы
            </p>
            <div class="about-card">
                <div class="about-card__left">
                    <img src="@/assets/images/blog1.png" alt="">
                    <img src="@/assets/images/blog2.png" alt="">
                    <img src="@/assets/images/blog3.png" alt="">
                </div>
                <div class="about-card__right">
                    <p class="desc px24 fw500">Дәмді әрі пайдалы тағам күнделікті қолжетімді!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum reprehenderit aliquam voluptates suscipit adipisci. Aliquam, cum mollitia nihil, consequatur consectetur, earum sunt delectus voluptatem ab nostrum tenetur architecto quia?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum sequi maxime doloribus iure ipsa obcaecati. Ab quod saepe maxime dignissimos blanditiis! Iste ipsa dolore a, expedita architecto placeat quia.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum reprehenderit aliquam voluptates suscipit adipisci. Aliquam, cum mollitia nihil, consequatur consectetur, earum sunt delectus voluptatem ab nostrum tenetur architecto quia?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum sequi maxime doloribus iure ipsa obcaecati. Ab quod saepe maxime dignissimos blanditiis! Iste ipsa dolore a, expedita architecto placeat quia.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum reprehenderit aliquam voluptates suscipit adipisci. Aliquam, cum mollitia nihil, consequatur consectetur, earum sunt delectus voluptatem ab nostrum tenetur architecto quia?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ipsum sequi maxime doloribus iure ipsa obcaecati. Ab quod saepe maxime dignissimos blanditiis! Iste ipsa dolore a, expedita architecto placeat quia.
                    </p>
                    <div class="watch">
                        <img src="@/assets/images/icons/Play.png" alt="">
                        <p>Видеоны қосу</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="choose">
            <p class="choose-title green px32 fw500">
                Неге бізді таңдауға кеңес береміз?
            </p>
            <p class="choose-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi doloremque ad, sint laborum saepe neque repellendus, iste et cumque velit dolores! Consequuntur reprehenderit illo maxime quae eligendi eaque tenetur.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sequi doloremque ad, sint laborum saepe neque repellendus, iste et cumque velit dolores! Consequuntur reprehenderit illo maxime quae eligendi eaque tenetur.
            </p>
            <img src="@/assets/images/about-page.png" alt="">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
</style>
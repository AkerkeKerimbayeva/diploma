<template>
    <div class="container">
        <div class="contacts-wrap">
            <p class="contacts-title px32 fw500 green">Байланыстар</p>
            <div class="contacts">
                <div class="contacts-left">
                    <p>Мекенжайы: <a target="_blank" href="https://www.google.com/maps?ll=43.222129,76.890319&z=18&t=m&hl=ru&gl=KZ&mapclient=embed&q=%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%A0%D0%BE%D0%B7%D1%8B%D0%B1%D0%B0%D0%BA%D0%B8%D0%B5%D0%B2%D0%B0+143+%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B+050060">Алматы қаласы, Розыбакиева көшесі, 143</a></p>
                    <p>Телефон нөмірі: <a target="_blank" href="tel: +7 747 312 67 01">+7 747 312 67 01</a></p>
                    <p>Электронды пошта: <a target="_blank" href="mailto: foodtuck.admin@gmail.com">foodtuck.admin@gmail.com</a></p>
                </div>
                <div class="contacts-right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.7286032105017!2d76.89109677177923!3d43.22284059555672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388368e138461bd7%3A0xb2524536236d4a05!2z0YPQu9C40YbQsCDQoNC-0LfRi9Cx0LDQutC40LXQstCwIDE0Mywg0JDQu9C80LDRgtGLIDA1MDA2MA!5e0!3m2!1sru!2skz!4v1685529775577!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contacts {
    display: flex;
    justify-content: space-between;
   &-wrap {
        margin: 50px 0;
   }
   &-title {
        margin-bottom: 30px;
   }
   &-left {
    width: 35%;
    p {
        text-align: left;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 10px;
        a {
            color: green;
            margin-left: 5px;
        }
    }
   }
   &-right {
    width: 63%;
    iframe {
        width: 100%;
    }
   }
}
@media (max-width: 1120px) {
    .contacts {
        flex-direction: column;
        &-left, &-right {
            width: 100%;
        }
        &-wrap {
            margin: 20px 0;
        }
    }
}
</style>
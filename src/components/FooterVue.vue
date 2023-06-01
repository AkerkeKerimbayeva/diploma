<template>
    <div class="foot">
        <div class="container foot-wrap">
            <div class="foot-left">
                <p class="px16 fw400 white">ТОО Foodtuck. Барлық құқықтар қорғалған.</p>
            </div>
            <div class="foot-right">
                <ul>
                    <li><a href="/menu">Мәзір</a></li>
                    <li><a href="/contacts">Байланыс</a></li>
                    <li><a href="/about-us">Біз туралы</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.foot {
    background: #195A00;
    &-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 22px 0;
    }
    ul {
        display: flex;
        li {
            margin-left: 25px;
            a {
                text-decoration: none;
                color: #fff;
            }
        }
    }
}
@media (max-width: 1120px) {
    .foot {
        &-wrap {
            flex-direction: column;
        }
        &-right {
            margin-top: 20px;
            ul {
                flex-direction: column;
                li {
                    text-align: center;
                    padding-bottom: 10px;
                }
            }
        }
    }
}
</style>
<template>
    <div class="foot">
        <div class="container foot-wrap">
            <div class="foot-left">
                <p class="px16 fw400 white">Copyright © 2000-2020.logo.com. All rights reserved</p>
            </div>
            <div class="foot-right">
                <ul>
                    <li><a href="">Privacy Policy</a></li>
                    <li><a href="">Term of Use</a></li>
                    <li><a href="">Partner</a></li>
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
</style>
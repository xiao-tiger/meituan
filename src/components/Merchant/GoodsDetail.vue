<template>
<div class="gd-container" v-if="show">
    <div class="middle-box">
        <div class="goods-detail">
            <div class="goods-img">
                <img :src="goods.picture" alt="">
            </div>
            <p class="month-sale">月售10</p>
            <p class="intro">{{ goods.intro }}</p>
            <p class="price">￥ {{ goods.price }}</p>
        </div>
        <div class="close-btn" @click="closeDetail"></div>
    </div>
</div>
    
</template>

<script>
export default {
    name: 'goods-detail',
    props: {
        goods: {
            type: Object,
            default: null
        }
    },
    data () {
        return {
            show: false
        }
    },
    watch: {
        goods (newValue, oldValue) {
            this.show = true
            // if (this.goods) {
            //     this.show = true
            // } else {
            //     this.show = false
            // }
        }
    },
    methods: {
        closeDetail () {
            this.show = false
        }
    }
}
</script>

<style lang="scss" scoped>
.gd-container {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .middle-box {
        width: 315px;
        height: 440px;
        position: relative;
        .goods-detail {
            width: 315px;
            height: 368px;
            border-radius: 10px;
            overflow: hidden;
            background-color: #fff;
            .goods-img {
                width: 315px;
                height: 236px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .month-sale {
                font-size: 12px;
                margin-left: 10px;
                margin-top: 10px;
            }
            .intro{
                font-size: 14px;
                margin-left: 10px;
                margin-top: 10px;
                // height: 40px;
            }
            .price {
                font-size: 16px;
                color: red;
                margin-left: 10px;
                margin-top: 10px;   
            }

        }
        .close-btn {
            width: 40px;
            height: 40px;
            background-image: url("http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/df125964473c5a2c4edadb74d8a11995.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            bottom: 0;
            left: 50%;
            margin-left: -20px;
        }
    }
}
</style>






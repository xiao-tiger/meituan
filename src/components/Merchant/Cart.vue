<template>
<div class="cart-container" v-show="show">
    <div class="mask-bg" v-show="showGoods" @click="showGoods=false"></div>
    <div class="cart-group">
        <div class="satify-group">已满足起送价</div>
        <div class="cart-list-group" v-show="showGoods">
            <div class="cart-title-group">
                <span class="title">购物车</span>
                <span class="clear-btn" @click="clearCart">清空购物车</span>
            </div>
            <ul class="goods-list">
                <li v-for="goods of goodsList" :key="goods.id">
                    <div class="goods-info">
                        <span class="title">{{ goods.name }}</span>
                        <span class="price">￥ {{ goods.price }}</span>
                    </div>
                    <Stepper class="stepper" v-model="goods.count"></Stepper>
                </li>
            </ul>
        </div> 
    </div>
    <div class="settle-group">
        <div class="hot-area" @click="showGoods=!showGoods">
            <div class="shop-icon">
                <div class="badage">{{ totalCount }}</div>
            </div>
            <div class="total-price">
                <span class="unit">￥</span>{{ totalPrice }}
            </div>
        </div>
        <div class="settle-btn" @click="gotoSettle">去结算</div>
    </div>
</div>
</template>

<script>
import Stepper from './Stepper';
export default {
    name: 'Cart',
    props: ['categories'],
    data () {
        return {
            showGoods: false,
            // goodsList: [
            //     { name : 'xxx', num: 1},
            //     {name : 'cdsfc'}
            // ]
        }
    },
    components: {
        [Stepper.name]: Stepper
    },
    methods: {
        clearCart () {
            // this.goodsList = [];
            // for (let category of this.categories) {
            //     for (let goods of category.goods_list) {
            //         // 因为购物车里面只展示count大于1的商品
            //         goods.count = 0;
            //     }
            // }
            for (let goods of this.goodsList) {
                goods.count = 0;
            }
        },
        gotoSettle () {
            this.$store.commit('setCart', this.goodsList);
            this.$router.push({ name: 'submitorder' });
        }
    },
    computed: {
        show () {
            if (this.goodsList.length > 0) {
                return true
            } else {
                // this.showGoods = false
                return false
            }
        },
        goodsList () {
            const theGoodsList = [];
            for (let category of this.categories) {
                for (let goods of category.goods_list) {
                    if (goods.count > 0) {
                        theGoodsList.push(goods);
                    }
                }
            }
            return theGoodsList
        },
        totalCount () {
            let count = 0;
            for(let goods of this.goodsList){
                count += goods.count;
            }
            return count
        },
        totalPrice () {
            let total = 0;
            for (let goods of this.goodsList) {
                total += parseFloat(goods.price) * goods.count
            }
            return total
        }
    }
}
</script>

<style lang="scss" scoped>
.cart-container {
    // position: fixed;
    // left: 0;
    // right: 0;
    // top: 0;
    // bottom: 0;
    // z-index: 10;
    .mask-bg {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
    }
    .cart-group {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 50px;
        background-color: #fff;
        z-index: 10;
        .satify-group {
            width: 100%;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background-color: #fff1d0;
        }
        .cart-list-group {
            // padding: 10px;
            .cart-title-group {
                display: flex;
                padding: 10px;
                justify-content: space-between;
                background-color: #cccccc;
                .clear-btn{
                    padding-left: 16px;
                    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaBAMAAABbZFH9AAAAGFBMVEUAAABmZmZnZ2dtbW1mZmZnZ2dmZmZmZmbBwsy3AAAAB3RSTlMA54gcS6a2Y+y94QAAAGJJREFUGNNjAAPFciEGOGAqLy9XgPMYSxjcBSDi4uUwUKjAoF6OAEUM4g5wDSyFqDxUlWimMLAXgJVBGJi8chAcJDwklzEWQ3nmoKBhLTMAc5jTA0CkOMx7YFFTcQgnmIEBABeDPTvg/cSzAAAAAElFTkSuQmCC");
                    background-repeat: no-repeat;
                    background-size: 14px;
                } 
            }
            .goods-list {
                li {
                    padding: 10px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    .goods-info {
                        display: flex;
                        flex: 1;
                        justify-content: space-between;
                        .title {
                            font-size: 18px;
                        }
                        .price {
                            color: #FB4E44;
                            font-size: 14px;
                        }
                    }
                    .stepper {
                        min-width: 82px;
                    }
                }
            }
        }
    }

    .settle-group{
        width: 100%;
        height: 50px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 20;
        display: flex;
        justify-content: flex-start;
        .hot-area{
            background-color: #3b3b3c;
            flex: 1;
            .shop-icon{
                width: 50px;
                height: 50px;
                background-image: url("http://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/03098cb323a0263fdbbb102c696433c5.png");
                background-repeat: no-repeat;
                background-position: center;
                background-size: 50px;
                position: absolute;
                left: 10px;
                bottom: 10px;
                .badage {
                    width: 20px;
                    height: 20px;
                    background-color: red;
                    border-radius: 50%;
                    font-size: 14px;
                    color: #fff;
                    text-align: center;
                    line-height: 20px;
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
            .total-price {
                font-size: 20px;
                color: #fff;
                margin-left: 70px;
                line-height: 50px;
                .unit{
                    font-size: 14px;
                }
            }
        }
        .settle-btn{
            background-color: #f8c74e;
            padding: 0 30px;
            font-size: 16px;
            display: flex;
            align-items: center;
        }
    } 
}

</style>










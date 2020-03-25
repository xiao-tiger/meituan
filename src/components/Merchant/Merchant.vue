<template>
<div class="merchant-container">
    <van-nav-bar
        ref="nav_bar"
        left-arrow
        @click-left="onClickLeft"
    />
    <div class="header-group" ref="header-group">
        <div class="logo-group">
            <img class="logo" src="http://p1.meituan.net/xianfu/33c48a92a31a21e4bf32d3aa7c1c5c0d16649.jpg" alt="">
        </div>
        <div class="merchant-info">
            <div class="delivery-group">
                <span>20分钟</span>&nbsp;&nbsp;|&nbsp;&nbsp;
                <span>1km</span>
            </div>
            <p class="notice">公告：在这篇指南中我们将探索应用于flex子元素的三个属性, 它们能使我们在主轴方向上控制flex子</p>
        </div>
    </div>
    <van-tabs v-model="active">
        <van-tab title="点菜">
            <div class="menu-group">
                <div class="category-group" :style="menuHeightStyle" ref="category">
                    <ul class="category-list">
                        <li class="category-item" 
                            v-for="(item, index) in categories" 
                            :key="item.id" 
                            @click="categoryClick(index)"
                            :class="index === currentIndex ? 'active': ''"
                        >
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
                <div class="goods-group" :style="menuHeightStyle" ref="goods">
                    <div class="goods-list">
                        <dl v-for="(category, category_index) in categories" :key="category.id" class="goods-dl">
                            <dt class="category-name">{{ category.name }}</dt>
                            <dd class="goods-item"
                                v-for="(goods, goods_index) in category.goods_list" 
                                :key="goods.id"
                                @click="detailClick(category_index, goods_index)"
                            >
                                <div class="goods-img">
                                    <img :src="goods.picture" alt="">
                                </div>
                                <div class="goods-info">
                                    <div class="goods-name">{{ goods.name }}</div>
                                    <div class="month-sale">月销10</div>
                                    <div class="price-bottom">
                                        <div class="price">￥ {{ goods.price }}</div>
                                        <Stepper v-model="goods.count"></Stepper>
                                    </div>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </van-tab>
        <van-tab title="评价">评价页面</van-tab>
        <van-tab title="商家">商家页面</van-tab>
    </van-tabs>
    <goods-detail :goods="goodsdetail"></goods-detail>
    <Cart :categories="categories"></Cart>
</div>
    
</template>

<script>
import { NavBar, Tab, Tabs, Step } from 'vant';
import GoodsDetail from './GoodsDetail.vue';
import Stepper from './Stepper.vue';
import Cart from './Cart.vue';
import kfc from '../../data/kfc.js';
import BScroll from 'better-scroll';

export default {
    name: 'merchant',
    data () {
        return {
            active: 0,
            categories: [],
            position: [],
            goodsScroll: null,
            currentIndex: 0,
            goodsdetail: null,
        }
    },
    components: {
        [NavBar.name]: NavBar,
        [Tabs.name]: Tabs,
        [Tab.name]: Tab,
        [GoodsDetail.name]: GoodsDetail,
        [Stepper.name]: Stepper,
        [Cart.name]: Cart
    },
    methods: {
        onClickLeft () {
            // this.$router.go(-1);
            this.$router.back();
        },
        categoryClick (index) {
            const position = this.position[index];
            this.goodsScroll.scrollTo(0, -position);
            this.currentIndex = index;
        },
        detailClick (category_index, goods_index) {
            const goods = this.categories[category_index].goods_list[goods_index];
            // this.goodsdetail = JSON.parse(JSON.stringify(goods));
            this.goodsdetail = goods;

        }
    },
    computed: {
        menuHeightStyle () {
            const height = window.innerHeight - 165;
            return {
                height: height + 'px'
            }
        }
    },
    mounted () {
        const categories = kfc.categories;
        for (let category in categories) {
            for (let goods in category.goods_list) {
                goods.count = 0;
            }
        }
        this.categories = categories;
        this.$nextTick(() => {
            new BScroll(this.$refs.category, {
                scrollY: true,
                click: true
            });
            let goodsScroll = new BScroll(this.$refs.goods, {
                scrollY: true,
                click: true,
                probeType: 2
            });
            this.goodsScroll = goodsScroll;
            goodsScroll.on('scroll', (pos) => {
                const y = Math.abs(pos.y);
                const position = this.position;
                for (let index = 0; index < position.length; index++) {
                    if (y <= position[index]) {
                        this.currentIndex = index;
                        break
                    }
                }
            });

            const position = [0];
            let offset = 0;
            const goodsDl = document.getElementsByClassName('goods-dl');
            // for...in.../for...of...
            // for...in...：用来循环对象
            // for...of...：用来循环数组
            for (let dl of goodsDl) {
                const height = dl.clientHeight;
                offset += height;
                position.push(offset);
            }
            this.position = position;

        })
    }
}
</script>

<style lang="scss" scoped>
.van-nav-bar {
    background-color: #2e2f3b;
}
.van-nav-bar .van-icon {
    color: #ffffff;
}
.van-hairline--bottom::after {
    border: none;
}
.header-group {
    display: flex;
    background-color: #2e2f3b;
    padding: 0 0 5px 10px;
    .logo-group {
        width: 85px;
        height: 64px;
        .logo {
            width: 85px;
            height: 64px;
        }
    }
    .merchant-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 14px;
        color: #ffffff;
        margin-left: 10px;
        overflow: hidden;
        .notice {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
}
.menu-group {
    display: flex;
    overflow: hidden;

    .category-group {
        width: 80px;
        .category-list {
            li {
                font-size: 14px;
                height: 50px;
                text-align: center;
                line-height: 50px;
                &.active {
                    background-color: #cccccc;
                }
            }
        }
    }
    .goods-group {
        flex: 1;
        overflow: hidden;
        .goods-list {
            margin-left: 10px;
            .category-name {
                height: 30px;
                font-size: 14px;
                line-height: 30px;
            }
            .goods-item {
                display: flex;
                height: 75px;
                padding-bottom: 10px;
                .goods-img {
                    width: 85px;
                    height: 64px;
                    img {
                        width: 85px;
                        height: 64px;
                    }
                }
                .goods-info {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    margin-left: 10px;
                    .goods-name {
                        font-size: 16px;
                        font-weight: 900;  
                    }
                    .price-bottom {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        .price {
                            color: #ffbb44
                        }
                    }

                }
            }
        }
    }
}

</style>
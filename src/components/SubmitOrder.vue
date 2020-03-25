<template>
<div class="submit">
    <van-nav-bar
        title="确认订单"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-cell-group>
        <van-cell title="请选择收获地址" icon="location-o" is-link :to="{ name: 'address_list' }">
            <template slot="title" v-if="address">
                <div class="user-info">
                    <span>{{ address.realname }}</span>
                    <span>{{ address.telephone }}</span>
                </div>
                <div class="address-info">
                    <span>{{ address.province }}</span>
                    <span>{{ address.city }}</span>
                    <span>{{ address.county }}</span>
                    <span>{{ address.detail }}</span>
                </div>
            </template>
        </van-cell>
    </van-cell-group>

    <van-cell-group title="肯德基">
        <van-cell v-for="goods of goodsList" :key="goods.id">
            <template slot="title">
                <div class="goods-group">
                    <div class="thumbnail-group">
                        <img :src="goods.picture" alt="">
                    </div>
                    <div class="goods-info">
                        <div class="title-group">
                            <span class="goods-name">{{ goods.name }}</span>
                            <span class="price">￥ {{ goods.price }}</span>
                        </div>
                        <div class="number">份* {{ goods.count }}</div>
                    </div>
                </div>
            </template>
        </van-cell>
    </van-cell-group>

    <van-submit-bar
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
    />
</div>
    
</template>

<script>
import { NavBar } from 'vant';
import { Cell, CellGroup } from 'vant';
import { SubmitBar } from 'vant';

export default {
    name: 'SubmitOrder',
    data () {
        return {
            goodsList: [],
            address: {
                realname: '胡大大',
                telephone: '18855683727',
                province: '安徽',
                city: '合肥',
                county: '白湖',
                detail: '宛仓'
            }

        }
    },
    components: {
        [NavBar.name]: NavBar,
        [CellGroup.name]: CellGroup,
        [Cell.name]: Cell,
        [SubmitBar.name]: SubmitBar
    },
    computed: {
        totalPrice () {
            let total = 0;
            for (let goods of this.goodsList) {
                total += parseFloat(goods.price) * goods.count;
            }
            return total*100
        }
    },
    mounted () {
        this.goodsList = this.$store.state.cart;
    },
    methods: {
        onClickLeft () {
            this.$router.back();
        },
        onSubmit () {

        }
    }
}
</script>

<style lang='scss' scoped>
.goods-group {
    display: flex;
    justify-content: flex-start;
    background-color: #F8F8F8;
    padding: 10px;
    .thumbnail-group {
        width: 55px;
        height: 55px;
        min-width: 55px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .goods-info {
        flex: 1;
        padding-left: 10px;
        .title-group {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            color: #333;
            .price {
                color: red;
            }

        }

    }
}
</style>






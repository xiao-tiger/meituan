<template>
    <div class="home-container">
        <div class="header-group">
            <div class="address-group">
                <i class="iconfont icon-location"></i>
                <span class="location">安徽合肥</span>
                <i class="iconfont icon-iconfontjiantou5"></i>
            </div>
            <div class="search-group">
                <van-search v-model="value" placeholder="请输入搜索关键词" />
            </div>
        </div>
        <div class="main-group">
            <h2>附近商家</h2>
            <div class="menu-group">
                <van-dropdown-menu>
                    <van-dropdown-item v-model="value1" :options="option" />
                    <div class="van-dropdown-menu__item">距离最近</div>
                    <div class="van-dropdown-menu__item">品质联盟</div>
                    <div class="van-dropdown-menu__item">筛选<i class="iconfont icon-shaixuan"></i></div>                  
                </van-dropdown-menu>
            </div>
            <div class="merchant-list">
                <router-link tag="div" :to="{ name: 'merchant', params: { merchant_id: 1 } }">
                    <div class="merchant-item">
                        <div class="merchant-logo">
                            <img src="http://p1.meituan.net/xianfu/33c48a92a31a21e4bf32d3aa7c1c5c0d16649.jpg" alt="" class="m-logo">
                        </div>
                        <div class="merchant-info">
                            <div class="merchant-name">肯德基</div>
                            <div class="rate-group">
                                <van-rate size="12" v-model="rate" />
                            </div>
                            <div class="tags-group">
                                <van-tag plain>美团专送</van-tag>&nbsp;&nbsp;
                                <van-tag plain>美食家</van-tag>
                            </div>
                        </div>
                    </div>
                </router-link>

                <router-link tag="div" :to="{ name: 'merchant', params: { merchant_id: 2 } }">
                    <div class="merchant-item">
                        <div class="merchant-logo">
                            <img src="http://p1.meituan.net/xianfu/33c48a92a31a21e4bf32d3aa7c1c5c0d16649.jpg" alt="" class="m-logo">
                        </div>
                        <div class="merchant-info">
                            <div class="merchant-name">肯德基</div>
                            <div class="rate-group">
                                <van-rate size="12" v-model="rate" />
                            </div>
                            <div class="tags-group">
                                <van-tag plain>美团专送</van-tag>&nbsp;&nbsp;
                                <van-tag plain>美食家</van-tag>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { Search, DropdownMenu, DropdownItem, Rate, Tag } from 'vant';

export default {
    name: 'Home', 
    data () {
        return {
            value: "",
            value1: 0,
            rate: 3,
            option: [
                { text: '综合排序', value: 0 },
                { text: '新款商品', value: 1 },
                { text: '活动商品', value: 2 }
            ]
        }
    },
    components: {
        [Search.name]: Search,
        [DropdownMenu.name]: DropdownMenu,
        [DropdownItem.name]: DropdownItem,
        [Rate.name]: Rate,
        [Tag.name]: Tag
    }
    
}
</script>

<style lang="scss" scoped>
.header-group {
    background-color: #1c1b20;
    padding: 20px 10px 8px;
    .address-group {
        color: #ffffff;
        .location {
            margin: 0 5px;
        }
    }
    .search-group {
        margin-top: 10px; 
    }
}

.main-group {
    h2 {
        font-size: 20px;
        padding: 10px 10px 3px;
    }
    .van-dropdown-menu__item {
        color: #767676;
        font-size: 14px;
    }
    .merchant-list {
        padding: 10px; 
        .merchant-item {
            display: flex;
            padding-bottom: 10px;
            .merchant-logo {
                .m-logo {
                    width: 85px;
                    height: 64px;
                }
            }
            .merchant-info {
                margin-left: 10px;
                .merchant-name {
                    font-size: 16px;
                    font-weight: 900;
                }
            }

        }


    }
}
</style>    

<style scoped>
/* 当使用组件库的时候，你要改变组件中的样式，就得要 父类 >>> 子类 */
.van-dropdown-menu >>> .van-dropdown-menu__title {
    color: #767676;
    font-size: 14px;
}
</style>








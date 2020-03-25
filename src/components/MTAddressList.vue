<template>
<div class="address-list">
    <van-nav-bar
        title="地址列表"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-address-list
        v-model="chosenAddressId"
        :list="list"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
    />
</div>
</template>

<script>
import { NavBar } from 'vant'
import { AddressList } from 'vant'

export default {
    name: 'MTAddressList',
    data () {
        return {
            chosenAddressId: '1',
            list: [
                {
                    id: '1',
                    name: '张三',
                    tel: '13000000000',
                    address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
                },
                {
                    id: '2',
                    name: '李四',
                    tel: '1310000000',
                    address: '浙江省杭州市拱墅区莫干山路 50 号'
                }
            ]
        }
    },
    components: {
        [NavBar.name]: NavBar,
        [AddressList.name]: AddressList
    },
    methods: {
        onClickLeft () {
            this.$router.back();
        },
        onAdd () {
            console.log('add');
            this.$router.push('/address/add');
        },
        onEdit (item, index) {
            this.$store.commit('editAddress', item);
            this.$router.push('/address/edit');
        }

    }
}
</script>

<style lang="scss" scoped>

</style>










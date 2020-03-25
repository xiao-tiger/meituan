<template>
<div class="address-edit">
    <van-nav-bar
        :title="title"
        left-arrow
        @click-left="onClickLeft"
    />
    <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :address-info="AddressInfo"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
    />
</div>
    
</template>

<script>
import { NavBar } from 'vant'
import { AddressEdit } from 'vant'
import areaList from '../data/area.js'

export default {
    name: 'MTAddressEdit',
    data () {
        return {
            areaList,
            AddressInfo: {}

        }
    },
    components: {
        [NavBar.name]: NavBar,
        [AddressEdit.name]: AddressEdit

    },
    computed: {
        isEditing () {
            let name = this.$route.name;
            if (name === 'address_edit') {
                return true
            } else {
                return false
            }
        },
        title () {
            if (this.isEditing) {
                return '地址编辑'
            } else {
                return '添加地址'
            }
        }
        
    },
    methods: {
        onClickLeft () {
            this.$router.back();
        },
        onSave (content) {
            console.log(content);
        },
        onDelete () {},
        onChangeDetail () {}
    },
    mounted () {
        if (this.isEditing) {
            this.AddressInfo = this.$store.state.editingAddress;
        } 
    }
}
</script>

<style lang="scss" scoped>

</style>




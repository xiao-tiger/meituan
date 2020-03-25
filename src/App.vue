<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active" v-if="showTab">
      <van-tabbar-item name="home" icon="home-o" :to="{ name: 'home' }">首页</van-tabbar-item>
      <van-tabbar-item name="order" icon="orders-o" :to="{ name: 'order' }">订单</van-tabbar-item>
      <van-tabbar-item name="mine" icon="user-o" :to="{ name: 'mine' }">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, Tab } from 'vant'
import Home from './components/Home.vue'

export default {
  name: 'app',
  data () {
    return {
      active: 'home'
    }
  },
  components: {
    Home,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  computed: {
    showTab () {
      let name = this.$route.name;
      if (name === 'home' || name === 'order' || name === 'mine') {
        return true
      } else {
        return false
      }
    }    
  }
}
</script>

<style lang="scss">
@import './styles/init.css';
.van-search {
  padding: 0;
}

</style>

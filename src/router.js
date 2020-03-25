import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Order from './components/Order/Order.vue'
import Mine from './components/Mine.vue'
import Merchant from './components/Merchant/Merchant.vue'
import SubmitOrder from './components/SubmitOrder.vue'
import MTAddressList from './components/MTAddressList.vue'
import MTAddressEdit from './components/MTAddressEdit.vue'
import Login from './components/Login.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home 
    }, 
    {
        path: '/order',
        name: 'order',
        component: Order
    }, 
    {
        path: '/Mine',
        name: 'mine',
        component: Mine
    },
    {
        path: '/merchant/:merchant_id',
        name: 'merchant',
        component: Merchant
    },
    {
        path: '/submitorder',
        name: 'submitorder',
        component: SubmitOrder
    },
    {
        path: '/address_list',
        name: 'address_list',
        component: MTAddressList
    },
    {
        path: '/address/edit',
        name: 'address_edit',
        component: MTAddressEdit
    }, 
    {
        path: '/address/add',
        name: 'adress_add',
        component: MTAddressEdit
    },
    {
        path: '/login',
        name: 'login',
        component: Login

    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router












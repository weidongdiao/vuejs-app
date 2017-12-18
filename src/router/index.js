import Vue from 'vue'
import Router from 'vue-router'
/*购物车模块*/
import cart from '@/components/cart/shopping_cart'
/*登录模块*/
import login from '@/components/login/login'
import register from '@/components/login/register'

/*商城模块*/
import mall from '@/components/mall/mall'
import mallItem from '@/components/mall/mall_item'
import mallLimited from '@/components/mall/mall_limited'
import mallDetail from '@/components/mall/mall_detail'
import mallList from '@/components/mall/mall_list'
import carType from '@/components/mall/car_type'
import carSeries from '@/components/mall/car_series'
import carBrand from '@/components/mall/car_brand'
import locateCity from '@/components/mall/locate_city'
/*我的模块*/
import mine from '@/components/mine/mine'
import setting from '@/components/mine/set'
import addressManage from '@/components/mine/address_manage'
import newAddress from '@/components/mine/new_address'
import editAddress from '@/components/mine/edit_address'
import about from '@/components/mine/about'
import personInfo from '@/components/mine/person_info'
import changeSex from '@/components/mine/change_sex'
import changeSign from '@/components/mine/change_sign'
import accountSafety from '@/components/mine/account_safety'
import orderList from '@/components/mine/order_list'
import orderAssess from '@/components/mine/order_assess'
import drawbackDetail from '@/components/mine/drawback_detail'
import checkLogistics from '@/components/mine/check_logistics'
import seach from '@/components/mine/seach'
import collectionShop from '@/components/mine/collection_shop'
import collectionCmd from '@/components/mine/collection_cmd'
import conpon from '@/components/mine/conpon'
import footprint from '@/components/mine/footprint'
import integral from '@/components/mine/integral'
import integralRule from '@/components/mine/integral_rule'
import exchange from '@/components/mine/exchange'
import shoppingHelp from '@/components/mine/shopping_help'
import liveChat from '@/components/mine/live_chat'
/*服务模块*/
import serviceDetail from '@/components/service/service_detail'
import serviceStore from '@/components/service/service_store'
import serviceCategory from '@/components/service/service_category'
import checkOrder from '@/components/service/check_order'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'mall',
      component: mall
    },
    {      
      path: '/mall',
      name: 'mall',
      component: mall
    },
    {
    	path: '/mallItem',
    	name: 'mallItem',
    	component: mallItem
    },
    {
    	path: '/mallLimited',
    	name: 'mallLimited',
  		component: mallLimited
    },
    {
    	path: '/mallDetail',
    	name: 'mallDetail',
  		component: mallDetail
    },
    {
    	path: '/mallList',
    	name: 'mallList',
  		component: mallList
    },
    {
    	path: '/carType',
    	name: 'carType',
  		component: carType
    },
    {
    	path: '/carSeries',
    	name: 'carSeries',
  		component: carSeries
    },
    {
    	path: '/carBrand',
    	name: 'carBrand',
  		component: carBrand
    },
    {
    	path: '/locateCity',
    	name: 'locateCity',
  		component: locateCity
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/serviceDetail',
      name: 'serviceDetail',
      component: serviceDetail
    },
    {
      path: '/serviceStore',
      name: 'serviceStore',
      component: serviceStore
    },
    {
      path: '/serviceCategory',
      name: 'serviceCategory',
      component: serviceCategory
    },
    {
      path: '/checkOrder',
      name: 'checkOrder',
      component: checkOrder
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/addressManage',
      name: 'addressManage',
      component: addressManage
    },
    {
      path: '/newAddress',
      name: 'newAddress',
      component: newAddress
    },
    {
      path: '/editAddress',
      name: 'editAddress',
      component: editAddress
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/personInfo',
      name: 'personInfo',
      component: personInfo
    },
    {
      path: '/changeSex',
      name: 'changeSex',
      component: changeSex
    },
    {
      path: '/changeSign',
      name: 'changeSign',
      component: changeSign
    },
    {
      path: '/accountSafety',
      name: 'accountSafety',
      component: accountSafety
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: orderList
    },
    {
      path: '/orderAssess',
      name: 'orderAssess',
      component: orderAssess
    },
    {
      path: '/drawbackDetail',
      name: 'drawbackDetail',
      component: drawbackDetail
    },
    {
      path: '/checkLogistics',
      name: 'checkLogistics',
      component: checkLogistics
    },
    {
      path: '/seach',
      name: 'seach',
      component: seach
    },
    {
      path: '/collectionShop',
      name: 'collectionShop',
      component: collectionShop
    },
    {
      path: '/collectionCmd',
      name: 'collectionCmd',
      component: collectionCmd
    },
    {
      path: '/conpon',
      name: 'conpon',
      component: conpon
    },
    {
      path: '/footprint',
      name: 'footprint',
      component: footprint
    },
    {
      path: '/integral',
      name: 'integral',
      component: integral
    },
    {
      path: '/exchange',
      name: 'exchange',
      component: exchange
    },
    {
      path: '/shoppingHelp',
      name: 'shoppingHelp',
      component: shoppingHelp
    },
    {
      path: '/liveChat',
      name: 'liveChat',
      component: liveChat
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
  ]
})

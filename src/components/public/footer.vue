<template>
  <footer class="app_footer">
    <ul class="footer_list">
      <li @click="changeRouter(orderInformation)" :class="{'color-blue':selectIndex==1}"><i class="iconfont icon-zhuye"></i>商城</li>
      <li @click="changeRouter(service)" :class="{'color-blue':selectIndex==2}"><i class="iconfont icon-zuanshi"></i>服务</li>
      <li @click="changeRouter(cart)" class="my_collction_box" :class="{'color-blue':selectIndex==3}"><i class="iconfont icon-gouwudai my_collction"></i>购物袋</li>
      <li @click="changeRouter(mine)" :class="{'color-blue':selectIndex==4}"><i class="iconfont icon-yonghu"></i>我的</li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'appFooter',
    props:["selectIndex"],
    data() {
      return {
        orderInformation: '/',
        service: '/serviceCategory',
        cart: '/cart',
        mine: '/mine',
      }
    },
    methods: {
      createFunc() {
      },
      changeRouter: function (myRouter) {
        this.$router.push({path: myRouter})
      }
    },
    created() {
      this.createFunc()
    }
  }
</script>
<style lang="scss" rel="stylesheet/sass">
  .app_footer {
    width: 100%;
    height: 1.32rem;
    position: fixed;
    bottom: 0;
    left: 0;
    .footer_list {
      width: 100%;
      background-color: #ffffff;
      height: 1.32rem;
      border-top:1px solid rgba(98,98,98,0.3);
      li {
        cursor: pointer;
        float: left;
        @include font-dpr(10px);
        width: 25%;
        height:1.32rem;
        text-align: center;
        padding-top: 0.32rem;
        /*position: relative;*/
        i{
          display: inline-block;
          width: 100%;
          font-size:0.533333rem;
          margin-bottom :0.04rem ;
        }
      }
      .my_collction_box{
        div{
          width: 100%;
          margin-bottom: 0.04rem;
          .my_collction{
            box-sizing: border-box;
            text-align: center;
            width: 0.48rem;
            height: 0.48rem;
            line-height: 0.48rem;
            @include font-dpr(12px);
            border-radius: 50%;
            border: 1px solid rgba(92, 92, 92, 0.7);
          }
        }

      }

    }
  }


</style>

<template>
  <footer class="mall-footer">
    <ul class="footer_list">
      <li @click="changeRouter(customerService)" class="service" :class="{'color-blue':selectIndex==1}"><i class="iconfont icon-erjikefu"></i>客服</li>
      <li @click="changeRouter(storeMain)" class="store" :class="{'color-blue':selectIndex==2}"><i class="iconfont icon-shangdian"></i>店铺</li>
      <li @click="notify()" class="collection" :class="{'color-blue':selectIndex==3}"><i class="iconfont icon-xihuanshoucang"></i>收藏</li>
      <li @click="changeRouter(addToCart)" class="add-cart" :class="{'color-blue':selectIndex==4}">加入购物袋</li>
      <li @click="changeRouter(shopNow)" class="purchase" :class="{'color-blue':selectIndex==5}">立即购买</li>
    </ul>
  </footer>
</template>

<script>
  export default {
    name: 'mallFooter',
    props:["selectIndex"],
    data() {
      return {
        customerService: '/customerService',
        storeMain: '/storeMain',
        collectionMain: '/collectionMain',
        addToCart: '/addToCart',
        shopNow: '/shopNow',
      }
    },
    methods: {
      createFunc() {
      },
      changeRouter: function (myRouter) {
        this.$router.push({path: myRouter})
      },
      notify: function() {
      	console.log('收藏!');
      }
    },
    created() {
      this.createFunc()
    }
  }
</script>
<style lang="scss" rel="stylesheet/sass">
  .mall-footer {
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
        /*@include font-dpr(10px);
        width: 20%;*/
        height:1.32rem;
        text-align: center;
        
        /*position: relative;*/
        i{
          display: inline-block;
          width: 100%;
          font-size:0.533333rem;
          margin-bottom :0.04rem ;
        }
      }
      .service, .store, .collection {
      	@include font-dpr(10px);
        width: 16.666666%;
        padding-top: 0.32rem;
      }
      .add-cart {
			    @include font-dpr(14px);			    
			    vertical-align: center;
			    width: 25%;
			    background:linear-gradient(rgb(245,157,52), rgb(255,189,111)) ;
			    color: white;
			    padding-top: 0.5rem;
			}
			.purchase {
					@include font-dpr(14px);		    
			    width: 25%;
			    background: linear-gradient(rgb(41,138,234),rgb(60,239,255));
			    color: white;
			    padding-top: 0.5rem;
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

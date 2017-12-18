<template>
	<div id="orderList">
		<nav id="nav" class="nav">
			<mt-navbar v-model="selected" id="index_nav">
				<mt-tab-item id='0'><span class="tab_span">全部</span></mt-tab-item>
				<mt-tab-item id='2'><span  class="tab_span" type="1">代付款</span></mt-tab-item>
				<mt-tab-item id='3'><span class="tab_span" type="2">代验证</span></mt-tab-item>
				<mt-tab-item id='4'><span class="tab_span" type="3">代评价</span></mt-tab-item>
				<mt-tab-item id='5'><span class="tab_span" type="4">退货</span></mt-tab-item>
			</mt-navbar>
			<i class="iconfont icon-xiala" @click="loadMoreData" v-if='0'></i>
		</nav>
		<ul class="order_list_box">
			<li class="star_warp star_warptwo" v-for="(order,index) in 1">
				<router-link :to="{ path:'/order_detail'}">
					<div class="top item-box">
						<div class="item">大胖子汽车服务联盟</div>
						<small class="red_color">待付款</small>
						<!--<small class="" v-if="order.order_status==2 || order.order_status==7">待发货</small>
						<small class="" v-if="order.order_status==3">待收货</small>
						<small class="" v-if="order.order_status==4">待评价</small>
						<small class="" v-if="order.order_status==5">已完成</small>
						<small class="" v-if="order.order_status==6">已取消</small>-->
					</div>
					<div class="wrap_content item-box" v-for="n in 1">
						<div class="tb_img"><img src="../../../build/logo.png"></div>
						<div class="tb_cll item">
							<div class="item-box">
								<div class="item spec">
									<div class="main_title">测试测试商品测试商品测试商品商品</div>
									<div>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
								</div>
								<div class="topone">
									<p class="toptwo">x200</p>
									<p class="toptwo">￥2000.00</p>
								</div>
							</div>
						</div>
					</div>
				</router-link>
				<div class="clearfix">
					<div class="money">共一件商品 合计<span><i class="iconfont icon-jiage1"></i>79.00</span>&emsp;(含运费<i class="iconfont icon-jiage1"></i>1.00) </div>
				</div>
				<div class="bottom">
					<span class="cancel">取消订单</span><span class="payment">付款</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import IScroll from '../../../static/iscroll-lite';
	export default {
		components: {},
		data() {
			return {
				selected:"0",
			}
		},
		mounted() {
			this.$emit("set-title", "订单列表", "icon-sousuo", true);
			var that = this;
			setTimeout(function() {
				that.myScroll = new IScroll(document.getElementById("nav"), {
					scrollX: true,
					scrollY: false,
					mouseMheel: true,
					tap: true,
					click: true,
				});
			}, 1000)
		},
		methods: {
			headerRightCall() {
				console.log(2333)
			},
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#orderList {
		padding-top: 1.186666rem;
		.wrap_nav {
		margin-top: 0.266666rem;
		a {
			color: #333;
		}
		h3 {
			background: white;
			height: 1.173333rem;
			color: #333;
			@include font-dpr(15px);
			margin-bottom: 0.133333rem;
			span {
				line-height: 1.173333rem;
			}
		}
		i {
			display: inline-block;
			color: #FF461F;
			@include font-dpr(20px);
			margin-left: 0.266666rem;
		}
	}
	.nav {
		position: relative;
		background: white;
		overflow: hidden;
		width: 100%;
		height: 1.173333rem;
		border-bottom: 1px solid #E5E5E5;
	}
	.mint-navbar .mint-tab-item {
		padding: 0;
		.tab_span {
			display: block;
			height: 1.12rem;
			line-height: 1.12rem;
			@include font-dpr(12px);
		}
	}
	#index_nav {
			position: absolute;
			height: 1.1733rem;
			a {
				min-width: 2.266666rem;
			}
		}
		.money {
			margin: 0;
			line-height: 1.106666rem;
			font-family: "microsoft yahei";
			@include font-dpr(14px);
			span{
				color: $mc;
			}
		}
		.clearfix {
			padding: 0 0.266666rem;
			box-sizing: border-box;
		}
		.tb_cll {
			.item-box:first-child {
				min-height: 0.933333rem;
			}
			.item-box{
				height: 100%;
			}
		}
		.toptwo,
		.topone {
			margin: 0;
			@include font-dpr(12px);
			font-weight: 400;
		}
		.priccAndnum {
			width: 2.666666rem;
		}
		.mint-cell-value {
			position: relative;
			min-height: 15.15333rem;
			background: #f3f3f3;
			/*padding-bottom: 1.293333rem;*/
		}
		.mt-navbar {
			border-bottom: 0.276666rem solid #F3F3F3;
		}
		.mint-cell-value {
			padding-top: 1.44rem;
		}
		.mint-cell-wrapper {
			margin: 0;
		}
		.mint-tab-container-item {
			padding: 0;
		}
		.wrap_content {
			padding: 0.266666rem 0.266666rem 0;
			margin: 0;
			border-bottom: 1px solid white;
			.tb_img {
				width: 2rem;
				height: 2rem;
			    padding-top: 1px;
			    margin-right: .266667rem;
			}
			img {
				width: 2rem;
				height: 2rem;
			}
			h3 {
				width: 100%;
			}
			.item {
				padding-top: 1px;
				box-sizing: border-box;
				@include font-dpr(15px);
			}
			.spec {
				@include font-dpr(12px);
				.main_title {
					height: 1.04rem;
					max-height: 1.04rem;
					line-height: 0.48rem;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					color:#333 ;
				}
				div{
					overflow: hidden;
					max-height: 0.96rem;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
					color:rgb(160,160,160) ;
				}
				p {
					margin: 0;
				}
			}
		}
		.mtcll {
			padding: 0;
		}
		.mtcll~.mint-loadmore-bottom {
			margin-bottom: 0;
		}
		.star_warptwo {
			background: white;
			margin: 0;
			overflow: hidden;
			border-bottom: 0.266666rem solid #F3F3F3;
			a:first-child {
				display: block;
				overflow: hidden;
			}
		}
		.top {
			padding: 0 0.266666rem;
		}
		small {
			line-height: 0.933333rem;
		}
		.topone {
			width: 2.373333rem;
		}
		.toptwo {
			margin: 0;
			font-family: "microsoft yahei";
			text-align: right;
			margin-bottom: 0.15rem;
		}
		.customer_service {
			@include font-dpr(15px);
			font-weight: 400;
			width: 2.353333rem;
			height: 0.773333rem;
			box-sizing: border-box;
			text-align: center;
			margin-bottom: 0;
			border: solid 1px #e5e5e5;
			border-radius: 0.133333rem;
			padding: 0.16rem 0.22rem;
			line-height: 0.4rem;
		}
		.bottom {
			margin: 0.266667rem;
		}
		.order_bt_ct a {
			vertical-align: middle;
			display: inline-block!important;
		}
		.mt-navbar {
			position: fixed;
			top: 1.173333rem;
			left: 0;
			width: 100%;
			z-index: 10;
		}
		.star_warptwo {
			margin: 0.266666rem 0 1.333333rem 0;
			border-bottom: solid 1px rgba(210,216,221,0.5);
			border-top: solid 1px rgba(210,216,221,0.5);
			.clearfix {
				width: 100%;
			}
			.wrap_content {
				position: relative;
				margin-bottom: 0.266667rem;
			}
			.btns {
				padding: 0.2rem 0;
				text-align: right;
				.pay-btn {
					color: $mc;
					border-color: $mc;
				}
				a {
					padding: 0.066667rem 0.133333rem;
					margin-right: 0.26667rem;
					height: 0.88rem;
					text-align: center;
					line-height: 0.88rem;
					border: 1px solid #e5e5e5;
					border-radius: 0.1333rem;
					color: #333;
					font-size: 45px;
				}
			}
			.money {
				@include font-dpr(12px);
				color: #333;
				float: right;
				display: inline-block;
				padding-right: 0.333333rem;
				line-height: 0.533333rem;
			}
			.bottom {
				a {
					display: inline-block!important;
					vertical-align: top;
				}
				float: right;
				margin-top: 0.266667rem;
				margin-right: 0.266667rem;
				span.payment {
					border-color: $mc;
					color:  $mc;
				}
				span {
					vertical-align: middle;
					padding: 0 0.32rem;
					border: solid 1px #e5e5e5;
					border-radius: 0.133333rem;
					@include font-dpr(12px);
					color: #333;
					display: inline-block;
					margin-left: 0.266667rem;
					line-height: 0.56rem;
					box-sizing: border-box;
				}
			}
		}
		.wrap_content .tb_cll h3 {
			@include font-dpr(15px);
			color: #333;
			width: 4.0rem;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.star_warp .wrap_content .tb_cll p {
			color: #333;
			line-height: 0.48rem;
		}
		.star_warp .top {
			height: 0.933333rem;
			line-height: 0.933333rem;
			@include font-dpr(14px);
			color: #3a3a3a;
		}
		.mtcll {
			padding: 0 0.266667rem;
			position: relative;
			padding-bottom: 1.333333rem;
		}
		.mint-cell-wrapper {
			background-image: none;
		}
		.mint-navbar .mint-tab-item.is-selected {
			color: $mc!important;
			margin: 0;
			border-bottom: 1px solid $mc;
		}
	}
</style>
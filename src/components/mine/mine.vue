<template>
	<div id="mine">
		<div class="home_warp">
			<div class="header-top">
					<router-link to="/setting">
				<i class="iconfont icon-shezhi"></i>
					</router-link>
					<i class="iconfont icon-discuss"></i>
			</div>
			<div class="home_flex item-box">
				<div class="left"><img src="../../common/img/login.png" class="img"></div>
				<div class="center item align-center">
					<div>
							<div class="user_name">小明同学</div>
							<div class="desc">这位同学很懒，居然啥都没留下~</div>
					</div>
				</div>
			</div>
		</div>
		<div class="home_con">
			<!-- <div class="order"><h1>我的订单</h1><small><a @click="getOrder">查看全部订单></a></small></div> -->
			<div class="my-order" style="margin-top: 0;">
				<div class="my-left">我的订单</div>
				<div class="my-right">
					<router-link to="/homepage?status=1">
						<span>查看全部订单</span>
						<i class="iconfont icon-youjiantou"></i>
					</router-link>
				</div>
			</div>
			<div class="wait">
				<div class="wait-item">
					<router-link to="/homepage?status=3">
						<div style="display:inline-block;position:relative;">
							<i class="iconfont icon-daifukuan"></i>
							<span class="order-tag" v-if="1">1</span><span class="order-tag" v-else-if="0">99</span>
						</div>
						<p>待付款</p>
					</router-link>
				</div>
				<div class="wait-item">
					<router-link to="/homepage?status=4">
						<div style="display:inline-block;position:relative;">
							<i class="iconfont icon-shouhuo"></i>
							<span class="order-tag" v-if="1">45</span><span class="order-tag" v-else-if="0">99</span>
						</div>
						<p>待收货</p>
					</router-link>
				</div>
				<div class="wait-item">
					<router-link to="/homepage?status=5">
						<div style="display:inline-block;position:relative;">
							<i class="iconfont icon-daiyanzheng"></i>
							<span class="order-tag" v-if="1">46</span><span class="order-tag" v-else-if="0">99</span>
						</div>
						<p>待验证</p>
					</router-link>
				</div>
				<div class="wait-item">
					<router-link to="/after_sale">
						<div style="display:inline-block;position:relative;">
							<i class="iconfont icon-pingjia-"></i>
							<span class="order-tag" v-if="1">44</span><span class="order-tag" v-else-if="0">99</span> 
						</div>
						<p>待评价</p>
					</router-link>
				</div>
				<div class="wait-item">
					<router-link to="/homepage?status=2">
						<div style="display:inline-block;position:relative;">
							<i class="iconfont icon-tuihuo"></i>
							<span class="order-tag" v-if="1" >15</span><span class="order-tag" v-else-if="0">99</span>
						</div>
						<p>退货</p>
						<!-- <span class="order-tag" v-if="this.unpayNum>0 &&this.unpayNum<100">{{this.unpayNum}}</span><span class="order-tag" v-else-if="this.unpayNum>99">99</span> -->
					</router-link>
				</div>
			</div>
			<!-- <div class="order"><h1>更多功能</h1></div> -->
			<div class="my-order" v-if='1'>
				<div class="my-left">必备工具</div>
			</div>
			<div class="my-goods">
				<div class="goods-item">
					<i class="iconfont icon-xihuanshoucang"></i>
					<p>收藏宝贝</p>
				</div>
				<div class="goods-item item">
					<i class="iconfont icon-shangdian"></i>
					<p>收藏店铺</p>
				</div>
				<div class="goods-item">
					<i class="iconfont icon-youhuiquan"></i>
					<p>优惠券</p>
				</div>
				<div class="goods-item" >
					<i class="iconfont icon-zuji-"></i>
					<p>我的足迹</p>
				</div>
			</div>
			<div class="my-goods my-goods-special">
				<div class="goods-item">
					<i class="iconfont icon-aixin"></i>
					<p>爱车管理</p>
				</div>
				<div class="goods-item ">
					<i class="iconfont icon-qiandai"></i>
					<p>我的积分</p>
				</div>
				<div class="goods-item ">
					<i class="iconfont icon-liwu"></i>
					<p>兑换专区</p>
				</div>
				<div class="goods-item " >
					<i class="iconfont icon-erjikefu"></i>
					<p>客服帮助</p>
				</div>
			</div>
			<div class="mine_footer_bg">
				
			</div>
		</div>
		<app-footer :selectIndex="4" ></app-footer>
	</div>
</template>

<script>
	import appFooter from '../public/footer'
	export default {
		components:{
			"app-footer":appFooter
		},
		data() {
			return {
			}
		},
		mounted() {
//			this.request({
//				method:"post",/*请求方式*/
//				url:"123",/*请求url*/
//				data:{
//					a:"123"/*请求参数*/
//				},
//				success(data){
//					/*请求成功回调*/
//					console.log(2334)
//				},
//				error(data){
//					/*请求失败回调*/
//					console.log(2333)
//				},
//			})
		},
		methods: {
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	a{
	    text-decoration: none;
	}
	#mine{
		.home_warp {
			background: url("../../common/img/minebg.jpg");
			background-size: cover;
			position: relative;
			padding: 0.4rem 0.386666rem 0.316667rem 0.386666rem;
			.header-top{
				text-align: right;
				i{
					margin-left: 0.44rem;
				}
			}
			.iconfont {
				@include font-dpr(22px);
				color: #fff;
			}
			.home_flex {
				margin: 0.5rem auto;
			}
			.user_name{
				@include font-dpr(15px);
				margin-bottom: 0.333333rem;
			}
			.desc{
				@include font-dpr(12px);
			}
		}
		.my-goods-special{
			&:before{
				content: "";
				display: block;
				position: absolute;
				top: 0;
				height: 1px;
				width: 9.466666rem;
				left: 0;
				right: 0;
				margin: auto;
				background: #E5E5E5;
			}
		}
		.mine_footer_bg{
			background: url("../../common/img/minefooterbg.jpg") no-repeat  0 0;
			background-size: 100% 100%;
			height: 3.6rem;
			margin-top: 0.226666rem;
		}
		.home_flex {
			.left,
			.center,
			.right {
				vertical-align: middle;
				padding-right: 0.266667rem;
			}
			.center {
				padding-right: 0;
			}
			.left {
				width:1.866666rem;
				margin-left: 0.173333rem;
			}
			.img {
				border-radius: 100%;
				width:1.866666rem;
				height:1.866666rem;
				background: #fff;
				border: solid 1px #fff;
				float: right;
			}
			.center {
				@include font-dpr(20px);
				color: #fff;
				width: 40%;
				.iconfont {
					@include font-dpr(20px);
					vertical-align: bottom;
					margin-right: 0.266666rem;
				}
				span {
					@include font-dpr(14px);
				}
			}
			.right {
				padding: 0;
				width: 3.206666rem;
			    -ms-flex: 2;
				 flex: 2;
				 margin-top: 59px;
				.button {
					border-radius: 0.4rem;
					border: solid 1px #fff;
					padding: 0.133333rem 0.266667rem;
					display: inline-block;
					color: #fff;
					background-size: cover;
					background: #ff5022;
				}
				a:last-child{
					.button {
						margin-left: 0.346666rem;
					}
				}
			}
		}
		
		.home_con {
			.order {
				position: relative;
				height: 1.173333rem;
				line-height: 1.173333rem;
				padding: 0 0.266667rem;
				border-bottom: solid 1px #e5e5e5;
				small {
					right: 0.266667rem;
					height: 1.173333rem;
					line-height: 1.173333rem;
				}
			}
			h1 {
				@include font-dpr(14px);
				color: #333;
				font-weight: 600;
			}
			.tab {
				border: none;
				position: relative;
				@include font-dpr(14px);
				color: #333;
				margin: 0.45rem 0;
				.iconfont {
					@include font-dpr(26px);
					color: #999;
				}
			}
			p {
				margin: 0.266667rem 0;
				padding: 0 0.266667rem;
				@include font-dpr(14px);
				color:rgb(125,125,125);
				i{
					margin-right: 0.24rem;
					@include font-dpr(14px);
				}
			}
			.tab_two .iconfont {
				@include font-dpr(40px);
				color: #999;
			}
		}
		
		.tab .tab-item i {
			padding: 0.133333rem 0.2rem;
		}
		.home_con .my-order {
			width: 100%;
			height: 1.173333rem;
			line-height: 1.173333rem;
			border-bottom: 1px solid #e5e5e5;
			background: white;
			margin-top: 0.266666rem;
		}
		
		.home_con .my-order .my-left {
			float: left;
			margin-left: 0.266667rem;
			@include font-dpr(14px);
			color: #333333;
		}
		
		.home_con .my-order .my-right {
			float: right;
			margin-right: 0.266667rem;
			color: rgb(125,125,125);
			font-size: 0.3333rem;
			line-height: 1.2rem;
			display: inline-block;
			a{
				color: rgb(160,160,160);
				display: block;
			}
			span {
				vertical-align: middle;
			}
			i{
				vertical-align: middle;
			}
		}
		
		.home_con .my-order .my-right img {
			width: 0.213333rem;
			height: 0.373333rem;
			margin-left: 0.133333rem;
			vertical-align: middle;
		}
		
		.home_con .my-order .my-right .serve {
			width: 0.4rem;
			height: 0.4rem;
			margin-left: 0;
			margin-right: 0.133333rem;
		}
		
		.home_con .wait {
			width: 100%;
			display: flex;
			flex-flow: row;
			background: white;
		}
		
		.home_con .wait .wait-item {
			flex: 1;
			position: relative;
			border-right: 1px solid #e5e5e5;
			a {
				display: block;
				overflow: hidden;
			}
			i{
				font-size: 0.8rem;
				color:rgb(153,153,153) ;
				margin-top:0.466666rem;
				display: block;
			}
			p{
				margin: 0.16rem 0;
			}
		}
		
		.home_con .wait .wait-item .order-tag {
			position: absolute;
			display: inline-block;
			width: 0.506667rem;
			height: 0.506667rem;
			line-height: 0.506667rem;
			border: 0.04rem solid $mc;
			color: $mc;
			left: 0.6rem;
			top: 0.133333rem;
			border-radius: 100%;
			min-width: 0.333333rem;
			text-align: center;
			@include font-dpr(11px);
			background: white;
		}
		.home_con .wait .wait-item img {
			width: 0.666667rem;
			height: 0.586667rem;
			display: inline-block;
			margin: 0.48rem auto 0;
		}
		
		.home_con {
			.wait-item {
				text-align: center;
				.img {
					width: 0.666667rem;
					height: 0.586667rem;
					display: inline-block;
					margin: 0.48rem auto 0;
				}
			}
		}
		
		.home_con .wait .wait-item p {
			font-size: 0.346667rem;
			color: #333333;
			text-align: center;
		}
		
		.home_con .my-goods {
			width: 100%;
			// height: 2.133333rem;
			display: flex;
			flex-flow: row;
			background: white;
			position: relative;
		}
		
		.home_con .my-goods .goods-item {
			position: relative;
			flex: 1;
			text-align: center;
			i {
				display: block;
				font-size: 0.8rem;
   				 color: #999999;
   				 margin-top: 0.4rem;
			}
			p{
				margin: 0.213333rem 0 0.266666rem !important;
				line-height: 0.32rem;
				@include font-dpr(12px);
			}
		}
		
		.home_con .my-goods .last {
			border-right: none;
		}
		
		.home_con .my-goods .goods-item img {
			width: 0.666666rem;
			height: 0.666666rem;
			margin: 0.4rem auto 0;
		}
		.home_con .my-goods .goods-item p {
			@include font-dpr(13px);
			color: #333333;
			text-align: center;
			margin: 0.266666rem 0 0.4rem 0;
		}
	}
</style>
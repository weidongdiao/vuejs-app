<template>
	<div id="checkOrder">
		<div class="header">
			<div class="contact">
				<span><i class="iconfont icon-yonghu"></i>{{ name }}</span>
				<span><i class="iconfont icon-shouji"></i>{{ phone }}</span>
				<p><i class="iconfont icon-dingwei"></i>{{ address }}</p>
			</div>
			<div class="edit"><i class="iconfont icon-youjiantou"></i></div>
		</div>
		<img src="../../common/img/fengexian.png" alt="分割线">
		<div class="order">
			<div class="order-item">
				<img :src="order_img"/>
				<img :src="gift_img"/>
				<i class="iconfont icon-youjiantou"></i>
				<p>共一件商品， 1项服务， 1件赠品</p>
			</div>			
		</div>
		<ul class="payment coupon list_box">
			<li>
				<router-link to="" class="item-box">
					<div class="left">支付方式</div>
					<div class="item">
						在线支付
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="" class="item-box">
					<div class="left">优惠券</div>
					<div class="item">
						无优惠券<i class="iconfont icon-youjiantou"></i>
					</div>
				</router-link>
			</li>
		</ul>
		<ul class="summary list_box">
			<li>
				<router-link to="" class="item-box">
					<div class="left">商品总价</div>
					<div class="item">
						<span class="color-orange">{{ order_price }}</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="" class="item-box">
					<div class="left">服务费</div>
					<div class="item ">
						<span class="color-orange">+{{ service_fee }}</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="" class="item-box">
					<div class="left">运费</div>
					<div class="item">
						<span class="color-orange">+{{ trans_fee }}</span>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="" class="item-box">
					<div class="left">赠品</div>
					<div class="item">
						<s>{{ gift_price }}</s>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="" class="item-box">
					<div class="left">优惠券</div>
					<div class="item">
						<span class="color-green">-{{ coupon }}</span>
					</div>
				</router-link>
			</li>
		</ul>
		<div class="comment">
			<input type="text" placeholder="请填写备注 "/>
		</div>
		<div class="note">
			<p>订单完成后，可在订单详情页开发票（部分订单除外）</p>
		</div>
		<div id="submit" class="item-box">	
			<div class="price">
				<p>实付： <span class="color-orange">{{ order_price }}</span><s>{{ origin_price }}</s></p>
				<p>实物商品满<span class="color-orange">9.9元</span></p>
			</div>
			<div class="item">提交订单</div>
		</div>
	</div>
</template>

<script>
	import tire from '../../common/img/轮胎.png'
	import oil from '../../common/img/机油.png'
	export default {
		data() {
			return {
				name: "大胖子汽车服务联盟",
				phone: "12345678910",
				address: "广东省深圳市南山区学苑大道1001南山智园C2栋17层",
				order_img: tire,
				gift_img: oil,
				gift_price: "￥0.00",
				order_price: "￥759.00",
				service_fee: "￥0.00",
				trans_fee: "￥0.00",				
				coupon: "￥0.00",
				origin_price: "￥817.00",
		
			}
		},
		mounted() {
			this.$emit("set-title", "订单确认 ", true, true);
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#checkOrder {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow-y: hidden;	
		padding-bottom: 1.666666rem;
		.header {
			display: inline;
			font-family: PingFang-SC-Regular ;
			@include font-dpr(12px);
			background-color: #fff;
			.contact {
				float: left;			
				height: 1.346666rem;
				padding-top: 0.226666rem;
				padding-left: 0.173333rem;
				text-align: left;
				
				i {
				 	margin-right: 0.306666rem;
				}
				p {
					margin-top: 0.36rem;
					text-align: left;
				}
				span {
					margin-right: 0.266666rem;
				}
			}
			.edit {
				float: right;
				vertical-align: middle;
				line-height: 1.5rem;
			}
		}
		.order {
			height: 2.813333rem;
			padding-left: 0.266666rem;
			background-color: #fff;
			.order-item {
				
				img {
					width: 1.48rem;
					height: 1.48rem;
					margin-top: 0.4rem;
					margin-bottom: 0.213333rem;
					border: 1px solid rgb(160,160,160);
					border-radius: 0.266666rem;				
				}
				i {
					float: right;
					line-height: 2.813333rem;
				}
			}
		}		
		.list_box{
			margin-top: 0.133333rem;
			background: white;
			padding: 0 0.266666rem;
			.left{
				color: rgb(83,83,83);
			}
			li{
				border-bottom:1px solid rgba(210,216,221,0.5) ;
				line-height: 1.066666rem;
			}
			li:last-child{border: none;}
			.item{
				text-align: right;
				color: rgb(160,160,160);
			}
			i{
				vertical-align: middle;
				@include font-dpr(12px);
				margin-left: 0.133333rem;
			}
		}
		.comment {		
			margin-top: 0.266666rem;
			
			input {
				width: 100%;
				height: 2.586666rem;
				padding-left: 0.266666rem;
			}
		}
		.note {
			margin: 0.093333rem 0.106666rem 0.266666rem;
			color: rgb(160,160,160);
			@include font-dpr(10px);
		}
		
	}
	#submit {
		position: fixed;	
		width: 100%;
		height: 1.306666rem;
		bottom: 0;
		z-index: 10;
		background-color: rgb(255,255,255);
		.price {
			display: block;
			width: 7.2rem;
			vertical-align: middle;
			p {
				vertical-align: middle;
				text-align: left;
				margin: 0.066666rem;
			}
		}
		.item {
			display: block;
			width: 2.8rem;
			height: 1.306666rem;
			line-height: 1.306666rem;
			text-align: center;
			vertical-align: middle;
			@include font-dpr(15px);
			background: linear-gradient(to bottom,rgb(245,157,52),rgb(255,189,111)) ;
			background-color: rgb(245,157,52);
			color: #fff;
		}
		
	}
</style>
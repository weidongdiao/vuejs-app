<template>
	<div id="mall">
		<!--头部-->
		<div id="mallHeader" >		
			<div class="item-box header">
				<span>深圳<i class="iconfont icon-caret"></i></span>
				<i class="iconfont icon-sousuo"></i><input type="search" placeholder="汽车坐垫" name="search">			
				<span @click="chooseCar()"><i class="iconfont icon-jishiben"></i><p>车型</p></span>
			</div>				
		</div>
		
		<!--商品-->
		<div id="mallSell">				
			<div v-for='(item,index) in sellData' @click="toSell()" class="sell-item">
				<img :src="item.sell_img">
				<p>{{ item.sell_name }}</p>
			</div>			
		</div>
		
		<!--限时特惠-->
		<div id="mallSpecial">
			<div class="time">		
				<img src="../../common/img/限时特惠.png">
				<span class="title">12点档</span>
				<div class="clock">
					<span>00</span>
					:
					<span>00</span>
					:
					<span>00</span>		
				</div>			
			</div>
			<div class="list">		
				<div v-for='(item,index) in specialData' @click="toSpecial()" class="list-item">
					<img :src="item.special_img">
					<h2>{{ item.special_price_new }}</h2>
					<h3>{{ item.special_price_old }}</h3>
				</div>			
			</div>			
		</div>
		
		<!--汽车内饰专区-->
		<div class="banner"><img src="../../common/img/内饰专区.png"></div>
		<div id="mallZone">			
			<div v-for='(zone,index) in zoneData' @click="toSell()" class="zone-item">
				<h3>商品类别</h3>
				<h4>{{ zone.zone_type}}</h4>
				<img :src="zone.zone_img">
			</div>			
		</div>
			
		<div class="bottom-banner"><img src="../../common/img/bottom.png"></div>	
	
		<footer>
			<app-footer :selectIndex="1" ></app-footer>
		</footer>
	</div>
</template>

<script>
	import appFooter from '../public/footer'
	import neishi from '../../common/img/neishi.png'
	import tire from '../../common/img/轮胎.png'
	import oil from '../../common/img/机油.png'
	export default {
		data() {
			return {
				sellData: [{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},
				{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},
				{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},
				{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},
				{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},
				{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},
				{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},
				{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},
				{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},
				{
					sell_img: neishi,
					sell_name: "汽车内饰",
				},],
				specialData: [{
					special_img: tire,
					special_price_new: "￥109.00",
					special_price_old: "￥129.00",
				},
				{
					special_img: tire,
					special_price_new: "￥109.00",
					special_price_old: "￥129.00",
				},
				{
					special_img: tire,
					special_price_new: "￥109.00",
					special_price_old: "￥129.00",
				},
				{
					special_img: tire,
					special_price_new: "￥109.00",
					special_price_old: "￥129.00",
				}],
				zoneData: [{
					zone_type: "低至五折",
					zone_img: tire,
				},
				{
					zone_type: "满300减30",
					zone_img: oil,
				},
				{
					zone_type: "满120减50",
					zone_img: tire,
				},
				{
					zone_type: "满300减30",
					zone_img: oil,
				},{
					zone_type: "满199减60",
					zone_img: tire,
				},
				{
					zone_type: "5件9折",
					zone_img: oil,
				},
				{
					zone_type: "低至五折" ,
					zone_img: tire,
				},
				{
					zone_type: "满300减30",
					zone_img: oil,
				}],
			}
		},
		mounted() {
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		    chooseCar: function() {
		    	this.$router.push("/carBrand")
		    },
		    toSell: function(item) {
				this.$router.push("/mallItem")
			},
			toSpecial: function(item) {
				this.$router.push("/mallLimited")
			},
		},
		components: {
			'app-footer': appFooter,
			
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#mall {	
		background-color: rgb(210,216,221);
		overflow-y: hidden;
		.banner {
			margin: 0.266666rem 2.813333rem 0.266666rem 2.813333rem;
		}
		.bottom-banner {
			position: inherit;
			display: inline-block;
			height: 1.12rem;
			bottom: 1.386666rem;
			margin: 0.133333rem 0.266666rem 0.133333rem 0.266666rem;
		}
		footer {
			padding-top: 1.266666rem;
		}
	}
	#mallHeader {
		width: 100%;
		background: url("../../common/img/banner.png") no-repeat;
		background-size:100%;
		height: 4.666666rem;					
		.header {
			align-items: center;
			padding-top: 0.266666rem;			
			span {		
				text-align: center;
				vertical-align: center;
				margin-left: 0.266666rem;
				margin-right: 0.266666rem;				
				@include font-dpr(14px);
				font-family: PingFang-SC-Medium;							
				i {
					text-align: center;
					padding-bottom: 0.266666rem;
				}
				p {
					text-align: center;
					line-height: 0.4rem;
					@include font-dpr(10px);
					vertical-align: middle;
				}	
			}
			.icon-sousuo {
				position: absolute;
		    		margin-left: 2.0rem;
		    		line-height: 0.8rem;
			}
			input {
				width: 100%;
				flex: 1;
				height: 0.8rem;					
				border-radius: 0.4rem;
				padding-left: 0.773333rem;						
			}
		}
	}
	#mallSell {
		width: 100%;
		display: flex;
		flex-flow: row;
		flex-wrap: wrap;
		.sell-item {
			display: inline-block;		
			width: 20%;
			height: 1.68rem;
			text-align: center;
			vertical-align: middle;
			margin-top: 0.266666rem;
		}
		.sell-item img {
			display: inline;
			width: 1.2rem;
			height: 1.2rem;	
			text-align: center;
			vertical-align: middle;
			background-color: rgb(210,216,221);
		}
		.sell-item p {
			display: block;
			margin-top: 0.146666rem;
			font-family: PingFang-SC-Regular;
			@include font-dpr(13px);
			font-size: 0.346666rem;
			text-align: center;
		}
	}
	
	#mallSpecial {
		height: 4.133333rem;
		margin: 0.533333rem 0.266666rem  0.266666rem;
		background-color: #fff;
		border-top-left-radius: 0.266666rem;
		border-top-right-radius: 0.266666rem;
		.time {
			width: 100%;		
			overflow: hidden;
			display: flex;
			flex: 1;		
			vertical-align: middle;
		}
		.time .title {
			display: inline-block;
			height: 0.8rem;
			line-height: 0.8rem;
			text-align: center;
			vertical-align: middle;
			@include font-dpr(13px);
			font-family: PingFang-SC-Regular;
		}
		.time img {
			float: left;
			padding-right: 0.16rem;
		}
		.time .clock {
			display: inline-block;			
		}
		.time .clock span {
			display: inline-block;
			margin-left: 0.213333rem;
			margin-right: 0.133333rem;
			text-align: center;
			vertical-align: middle;
			width: 0.4rem;
			height: 0.4rem;
			line-height: 0.4rem;
			@include font-dpr(10px);
			background-color: #000000;
			color: #fff;
		}
		.list {
			width: 100%;
			display: flex;
			flex: 1;
			flex-wrap: wrap;	
		}
		.list .list-item {
			display: inline-block;
			text-align: center;
			width: 25%;
			vertical-align: middle;
			margin-top: 0.266666rem;
		}
		.list .list-item img {
			width: 1.506666rem;
			height: 2.026666rem;
			text-align: center;
			vertical-align: middle;
		}
		.list .list-item h2 {
			margin: 0.146666rem 0.413333rem 0.146666rem 0.413333rem;
			text-align: center;
			vertical-align: middle;
			font-family: PingFang-SC-Medium;
			@include font-dpr(14px);
			color: rgb(250,164,61);
		}
		.list .list-item h3 {
			text-align: center;
			vertical-align: middle;
			font-family: PingFang-SC-Medium;
			@include font-dpr(10px);
		}
	}
	#mallZone {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		background-color: #fff;
		margin-left: 0.146666rem;
		margin-right: 0.146666rem;
		.zone-item {
			display: inline-block;
			width: 25%;
			margin-bottom: 0.266666rem;
			text-align: center;
			vertical-align: middle;	
			background-color: #fff;		
		}
		.zone-item h3 {
			display: block;
			text-align: left;
			vertical-align: middle;
			font-family: PingFang-SC-Regular;
			@include font-dpr(9px);
			padding-top: 0.146666rem;
			padding-left: 0.146666rem;
		}
		.zone-item h4 {	
			display: block;
			text-align: left;
			vertical-align: middle;
			margin-top: 0.106666rem;
			padding-top: 0.146666rem;
			padding-left: 0.146666rem;
			font-family: PingFang-SC-Regular;
			@include font-dpr(8px);
			color: rgb(250,164,61);
		}
		.zone-item img {
			margin-top: 0.106666rem;
			height: 1.4rem;
		}
	}
</style>
<template>
	<div id="carBrand">
		<div class="car-header">		
			<div class="search ">
				<i class="iconfont icon-sousuo"></i><input type="search" placeholder="品牌" name="search">	
			</div>				
		</div>
		
		<div class="brand">			
			<div class="text"><i class="iconfont icon-dingwei"></i>热门品牌</div>
			<div class="content">
				<div v-for='(item,index) in popData' @click="toType()" class="car-item">
					<img :src="item.car_img">
					<p>{{ item.car_name }}</p>
				</div>	
			</div>			
		</div>
		<div class="order">			
			<p>A</p>
			<ul>
				<li v-for='(item,index) in orderData.a' @click="toType()">
					<img :src="item.car_img"/>
					<span>{{ item.car_name }}</span>
				</li>
			</ul>
		</div>
		<div class="order">			
			<p>B</p>
			<ul>
				<li v-for='(item,index) in orderData.b' @click="toType()">
					<img :src="item.car_img"/>
					<span>{{ item.car_name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import dazhong from "../../common/img/大众.png"
	import aodi from "../../common/img/奥迪.png"
	import benchi from "../../common/img/奔驰.png"
	import fute from "../../common/img/福特.png"
	import leikesasi from "../../common/img/雷克萨斯.png"
	import bentian from "../../common/img/本田.png"
	import qiya from "../../common/img/起亚.png"
	import bieke from "../../common/img/别克.png"
	import xuefulan from "../../common/img/雪佛兰.png"
	import baoma from "../../common/img/宝马.png"
	import fengtian from "../../common/img/丰田.png"
	import luomiou from "../../common/img/阿尔法-罗密欧.png"
	import asidunmading from "../../common/img/阿斯顿马丁.png"
	import beijingxiandai from "../../common/img/北京现代.png"
	import biaozhi from "../../common/img/标致.png"
	export default {
		data() {
			return {
				brandData: {},
				popData: [{
					car_img: dazhong,
					car_name: "大众"
				},
				{
					car_img: aodi,
					car_name: "奥迪"
				},
				{
					car_img: benchi,
					car_name: "奔驰"
				},
				{
					car_img: fute,
					car_name: "福特"
				},
				{
					car_img: leikesasi,
					car_name: "雷克萨斯"
				},
				{
					car_img: bentian,
					car_name: "本田"
				},
				{
					car_img: qiya,
					car_name: "起亚"
				},
				{
					car_img: bieke,
					car_name: "别克"
				},
				{
					car_img: xuefulan,
					car_name: "雪佛兰"
				},
				{
					car_img: baoma,
					car_name: "宝马"
				},
				{
					car_img: fengtian,
					car_name: "丰田"
				},],
				orderData: {
					"a":[{
							car_img: luomiou,
							car_name: "阿尔法-罗密欧"
						},
						{
							car_img: asidunmading,
							car_name: "阿斯顿-马丁"
						},],
					
					"b": [{
						car_img: beijingxiandai,
						car_name: "北京现代"
					},
					{
						car_img: benchi,
						car_name: "奔驰"
					}],
				}
			}
		},
		mounted() {
			this.$emit("set-title", "选择品牌", true, true);
		},
		methods: {
			toType: function(item) {
				this.$router.push("/carSeries")
			},
		},
		
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#carBrand {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow-y: hidden;	
		
		.car-header {
			display: inline-block;
			width: 100%;
			background-color: #fff;
			background-size:100%;
			height: 1.333333rem;
			line-height: 1.333333rem;
			align-items: center;										
		}	
		.car-header .search {				
			text-align: center;	
				
			input {
				width: 8.933333rem;
				height: 0.8rem;					
				border-radius: 0.4rem;
				padding-left: 0.773333rem;
				background-color: rgba(0,170,238, 0.1);
				color: rgb(51,51,51);					
				vertical-align: middle;				
			}
		}	
		.car-header .search	.icon-sousuo {
			position: absolute;
			margin-left: 0.266666rem;
			vertical-align: middle;	
		}
		.brand {
			width: 100%;
			display: inline-block;
		}
		.brand .text {
			@include font-dpr(15px);
			height: 0.8rem;
			line-height: 0.8rem;
			margin-left: 0.533333rem;
		}
		.brand .content {
			background-color: #fff;	
			display: flex;
			flex-flow: row;
			flex-wrap: wrap;			
		}	
		.brand .content	.car-item {
			display: block;		
			width: 25%;
			text-align: center;
			vertical-align: middle;
			margin-top: 0.266666rem;
					
			img {
				display: inline;
				width: 1rem;
				height: 1rem;	
				text-align: center;
				vertical-align: middle;
			}
			p {
				display: block;
				margin-top: 0.266666rem;
				font-family: PingFang-SC-Regular;
				@include font-dpr(13px);
				font-size: 0.346666rem;
				text-align: center;
			}
		}		
		.order {							
			p {
				display: block;
				@include font-dpr(15px);
				height: 0.8rem;
				line-height: 0.8rem;
				margin-left: 0.533333rem;
			}
			ul {
				display: block;
				background-color: #fff;				
				padding-left: 0.533333rem;
				li {
					height: 1.6rem;
					border-bottom: 1px solid rgb(210,216,221);
					img {
						vertical-align: middle;
					}
					span {
						margin-left: 0.4rem;
						vertical-align: middle;
						line-height: 1.6rem;
					}
				}
			}
		}				
	}
	
</style>
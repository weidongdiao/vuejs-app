<template>
	<div id="serviceDetail">
		<h3>选择服务</h3>
		<div v-model="selected" class="service-container">
			<div v-for='(item,index) in serviceData' class="item">
			  	<img :src="item.service_img">
			  	<span class="name" v-text='item.service_title'></span>
			  	<span class="grade">评分<p>{{ item.service_grade}}</p></span>	
			  	<div class='price'>
				  	<span class="new-price">{{ item.service_price_new }}</span>
				  	<span class="old-price">{{ item.service_price_old }}</span>	
				</div>		  		
			</div>  
		</div>  	
		<app-footer :selectIndex="2"></app-footer>
	</div>
</template>

<script>
	import appFooter from '../public/footer'
	import storeService from '../../common/img/服务.png'
	export default {
		data() {
			return {
				selected: '2',
				serviceData: [{
					service_img: storeService,
					service_title: "小保养服务",
					service_price_new: "¥109.00",
					service_price_old: "¥129.00",
					service_grade: "4.9",
				},
				{
					service_img: storeService,
					service_title: "小保养服务",
					service_price_new: "¥109.00",
					service_price_old: "¥129.00",
					service_grade: "4.9",
				},
				{
					service_img: storeService,
					service_title: "小保养服务",
					service_price_new: "¥109.00",
					service_price_old: "¥129.00",
					service_grade: "4.9",
				},
				{
					service_img: storeService,
					service_title: "小保养服务",
					service_price_new: "¥109.00",
					service_price_old: "¥129.00",
					service_grade: "4.9",
				},],
			}
		},
		mounted() {
			this.$emit("set-title", "店铺服务",true, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		},
		components: {
			'app-footer': appFooter,
		}
		
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#serviceDetail {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow: hidden;
		h3 {			
			height: 1.066666rem;
			line-height: 1.066666rem;
			padding-left:0.266666rem;
			@include font-dpr(15px);
			font-size: 0.4rem;
			font-family: PingFang-SC-Medium;		
		}
		.service-container {
			display: flex;
			flex: 1;
			flex-wrap: wrap;
			width: 100%;
			background-color: #fff;
			overflow-y: auto;
			font-family: PingFang-SC-Regular;
		}	
		.service-container .item {
			width: 50%;
			
			margin-bottom: 0.266666rem;
			text-align: center;
			vertical-align: middle;	
			background-color: #fff;
			
			img {
				text-align: center;
				width: 4.6rem;
				height: 4.6rem;
			}
		}
		.service-container .item .name {
			float: left;  
			margin-top: 0.266666rem;  
			padding-left: 0.266666rem;
			padding-right: 0.266666rem;
			@include font-dpr(17px);			
			word-break: keep-all;           
			white-space: nowrap;          
			overflow: hidden;              
			text-overflow: ellipsis; 
			text-align: left;
			clear: both;
		}
		.service-container .item .grade {
			float: right;
			margin-top: 0.266666rem;  
			text-align: right;
			vertical-align: middle;
			color: rgb(153,153,153);
			@include font-dpr(14px);
		
			p {
				display: inline;
				vertical-align: middle;
				text-align: center;
				color: rgb(250,164,61);
			}
		}
		.service-container .item .price {
			float: left;
			margin-top: 0.266666rem;
			padding-left: 0.266666rem;
			padding-right: 0.266666rem;
			
			span {
				float: left;
				margin-bottom: 0.12rem;
				vertical-align: text-bottom;
			}
		}
	}
	
	
	
	
	
	
</style>
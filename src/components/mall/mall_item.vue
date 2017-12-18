<template>
	<div id="mallItem">		
		
	<!--nav-->
		<div class="navbar">
			<nav id="nav" class="nav">
				<mt-navbar v-model="selected" id="index_nav">
					<mt-tab-item id='0'><span class="tab_span">座椅坐垫</span></mt-tab-item>
					<mt-tab-item id='2'><span  class="tab_span" type="1">香水摆件</span></mt-tab-item>
					<mt-tab-item id='3'><span class="tab_span" type="2">头枕腰靠 </span></mt-tab-item>
					<mt-tab-item id='4'><span class="tab_span" type="3">汽车挂件</span></mt-tab-item>
				</mt-navbar>
				<i class="iconfont icon-xiala" @click="loadMoreData" v-if='0'></i>
			</nav>			
		</div>
	<!-- container -->
		<div v-model="selected" class="tab-container">
		    <div id="1">
			  	<ul>
			  		<li v-for='(item,index) in mallItemData' @click="viewDetail()">
			  			<img :src="item.item_img">
			  			<span class="name" v-text='item.item_title'></span>
			  			<div class="info">
			  				
			  				<div class='price'>
				  				<span class="new-price">{{ item.item_price_new }}</span>
				  				<span class="old-price">{{ item.item_price_old }}</span>	
				  			</div>
				  			<div class="grade">
					  			<div>评分<span>{{ item.item_grade}}</span></div>
					  		</div>
			  			</div>
			  		</li>
			  	</ul>
		    </div>
		    <div id="2" ></div>
		    <div id="3" ></div>
		    <div id="4" ></div>
		    	
		</div>  
	</div>
</template>

<script>
	import tire from '../../common/img/轮胎.png'
	export default {
		data() {
			return {
				selected: '0',
				mallItemData: [{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
					item_grade: "4.9",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
					item_grade: "4.9",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
					item_grade: "4.9",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
					item_grade: "4.9",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
					item_grade: "4.9",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
					item_grade: "4.9",
				}],
			}
		},
		mounted() {
			this.$emit("set-title", "汽车内饰",true, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		    
		    viewDetail: function() {
		    	this.$router.push("/mallDetail")
		    },
		},
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#mallItem {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow: hidden;
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
			color: rgb(83,83,83);
			.tab_span {
				display: block;
				height: 1.12rem;
				line-height: 1.12rem;
				@include font-dpr(12px);
				
			}
		}
		.mint-navbar .mint-tab-item.is-selected {
			color: $mc!important;
			margin: 0;
			border-bottom: 1px solid $mc;
		}
				
		.tab-container {
			width: 100%;			
			margin-top: 1.333333rem;		
			background-color: #fff;
			font-family: PingFang-SC-Regular;
		}	
		.tab-container ul {
			display: flex;
		    flex-flow: row;
		    flex-wrap: wrap;
		    width: 100%;  
		    background-color: #fff;     
		}
		.tab-container ul li {
			display: block;
			width: 50%;
			text-align: center;
			vertical-align: middle;	
			background-color: #fff;			
			
			img {
				padding: 0.666666rem 1.013333rem 0.786666rem 0.893333rem;
				text-align: center;
				width: 2.693333rem;
				height: 3.666666rem;
			}						
		}
		.tab-container ul li .name {
			display: inline-block;
			width: 4.8rem;   
			padding-left: 0.266666rem;
			margin-bottom: 0.266666rem;  
			@include font-dpr(17px);				
			word-break: keep-all;           
			white-space: nowrap;          
			overflow: hidden;              
			text-overflow: ellipsis; 
			text-align: left;
			clear: both;
		}
		.tab-container ul li .info {
			display: block;				
		}
		.tab-container ul li .info .price {
			float: left;
			padding-left: 0.266666rem;
				
			span {
				display: block;
				margin-bottom: 0.12rem;
			}
		}
		.tab-container ul li .info .grade {
			float: right;
			text-align: center;
			vertical-align: bottom;
			padding-right: 0.266666rem;
			@include font-dpr(14px);			
									
			div {
				display: inline-block;
				vertical-align: bottom;
				text-align: center;					
				color: rgb(153,153,153);
								
				span {
					color: rgb(250,164,61);
					line-height: 1.526666rem;
				}
			}									
		}			
	}	
</style>
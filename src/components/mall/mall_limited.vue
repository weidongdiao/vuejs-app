<template>
	<div id="mallLimit">				
	<!--nav-->
		<div class="navbar">
			<nav id="nav" class="nav">
				<mt-navbar v-model="selected" id="index_nav">
					<mt-tab-item id='0'>
						<span class="tab_span">
							<p>08:00</p>
					  		<p>已结束</p>
						</span>
					</mt-tab-item>
					<mt-tab-item id='1'>
						<span class="tab_span" type="1">
							<p>12:00</p>
				  			<p>正在疯抢</p>
						</span>
					</mt-tab-item>
					<mt-tab-item id='2'>
						<span class="tab_span" type="2">
							<p>14:00</p>
				  			<p>即将开始</p> 
						</span>
					</mt-tab-item>
					<mt-tab-item id='3'>
						<span class="tab_span" type="3">
							<p>16:00</p>
							<p>即将开始</p>
						</span>
					</mt-tab-item>
					<mt-tab-item id='4'>
						<span class="tab_span" type="4">
							<p>20:00</p>
					 		<p>即将开始</p>
						</span>
					</mt-tab-item>
				</mt-navbar>
				<i class="iconfont icon-xiala" @click="loadMoreData" v-if='0'></i>
				</nav>			
		</div>
		
	<!-- container -->
		<div v-model="selected" class="tab-container">
		    <div id="1">
			  	<ul>
			  		<li v-for='(item,index) in mallLimitData' @click="viewDetail()">
			  			<img :src="item.item_img">
			  			<span class="name" v-text='item.item_title'></span>
			  			<div class="info">	  				
			  				<div class='price'>
				  				<span class="new-price">{{ item.item_price_new }}</span>
				  				<span class="old-price">{{ item.item_price_old }}</span>	
				  			</div>
				  			<div class="btn">
					  			<input type="button" value="马上抢">
					  		</div>
			  			</div>
			  		</li>
			  	</ul>
		    </div>
		</div>  
		
	</div>
</template>

<script>
	import tire from '../../common/img/轮胎.png'
	export default {
		data() {
			return {
				selected: "1",
				mallLimitData: [{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
				},
				{
					item_img: tire,
					item_title: "产品名称产品名称产品名称产品名称",
					item_price_new: "¥109.00",
					item_price_old: "¥129.00",
				}],
			}
		},
		mounted() {
			this.$emit("set-title", "限时特惠",true, true);
		},
		methods: {
		    headerRightCall() {
		        console.log(2333)
		    },
		    loadTop() {
  
  				this.$refs.loadmore.onTopLoaded();
			},
		    viewDetail: function() {
		    	console.log(2333)
		    	this.$router.push("/mallDetail")
		    },
		},
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#mallLimit {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow: hidden;	
		
		.nav {
			position: relative;
			background: white;
			overflow: hidden;
			width: 100%;
			height: 1.6rem;
			border-bottom: 1px solid #E5E5E5;
		}
		.mint-navbar .mint-tab-item {
			padding: 0;
			color: rgb(83,83,83);
			.tab_span {
				display: block;
				height: 1.6rem;			
				@include font-dpr(15px);
				p {
					color: rgb(51,51,51);
					line-height: 0.8rem;
				}
			}
		}
		.mint-navbar .mint-tab-item.is-selected {
			background: linear-gradient(0,rgb(41,138,234),rgb(60,239,255)) !important;
			border-top-left-radius: 0.266666rem;
			border-bottom-right-radius: 0.266666rem;
			color: rgb(255,255,255);
		}
		
		/*.navbar {			
			height: 1.6rem;					
		}
		.navbar ul li {				
			width: 20%;				
			line-height: 0.8rem;
			font-size: 0.32rem;
			@include font-dpr(15px);
			color: rgb(51,51,51);
		}
		.navbar	ul .choose {
			background: linear-gradient(0,rgb(41,138,234),rgb(60,239,255));
			border-top-left-radius: 0.266666rem;
			border-bottom-right-radius: 0.266666rem;
			color: rgb(255,255,255);
		}*/
				
		.tab-container {
			width: 100%;			
			margin-top: 1.866666rem;		
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
		.tab-container ul li .info .btn {
			float: right;
			text-align: center;
			vertical-align: bottom;
			padding-right: 0.266666rem;
			@include font-dpr(14px);			
									
			input {
				display: block;
				vertical-align: middle;
				text-align: center;	
				background: linear-gradient(0,rgb(41,138,234),rgb(60,239,255));
				border-radius: 0.333333rem;
				color: #FFF;
				padding: 0.16rem;
			}									
		}			
	}
</style>
<template>
	<div id="mallDetail" class="graybg">
		<!--<mt-navbar v-model="selected">	
	    		<mt-button type="default" @click= "changeRouter(mallDetail)" class="iconfont icon-youjiantou1 iconStyle"></mt-button>
			<mt-tab-item id="商品">商品</mt-tab-item>
			<mt-tab-item id="详情">详情</mt-tab-item>
			<mt-tab-item id="评价">评价</mt-tab-item>
		</mt-navbar>-->
		<div id="detailContent">
			<div v-show="isFirst" id="first">
				<div class="swipe"><img :src="cover_img" /></div>
			  	<span class="title"><p>{{ title }}</p></span>
			  	<span class="subtitle"><p>{{ subtitle }}</p></span>
			  	<div class="price">
			  	  	<div class="new-price">{{ price_new }}</div>
			    	<div class="old-price">{{ price_old }}</div>
			    	<div class="grade">评分<span>{{ grade }}</span></div>
			  	</div>
			  	<div class="location">
			  	  	<div class="city">{{ location }}</div>
			  	  	<div class="sale">月销<span>{{ sell_amount }}</span></div>
			  	</div>			  
			  	<ul class="list_box">
					<li>
						<div class="item-box">
							物流：<span>***省，</span>
					  	  	<span>***省</span>
					  	  	需补运费<span>_</span> 
					  	  	<span>元/kg</span> 	
						</div>
					</li>
					<li>
						<i class="color-green iconfont icon-gou3"></i><span>正品保障</span>
			  	  		<i class="color-green iconfont icon-gou3"></i><span>七天无理由退货</span>
					</li>
					<li>
						<router-link to="" class="item-box">
							<div class="left"><span class="youhui">优惠</span>单笔订单满800元减50</div>
							<div class="item">
								<i class="iconfont icon-youjiantou"></i>
							</div>
						</router-link>
					</li>
					<li>
						<router-link to="" class="item-box">
							<div class="left">选择颜色规格</div>
							<div class="item">
								<i class="iconfont icon-youjiantou"></i>
							</div>
						</router-link>
					</li>
				</ul>
				<div class="bottom-text"><span>上拉查看商品详情</span></div>
			</div>
			<div v-show="isSecond" id="second">				
				<div class="navbar">
					<ul>
						<li @click="changePart()" :class="{choose: isParam}"><p>规格参数</p></li>
						<li @click="changePart()" :class="{choose: isChr}"><p>商品特点</p></li>				
					</ul>
				</div>				      
				<div class="tab-container">  
				    <div v-show="isParam" class="parameter" >  
				        <span class="title">规格参数</span>
				        <ul v-for='(item,index) in paramData'>
				        	<li class="left">
				        		{{ item.left }}
				        	</li>
				        	<li class="right">				        		
				        		{{ item.right }}
				        	</li>
				        </ul>	
				         <span class="title">商品特点</span>
						<img :src="banner_img">
				    </div>       					        				        
				    <div v-show="isChr" class="character" >  
				        <img :src="banner_img">
				        <img :src="banner_img">
				    </div>  
				</div>  				
		    </div>
			<div v-show="isThird" id="third">
			    <ul>
			    		<li v-for='(item,index) in commentData'>
			    			<div class="user">
					    		<img :src="item.user_img">
					    		<span>{{ item.user_name }}</span>
					    		<a>{{ item.comm_date }}</a>
					    </div>
					    <div class="content">
					    		<p>{{ item.comm_text }}</p>
					    		<div class="square">
					    			<span></span>
						    		<span></span>
						    		<span></span>
						    		<span></span>
					    		</div>
					    </div>
					    <div class="info">
					    		<div class="parameter">规则参数</div>
					    		<div class="buy-date">购买日期：{{ item.buy_date }}</div>
					    </div>
			    		</li>
			    </ul>
			</div>		  
		</div>
		<mall-footer></mall-footer>
	</div>
	
</template>

<script>
	import mallFooter from '../public/mall_footer'
	import oil from '../../common/img/机油.png'
	import banner1 from '../../common/img/huanxin.png'
	import banner2 from '../../common/img/服务.png'
	import user from '../../common/img/jixiangwukefu.png'
	export default {
		data() {
			return {
				isFirst: true,
				isSecond: false,
				isThird: false,
				isParam: true,
				isChr: false,
				selected: '商品',
				active: "规格参数",
				cover_img: oil,
				banner_img: banner1,
				title: "商品名称商品名称商品名称商品名称商品名称商品名称商品名称商品名称",
				subtitle: "商品名称商品名称商品名称商品名称",
				price_new: "￥109.00",
				price_old: "￥129.00",
				grade: 4.9,
				location: "广东深圳",
				sell_amount: 3210,
				paramData: [{
					left: "品牌",
					right: "太阳鸟"
				},
				{
					left: "体积",
					right: "1.2*1.2"
				},
				{
					left: "重量",
					right: "1.2kg"
				},
				{
					left: "日产量",
					right: "100件"
				}],
				commentData: [{
					user_img: user,
					user_name: "猫***咪",
					comm_date: "2017-06-10",
					comm_text: "评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容",
					buy_date: "2017-05-10",
				},{
					user_img: user,
					user_name: "猫***咪",
					comm_date: "2017-06-10",
					comm_text: "评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容",
					buy_date: "2017-05-10",
				},
				{
					user_img: user,
					user_name: "猫***咪",
					comm_date: "2017-06-10",
					comm_text: "评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容评论内容",
					buy_date: "2017-05-10",
				}],
			}
		},
		mounted() {
			this.$emit("set-title", "商品 详情 评价", "icon-gouwudai",true);
		},
		methods: {
			changeRouter: function(myRouter) {
				this.$router.push({path:myRouter})
			},
			changePart: function() {
				this.isParam=!this.isParam;
				this.isChr=!this.isChr;
			},
		},
		components: {
			'mall-footer': mallFooter
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#mallDetail {
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
	}
	
	
		/*商品样式*/
		#first {
			overflow: hidden;								
			.swipe {
				text-align: center;
				
				img {
					width: 6.666666rem;
					height: 6.666666rem;
					margin-top: 1.333333rem;
				}	
			}
			.title {			
				line-height: 0.64rem;
				@include font-dpr(14px);
			}	
			.subtitle {
				margin-top: 0.36rem;
				/*padding-left: 0.266666rem;
				padding-right: 0.266666rem;*/
				color: rgb(41,138,234);
			}	
			.price {
				margin-top: 0.6rem;
				padding-left: 0.133333rem;
				padding-right: 0.266666rem;
				div {
					display: inline;
				}
				.grade {
					float: right;
					@include font-dpr(15px);
					span {
						color: rgb(250,164,61);
					}
				}
			}
			.location {			
				margin-top: 0.36rem;
				padding-left: 0.266666rem;
			}
			.location .city {
				display: inline;
			}
			.location .sale {
				float: right;
				padding-right: 0.266666rem;
			}
			.charge {
				margin-top: 0.253333rem;
			}
			.bottom-text {
				min-width: 3.173333rem;
				text-align: center;
				margin-top: 0.28rem;
				
				span {
					min-width: 3.173333rem;
					line-height: 0.266666rem;			
					text-align: center;
					@include font-dpr(15px);
					color: rgb(201,201,201);
					
					:before,:after{
						background-color: rgb(210,216,221);  
					    content: "";  
					    height: 1.013333rem;  
					    width: 1.466666rem;  
					}					
				}
			}
		}
		
		/*详情样式*/
		#second {
			.navbar {	
				position: relative;		
				height: 1.106666rem;
				top: 1.173333rem;
				background: white;						
			}
			.navbar ul {
				
			}
			.navbar ul li {							
				width: 50%;							
				font-size: 0.32rem;
				@include font-dpr(15px);
				color: rgb(51,51,51);
				
				p {
					display: inline-block;
					vertical-align: middle;	
					line-height: 1.066666rem;
				}
			}
			.navbar	ul .choose {
				color: rgb(246,160,58);
			}
			.tab-container {
				position: relative;
				width: 100%;			
				top: 1.373333rem;	
				background-color: #fff;
				font-family: PingFang-SC-Regular;
				
				.parameter {					
					padding: 0.266666rem;	
					@include font-dpr(12px);
					font-size: 0.32rem;	
					
					img {
						margin-top: 0.266666rem;
					}				
				}
				.parameter .title {
					padding-left: 0.266666rem;
					padding-bottom: 0.266666rem;
				}
				.parameter ul {
					
					display: flex;
					flex: 1;
				}
				.parameter ul .left {
					display: block;				
					width: 3.066666rem;
					height: 0.973333rem;
					line-height: 0.973333rem;
					border: 1px solid rgb(229,229,229);
					padding-left: 0.546666rem;
					
				}
				.parameter ul .right {
					display: block;
					padding-left: 0.546666rem;
					width: 6.5rem;
					height: 0.973333rem;
					line-height: 0.973333rem;
					border: 1px solid rgb(229,229,229);
				}
			}
		}
		
	#third {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow-y: hidden;	
		
		ul {
			
		}
		ul li {
			margin-bottom: 0.4rem;
			height: 6.533333rem;
		}
		ul li .user {
			img {
				width: 0.8rem;
				height: 0.8rem;
				padding-left: 0.266666rem;
			}
			span {
				margin-left: 0.266666rem;
				@include font-dpr(15px);
			}
			a {
				float: right;
				line-height: 1.033333rem;
				padding-right: 0.266666rem;
			}
		}
		ul li .content {
			margin-top: 0.4rem;
			p {
				margin-left: 0.266666rem;
				margin-right: 0.266666rem;
				line-height: 0.64rem;
			}
			.square {
				display: flex;
				flex-flow: row;
				flex-wrap: nowrap;
				span {
					width: 2.266666rem;
					height: 2.266666rem;
					margin: 0.266666rem;
					background-color: rgb(214,214,214);
					border: 1px solid rgb(214,214,214);
				}
			}
		}
		ul li .info .parameter {
			float: left;
			padding-left: 0.266666rem;
		}
		ul li .info .buy-date {
			float: right;
			padding-right: 0.266666rem;
		}
	}
	
	
	
</style>
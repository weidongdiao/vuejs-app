<template>
	<div id="cart">
		<div id="cartList">
			<div v-for="(item,index) in cartData" class="cart-item">
				<div class="header">					
					<div class="left-icon align-center" v-show="detailFlag">
						<span v-if="1" ></span><i v-if="0" class="iconfont icon-gou3"></i>
					</div>
					<div class="header-title">
						<span>{{ item.cart_item_company }}<i class="iconfont icon-youjiantou"></i></span>
					</div>	
					<div class="coupon">优惠券</div>
				</div>
				<div class="list">
					<ul>
						<li class="item-box">
							<div class="left-icon align-center" v-show="detailFlag">
								<span v-if="1" ></span><i v-if="0" class="iconfont icon-gou3"></i>
							</div>
							<div class="list-left align-center">				
								<img :src="item.cart_item_img"/>
							</div>						
							<div class="list-right">	
								<div class="top">
									<div class="title">
										<h3>{{ item.cart_item_title }}</h3>
										<h4>{{ item.cart_item_subtitle }}</h4>
									</div>
									<div class="more">再逛逛<i class="iconfont icon-youjiantou"></i></div>
								</div>				
								<div class="bottom">
									<div class="price">{{ item.cart_item_price }}</div>
									<div class="right">
										<span>-</span>
										<input type="number" name="amount" value="1">
										<span>+</span>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<mt-popup
		  v-model="detailFlag"
		  :modal="modalFlag" position="bottom">
		    <div class="edit_bottom item-box">
				<div class="left-icon item">
					<span v-if="1"></span><i v-if="0" class="iconfont icon-gou3"></i><div class="text">全选</div>
				</div>
				<div class="addBtn">
					移入收藏
				</div>
				<div class="delBtn">
					删除
				</div>
		    </div>
		</mt-popup>
		<mt-popup 
			v-model="buyFlag"
			:modal="modalFlag" position="bottom">
			<div id="submit" class="item-box">
				<div class="left-icon align-center">
					<span v-if="1" ></span><i v-if="0" class="iconfont icon-gou3"></i><div class="text">全选</div>
				</div>			
				<div class="price">
					<p>合计： ¥759.00</p>
					<p>总额¥779.00 立减:¥20.00</p>
				</div>
				<div class="item">立即购买</div>
						
			</div>

		</mt-popup>
		<app-footer :selectIndex="3" ></app-footer>
	</div>

</template>

<script>
	import tire from '../../common/img/轮胎.png'
	import appFooter from '../public/footer'
	export default {
		data() {
			return {
				detailFlag:false,
				buyFlag: true,
				modalFlag:false,
				cartData: [{
						cart_item_company: "大胖子汽车服务联盟",
						cart_item_img: tire,
						cart_item_title: "轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎",
						cart_item_subtitle: "轮胎轮胎轮胎轮胎轮胎轮胎轮胎",
						cart_item_price: "¥79.00",
					},
					{
						cart_item_company: "大胖子汽车服务联盟",
						cart_item_img: tire,
						cart_item_title: "轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎",
						cart_item_subtitle: "轮胎轮胎轮胎轮胎轮胎轮胎轮胎",
						cart_item_price: "¥79.00",
					},
					{
						cart_item_company: "大胖子汽车服务联盟",
						cart_item_img: tire,
						cart_item_title: "轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎",
						cart_item_subtitle: "轮胎轮胎轮胎轮胎轮胎轮胎轮胎",
						cart_item_price: "¥79.00",
					},
				]
			}
		},
		mounted() {
			this.$emit("set-title", "购物车", "icon-xinxi", true,{falg:1,text:"编辑",style:{color:"rgb(160,160,160)","text-align":"right"}});
		},
		methods: {
			headerRightTextCall(){

		        if(this.detailFlag){
					this.$emit("set-title", "购物车", "icon-xinxi", true,{falg:1,text:"编辑",style:{color:"rgb(160,160,160)","text-align":"right"}});
		       	 	this.detailFlag = false;
		       	 	this.buyFlag = true;
		        }else{
					this.$emit("set-title", "购物车", "icon-xinxi", true,{falg:1,text:"完成",style:{color:"rgb(160,160,160)","text-align":"right"}});
		       		this.detailFlag = true;
		       		this.buyFlag = false;
		        }
		    }
		},
		components: {
			'app-footer': appFooter,
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#cart {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow-y: hidden;	
		.left-icon{
			width: 0.8rem;

			i{
				font-size:0.533333rem;
				color: $mc;
				vertical-align: middle;
			}
			span{
				display: inline-block;
				width: 0.506666rem;
				height: 0.506666rem;
				border: 1px solid $bd ;
				border-radius: 100%;
				vertical-align: middle;
			}
		}	
	}
	#cartList {
		.cart-item {
			width: 100%;
			background-color: #fff;
			.header {	
				display: inline-block;							
				height: 1.146666rem;
				line-height: 1.146666rem;
				background-color: rgb(248,248,248);
				width: 100%;
				vertical-align: middle;
				@include font-dpr(14px);
				.left-icon{
					width: 0.8rem;
					display: inline;
					margin-right: 0.293333rem;
					i{
						font-size:0.346666rem;
						color: $mc;
						vertical-align: middle;
					}
					span{
						display: inline-block;
						width: 0.506666rem;
						height: 0.506666rem;
						border: 1px solid $bd ;
						border-radius: 100%;
						vertical-align: middle;
					}	
				}
				.header-title{
					width: 3.866666rem;
					height: 1.146666rem;
					display: inline-block;
					span{
						display: inline-block;											
						vertical-align: middle;
						@include font-dpr(14px);
					}					
				}
				.coupon {
					float: right;
					vertical-align: middle;
					margin-right: 0.266666rem;
					color: rgb(246,160,58);
				}				
			}			
		}
		.cart-item .list {
			display: flex;
			ul li {	
				background-color: #fff;
				width: 100%;		
				.left-icon{
					width: 0.8rem;
					i{
						font-size:0.346666rem;
						color: $mc;
						vertical-align: middle;
					}
					span{
						display: inline-block;
						width: 0.506666rem;
						height: 0.506666rem;
						border: 1px solid $bd ;
						border-radius: 100%;
						vertical-align: middle;
					}	
				}
				.list-left{
					padding: 0.266666rem 0;
					margin:0 0.346666rem 0 0;					
					img{
						width: 1.2rem;
						height: 1.493333rem;
						border: 0.013333rem solid rgb(160,160,160);
						border-radius: 0.266666rem;
						padding: 0.133333rem 0.333333rem 0.133333rem 0.333333rem;
					}	
				}
				.list-right{
					/*width: 6.466666rem;*/
									
					text-align: left;
					line-height: 0.32rem;
					
				}
				.list-right .top {
					display: flex;
					flex-flow: row;
				}
				.list-right .top .title {
					margin-top: 0.4rem;
					h3{
						@include font-dpr(12px);
						width: 4.453333rem;
						line-height: 0.373333rem;
						margin-bottom:0.266666rem ;
						color: #333;
					}
					h4{
						@include font-dpr(10px);
						margin-bottom: 0.4rem;
					}
					
				}
				.list-right .top .more {
					float: right;
					margin-top: 0.4rem;
					text-align: right;
					color: rgb(246,160,58);
				}
				.list-right .bottom {
					margin-top: 0.4rem;
					margin-bottom: 0.453333rem;
					display: inline;
					flex-flow: row;
				}
				.list-right .bottom .price {
					float: left;
					vertical-align: middle;
					@include font-dpr(15px);
					color: rgb(246,160,58);
					line-height: 0.4rem;
				}
				.list-right .bottom .right {
					float: right;
					border: 1px solid rgb(160,160,160);
					span{
						display: inline-block;
						width: 0.546666rem;
						height: 0.546666rem;
						line-height: 0.4rem;
						font-size: 0.293333rem;
						vertical-align: middle;
						text-align: center;						
						background-color: rgb(160,160,160);
						opacity: 0.5;
					}
					input{
						width: 0.72rem;
						text-align: center;
					}
				}
				/*.list-right{
					width: 20%;
					.more{
						width: 1.2rem;					
						@include font-dpr(14px);
						font-weight: bold;
						color: rgb(246,160,58);
						
					}
					.amount {						
						width: 2.173333rem;
						height: 0.546666rem;					
						border: 0.013333rem solid rgb(160,160,160); 
						border-radius: 0.133333rem;
						
						span{
							display: inline-block;
							width: 0.546666rem;
							height: 0.546666rem;
							line-height: 0.4rem;
							font-size: 0.293333rem;
							vertical-align: middle;
							text-align: center;						
							background-color: rgb(160,160,160);
							opacity: 0.5;
						}
						input{
							width: 0.72rem;
							text-align: center;
						}
					}
				}*/
			}
		}
	}	
	.mint-popup{
		width: 100%;
	}
	.edit_bottom{
		position: fixed;
		width: 100%;	
		height: 1.306666rem;
		bottom: 1.333333rem;
		background: white;
		border-top: 1px solid $bd;
		line-height: 1.306666rem;
		@include font-dpr(14px);
		padding-left: 0.266666rem;		
		.text{
			margin-left: 0.266666rem;
			display: inline-block;
			vertical-align: middle;
		}
		.addBtn{
			/*height: 0.733333rem;*/
			margin-right: 0.226666rem;
			padding: 0 0.64rem 0 0.64rem;
			text-align: center;
			vertical-align: middle;
			border: 0.013333rem solid rgb(160,160,160);
			border-radius: 0.133333rem;
			color: rgb(83,83,83);
			background-color: #fff;
			
		}
		.delBtn{
			margin-left: 0.266666rem;
			margin-right: 0.266666rem;
			padding: 0 0.64rem 0 0.64rem;
			color: rgb(246,160,58);
			border: 0.013333rem solid rgb(246,160,58);
			border-radius: 0.133333rem;
			text-align: center;
		}
	}
	#submit {
		position: fixed;
		display: flex;
		flex: 1;
		width: 100%;	
		height: 1.306666rem;
		bottom: 1.333333rem;
		z-index: 10;
		background-color: rgb(255,255,255);
		.left-icon{
			width: 1.826666rem;
			display: inline;
			margin-right: 0.293333rem;		
			i{
				font-size:0.346666rem;
				color: $mc;
				vertical-align: middle;
			}
			span{
				display: inline-block;
				width: 0.506666rem;
				height: 0.506666rem;
				line-height: 1.306666rem;
				border: 1px solid $bd ;
				border-radius: 100%;
				vertical-align: middle;
			}
			.text {
				display: inline-block;
				vertical-align: middle;
				width: 1.073333rem;		
				line-height: 1.306666rem;	
				vertical-align: middle;
				margin-left: 0.133333rem;		
				@include font-dpr(12px);
			}	
		}		
		.price {
			display: block;
			@include font-dpr(16px);
			width: 5.333333rem;
			line-height: 0.653333rem;
			
			p {
				text-align: left;
				vertical-align: middle;			
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
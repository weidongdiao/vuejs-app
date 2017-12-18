<template>
	<div id="serviceStore">
		<div class="navbar">
			<ul>
			  	<li >
			  		<p>深圳<i class="iconfont icon-caret"></i></p>		
			  	</li>
			  	<li>
			  		<p>默认顺序<i class="iconfont icon-caret"></i></p>
			  	</li>
			</ul>
		</div>	
		<div class="store">
			<ul>
				<li v-for="(item,index) in storeData" @click="toStore()">
					<div class="pic">
						<img :src="item.store_img">
						<p>{{ item.store_type }}</p>
					</div>
					<div class="info">
						<div class="content">
							<h2>{{ item.store_name }}</h2>
							<div class="grade">
								<span>总评分：<p>{{ item.store_grade}}</p></span>
								<span>|</span>
								<span>总订单：<p>{{ item.store_order}}</p></span>
							</div>
							<div class="location">
								<div class="street">{{ item.store_location}}</div>
								<div class="distance">{{ item.store_distance}}</div>
							</div>
							<div class="service-list">
								<p>{{ item.store_service_list.detail}}</p>
							</div>
						</div>
						<div v-show="isCheckFree" class="other">
							<span>检</span>
							<span >免费常规检验</span>
						</div>
					</div>
					
				</li>
			</ul>			
		</div>
		<app-footer :selectIndex="2"></app-footer>
	</div>
	
</template>

<script>
	import appFooter from '../public/footer';
	import storeImg from '../../common/img/shangdian.png'
	export default {
		data() {
			return {
				isCheckFree: true,
				
				storeData: [{
					store_img: storeImg,
					store_type: "快修店",
					store_name: "深圳龙华鑫广汽车护理",
					store_grade: 4.76,
					store_order: 2616,
					store_location: "深圳市龙华区梅陇路十一号支路慧心公寓E栋101",
					store_distance: "4.3Km",
					store_service_list: {
						detail: "美容",
					},
				},
				{
					store_img: storeImg,
					store_type: "维修场",
					store_name: "深圳靓车会",
					store_grade: 4.76,
					store_order: 2616,
					store_location: "深圳市龙华区梅陇路十一号支路慧心公寓E栋101",
					store_distance: "4.3Km",
					store_service_list: {
						detail: "美容 轮胎 安装 保养 改装",
					},
				},
				{
					store_img: storeImg,
					store_type: "快修店",
					store_name: "深圳龙华鑫广汽车护理",
					store_grade: 4.76,
					store_order: 2616,
					store_location: "深圳市龙华区梅陇路十一号支路慧心公寓E栋101",
					store_distance: "4.3Km",
					store_service_list: {
						detail: "美容 保养",					
					},
				},{
					store_img: storeImg,
					store_type: "维修场",
					store_name: "深圳靓车会",
					store_grade: 4.76,
					store_order: 2616,
					store_location: "深圳市龙华区梅陇路十一号支路慧心公寓E栋101",
					store_distance: "4.3Km",
					store_service_list: {
						detail: "美容 轮胎 安装 保养 改装",
					},
				}]
			}
		},
		mounted() {
			this.$emit("set-title", "选择门店", true, true);
		},
		methods: {
			toStore: function() {
				this.$router.push("/serviceDetail")
			},
		},
		components: {
			'app-footer': appFooter
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#serviceStore {
		position: relative;
		width: 100%;
		margin-top: 1.173333rem;	
		overflow: hidden;
		.navbar {
			height: 1.093333rem;
			border-bottom: 1px solid rgb(210,216,221);
		}
		.navbar ul li {	
			display: inline;
			width: 50%;				
			line-height: 0.8rem;
			font-size: 0.32rem;
			@include font-dpr(15px);
			color: rgb(51,51,51);	
		}
		.store {
			display: flex;
			flex: 1;
			margin-top: 1.093333rem;
			padding: 0.533333rem 0.133333rem 0.133333rem;
			width: 100%;
			background-color: rgb(248,248,248);
			font-family: PingFang-SC-Regular;
			ul {
				display: flex;
			    flex-flow: row;
			    flex-wrap: wrap;
			    width: 100%;  
			    background-color: #fff;  
				}
			ul li {
				display: block;				
				text-align: center;
				vertical-align: middle;	
				background-color: #fff;	
				border-bottom: 1px solid rgb(210,216,221);
				padding-top: 0.4rem;	
				.pic {
					float: left;
					
					img {
						width: 1.533333rem;
					}	
					p {
						margin-top: 0.133333rem;
						height: 0.293333rem;
						line-height: 0.293333rem;
						@include font-dpr(8px);
						font-family: PingFang-SC-Medium;
						text-align: center;
						vertical-align:middle;
						background-color: rgb(246,160,58);
						color: #FFF;
					}	
				}			
				.info{	
					float: right;
					width: 8rem;
					margin-left: 0.226666rem;				
					
					.content {
						border-bottom: 1px solid rgb(210,216,221);
						
						h2{	
							font-size: 0.32rem;
							@include font-dpr(12px);
							text-align: left;
						}
						.grade {	
							display: block;
							margin-top: 0.373333rem;	
							@include font-dpr(10px);
							text-align: left;
							
							span p {	
								display: inline;	
								color: rgb(246,160,58);
							}
						}
						.location {	
							display: flex;
							flex: 1;
							justify-content: space-between;
							margin-top: 0.373333rem;	
							@include font-dpr(10px);
							text-align: left;
						}
						.location .street {	
							float: left;		
						}
						.location .distance {	
							float: right;		
						}
						.service-list {	
							display: flex;
							flex: 1;
							justify-content: space-between;
							margin-top: 0.133333rem;	
							@include font-dpr(8px);
							
							padding-bottom: 0.186666rem;
							
							p {	
								display: inline;
								border-radius: 0.146666rem;
								color: rgb(41,138,234);
								background-color: #fff;
								padding: 0.053333rem 0.12rem 0.04rem 0.12rem;
							}
						}						
					}
					.other {	
							float: left;
							margin-top: 0.24rem;
							margin-bottom: 0.413333rem;	
							@include font-dpr(8px);
							padding-bottom: 0.413333rem;
							
							span:first-child {
								width: 0.28rem;
								height: 0.28rem;
								color: #FFF;
								background-color: rgb(41,138,234);
								border-radius: 0.066666rem;
								@include font-dpr(8px);
								padding: 0.04rem;
							}
					}
				}
			}
		}
	}
	
	
</style>
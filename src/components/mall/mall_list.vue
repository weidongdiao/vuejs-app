<template>
	<div id="mallList">
		<ul>
			<li v-for='(item,index) in listData'>
			    <div class="user align-center">
					<img :src="item.list_img">			
				</div>
				<div class="content">
					<p>{{ item.list_title }}</p>
					<p>{{ item.list_subtitle }}</p>
					<div class="info">
						<div class="parameter">{{ item.list_price }}</div>
						<div class="buy-date">chicun：{{ item.list_chicun }}</div>
					</div>
					<div class="bottom"><i class="iconfont icon-qitiantuihuo"></i>支持7天无理由退货</div>	
				</div>
				
			</li>
		</ul>
	</div>
	
</template>

<script>
	import tire from '../../common/img/轮胎.png'
	import oil from '../../common/img/机油.png'
	export default {
		data() {
			return {
				listData: [{
					list_img: tire,
					list_title: "轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎",
					list_subtitle: "轮胎轮胎轮胎轮胎轮胎",
					list_price: "￥79.00",
					list_chicun: "X1",
				},{
					list_img: oil,
					list_title: "轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎",
					list_subtitle: "轮胎轮胎轮胎轮胎轮胎",
					list_price: "￥79.00",
					list_chicun: "X1",
				},],
			}
		},
		mounted() {
			this.$emit("set-title","商品清单", true, true, {falg:0,text:"共两件",style:{color:"rgb(160,160,160)","text-align":"right"}});
		},
		methods: {
			headerRightCall() {
		        console.log(2333)
		    },
		   
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#mallList {
		position: relative;
		width: 100%;
		margin-top: 1.573333rem;	
		overflow-y: hidden;	
		
		ul {			
		}
		ul li {
			margin-bottom: 0.4rem;
			display: flex;
			flex-flow: row;
			border-bottom: 1px solid rgb(210,216,221);
		}
		ul li .user {
			vertical-align: middle;	
			padding-left: 0.266666rem;	
			img {
				width: 1.88rem;
				height: 1.88rem;
				vertical-align: middle;							
				padding: 0.133333rem 0.333333rem 0.133333rem 0.333333rem;
				border-radius: 0.266666rem;
				border: 1px solid rgb(160,160,160);
			}		
		}
		ul li .content {
			margin-bottom: 0.4rem;
			p {
				margin-left: 0.266666rem;
				margin-right: 0.266666rem;
				line-height: 0.64rem;
			}			
		}
		ul li .content .info {
			display: inline;
			margin-top: 0.4rem;
			margin-bottom: 0.4rem;
			p {
				margin-left: 0.266666rem;
				margin-right: 0.266666rem;
				line-height: 0.64rem;
			}			
		}
		ul li .content .info .parameter {
			float: left;
			padding-left: 0.266666rem;
			color: rgb(246,160,58);
		}
		ul li .content .info .buy-date {
			float: right;
			margin-bottom: 0.266666rem;
			padding-right: 0.266666rem;
			color: rgb(160,160,160);
		}
		ul li .content .bottom {
			float: left;
			margin-top: 0.4rem;
			color: rgb(41,138,234);
			
		}
	}
</style>
<template>
	<div id="shoppingHelp">
		<nav id="nav" class="nav">
			<mt-navbar v-model="selected" id="index_nav">
				<mt-tab-item id='0'><span class="tab_span">服务相关</span></mt-tab-item>
				<mt-tab-item id='2'><span  class="tab_span" type="1">商品相关</span></mt-tab-item>
				<mt-tab-item id='3'><span class="tab_span" type="2">售后相关</span></mt-tab-item>
				<mt-tab-item id='4'><span class="tab_span" type="3">账号相关</span></mt-tab-item>
				<mt-tab-item id='5'><span class="tab_span" type="4">车型相关</span></mt-tab-item>
				
			</mt-navbar>
			<i class="iconfont icon-xiala" @click="loadMoreData" v-if='0'></i>
		</nav>
		<ul class="help_list_box">
			<li class="item-box">
				<div class="item">
					<div class="question"><span>问</span>大众polo哪种机油最好？</div>
					<div class="answer"><span>答</span>嘉实多极护2W-40全合成机油</div>
				</div>
				<div class="operation align-center">
					<div class="">
						<span  class="add">
							<i class="iconfont icon-zan-copy-copy"></i>130
						</span>
						<span>
							<i class="iconfont icon-zan-copy"></i>244
						</span>
					</div>
				</div>
			</li>
			<li class="item-box">
				<div class="item">
					<div class="question"><span>问</span>大众polo哪种机油最好？</div>
					<div class="answer"><span>答</span>嘉实多极护2W-40全合成机油</div>
				</div>
				<div class="operation align-center">
					<div class="">
						<span  class="add">
							<i class="iconfont icon-zan-copy-copy"></i>130
						</span>
						<span>
							<i class="iconfont icon-zan-copy"></i>244
						</span>
					</div>
				</div>
			</li>
			<li class="item-box">
				<div class="item">
					<div class="question"><span>问</span>大众polo哪种机油最好？</div>
					<div class="answer"><span>答</span>嘉实多极护2W-40全合成机油</div>
				</div>
				<div class="operation align-center">
					<div class="">
						<span  class="add">
							<i class="iconfont icon-zan-copy-copy"></i>130
						</span>
						<span>
							<i class="iconfont icon-zan-copy"></i>244
						</span>
					</div>
				</div>
			</li>
			<li class="item-box">
				<div class="item">
					<div class="question"><span>问</span>大众polo哪种机油最好？</div>
					<div class="answer"><span>答</span>嘉实多极护2W-40全合成机油</div>
				</div>
				<div class="operation align-center">
					<div class="">
						<span  class="add">
							<i class="iconfont icon-zan-copy-copy"></i>130
						</span>
						<span>
							<i class="iconfont icon-zan-copy"></i>244
						</span>
					</div>
				</div>
			</li>
			<li class="item-box">
				<div class="item">
					<div class="question"><span>问</span>大众polo哪种机油最好？</div>
					<div class="answer"><span>答</span>嘉实多极护2W-40全合成机油</div>
				</div>
				<div class="operation align-center">
					<div class="">
						<span  class="add">
							<i class="iconfont icon-zan-copy-copy"></i>130
						</span>
						<span>
							<i class="iconfont icon-zan-copy"></i>244
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import IScroll from '../../../static/iscroll-lite';
	export default {
		components: {},
		data() {
			return {
				selected:"0",
			}
		},
		mounted() {
			this.$emit("set-title", "客服帮助", false, true);
			var that = this;
			setTimeout(function() {
				that.myScroll = new IScroll(document.getElementById("nav"), {
					scrollX: true,
					scrollY: false,
					mouseMheel: true,
					tap: true,
					click: true,
				});
			}, 1000)
		},
		methods: {
			headerRightCall() {
				console.log(2333)
			},
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#shoppingHelp {
		padding-top: 1.186666rem;
		.wrap_nav {
		margin-top: 0.266666rem;
		a {
			color: #333;
		}
		h3 {
			background: white;
			height: 1.173333rem;
			color: #333;
			@include font-dpr(15px);
			margin-bottom: 0.133333rem;
			span {
				line-height: 1.173333rem;
			}
		}
		i {
			display: inline-block;
			color: #FF461F;
			@include font-dpr(20px);
			margin-left: 0.266666rem;
		}
	}
	#index_nav {
	    position: absolute;
	    height: 1.1733rem;
			a {
				min-width: 2.266666rem;
			}
	}
	.help_list_box{
		    padding:0 0.266666rem;    
		    background: white;           
			div{
				@include font-dpr(14px);
			}
			.question,.answer{
				line-height: 0.666666rem;
					position: relative;
					padding-left: 0.666666rem;
				span{
					border-radius: 100%;
					background: $mc;
					color: white;
					display: inline-block;
					width: 0.533333rem;
					height: 0.533333rem;
					text-align: center;
					line-height: 0.533333rem;
					position: absolute;
					left: 0;
					top: 0;
				}
			}
			.answer{
				span{
					@include font-dpr(14px);
					background: rgb(41,138,234);
				}
			}
		    li{
		    	border-bottom: 1px  solid $bd;
		    	padding:0.266666rem 0 ;
		    }
		    li:last-child{
		    	border-bottom: none;
		    }
		    .operation{
		    	min-width:3.066666rem;
		    	text-align: right;
		    	margin-left: 0.266666rem;
		    	div{
		    		width: 100%;
		    	}
					color: #999;
		    }
		    .add{
		    	color: $mc;
				@include font-dpr(14px);
		    	margin-right: 0.266666rem;
		    }
	    	i{
				font-size: 0.42rem;
	    		margin-right: 0.133333rem;
	    	}
	}
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
			.tab_span {
				display: block;
				height: 1.12rem;
				line-height: 1.12rem;
				@include font-dpr(14px);
			}
		}
		.mt-navbar {
			border-bottom: 0.276666rem solid #F3F3F3;
		}
		.mt-navbar {
			position: fixed;
			top: 1.173333rem;
			left: 0;
			width: 100%;
			z-index: 10;
		}
		.mtcll {
			padding: 0 0.266667rem;
			position: relative;
			padding-bottom: 1.333333rem;
		}
		.mint-cell-wrapper {
			background-image: none;
		}
		.mint-navbar .mint-tab-item.is-selected {
			color: $mc!important;
			margin: 0;
			border-bottom: 1px solid $mc;
		}
	}
</style>
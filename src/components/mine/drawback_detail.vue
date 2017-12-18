<template>
	<div id="drawbackDetail">
		<div class="bgWhite">

		</div>
		<div class="drawback_header">
			<div>
				退款成功
			</div>
			<span>2017年11月22日 14:24</span>
		</div>
		<div class="list item-box">
			<div class="text-left">退款总金额</div>
			<div class="item"><i class="iconfont icon-jiage1"></i>79.00</div>
		</div>
		<div class="list special_list item-box">
			<div class="text-left">返回银行卡</div>
			<div class="item"><i class="iconfont icon-jiage1"></i>79.00</div>
		</div>
		<div class="drawback_prosess">
			<div class=" item-box">
				<div class="item-left">
					<span>买家退款</span>
					<p>2017-11-21 21:59</p>
				</div>
				<div class="" style="width: 4.453333rem;">
					<span>银行受理</span>
					<p><span>2017-11-21 21:59</span></p>
				</div>
				<div class="item-right">
					<span>退款成功</span>
					<p>2017-11-21 21:59</p>
				</div>
			</div>
			<div class="prosess">
				<div class="left" :class="{indexStatus:indexStatus==1}">
					<i class="iconfont icon-gou" v-if="indexStatus==1"></i>
				</div>
				<div class="center" :class="{indexStatus:indexStatus==2}">
					<i class="iconfont icon-gou" v-if="indexStatus==2"></i>
				</div>
				<div class="right " :class="{indexStatus:indexStatus==3}">
					<i class="iconfont icon-gou" v-if="indexStatus==3"></i>
				</div>
			</div>
		</div>
		<div class="list special_list item-box">
			<div class="text-left">退款信息</div>
			<div class="item"></div>
		</div>
		<div class="commodity_info item-box">
			<div class="info-left">
				<img src="../../../build/logo.png" />
			</div>
			<div class="item">
				<h2>轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎</h2>
				<h3>轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎轮胎</h3>
			</div>
		</div>
		<div class="drawback_detail">
			<p>退款原因：协商一致退款</p>
			<p>退款金额：<i class="iconfont icon-jiage1"></i>79.00</p>
			<p>申请时间：2017-11-21 23:59</p>
			<p>退款编号：1345654689741658498798</p>
		</div>
	</div>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				indexStatus: 1,
			}
		},
		mounted() {
			this.$emit("set-title", "退款详情", true, true);
		},
		methods: {
			headerRightCall() {
				console.log(2333)
			},
		}
	}
</script>

<style lang="scss" rel="stylesheet/sass">
	#drawbackDetail {
		padding-top: 1.186666rem;
		.drawback_header {
			background: url("../../common/img/minebg.jpg");
			background-size: cover;
			height: 2.493333rem;
			box-sizing: border-box;
			padding: 0.76rem;
			@include font-dpr(12px);
			color: white;
			div {
				margin-bottom: 0.4rem;
				line-height: 0.32rem;
				font-weight: bold;
			}
		}
		.list {
			line-height: 1.12rem;
			padding: 0 0.266666rem;
			border-bottom: 1px solid $bd;
			.item {
				text-align: right;
				color: $mc!important;
			}
			i {
				color: $mc!important;
			}
		}
		.special_list {
			border-bottom: none;
			.item {
				color: #333!important;
			}
			i {
				color: #333!important;
			}
		}
		.commodity_info {
			background: rgb(248, 248, 248);
			padding: 0.266666rem;
			.info-left {
				width: 1.866666rem;
				height: 1.866666rem;
				border: 1px solid rgb(160, 160, 160);
				border-radius: 0.266666rem;
				margin-right: 0.266666rem;
				img {
					width: 100%;
					height: 100%;
					border-radius: 0.266666rem;
				}
			}
			h2 {
				color: #333;
				margin-bottom: 0.133333rem;
				height: 0.733333rem;
				overflow: hidden;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			h3 {
				color: rgb(160, 160, 160);
				height: 1.066666rem;
				overflow: hidden;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 3;
				overflow: hidden;
			}
		}
		.drawback_prosess {
			background: rgb(248, 248, 248);
			text-align: center;
			padding-top: 0.56rem;
			position: relative;
			box-sizing: border-box;
			.item-left,
			.item-right {
				width: 2.773333rem;
			}
			p {
				margin: 0.133333rem 0 0.266666rem;
				color: rgb(160, 160, 160);
				span {
					display: inline-block;
					width: 2.773333rem;
				}
			}
			.prosess {
				width: 7.2rem;
				height: 0.053333rem;
				position: absolute;
				left: 0;
				right: 0;
				top: 0.266666rem;
				margin: auto;
				background: rgb(73, 159, 78);
				div {
					padding: 0.093333rem;
					border-radius: 100%;
					background: rgb(73, 159, 78);
					position: absolute;
					top: 0;
					bottom: 0;
					margin: auto;
					width: 0.186666rem;
					height: 0.186666rem;
					box-sizing: border-box;
				}
				.indexStatus {
					width: 0.346666rem;
					height: 0.346666rem;
				}
				.icon-gou {
					font-size: 0.346666rem;
					color: white;
					position: absolute;
					top: 0.026666rem;
					left: 0;
					right: 0;
					bottom: 0;
					margin: auto;
				}
				.left {
					left: -0.093333rem;
				}
				.center {
					right: 0;
					left: 0;
				}
				.right {
					right: -0.093333rem;
				}
			}
		}
		.drawback_detail{
			padding:0.4rem 0.266666rem;
			color: rgb(160,160,160);
			i{
				color: rgb(160,160,160);
			}
			p{
				margin-bottom: 0.266666rem;
				@include font-dpr(12px);
			}
		}
	}
</style>
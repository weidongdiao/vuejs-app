<template>
	<div id="seach">
		<div class="seachBox item-box">
			<div class="item-left item">
				<div class="input-box">
					<input type="text" name="" id="" placeholder="商品名称/商品编号/订单号"/>
					<i class="iconfont icon-sousuo"></i>
				</div>
			</div>
			<div class="right-text">
				取消
			</div>
		</div>
		<app-footer :selectIndex="4" ></app-footer>
	</div>
</template>

<script>
	import appFooter from '../public/footer'
	export default {
		components:{
			"app-footer":appFooter
		},
		data() {
			return {
			}
		},
		mounted() {
		},
		methods: {
		}
	}
</script>


<style lang="scss" rel="stylesheet/sass">
	#seach{
		.seachBox{
			padding: 0.133333rem 0.266666rem;
		}
		.input-box{
			background: rgb(238,238,238);
			border-radius: 0.533333rem;
			@include font-dpr(14px);
			input{
				height: 0.906666rem;
				line-height:0.906666rem;
				background: transparent;
				width: 90%;
				padding-left: 0.4rem;
				box-sizing: border-box;
			}
			i{
				color: rgb(201,201,201);
			}
		}
		.right-text{
			width: 1.466666rem;
			text-align: center;
			line-height: 0.906666rem;
			@include font-dpr(14px);
		}
	}
</style>